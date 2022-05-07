import { Collapse, CollapseGroup } from '@wemo-ui/marrs';
import Demo from './Demo';

const CollapseView = () => {
  return (
    <>
      <Demo title="基础样式" style={{ background: '#ffffff' }} padding>
        <CollapseGroup volume="large" value={1}>
          <Collapse title="标题文字A" contentControl="标题A下的内容" />
          <Collapse title="标题文字B" contentControl="标题B下的内容" />
          <Collapse title="标题文字C" contentControl="标题C下的内容" />
          <Collapse title="标题文字D" contentControl="标题D下的内容" />
        </CollapseGroup>
      </Demo>
      <Demo title="口风琴样式" style={{ background: '#ffffff' }} padding>
        <CollapseGroup volume="large" value={[0, 1]} accordion>
          <Collapse title="标题文字A" name={1} contentControl="标题A下的内容" />
          <Collapse title="标题文字B" name={2} contentControl="标题B下的内容" />
          <Collapse title="标题文字C" name={3} contentControl="标题C下的内容" />
          <Collapse title="标题文字D" name={4} contentControl="标题D下的内容" />
        </CollapseGroup>
      </Demo>
    </>
  );
};

export default CollapseView;
