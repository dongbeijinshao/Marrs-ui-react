import { Tab, TabPanel, Tabs } from '@wemo-ui/marrs';
import { makeStyles } from '@wemo-ui/marrs/styles';
import { useCallback, useState } from 'react';

const useStyles = makeStyles({
  tabsBox: {
    // boxShadow: '10px 10px 20px 0px rgba(186, 191, 210, 0.16)'
    borderBottom: '1px solid #eee',
    background: '#ffffff'
  }
});
function TabView() {
  const classes = useStyles();
  const [value] = useState(2);
  const [value1, setValue1] = useState('label1');
  const handleChange = useCallback((value, label) => {
    console.log(value);
    console.log(label);

    // alert(label);
    // setValue(value);
  }, []);
  const handleChange1 = useCallback(
    (value, label) => {
      // alert(label);
      console.log(label);
      setValue1(value);
    },
    [setValue1]
  );
  return (
    <div style={{ fontSize: 16, color: '#333', height: '200vh' }}>
      <Tabs value={value} onChange={handleChange} className={classes.tabsBox}>
        <Tab value={0}>标签1标 签1标 签1</Tab>

        <Tab value={2} disabled>
          标标签1
          {'aasdasd'}
          签3
        </Tab>
      </Tabs>
      <TabPanel visible={value === 0}>标签1</TabPanel>
      <TabPanel visible={value === 1}>多文字123111123123123</TabPanel>
      <TabPanel visible={value === 2}>标签3</TabPanel>
      <TabPanel visible={value === 3}>标签4</TabPanel>
      <TabPanel visible={value === 4}>标签5</TabPanel>
      <br />

      <Tabs
        value={value1}
        color="info"
        onChange={handleChange1}
        sticky
        className={classes.tabsBox}
      >
        <Tab value="label1">水果</Tab>
        <Tab value="label2">蔬菜</Tab>
        <Tab value="label3">白萝卜</Tab>
      </Tabs>
      <TabPanel visible={value1 === 'label1'}>粘顶效果: 水果</TabPanel>
      <TabPanel visible={value1 === 'label2'}>蔬菜</TabPanel>
      <TabPanel visible={value1 === 'label3'}>白萝卜</TabPanel>
    </div>
  );
}

export default TabView;
