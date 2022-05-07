import { Uploader, Button, Grid, FlexBox } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
import { IconPhoto, IconAdd } from '@wemo-ui/marrs-icons';
import demoImg from '@wemo-ui/marrs-docs/common/image/demo.jpeg';

const fileList = [{ url: demoImg }, { url: demoImg }];

const fileList1 = [
  { url: demoImg, status: 'pending', message: '加载中' },
  { url: demoImg, status: 'failed', message: '上传失败' },
  { url: demoImg }
];

const UploaderDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" padding background={false}>
        <Grid>
          <Uploader text="上传图片" showPreview={false} />
          <Uploader showPreview={false} />
          <Uploader icon={<IconPhoto />} text="上传图片" showPreview={false} />
          <Uploader icon={<IconPhoto />} showPreview={false} />
        </Grid>
      </DemoContainer>

      <DemoContainer title="尺寸规格" padding background={false}>
        <Uploader
          text="上传图片"
          volume="big"
          showPreview={false}
          sx={{ marginRight: 12.5 }}
        />
        <Uploader text="上传图片" showPreview={false} />
      </DemoContainer>

      <DemoContainer title="上传按钮" padding background={false}>
        <Uploader
          className="demo-margin-r-10"
          uploaderControl={
            <Button startIcon={<IconAdd />} face="filled">
              上传图片
            </Button>
          }
        />
        <Uploader
          uploaderControl={
            <Button startIcon={<IconAdd />} face="plain">
              上传图片
            </Button>
          }
        />
      </DemoContainer>

      <DemoContainer title="删除图片" padding background={false}>
        <Uploader
          value={fileList}
          onDelete={(file) => console.log('delete file', file)}
          onChange={(...arg) => {
            console.log(arg);
          }}
        />
      </DemoContainer>

      <DemoContainer title="上传状态" padding background={false}>
        <Uploader value={fileList1} deleteIconControl />
      </DemoContainer>

      <DemoContainer title="限制数量" padding background={false}>
        <Uploader maxCount={3} value={fileList} multiple />
      </DemoContainer>

      <DemoContainer title="禁用样式" padding background={false}>
        <FlexBox container>
          <Uploader text="上传图片" disabled />
          <Uploader disabled />
        </FlexBox>
      </DemoContainer>
    </>
  );
};

export default UploaderDemo;
