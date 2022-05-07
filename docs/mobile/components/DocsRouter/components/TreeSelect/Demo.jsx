import {
  TreeSelect,
  TreeSelectContent,
  Can,
  BasicSelectorOption
} from '@wemo-ui/marrs';

import DemoContainer from '../DemoContainer/Demo';

const TreeSelectDemo = () => {
  return (
    <>
      <DemoContainer title="基础用法">
        <TreeSelect value="1">
          <TreeSelectContent title="水果" name="1" badge={1}>
            <BasicSelectorOption label="苹果" value={1} />
            <BasicSelectorOption label="香蕉" value={2} />
            <BasicSelectorOption label="橘子" value={3} disabled />
            <BasicSelectorOption label="龙眼" value={4} />
          </TreeSelectContent>
          <TreeSelectContent title="饮料" name="2">
            <BasicSelectorOption label="阿萨姆" value={1} />
            <BasicSelectorOption label="冰糖雪梨" value={2} />
            <BasicSelectorOption label="百事可乐" value={3} />
            <BasicSelectorOption label="雪碧" value={4} />
          </TreeSelectContent>
          <TreeSelectContent title="城市" name="3">
            <BasicSelectorOption label="北京" value={1} />
            <BasicSelectorOption label="上海" value={2} />
            <BasicSelectorOption label="广州" value={3} />
            <BasicSelectorOption label="深圳" value={4} />
          </TreeSelectContent>
        </TreeSelect>
      </DemoContainer>

      <DemoContainer title="自定义内容">
        <TreeSelect value="1">
          <TreeSelectContent title="水果" name="1">
            <Can sx={{ textAlign: 'center' }}>自定义内容</Can>
          </TreeSelectContent>
          <TreeSelectContent title="饮料" name="2">
            <Can sx={{ textAlign: 'center' }}>自定义内容</Can>
          </TreeSelectContent>
          <TreeSelectContent title="主食" name="3">
            <Can sx={{ textAlign: 'center' }}>自定义内容</Can>
          </TreeSelectContent>
        </TreeSelect>
      </DemoContainer>
    </>
  );
};

export default TreeSelectDemo;
