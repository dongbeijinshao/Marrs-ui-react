import { Collapse, CollapseGroup } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
const onCollapseChange = (data) => {
  console.log(data);
};
const CollapseDemo = () => {
  return (
    <>
      <DemoContainer title="基础用法">
        <CollapseGroup
          volume="large"
          onChange={onCollapseChange}
          value={[0, 1]}
        >
          <Collapse title="标题文字A" contentControl="标题A下的内容" />
          <Collapse title="标题文字B" contentControl="标题B下的内容" />
          <Collapse title="标题文字C" contentControl="标题C下的内容" />
          <Collapse title="标题文字D" contentControl="标题D下的内容" />
        </CollapseGroup>
      </DemoContainer>

      <DemoContainer title="手风琴样式">
        <CollapseGroup
          onChange={onCollapseChange}
          volume="large"
          value={1}
          accordion
        >
          <Collapse title="标题文字A" name={0} contentControl="标题A下的内容" />
          <Collapse title="标题文字B" name={1} contentControl="标题B下的内容" />
          <Collapse title="标题文字C" name={2} contentControl="标题C下的内容" />
          <Collapse title="标题文字D" name={3} contentControl="标题D下的内容" />
        </CollapseGroup>
      </DemoContainer>
    </>
  );
};

export default CollapseDemo;
