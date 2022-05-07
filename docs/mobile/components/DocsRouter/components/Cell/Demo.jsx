import {
  Can,
  Cell,
  CellGroup,
  Image,
  Switch,
  Badge,
  Tag,
  Icon
} from '@wemo-ui/marrs';
import { IconDelete, IconHome } from '@wemo-ui/marrs-icons';
import demoImg from '@wemo-ui/marrs-docs/common/image/demo.jpeg';
import DemoContainer from '../DemoContainer/Demo';

const ButtonDemo = () => {
  return (
    <>
      <DemoContainer title="基础用法">
        <CellGroup>
          <Cell title="标题文字" showArrow />
          <Cell title="标题文字" content="居右详细内容文字" />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="描述信息">
        <CellGroup>
          <Cell
            title="标题文字"
            label="附加信息"
            content="居右详细内容文字"
            center={false}
          />
          <Cell title="标题文字" label="附加信息" content="居右详细内容文字" />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="自定义单元格">
        <CellGroup>
          <Cell
            title="搭配图标"
            content="删除"
            sx={{ display: 'flex', alignItems: 'center' }}
            rightIcon={
              <Icon
                icon={<IconDelete />}
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: 14
                }}
              />
            }
          />
          <Cell
            title="搭配按钮"
            rightControl={
              <Can sx={{ color: (theme) => theme.palette.primary.main }}>
                重新定位
              </Can>
            }
          />
          <Cell
            sx={{ paddingRight: '30px' }}
            title="搭配徽标"
            rightControl={
              <Badge content={6} sx={{ fontSize: 9, borderRadius: '100%' }} />
            }
            // showArrow
          />
          <Cell
            title="搭配开关"
            sx={{ paddingTop: '15px' }}
            rightControl={<Switch checked />}
          />
          <Cell
            sx={{ padding: '12px 14px' }}
            title="搭配图片"
            rightControl={
              <Can
                size={{ width: 32, height: 32 }}
                sx={{ borderRadius: 1, marginRight: 1 }}
              >
                <Image
                  size={{ width: '100%', height: '100%' }}
                  src={demoImg}
                ></Image>
              </Can>
            }
            showArrow
          />
          <Cell
            title="我的头像"
            rightControl={
              <Can size={{ width: 40, height: 40 }} circle>
                <Image
                  size={{ width: '100%', height: '100%' }}
                  src={demoImg}
                ></Image>
              </Can>
            }
          />
          <Cell
            title="标签标题"
            leftControl={<Tag sx={{ fontSize: 10, marginLeft: -1 }}>标签</Tag>}
            showArrow
          />
          <Cell
            title="标签标题"
            leftControl={
              <Icon icon={<IconHome />} sx={{ marginRight: 1, fontSize: 18 }} />
            }
            showArrow
          />
        </CellGroup>
      </DemoContainer>
    </>
  );
};

export default ButtonDemo;
