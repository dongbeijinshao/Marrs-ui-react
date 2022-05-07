import { Can, Grid, IconItem } from '@wemo-ui/marrs';
import {
  IconPayment,
  IconReceipt,
  IconEvaluation,
  IconShip
} from '@wemo-ui/marrs-icons';

import DemoContainer from '../DemoContainer/Demo';

const GridDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式">
        <Grid sx={{ background: '#fff' }}>
          <IconItem text="待付款" icon={<IconPayment />} />
          <IconItem text="待收货" icon={<IconReceipt />} />
          <IconItem text="待发货" icon={<IconShip />} />
          <IconItem text="待评价" icon={<IconEvaluation />} />
        </Grid>
      </DemoContainer>

      <DemoContainer title="自定义行列数">
        <Grid column={3} sx={{ background: '#fff' }}>
          <IconItem text="待付款" icon={<IconPayment />} />
          <IconItem text="待收货" icon={<IconReceipt />} />
          <IconItem text="待发货" icon={<IconShip />} />
          <IconItem text="待评价" icon={<IconEvaluation />} />
          <IconItem text="待付款" icon={<IconPayment />} />
          <IconItem text="待收货" icon={<IconReceipt />} />
        </Grid>
      </DemoContainer>

      <DemoContainer title="徽标气泡">
        <Can sx={{ background: '#fff' }}>
          <Grid color="info">
            <IconItem
              badge={{ dotOnly: true }}
              text="待付款"
              icon={<IconPayment />}
            />
            <IconItem badge="6" text="待收货" icon={<IconReceipt />} />
            <IconItem badge="99" text="代发货" icon={<IconShip />} />
          </Grid>
        </Can>
      </DemoContainer>
    </>
  );
};

export default GridDemo;
