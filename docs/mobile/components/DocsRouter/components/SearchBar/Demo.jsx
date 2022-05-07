import { FlexBox, Icon, SearchBar, Toast } from '@wemo-ui/marrs';
import {
  IconCategory,
  IconMenu,
  IconPackDown,
  IconScan
} from '@wemo-ui/marrs-icons';
import { useState } from 'react';
import DemoContainer from '../DemoContainer/Demo';

// 模拟搜索事件
const handleSearch = (e) => {
  Toast.success({ message: '搜索事件' });
};

const SearchView = () => {
  const [name, setName] = useState('');
  return (
    <>
      <DemoContainer title="基础样式">
        <SearchBar
          value={name}
          onClear={(value) => {
            setName(value);
          }}
          onInput={(value) => {
            setName(value);
          }}
          onSearch={handleSearch}
          placeholder="请输入搜索关键词"
        />
      </DemoContainer>

      <DemoContainer title="居中样式">
        <SearchBar placeholder="请输入搜索关键词" textAlign="center" />
      </DemoContainer>

      <DemoContainer title="监听事件">
        <SearchBar
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          rightActionControl
        />
      </DemoContainer>

      <DemoContainer title="搭配其它组件使用">
        <SearchBar
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          leftActionControl={
            <Icon sx={{ fontSize: '20px' }} icon={<IconCategory />} />
          }
          rightActionControl={
            <Icon sx={{ fontSize: '20px' }} icon={<IconMenu />} />
          }
        />
        <SearchBar
          value=""
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          leftActionControl={
            <FlexBox container sx={{ minWidth: 58 }}>
              请选择
              <Icon icon={<IconPackDown />} />
            </FlexBox>
          }
        />
        <SearchBar
          value=""
          placeholder="请输入搜索关键词"
          onSearch={handleSearch}
          rightControl={
            <Icon
              sx={{ color: '#9e9e9e', fontSize: '16px' }}
              icon={<IconScan />}
            />
          }
        />
      </DemoContainer>
    </>
  );
};

export default SearchView;
