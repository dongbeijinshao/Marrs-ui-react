import { Rate, Can, Toast, Icon } from '@wemo-ui/marrs';
import { IconGoods } from '@wemo-ui/marrs-icons';
import DemoContainer from '../DemoContainer/Demo';

const handleChange = (e, value) => {
  Toast.info({
    message: `当前value:${value}`,
    duration: 1
  });
};

const RateDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        <Can>
          <Rate value={4} emptySolid />
        </Can>
        <Can sx={{ marginTop: 1 }}>
          <Rate value={2} />
        </Can>
      </DemoContainer>

      <DemoContainer title="自定义样式" background={false} padding>
        <Can>
          <Rate value={3} emptySolid />
        </Can>
        <Can sx={{ marginTop: 1 }}>
          <Rate
            value={3}
            icon={<Icon icon={<IconGoods />} />}
            emptyIcon={<Icon icon={<IconGoods />} />}
          />
        </Can>
      </DemoContainer>

      <DemoContainer title="评分数量" background={false} padding>
        <Can>
          <Rate value={3} num={7} emptySolid />
        </Can>
        <Can>
          <Rate value={2.5} emptySolid />
        </Can>
      </DemoContainer>

      <DemoContainer title="禁用/只读样式" background={false} padding>
        <Can>
          <Rate value={3} disabled />
        </Can>
        <Can>
          <Rate value={3} readonly emptySolid />
        </Can>
      </DemoContainer>

      <DemoContainer title="监听change事件" background={false} padding>
        <Rate value={4} onChange={handleChange} emptySolid />
      </DemoContainer>
    </>
  );
};

export default RateDemo;
