import { BackTop, Cell, CellGroup } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const BackTopDemo = () => {
  return (
    <>
      <DemoContainer title="基本用法">
        <CellGroup>
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
          <Cell title="单元格" showArrow />
        </CellGroup>
        <BackTop smooth />
      </DemoContainer>
    </>
  );
};

export default BackTopDemo;
