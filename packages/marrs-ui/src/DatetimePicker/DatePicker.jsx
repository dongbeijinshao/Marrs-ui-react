import { deepmerge } from '@wemo-ui/marrs-core/utils';
import { debounce } from '@wemo-ui/marrs/utils';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import Picker, { PickerGroup, PickerItem } from '../Picker';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
const ComponentName = getComponentName('DatePicker');

const PickerTreeRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(() => ({}));

const DatePicker = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });
  const date = new Date();
  const {
    defaultValue,
    value,
    className,
    classes: classesProps,
    onChange,
    maxDate = date.setFullYear(date.getFullYear() + 20),
    minDate = date.setFullYear(date.getFullYear() - 10)
  } = props;

  const styleProps = { className, classes: classesProps };
  const [colums, setColums] = useState([]);
  const [currValue, setCurrValue] = useState(
    deepmerge(value || defaultValue, [])
  );
  useEffect(() => {
    if (!value) return;
  }, [value]);

  const formatDate = useCallback((company, data, startData = 0) => {
    let dateArr = [];
    for (var i = 0; i <= data; i++) {
      dateArr.push({
        label: startData + i + company,
        value: startData + i
      });
    }
    return dateArr;
  }, []);
  const dateFormatUtil = (date) => {
    let formatDate;
    if (typeof date === 'string') {
      formatDate = new Date(date?.replace(/-/g, '/'));
    } else {
      formatDate = new Date(date);
    }
    return formatDate;
  };
  const formatOptions = useCallback(() => {
    let allColums = [];
    let MaxDateTime = dateFormatUtil(maxDate);
    let MinDateTime = dateFormatUtil(minDate);
    const MinYear = MinDateTime.getFullYear();
    const MaxYear = MaxDateTime.getFullYear();
    const MinMonth = MinDateTime.getMonth() + 1;
    const MaxMonth = MaxDateTime.getMonth() + 1;
    const MinDay = MinDateTime.getDate();
    const MaxDay = MaxDateTime.getDate();

    let currYear;
    let currMonth;
    let currDay;
    //计算年colum
    let yearArr = formatDate('年', MaxYear - MinYear, MinYear, MaxYear);
    //计算月cloum
    let monthArr;
    let dayArr;
    //判断当前是否有选中值，有则取currValue中的值，无则取年colum的第一项
    currValue === undefined
      ? (currYear = yearArr[0].value)
      : (currYear = currValue[0]);
    //获取月colum

    if (Number(currYear) === MaxYear) {
      monthArr = formatDate('月', MaxMonth - 1, 1);
    } else if (Number(currYear) === MinYear) {
      monthArr = formatDate('月', 12 - MinMonth, MinMonth);
    } else {
      monthArr = formatDate('月', 11, 1);
    }
    //判断当前是否有选中值，有则取currValue中的值，无则取月colum的第一项
    currValue === undefined
      ? (currMonth = monthArr[0].value)
      : (currMonth = currValue[1]);
    //获取该年月的天数
    let curDate = new Date(currYear, currMonth, 0);
    let dayNumber = curDate.getDate();
    //获取日colum
    if (Number(currYear) === MaxYear && Number(currMonth) === MaxMonth) {
      dayArr = formatDate('日', MaxDay - 1, 1);
    } else if (Number(currYear) === MinYear && Number(currMonth) === MinMonth) {
      dayArr = formatDate('日', dayNumber - MinDay, MinDay);
    } else {
      dayArr = formatDate('日', dayNumber - 1, 1);
    }
    //判断当前是否有选中值，有则取currValue中的值，无则取日colum的第一项
    currValue === undefined
      ? (currDay = dayArr[0].value)
      : (currDay = currValue[2]);

    allColums.push(
      { option: yearArr, value: currYear },
      { option: monthArr, value: currMonth },
      { option: dayArr, value: currDay }
    );

    setColums(allColums);
  }, [currValue, formatDate, maxDate, minDate]);
  useEffect(() => {
    formatOptions();
  }, [formatOptions]);
  const pickerChange = useCallback(
    (index) => {
      return (value) => {
        currValue[index] = value;
        setCurrValue(currValue);
        formatOptions();
      };
    },
    [currValue, formatOptions]
  );
  /* eslint-disable */
  const handelPickerGroupChange = useCallback(
    debounce((value, index) => {
      onChange(value, index);
    }, 200),
    []
  );
  /* eslint-disable */
  const pickers = useMemo(() => {
    return (
      <PickerGroup defaultValue={currValue} onChange={handelPickerGroupChange}>
        {colums.map((colum, index) => {
          return (
            <Picker
              onChange={pickerChange(index)}
              key={'colum' + index}
              name={String(index)}
              defaultValue={colum?.value}
              picker={colum.picker}
            >
              {colum.option.map(({ label, value }) => {
                return (
                  <PickerItem key={value} value={value}>
                    {label}
                  </PickerItem>
                );
              })}
            </Picker>
          );
        })}
      </PickerGroup>
    );
  }, [colums, currValue, handelPickerGroupChange, pickerChange]);

  return (
    <PickerTreeRoot ref={ref} styleProps={styleProps}>
      {pickers}
    </PickerTreeRoot>
  );
});

export default DatePicker;
