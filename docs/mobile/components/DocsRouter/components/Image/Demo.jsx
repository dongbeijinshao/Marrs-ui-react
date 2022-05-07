import { Image, FlexBox, Icon, Can } from '@wemo-ui/marrs';
import { IconBill } from '@wemo-ui/marrs-icons';
import demoImg from '@wemo-ui/marrs-docs/common/image/demo.jpeg';
import DemoContainer from '../DemoContainer/Demo';

const ImageDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        <Image src={demoImg} size={{ width: 90, height: 90 }} />
      </DemoContainer>

      <DemoContainer title="填充模式" background={false} padding>
        <FlexBox container>
          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: '100px', height: '100px' }}
              fit="contain"
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              contain
            </Can>
          </FlexBox>
          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: 100, height: 100 }}
              fit="cover"
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              cover
            </Can>
          </FlexBox>
          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: 100, height: 100 }}
              fit="fill"
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              fill
            </Can>
          </FlexBox>
          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: 100, height: 100 }}
              fit="none"
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              none
            </Can>
          </FlexBox>
          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: 100, height: 100 }}
              fit="scale-down"
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              scale-down
            </Can>
          </FlexBox>
        </FlexBox>
      </DemoContainer>

      <DemoContainer title="图片圆角" background={false} padding>
        <FlexBox container>
          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: 100, height: 100 }}
              sx={{ borderRadius: 4 }}
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              圆角矩形
            </Can>
          </FlexBox>

          <FlexBox className="demo-margin-r-10">
            <Image
              src={demoImg}
              size={{ width: 100, height: 100 }}
              sx={{ borderRadius: '100%' }}
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              圆形
            </Can>
          </FlexBox>
        </FlexBox>
      </DemoContainer>

      <DemoContainer title="图片加载" background={false} padding>
        <FlexBox container>
          <FlexBox className="demo-margin-r-10">
            <Image
              src="./src"
              fallback={
                <Icon
                  sx={{ fontSize: 36, color: '#E0E0E0' }}
                  icon={<IconBill />}
                />
              }
              size={{ width: 100, height: 100 }}
            />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0'
              }}
            >
              加载icon
            </Can>
          </FlexBox>
          <FlexBox className="demo-margin-r-10">
            <Image src="./src" size={{ width: 100, height: 100 }} />
            <Can
              sx={{
                textAlign: 'center',
                color: '#757575',
                padding: '23px 0',
                fontSize: 13
              }}
            >
              加载动画
            </Can>
          </FlexBox>
        </FlexBox>
      </DemoContainer>
    </>
  );
};

export default ImageDemo;
