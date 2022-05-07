import { Icon, Tab, TabPanel, Tabs, Toast } from '@wemo-ui/marrs';
import { IconHome } from '@wemo-ui/marrs-icons';
import { useCallback, useState } from 'react';
import DemoContainer from '../DemoContainer/Demo';

const TabDemo = () => {
  const [value, setValue] = useState(1);

  const handleChange = useCallback(
    (value, label) => {
      setValue(value);
      Toast.success({
        message: `当前值${value}`
      });
    },
    [setValue]
  );

  return (
    <>
      <DemoContainer title="基本样式">
        <Tabs value={value} ellipsis={false} onChange={handleChange}>
          <Tab value={0}>全部</Tab>
          <Tab value={1}>待支付</Tab>
          <Tab value={2} disabled>
            待发货
          </Tab>
          <Tab value={3}>待收货待123123123待</Tab>
          <Tab value={4}>待评价</Tab>
        </Tabs>
        <TabPanel visible={value === 0}>全部内容</TabPanel>
        <TabPanel visible={value === 1}>热销内容</TabPanel>
        <TabPanel visible={value === 3}>连衣裙内容</TabPanel>
        <TabPanel visible={value === 4}>裤子内容</TabPanel>
      </DemoContainer>

      <DemoContainer title="标签栏滑动">
        <Tabs value={value} scrollspy onChange={handleChange}>
          <Tab value={0}>全部</Tab>
          <Tab value={1}>热销</Tab>
          <Tab value={2}>上衣</Tab>
          <Tab value={3}>连衣裙</Tab>
          <Tab value={4}>裤子</Tab>
          <Tab value={5}>帽子</Tab>
          <Tab value={6}>帽子1</Tab>
          <Tab value={7}>帽子2</Tab>
          <Tab value={8}>帽子3</Tab>
        </Tabs>
        <TabPanel visible={value === 0}>全部内容</TabPanel>
        <TabPanel visible={value === 1}>热销内容</TabPanel>
        <TabPanel visible={value === 2}>上衣内容</TabPanel>
        <TabPanel visible={value === 3}>连衣裙内容</TabPanel>
        <TabPanel visible={value === 4}>裤子内容</TabPanel>
        <TabPanel visible={value === 5}>帽子内容</TabPanel>
      </DemoContainer>

      <DemoContainer title="搭配Icon">
        <Tabs equal={false} value={value}>
          <Tab value={0}>全部</Tab>
          <Tab value={1}>热销</Tab>
          <Tab value={2}>上衣</Tab>
          <Tab value={3}>
            连衣裙 <Icon icon={<IconHome />} sx={{ marginLeft: 1 }} />
          </Tab>
        </Tabs>
        <TabPanel visible={value === 0}>全部内容</TabPanel>
        <TabPanel visible={value === 1}>热销内容</TabPanel>
        <TabPanel visible={value === 2}>上衣内容</TabPanel>
        <TabPanel visible={value === 3}>连衣裙内容</TabPanel>
      </DemoContainer>

      <DemoContainer title="点击事件监听">
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0}>全部</Tab>
          <Tab value={1}>热销</Tab>
          <Tab value={2}>上衣</Tab>
          <Tab value={3}>
            连衣裙 <Icon icon={<IconHome />} sx={{ marginLeft: 1 }} />
          </Tab>
        </Tabs>
        <TabPanel visible={value === 0}>全部内容</TabPanel>
        <TabPanel visible={value === 1}>热销内容</TabPanel>
        <TabPanel visible={value === 2}>上衣内容</TabPanel>
        <TabPanel visible={value === 3}>连衣裙内容</TabPanel>
      </DemoContainer>
    </>
  );
};

export default TabDemo;
