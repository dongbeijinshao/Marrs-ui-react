/* eslint-disable */

import { deepmerge } from '@wemo-ui/marrs-core/utils';
import { debounce } from '@wemo-ui/marrs/utils';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import Picker from './Picker';
import PickerGroup from './PickerGroup';
import PickerItem from './PickerItem';

export const SYMBOL = Infinity;
const MOCK = {
  option: [{ label: '', value: SYMBOL }],
  value: '',
  picker: {}
};
/**
 * 剔除对象中含有key的值
 * @param {object} value 给出的对象
 * @param {string} key 给定的标示
 * @returns 剔除后key值后的新对象
 */
function without(value, key) {
  let obj = {};
  for (let i in value) {
    if (value[i] !== key) {
      obj[i] = value[i];
    }
  }
  return obj;
}

/**
 * 计算给定的数据的最深的子元素的深度
 * @param {*} options 给定的子元素
 * @returns 最深长度
 */
function calcMaxDeepLen(options) {
  let maxColumLength = 1;
  function mapOptions(option, currentLength) {
    if (!option.children || option.children.length === 0) {
      return;
    }
    const nextLength = currentLength + 1;
    if (nextLength > maxColumLength) {
      maxColumLength = nextLength;
    }
    option.children.forEach((option) => {
      mapOptions(option, nextLength);
    });
  }

  options.forEach((option) => {
    mapOptions(option, 1);
  });

  return maxColumLength;
}

const ComponentName = getComponentName('PickerTree');

const PickerTreeRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(() => {
  //书写样式
});

const PickerTree = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const {
    options,
    defaultValue,
    value,
    className,
    classes: classesProps,
    onChange
  } = props;

  const styleProps = { className, classes: classesProps };
  const [colums, setColums] = useState([]);
  const [currValue, setCurrValue] = useState(
    deepmerge(value || defaultValue, [])
  );
  useEffect(() => {
    if (!value) return;
    value.forEach((item, index) => {
      colums[index]?.picker.setValue(item);
    });
  }, [value]);

  const formatOptions = useCallback(() => {
    //解析options数据为colums
    let allOptions = {
      children: options
    };
    let allColums = [];

    let valueIndex = 0;
    // 寻找当前选中后，children 的变化
    while (allOptions && allOptions.children) {
      const children = allOptions.children;
      // 当选择完了后，没有 children ， 不再继续渲染，第二列，，，乃至第三列
      let currItem = children.find((item) => {
        return item.value === currValue[valueIndex];
      });
      //创建usePicker  用于setValue执行
      allColums.push({
        option: allOptions.children,
        value: currItem?.value,
        picker: {}
      });

      allOptions = currItem || children[0];
      valueIndex++;
    }

    // 计算给定数据的，最深的长度，不足的长度补全
    let maxLen = calcMaxDeepLen(options);
    let newColum = new Array(maxLen).fill(MOCK);
    newColum.splice(0, allColums.length, ...allColums);

    setColums(newColum);
  }, [options, currValue]);

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
  const handelPickerGroupChange = useCallback(
    debounce((value, item) => {
      let newValue = without(value, SYMBOL);
      let newItem = without(item, SYMBOL);
      onChange(newValue, newItem);
    }, 200),
    []
  );
  const pickers = useMemo(() => {
    return (
      <PickerGroup
        ref={ref}
        defaultValue={currValue}
        onChange={handelPickerGroupChange}
      >
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
                  <PickerItem key={value} value={value} label={label}>
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

  return <PickerTreeRoot styleProps={styleProps}>{pickers}</PickerTreeRoot>;
});

PickerTree.displayName = ComponentName;
PickerTree.name = ComponentName;

export default PickerTree;
/* eslint-disable */
