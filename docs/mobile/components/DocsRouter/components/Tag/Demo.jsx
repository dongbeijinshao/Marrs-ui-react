import { Tag } from '@wemo-ui/marrs';
import { IconClose, IconStar } from '@wemo-ui/marrs-icons';
import DemoContainer from '../DemoContainer/Demo';

const TagDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式" background={false} padding>
        <Tag volume="small" className="demo-margin-10">
          标签
        </Tag>
        <Tag volume="small" className="demo-margin-10" face="flat">
          标签
        </Tag>
        <Tag volume="small" className="demo-margin-10" face="plain">
          标签
        </Tag>
      </DemoContainer>

      <DemoContainer title="自定义样式" background={false} padding>
        <Tag
          volume="medium"
          className="demo-margin-10"
          color="success"
          sx={{ borderRadius: 4 }}
        >
          标签
        </Tag>
      </DemoContainer>

      <DemoContainer title="标签尺寸" background={false} padding>
        <Tag volume="small" className="demo-margin-10">
          28标签
        </Tag>
        <Tag volume="medium" className="demo-margin-10">
          32标签
        </Tag>
        <Tag volume="big" className="demo-margin-10">
          36标签
        </Tag>
        <br />
        <Tag face="plain" volume="small" className="demo-margin-10">
          28标签
        </Tag>
        <Tag face="plain" volume="medium" className="demo-margin-10">
          32标签
        </Tag>
        <Tag face="plain" volume="big" className="demo-margin-10">
          36标签
        </Tag>
      </DemoContainer>
      <DemoContainer title="搭配图标" background={false} padding>
        <Tag className="demo-margin-10" startIcon={<IconStar />}>
          标签
        </Tag>
        <Tag className="demo-margin-10" endIcon={<IconClose />}>
          标签
        </Tag>
      </DemoContainer>
    </>
  );
};

export default TagDemo;
