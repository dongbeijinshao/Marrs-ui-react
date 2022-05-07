import { Can, SearchBar } from '@wemo-ui/marrs';
import { IconMenu, IconScan } from '@wemo-ui/marrs-icons';
import { useCallback, useState } from 'react';
import Demo from './Demo';
// 模拟搜索事件

// 模拟点击搜索事件
// const handleSearchClick = (e) => {
//   alert('点击搜索成功');
// };

const handleBlur = (val: any) => {
  console.log('触发blur事件', val);
};

const SearchView = () => {
  const [value, setValue] = useState('');
  const handleSearch = useCallback((value) => {
    // alert('enter键搜索成功');
    console.log(value); //2222
  }, []);
  const handleInput = useCallback((value) => {
    console.log(value); //2222
  }, []);
  const [currValue, setCurrValue] = useState(null);
  const handleInput2 = useCallback((value) => {
    // console.log('value', value);
    //掉借口
    setValue(value);
  }, []);
  return (
    <>
      <Demo title="基础样式" padding>
        <SearchBar
          // onBlur={handleBlur}
          // onInput={handleInput}
          // value={currValue}
          clearable
          defaultValue=""
          placeholder="请输入搜索关键词"
        />
      </Demo>
      <Demo title="居中样式" padding>
        <SearchBar
          onInput={handleInput2}
          // value={value}
          // defaultValue={value}
          placeholder="请输入搜索关键词"
          textAlign="center"
          rightActionControl={
            <div
              onClick={() => {
                setValue('');
              }}
            >
              111
            </div>
          }
        />
      </Demo>
      <Demo title="操作状态" padding>
        <SearchBar
          defaultValue="12312312222223"
          placeholder="请输入搜索关键词"
        />
        <SearchBar value="输入内容" placeholder="请输入搜索关键词" />
        <SearchBar
          value=""
          placeholder="请输入搜索关键词"
          rightActionControl
          // onSearchClick={handleSearchClick}
        />
      </Demo>
      <Demo title="监听事件" padding>
        <SearchBar
          value=""
          placeholder="请输入搜索关键词"
          onSearch={(value) => {
            console.log(value);
            // handleSearch();
          }}
          onBlur={(value) => {
            console.log(value);
          }}
          rightActionControl
        />
      </Demo>
      <Demo title="搭配其它组件使用" padding>
        <SearchBar
          value=""
          // autoFocus
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          leftActionControl={<IconMenu />}
          rightActionControl={<IconMenu />}
        />
        <SearchBar
          value=""
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          leftActionControl={<Can>请选择v</Can>}
        />
        <SearchBar
          value=""
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          rightControl={<IconScan />}
        />
      </Demo>
    </>
  );
};

export default SearchView;
