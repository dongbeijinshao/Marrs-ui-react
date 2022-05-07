import { Avatar } from '@wemo-ui/marrs';
import { IconAnnotation } from '@wemo-ui/marrs-icons';

import DemoContainer from '../DemoContainer/Demo';

const AvatarDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式">
        <Avatar icon={<IconAnnotation />} />
      </DemoContainer>

      <DemoContainer title="自定义圆角">
        <Avatar icon={<IconAnnotation />} radius={10} />
      </DemoContainer>
    </>
  );
};

export default AvatarDemo;
