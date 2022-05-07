import { makeStyles } from '@wemo-ui/marrs-core/styles';
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import { useEventCallback } from '../utils';
import CalendarDay from './CalendarDay';
import {
  compareDay,
  formatMonthTitle,
  getMonthEndDay,
  setScrollTop
} from './utils';

const useStyles = makeStyles({
  monthTitle: {
    fontSize: 14,
    height: 44,
    lineHeight: '44px',
    textAlign: 'center'
  },
  monthDays: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    userSelect: 'none'
  }
});

const CalendarMonth = React.forwardRef((props, ref) => {
  const {
    showMonthTitle,
    date,
    minDate,
    maxDate,
    currentDate,
    type,
    firstDayOfWeek,
    color,
    handleMonthChange,
    formatter
  } = props;

  const monthRef = useRef();

  const classes = useStyles();

  // 设置是否可见
  const [visible, setVisible] = useState(false);

  const getRangeDayType = useCallback(
    (day) => {
      const [startDay, endDay] = currentDate;
      if (!startDay) {
        return '';
      }
      const compareToStart = compareDay(day, startDay);
      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }
      const compareToEnd = compareDay(day, endDay);
      if (compareToStart === 0) {
        return 'start';
      }
      if (compareToEnd === 0) {
        return 'end';
      }
      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }
      return '';
    },
    [currentDate]
  );

  const getDayType = useCallback(
    (day) => {
      // 如果超过时间选择范围
      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }
      if (currentDate === null) {
        return '';
      }
      if (Array.isArray(currentDate)) {
        if (type === 'multiple') {
          return currentDate.some((item) => compareDay(item, day) === 0)
            ? 'selected'
            : '';
        }
        if (type === 'range') {
          return getRangeDayType(day);
        }
      } else if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }
      return '';
    },
    [minDate, maxDate, currentDate, type, getRangeDayType]
  );

  // 计算本月总天数
  const totalDay = useMemo(() => {
    return getMonthEndDay(date.getFullYear(), date.getMonth() + 1);
  }, [date]);

  // 计算 偏移量，根据自定义周起始日得出每月第一天左偏移
  const offset = useMemo(() => {
    const realDay = date.getDay();
    if (firstDayOfWeek) {
      return (realDay + 7 - firstDayOfWeek) % 7;
    }
    return realDay;
  }, [date, firstDayOfWeek]);

  // 占位数组，周排列
  const placeholders = useMemo(() => {
    const count = Math.ceil((totalDay + offset) / 7);
    return Array(count).fill({ type: 'placeholder' });
  }, [offset, totalDay]);

  // 当前月份的日期
  const currentMonthDays = useMemo(() => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day);
      const dayType = getDayType(date);
      let bottomInfo;

      // range需标注顶部、底部信息
      if (type === 'range') {
        if (dayType === 'start') {
          bottomInfo = '开始';
        } else if (dayType === 'end') {
          bottomInfo = '结束';
        }
      }
      let config = {
        date,
        type: dayType,
        text: day,
        bottomInfo
      };

      //根据format函数生成描述信息
      if (formatter) {
        config = formatter(config);
      }
      days.push(config);
    }
    return days;
  }, [date, getDayType, type, totalDay, formatter]);

  // 将日期选择事件向外传递
  const handleDayChange = useEventCallback((event, item) => {
    handleMonthChange(event, item);
  });

  const dayProps = {
    offset,
    color
  };

  //暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    setVisible: (isVisible) => {
      setVisible(isVisible);
    },
    getHeight: () => {
      return monthRef.current.offsetHeight;
    },
    getTitle: () => {
      return formatMonthTitle(date);
    },
    scrollIntoView: (body, index) => {
      let scrollHeight = 0;
      new Array(index).fill('').map((item, idx) => {
        const { height } = body.children[idx].getBoundingClientRect();
        scrollHeight += height;
      });
      setScrollTop(body, scrollHeight);
    }
  }));

  return (
    <div ref={monthRef}>
      {showMonthTitle && (
        <div className={classes.monthTitle}>{formatMonthTitle(date)}</div>
      )}
      <div className={classes.monthDays}>
        {(visible ? currentMonthDays : placeholders).map((item, index) => (
          <CalendarDay
            key={index}
            item={item}
            index={index}
            handleDayChange={handleDayChange}
            {...dayProps}
          ></CalendarDay>
        ))}
      </div>
    </div>
  );
});
export default CalendarMonth;
