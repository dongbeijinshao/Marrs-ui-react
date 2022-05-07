import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import Button from '../Button';
import styled from '../styles/styled';
import { customUtils, helperFunctions } from '../utils';
import CalendarHeader from './CalendarHeader';
import CalendarMonth from './CalendarMonth';
import {
  calcDateNum,
  cloneDate,
  compareDay,
  compareMonth,
  getDayByOffset,
  getDefaultMaxDate,
  getNextDay,
  getPrevDay,
  getToday
} from './utils';

const { noop } = helperFunctions;
const { clamp, getScrollTop } = customUtils;

//自定义hook，批量绑定ref
const useRefs = () => {
  const refs = useRef([]);
  const setRefs = (index) => (el) => {
    refs.current[index] = el;
  };
  return [refs, setRefs];
};

const CalendarRoot = styled('div', {
  name: 'MarrsCalendar',
  slot: 'Root'
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: '#ffffff',
  paddingBottom: 'env(safe-area-inset-bottom)' //TODO刘海屏适配，待验证
}));

const CalendarBody = styled('div', {
  name: 'MarrsCalendar',
  slot: 'Body'
})(() => ({
  flex: 1,
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}));

const CalendarButton = styled('div', {
  name: 'MarrsCalendar',
  slot: 'Button'
})(() => ({
  margin: '20px 10px'
}));

const Calendar = React.forwardRef((props, ref) => {
  const {
    // poppable = true,
    // show = false,
    title = '日历',
    showTitle = true,
    showSubtitle = true,
    firstDayOfWeek = clamp(null, 0, 6), //自定义周起始日，0-周日, 6-周六

    type = 'single', //single-单选, multiple-多选, range-范围选择
    defaultDate,
    maxRange = 0,
    minDate,
    maxDate,

    color = 'primary',
    showConfirm = true,
    confirmText = '确认',
    formatter,
    onConfirm = noop,
    ...other
  } = props;

  //日历容器dom
  const bodyRef = useRef();
  const bodyHeight = useRef();

  //最大最小时间
  const minDateRef = useRef(minDate || getToday());
  const maxDateRef = useRef(maxDate || getDefaultMaxDate());

  //月份dom数组
  const [monthRefs, setMonthRefs] = useRefs();

  //副标题，随滚动变化
  const [subtitle, setSubtitle] = useState();

  // 确定时间是否在时间范围内
  const limitDateRange = useCallback(
    (date, min = minDateRef.current, max = maxDateRef.current) => {
      if (compareDay(date, min) === -1) {
        return min;
      }
      if (compareDay(date, max) === 1) {
        return max;
      }
      return date;
    },
    [minDateRef, maxDateRef]
  );

  //根据配置得到初始传参
  const initialDate = useMemo(() => {
    let initDate = defaultDate;
    //为null，不显示
    if (initDate === null) {
      return initDate;
    }
    const now = getToday();
    if (type === 'range') {
      if (!Array.isArray(initDate)) {
        initDate = [];
      }
      const start = limitDateRange(
        initDate[0] || now,
        minDateRef.current,
        getPrevDay(maxDateRef.current)
      );

      // 如果是range，在最大时间限制内取结束日期
      const startDate = start.getDate();
      const offset = maxRange
        ? new Date(cloneDate(start).setDate(startDate + maxRange - 1))
        : initDate[1];
      const end = limitDateRange(offset || now, getNextDay(minDateRef.current));

      return [start, end];
    } else if (type === 'multiple') {
      if (Array.isArray(initDate)) {
        return initDate.map((date) => limitDateRange(date));
      }
      return [limitDateRange(now)];
    } else if (!initDate || Array.isArray(initDate)) {
      initDate = now;
    }
    return limitDateRange(initDate);
  }, [type, maxRange, minDateRef, maxDateRef, limitDateRange, defaultDate]);

  // 根据defaultDate,minDate, maxDate获取当前日期
  const [currentDate, setCurrentDate] = useState(initialDate);

  const select = useCallback(
    (date, complete) => {
      // complete表示 是否需要计算 maxRange
      if (complete && type === 'range') {
        // 是否无效，超出最大天数
        const invalid = maxRange && calcDateNum(date) > maxRange;
        if (invalid) {
          // alert(`选择天数不能超过${maxRange}天`); //TODO
          setCurrentDate([date[0], getDayByOffset(date[0], +maxRange - 1)]);
          return;
        }
      }
      setCurrentDate(Array.isArray(date) ? [...date] : cloneDate(date));

      if (complete && !showConfirm) {
        onConfirm(date);
      }
    },
    [showConfirm, type, onConfirm, maxRange]
  );

  const handleMonthChange = useCallback(
    (_, item) => {
      const { date } = item;
      if (!date) {
        return;
      }
      if (type === 'multiple') {
        if (!currentDate) {
          select([date]);
          return;
        }
        let selectedIndex;
        const selected = currentDate.some((item, index) => {
          if (compareDay(item, date) === 0) {
            selectedIndex = index;
            return true;
          }
          return false;
        });
        if (selected) {
          currentDate.splice(selectedIndex, 1);
          setCurrentDate([...currentDate]);
        } else if (maxRange && currentDate.length >= maxRange) {
          // alert(`选择天数不能超过${maxRange}天`); //TODO
        } else {
          setCurrentDate([...currentDate, date]);
        }
      } else if (type === 'range') {
        if (!currentDate) {
          select([date]);
          return;
        }
        const [startDay, endDay] = currentDate;

        // 选择第二个时间
        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          // startDay 之后的时间，需计算时间数组
          if (compareToStart === 1) {
            select([startDay, date], true);
            // 否则直接替换startDay
          } else {
            select([date]);
          }
        } else {
          select([date]);
        }
        // single， 单选
      } else {
        select(date, true);
      }
    },
    [type, select, currentDate, maxRange]
  );

  const handleConfirm = useCallback(() => {
    onConfirm(currentDate);
  }, [currentDate, onConfirm]);

  //minDate - maxDate之间每个月第一天
  const months = useMemo(() => {
    const months = [];
    const cursor = new Date(minDateRef.current);
    cursor.setDate(1);
    do {
      months.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    } while (compareMonth(cursor, maxDateRef.current) !== 1);
    return months;
  }, [minDateRef, maxDateRef]);

  // 滚动
  const handleScroll = useCallback(() => {
    // 计算可视范围内月份，其他则placeholder
    const top = getScrollTop(bodyRef.current);
    const bottom = top + bodyHeight.current;
    const heights = months.map((_, index) => {
      return monthRefs.current[index].getHeight();
    });
    // 根据月份dom获取当前可视月份区间
    let height = 0;
    let currentMonth;
    const visibleRange = [-1, -1];
    for (let i = 0; i < months.length; i++) {
      const visible = height < bottom && height + heights[i] > top;

      if (visible) {
        visibleRange[1] = i;
        if (!currentMonth) {
          //当前月份子组件实例
          currentMonth = monthRefs.current[i];
          visibleRange[0] = i;
        }
      }
      height += heights[i];
    }

    months.forEach((_, index) => {
      const visible =
        index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
      // 调用子组件实例值的方法，修改子组件visible属性
      monthRefs.current[index].setVisible(visible);
    });

    if (currentMonth) {
      // 调用子组件实例方法getTitle
      setSubtitle(currentMonth.getTitle());
    }
  }, [bodyRef, months, monthRefs]);

  const headerProps = {
    title,
    showTitle,
    subtitle,
    showSubtitle,
    firstDayOfWeek
  };

  const monthProps = {
    type,
    minDate: minDateRef.current,
    maxDate: maxDateRef.current,
    currentDate,
    firstDayOfWeek,
    color,
    formatter,

    handleMonthChange
  };

  // 页面加载初始化
  useEffect(() => {
    // if (poppable && !show) {
    //   return;
    // }
    const bodyNode = bodyRef.current;
    const { height } = bodyNode.getBoundingClientRect();

    bodyHeight.current = height;

    if (currentDate) {
      const targetDate = type === 'single' ? currentDate : currentDate[0];
      // 如果当前时间为第一月

      if (compareMonth(targetDate, months[0]) === 0) {
        handleScroll();
        // 滚动到当前月份;
      } else {
        months.forEach((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            handleScroll();
            monthRefs.current[index].scrollIntoView(bodyNode, index);
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [months]);

  return (
    <CalendarRoot ref={ref} {...other}>
      <CalendarHeader {...headerProps} />
      <CalendarBody ref={bodyRef} onScroll={handleScroll}>
        {months.map((date, index) => (
          <CalendarMonth
            ref={setMonthRefs(index)}
            key={date}
            date={date}
            showMonthTitle={index !== 0 || !showSubtitle}
            {...monthProps}
          />
        ))}
      </CalendarBody>

      {showConfirm && (
        <CalendarButton onClick={handleConfirm}>
          <Button type="filled" color={color} fullWidth>
            {confirmText}
          </Button>
        </CalendarButton>
      )}
    </CalendarRoot>
  );
});
export default Calendar;
