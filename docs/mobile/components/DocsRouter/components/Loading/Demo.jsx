import { Loading } from '@wemo-ui/marrs';

import DemoContainer from '../DemoContainer/Demo';

const LoadingDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式" background={false} padding>
        <Loading />
      </DemoContainer>

      <DemoContainer title="主题样式" background={false} padding>
        <Loading color="success" />
      </DemoContainer>
    </>
  );
};

export default LoadingDemo;
