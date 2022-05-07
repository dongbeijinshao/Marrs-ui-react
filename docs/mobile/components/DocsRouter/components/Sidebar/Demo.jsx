import { Sidebar, SidebarItem, Toast } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const handleChange = (index) => {
  Toast.success({
    message: `当前选中${index}`
  });
};

const badgeProps = {
  dotOnly: true,
  content: '123'
};

const SidebarDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false}>
        <Sidebar value={1}>
          <SidebarItem title="IP联名款" name={0} />
          <SidebarItem title="侧边导航" name={1} />
          <SidebarItem title="禁用选项" name={2} disabled />
          <SidebarItem title="明星同款" name={3} />
        </Sidebar>
      </DemoContainer>

      <DemoContainer title="徽标气泡" background={false}>
        <Sidebar value={1}>
          <SidebarItem title="IP联名款" badge={badgeProps} name={0} />
          <SidebarItem title="侧边导航" badge={6} name={1} />
          <SidebarItem title="禁用选项" badge={99} name={2} disabled />
          <SidebarItem title="明星同款" name={3} />
        </Sidebar>
      </DemoContainer>

      <DemoContainer title="监听切换事件" background={false}>
        <Sidebar onChange={handleChange}>
          <SidebarItem title="标签名称" />
          <SidebarItem title="标签名称" />
          <SidebarItem title="标签名称" />
        </Sidebar>
      </DemoContainer>
    </>
  );
};

export default SidebarDemo;
