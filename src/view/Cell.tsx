import {
  Button,
  Can,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Image,
  Radio,
  RadioGroup,
  Switch
} from '@wemo-ui/marrs';
import { IconDelete } from '@wemo-ui/marrs-icons';
import { Link } from 'react-router-dom';
import Demo from './Demo';
import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles((theme) => ({
  cellRoot: {
    padding: '0'
  }
}));

// 模拟change事件
const handleChange = (...e) => {
  console.log('模拟change事件', ...e);
};
// 模拟change事件
const handleChange2 = (...e) => {
  console.log('模拟change事件222', ...e);
};

const CellView = () => {
  /* eslint-disable */
  const classes = useStyles();
  /* eslint-disable */

  return (
    <>
      <Demo title="基础样式" padding>
        <Cell
          className={classes.cellRoot}
          title="Button"
          content={<Link to="/button">button</Link>}
          showArrow
        />
      </Demo>
      <Demo title="基础样式" padding>
        <CellGroup>
          <Cell title="单元格" content="内容" showArrow />
          <Cell title="单元格" content="内容" />
        </CellGroup>
      </Demo>

      <Demo title="限宽与换行" padding>
        <CellGroup>
          <Cell
            title="标题过长点点点"
            label="标题过长点点点标题过长点点点标题过长点点点标题过长点点点"
            titleWidth={70}
            labelWidth={100}
            content="内容"
            ellipsis
          />
          <Cell title="标题超长时支持换行" titleWidth={70} />
        </CellGroup>
      </Demo>

      <Demo title="包含描述信息" padding>
        <CellGroup>
          <Cell
            title="标题过长点点点"
            label="描述信息"
            titleWidth={70}
            ellipsis
            showArrow
          />
          <Cell
            title="标题过长点点点"
            content="详细信息"
            titleWidth={70}
            ellipsis
            showArrow
            center
          />
        </CellGroup>
      </Demo>

      <Demo title="自定义单元格" padding>
        <CellGroup>
          <Cell title="搭配图标" content="删除" rightIcon={<IconDelete />} />
          <Cell
            title="搭配按钮"
            rightControl={
              <Button face="filled" color="primary">
                按钮
              </Button>
            }
          />

          <Cell
            title="性别"
            showArrow
            rightControl={
              <RadioGroup value={2} row onChange={handleChange}>
                <Radio value={1} label="男" />

                <Radio value={2} label="女" />
              </RadioGroup>
            }
          />
          <Cell
            title="搭配checkbox"
            rightControl={
              <CheckboxGroup
                value={[0, 2]}
                color="success"
                row
                onChange={handleChange2}
              >
                <Checkbox value={0} onChange={handleChange} label="复选框" />
                <Checkbox value={1} onChange={handleChange} label="复选框" />
                <Checkbox value={2} onChange={handleChange} label="复选框" />
              </CheckboxGroup>
            }
          />
          <Cell
            title="搭配switch"
            rightControl={<Switch onChange={handleChange} checked />}
          />
          <Cell
            title="搭配图片"
            rightControl={
              <Can size={{ width: 40, height: 40 }} circle>
                <Image
                  volume={{ width: '100%', height: '100%' }}
                  src="/public/img1.png"
                ></Image>
              </Can>
            }
            showArrow
            center
          />
          <Cell
            title="搭配头像"
            rightControl={
              <Can size={{ width: 40, height: 40 }} circle>
                <Image
                  volume={{ width: 180, height: 120 }}
                  src="/public/img1.png"
                ></Image>
              </Can>
            }
            center
          />
          <Cell
            title="搭配switch"
            leftControl={<Switch onChange={handleChange} checked />}
          />
        </CellGroup>
      </Demo>
    </>
  );
};

export default CellView;
