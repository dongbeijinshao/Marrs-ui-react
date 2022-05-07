import { Button, Can, Icon } from '@wemo-ui/marrs';
import { IconHome, IconRightArrow } from '@wemo-ui/marrs-icons';
import DemoContainer from '../DemoContainer/Demo';

const ButtonDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false}>
        <Button color="primary" volume="big" className="demo-margin-10">
          面性强调
        </Button>
        <Button
          color="primary"
          volume="big"
          className="demo-margin-10"
          face="flat"
        >
          面性次要
        </Button>
        <Button
          color="primary"
          volume="big"
          className="demo-margin-10"
          face="plain"
        >
          线性强调
        </Button>
        <Button color="warning" volume="big" className="demo-margin-10">
          面性强调
        </Button>
        <Button
          color="info"
          volume="big"
          className="demo-margin-10"
          face="flat"
        >
          面性次要
        </Button>
        <Button
          className="demo-margin-10"
          volume="big"
          color="success"
          face="plain"
        >
          线性强调
        </Button>
        <Button
          sx={{
            backgroundImage:
              'linear-gradient(270deg, rgba(239, 71, 31, 0.75) 0%, #FFBE70 100%)'
          }}
          className="demo-margin-10"
          volume="big"
        >
          渐变效果
        </Button>
        <Button
          className="demo-margin-10"
          volume="big"
          color="primary"
          face="text"
        >
          文字按钮
        </Button>
      </DemoContainer>

      <DemoContainer title="点击样式" background={false}>
        <Button volume="big" color="primary" className="demo-margin-10">
          面性强调
        </Button>
        <Button volume="big" face="flat" className="demo-margin-10">
          面性次要
        </Button>
        <Button volume="big" face="plain">
          线性强调
        </Button>
      </DemoContainer>

      <DemoContainer title="禁用样式" background={false}>
        <Button volume="big" disabled className="demo-margin-10">
          面性强调
        </Button>
        <Button volume="big" disabled className="demo-margin-10">
          面性次要
        </Button>
        <Button volume="big" disabled face="plain">
          线性强调
        </Button>
      </DemoContainer>

      <DemoContainer title="圆角样式" background={false}>
        <Button radius={0} volume="big" className="demo-margin-10">
          面性强调
        </Button>
        <Button face="flat" volume="big" radius={20} className="demo-margin-10">
          面性次要
        </Button>
        <Button face="plain" volume="big" radius={[24, 4]}>
          线性强调
        </Button>
      </DemoContainer>

      <DemoContainer title="按钮图标" background={false}>
        <Button
          volume="big"
          face="flat"
          startIcon={<Icon icon={<IconHome />} />}
          className="demo-margin-10"
        >
          面性次要
        </Button>
        <Button
          volume="big"
          face="plain"
          endIcon={<Icon icon={<IconRightArrow />} />}
        >
          线性强调
        </Button>
        <Button
          volume="big"
          className="demo-margin-10"
          sx={{ padding: '12px' }}
          startIcon={<Icon icon={<IconHome />} />}
        ></Button>
        <Button
          volume="big"
          face="text"
          startIcon={<Icon icon={<IconHome />} />}
          className="demo-margin-10"
        >
          文字按钮
        </Button>
        <Button
          volume="big"
          face="text"
          endIcon={<Icon icon={<IconRightArrow />} />}
        >
          文字按钮
        </Button>
      </DemoContainer>

      <DemoContainer title="加载状态" background={false}>
        <Button
          sx={{ padding: '13px' }}
          volume="big"
          loading
          className="demo-margin-10"
        ></Button>
        <Button volume="big" loading face="flat" className="demo-margin-10">
          面性次要
        </Button>
      </DemoContainer>

      <DemoContainer title="定宽" background={false}>
        <Button volume="big" width="115" className="demo-margin-10">
          少量字数
        </Button>
        <Button volume="big" width="115" className="demo-margin-10">
          大量字数大量字数超出文字
        </Button>
      </DemoContainer>

      <DemoContainer title="自适应宽度" background={false}>
        <Button volume="big" className="demo-margin-10">
          少量字数
        </Button>
        <Button volume="big" className="demo-margin-10">
          大量字数大量字数
        </Button>
      </DemoContainer>

      <DemoContainer title="通栏宽度" background={false} padding>
        <Button volume="big" fullWidth>
          通栏按钮
        </Button>
      </DemoContainer>

      <DemoContainer title="按钮高度" background={false}>
        <Can className="demo-margin-10">
          <Button volume="tiny">面性强调</Button>
        </Can>
        <Can className="demo-margin-10">
          <Button volume="small">面性强调</Button>
        </Can>
        <Can className="demo-margin-10">
          <Button volume="medium">面性强调</Button>
        </Can>
        <Can className="demo-margin-10">
          <Button volume="big">面性强调</Button>
        </Can>
        <Can className="demo-margin-10">
          <Button volume="large">面性强调</Button>
        </Can>
      </DemoContainer>

      <DemoContainer title="按钮高度" background={false}>
        <Can className="demo-margin-10">
          <Button face="plain" volume="tiny">
            面性强调
          </Button>
        </Can>
        <Can className="demo-margin-10">
          <Button face="plain" volume="small">
            面性强调
          </Button>
        </Can>
        <Can className="demo-margin-10">
          <Button face="plain" volume="medium">
            面性强调
          </Button>
        </Can>
        <Can className="demo-margin-10">
          <Button face="plain" volume="big">
            面性强调
          </Button>
        </Can>
        <Can className="demo-margin-10">
          <Button face="plain" volume="large">
            面性强调
          </Button>
        </Can>
      </DemoContainer>
    </>
  );
};

export default ButtonDemo;
