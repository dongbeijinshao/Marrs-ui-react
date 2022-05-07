import { Can, Grid, Progress } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const ProgressDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式" background={false} padding>
        <Can className="demo-margin-b-10" sx={{ width: 128 }}>
          <Progress value={50} volume={4} />
        </Can>
        <Can className="demo-margin-b-10" sx={{ width: 180 }}>
          <Progress value={50} volume={4} color="info" />
        </Can>
        <Can className="demo-margin-b-10" sx={{ width: 240 }}>
          <Progress value={50} volume={4} color="warning" />
        </Can>
      </DemoContainer>

      <DemoContainer title="环形样式" background={false} padding>
        <Grid gap={10}>
          <Progress value={50} type="circle" volume={3} />
          <Progress value={50} type="circle" volume={3} color="info" />
          <Progress value={50} type="circle" volume={3} color="warning" />
        </Grid>
      </DemoContainer>
    </>
  );
};

export default ProgressDemo;
