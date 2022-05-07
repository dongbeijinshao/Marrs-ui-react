/* eslint-disable */

import {
  Picker,
  PickerGroup,
  PickerItem,
  PickerTree,
  usePicker,
  Button
} from '@wemo-ui/marrs';
import { useCallback, useState, useEffect } from 'react';
import Demo from './Demo';
// import { dataOptions } from './data.json';
let dataOptions = require('./data.json');
console.log(dataOptions);
const numtype = [
  { label: '单数', value: 'odd' },
  { label: '双数', value: 'even' }
];

const even = [2, 4, 6, 8].map((num) => ({
  label: num,
  value: num
}));

const odd = [1, 3, 5, 7, 9].map((num) => ({
  label: num,
  value: num
}));

const PickerView = () => {
  const [third] = useState([
    {
      label: '奇数',
      value: 'jishu'
    }
  ]);
  const [options, setOptions] = useState(even);

  const handlePickerChange = useCallback((value, index) => {
    console.log(index);
  }, []);

  const [picker] = usePicker();

  const handleChangeNumtype = useCallback(
    (numtype) => {
      // console.log(index);
      // console.log('模拟onChange, numtype', numtype);
      // console.log(item);
      if (numtype === 'odd') {
        setOptions(odd);
        // numRef.current.setValue(5);
      } else if (numtype === 'even') {
        setOptions(even);
        setTimeout(() => {
          picker.setValue(6);
        }, 0);
      } else {
        setOptions([]);
      }
    },
    [picker]
  );

  const handleChangeNum = useCallback(() => {
    // console.log(index);
    // console.log(value);
    // console.log('模拟onChange, value', value);
    // if (value % 2 === 0) {
    //   setThird([
    //     {
    //       label: '偶数',
    //       value: 'oushu'
    //     }
    //   ]);
    // } else if (value % 2 === 1) {
    //   setThird([
    //     {
    //       label: '奇数',
    //       value: 'jishu'
    //     }
    //   ]);
    // }
  }, []);

  const handleChangeThird = useCallback(() => {
    // console.log('模拟onChange, third', value);
  }, []);

  const handelChange = useCallback((value, index) => {
    console.log(value);
    console.log(index);
    // if (value[0] == 'odd') {
    //   setPickerTreeValue(['odd', 3]);
    // }
  }, []);

  const handelButtonClick = useCallback(() => {
    setPickerTreeValue(['even', 2]);
  }, []);

  // const [third, setThird] = useState([{ label: 1, value: 1 }]);

  const [value3] = useState('oushu');
  const [pickerTreeValue, setPickerTreeValue] = useState(['even', 6]);

  const [value1] = useState('even');
  // const [pickerOptions, setPickerOptions] = useState([
  //   {
  //     label: '单数',
  //     value: 'odd',
  //     children: [
  //       {
  //         label: 1,
  //         value: 1,
  //         children: [
  //           {
  //             label: '奇数1',
  //             value: 'jishu',
  //             children: [
  //               {
  //                 label: '奇数1',
  //                 value: 'jishu',
  //                 children: [
  //                   { label: '奇数1', value: 'jishu' },
  //                   { label: '奇数2', value: 'jishu2' }
  //                 ]
  //               },
  //               { label: '奇数2', value: 'jishu2' }
  //             ]
  //           },
  //           { label: '奇数2', value: 'jishu2' }
  //         ]
  //       },
  //       { label: 3, value: 3, children: [{ label: '奇数', value: 'jishu' }] },
  //       { label: 5, value: 5, children: [{ label: '奇数', value: 'jishu' }] },
  //       { label: 7, value: 7, children: [{ label: '奇数', value: 'jishu' }] },
  //       { label: 9, value: 9, children: [{ label: '奇数', value: 'jishu' }] }
  //     ]
  //   },
  //   {
  //     label: '双数',
  //     value: 'even',
  //     children: [
  //       { label: 2, value: 2, children: [{ label: '偶数', value: 'oushu' }] },
  //       { label: 4, value: 4, children: [{ label: '偶数', value: 'oushu' }] },
  //       { label: 6, value: 6, children: [{ label: '偶数', value: 'oushu' }] },
  //       { label: 8, value: 8, children: [{ label: '偶数', value: 'oushu' }] }
  //     ]
  //   }
  // ]);
  const [pickerOptions1, setPickerOptions1] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setPickerOptions1(dataOptions);
    }, 1000);
  }, []);

  useEffect(() => {
    // console.log(pickerOptions1);
  }, [pickerOptions1]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('setVaue1');
  //     setValue1((v) => {
  //       console.log('v', v);
  //       if (v === 'even') return 'odd';
  //       if (v === 'odd') return 'even';
  //     });
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [value1]);
  return (
    <>
      <Demo title="基础样式" padding>
        <PickerGroup
          height={300}
          onChange={handlePickerChange}
          defaultValue={{
            numtype: 'even',
            num: 6
          }}
        >
          <Picker
            name="numtype"
            onChange={handleChangeNumtype}
            // picker={picker}
            defaultValue={value1}
          >
            {numtype.map(({ label, value }) => {
              return (
                <PickerItem key={value} value={value} label={label}>
                  {label}
                </PickerItem>
              );
            })}
          </Picker>

          <Picker
            picker={picker}
            name="num"
            onChange={handleChangeNum}
            defaultValue={4}
          >
            {options.map(({ label, value }) => {
              return (
                <PickerItem key={value} value={value} label={label}>
                  {label}
                </PickerItem>
              );
            })}
          </Picker>

          <Picker name="third" onChange={handleChangeThird} value={value3}>
            {third.map(({ label, value }) => {
              // console.log('third.map', label, value);
              return (
                <PickerItem key={value} value={value} label={label}>
                  {label}
                </PickerItem>
              );
            })}
          </Picker>
        </PickerGroup>
        <PickerTree
          value={pickerTreeValue}
          options={pickerOptions1}
          height={300}
          onChange={handelChange}
        ></PickerTree>
        <Button onClick={handelButtonClick}></Button>
      </Demo>
    </>
  );
};

export default PickerView;
/* eslint-disable */
