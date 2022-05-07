import { Picker, PickerGroup, PickerItem } from '@wemo-ui/marrs';
import { useCallback, useState } from 'react';
// import Demo from './Demo';
import options from './date.json';
const PickerView = () => {
  // console.log(options);
  // const [third, setThird] = useState([
  //   {
  //     label: '奇数',
  //     value: 'jishu'
  //   }
  // ]);
  // const [options, setOptions] = useState(even);
  const [Options, setOptions] = useState(options);
  const handlePickerChange = useCallback((value) => {
    console.log('handlePickerChange', value);
  }, []);
  const handlePickerColumChange = (value, name) => {
    console.log(value);
    console.log(name);
    if (name === 1) {
      if (
        value === '01' ||
        value === '03' ||
        value === '05' ||
        value === '07' ||
        value === '08' ||
        value === '10' ||
        value === '12'
      ) {
        if (Options[2].length < 6) {
          Options[2].push({ label: '06日', value: '06' });
          setValue({ 0: '2021', 1: '2', 2: '01' });
        }
      } else {
        Options[2].splice(5, 1);
        setValue({ 0: '2021', 1: '2', 2: '03' });
      }
      setOptions(JSON.parse(JSON.stringify(Options)));
    }
  };
  // const handleChangeThird = useCallback((value) => {
  //   // console.log('模拟onChange, third', value);
  // }, []);

  // const [third, setThird] = useState([{ label: 1, value: 1 }]);
  // console.log(options);
  // const handleChangeYear = useCallback((value) => {
  //   console.log('handleChangeYear', value);
  // }, []);

  // const handleChangeMonth = useCallback((value) => {
  //   console.log(value);
  //   options[0].map((item) => {
  //     if (item.value == value.year) {
  //       item.children.map((dayItem) => {
  //         if (Number(dayItem.value) == value) {
  //           console.log(dayItem);
  //           setDayOptions(dayItem.children);
  //         }
  //       });
  //     }
  //   });
  // }, []);

  // const handleChangeDay = useCallback((value) => {
  //   console.log('handleChangeDay', value);
  // }, []);

  const [value, setValue] = useState({ 0: '2021', 1: '10', 2: '05' });
  // const [monthOptions, setMonthOptions] = useState([]);
  // const [dayOptions, setDayOptions] = useState([]);

  // useEffect(() => {
  //   console.log(options[0]);
  //   options[0].map((item) => {
  //     if (item.value == value.year) {
  //       setMonthOptions(item.children);
  //       item.children.map((dayItem) => {
  //         if (Number(dayItem.value) == value.month) {
  //           console.log(dayItem);
  //           setDayOptions(dayItem.children);
  //         }
  //       });
  //     }
  //   });
  // }, []);
  return (
    <>
      {/* <Demo title="基础样式" padding>
        {monthOptions.length > 0 && dayOptions.length > 0 ? (
          <PickerGroup
            // onChange={handlePickerChange}
            defaultValue={value}
            height={300}
          >
            <Picker onChange={handleChangeYear} name={'year'}>
              {options[0].map(({ label, value }) => {
                return (
                  <PickerItem key={value} value={value}>
                    {label}
                  </PickerItem>
                );
              })}
            </Picker>

            <Picker onChange={handleChangeMonth} name={'month'}>
              {monthOptions.map(({ label, value }) => {
                return (
                  <PickerItem key={value} value={value}>
                    {label}
                  </PickerItem>
                );
              })}
            </Picker>

            <Picker onChange={handleChangeDay} name={'day'}>
              {dayOptions.map(({ label, value }) => {
                return (
                  <PickerItem key={value} value={value}>
                    {label}
                  </PickerItem>
                );
              })}
            </Picker>
          </PickerGroup>
        ) : (
          ''
        )}
      </Demo> */}

      <PickerGroup
        onChange={handlePickerChange}
        defaultValue={value}
        height={300}
      >
        {Options.map((option, index) => {
          return (
            <Picker name={String(index)} onChange={handlePickerColumChange}>
              {option.map(({ label, value }) => {
                return <PickerItem value={value}>{label}</PickerItem>;
              })}
            </Picker>
          );
        })}
      </PickerGroup>
    </>
  );
};

export default PickerView;
