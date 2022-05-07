import { Button, DatePicker, TimePicker } from '@wemo-ui/marrs';
import { useCallback, useState } from 'react';
import Demo from './Demo';

const PickerView = () => {
  const handelChange = useCallback((value) => {
    console.log(value);
  }, []);

  const handelButtonClick = useCallback(() => {
    setDateValue([1999, 9, 9]);
  }, []);
  const timePickerChange = useCallback((value) => {
    console.log(value);
  }, []);

  const [dateValue, setDateValue] = useState([1999, 8, 9]);

  return (
    <>
      <Demo title="基础样式" padding>
        <DatePicker
          // minDate="1997-3-4"
          // maxDate="2000-2-11"
          minDate={new Date()}
          maxDate={new Date()}
          value={dateValue}
          // options={pickerOptions}
          height={300}
          onChange={handelChange}
        ></DatePicker>

        <TimePicker
          minHour={6}
          maxHour={21}
          minMinute={10}
          maxMinute={30}
          onChange={timePickerChange}
          value={[12, 12]}
          height={300}
        ></TimePicker>
        <Button onClick={handelButtonClick}></Button>
      </Demo>
    </>
  );
};

export default PickerView;
