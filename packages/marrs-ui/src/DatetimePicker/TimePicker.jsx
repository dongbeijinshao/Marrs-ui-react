import { forwardRef, useCallback, useMemo, useState, useEffect } from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { noop } from '../utils/helperFunctions';
import Picker, { PickerItem, PickerGroup } from '../Picker';
import { debounce } from '@wemo-ui/marrs/utils';
import { deepmerge } from '@wemo-ui/marrs-core/utils';

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

  const {
    defaultValue,
    value,
    className,
    classes: classesProps,
    onChange = noop,
    maxHour = 23,
    minHour = 0,
    maxMinute = 59,
    minMinute = 0
  } = props;

  const styleProps = { className, classes: classesProps };
  const [colums, setColums] = useState([]);
  const [currValue, setCurrValue] = useState(
    deepmerge(value || defaultValue, [])
  );
  // useEffect(() => {
  //   if (!value) return;
  //   // value.map((item, index) => {
  //   //   colums[index]?.picker.setValue(item);
  //   // });
  // }, [value]);

  const formatDate = useCallback((company, data) => {
    let dateArr = [];
    for (var i = 0; i <= data; i++) {
      let valueData = data + i;
      if (String(valueData).length === 1) {
        valueData = 0 + '' + valueData;
      }

      dateArr.push({
        label: valueData + company,
        value: valueData
      });
    }
    return dateArr;
  }, []);
  const formatOptions = useCallback(() => {
    let allColums = [];
    let HourArr = formatDate('', maxHour - minHour, minHour);
    let minuteArr = formatDate('', maxMinute - minMinute, minMinute);
    let currHour;
    let currMinute;

    if (currValue === undefined) {
      currHour = HourArr[0].value;
      currMinute = minuteArr[0].value;
    } else {
      currHour = currValue[0];
      currMinute = currValue[1];
    }
    allColums.push(
      { option: HourArr, value: currHour },
      { option: minuteArr, value: currMinute }
    );
    setColums(allColums);
  }, [currValue, formatDate, maxHour, maxMinute, minHour, minMinute]);

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
    [formatOptions, currValue]
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
  }, [colums]);

  return (
    <PickerTreeRoot ref={ref} styleProps={styleProps}>
      {pickers}
    </PickerTreeRoot>
  );
});

export default DatePicker;
