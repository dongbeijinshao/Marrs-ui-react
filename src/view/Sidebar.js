import { Sidebar, SidebarItem } from '@wemo-ui/marrs';
import Demo from './Demo';

const handleChange = (index) => {
  console.log('模拟change事件', index);
};

const badgeProps = {
  dotOnly: true,
  content: '123'
};

const SidebarView = () => {
  return (
    <>
      <Demo title="基础样式" padding style={{ background: '#ffffff' }}>
        <Sidebar>
          <SidebarItem title="标签名称2" name="abc" />
          <SidebarItem title="标签名称" />
          <SidebarItem title="标签名称" />
        </Sidebar>
      </Demo>
      <Demo title="徽标提示" padding style={{ background: '#ffffff' }}>
        <Sidebar color="info">
          <SidebarItem title="标签名称" badge={badgeProps} />
          <SidebarItem title="标签名称" badge={999} color="success" />
          <SidebarItem title="标签名称" badge={`999+`} />
        </Sidebar>
      </Demo>
      <Demo title="禁用选项" padding style={{ background: '#ffffff' }}>
        <Sidebar>
          <SidebarItem title="标签名称" />
          <SidebarItem title="标签名称" badge={9} />
          <SidebarItem title="标签名称" disabled />
        </Sidebar>
      </Demo>
      <Demo title="监听切换事件" padding style={{ background: '#ffffff' }}>
        <Sidebar onChange={handleChange}>
          <SidebarItem title="标签名称" badge={badgeProps} />
          <SidebarItem title="标签名称" badge={999} />
          <SidebarItem title="标签名称" />
        </Sidebar>
      </Demo>
    </>
  );
};

export default SidebarView;
