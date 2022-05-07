import { Tabbar, TabbarItem } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
import { IconHome, IconCart, IconMineGoods } from '@wemo-ui/marrs-icons';

const TabbarDemo = () => {
  return (
    <>
      <DemoContainer title="如下"></DemoContainer>
      <Tabbar current="home" volume="large" color="info">
        <TabbarItem text="首页" name="home" color="info" icon={<IconHome />} />
        <TabbarItem text="购物车" name="car" icon={<IconCart />} />
        <TabbarItem text="我的" name="/" badge="99+" icon={<IconMineGoods />} />
      </Tabbar>
    </>
  );
};

export default TabbarDemo;
