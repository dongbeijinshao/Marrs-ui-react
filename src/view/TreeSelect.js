import {
  BaseSelector,
  BasicSelectorOption,
  ImageSelectorOption,
  TreeSelect,
  TreeSelectContent
} from '@wemo-ui/marrs';

const handleNavChange = (index) => {
  console.log('左边内容change', index);
};

const handleChangeBaseSelector = (...args) => {
  console.log('handleChangeBaseSelector', args);
};
const TreeSelectView = () => {
  return (
    <>
      <TreeSelect value="imageselector" onTabChange={handleNavChange}>
        <TreeSelectContent
          name="shuiguo"
          title={
            <span
              style={{
                display: 'inline-block',
                width: '64px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              超出一行现实省略号
            </span>
          }
          badge={1}
        >
          水果选择
        </TreeSelectContent>
        <TreeSelectContent name="yinliao" title="饮料">
          {/*饮料选择*/}
        </TreeSelectContent>
        <TreeSelectContent name="zhushi" title="主食">
          主食选择
        </TreeSelectContent>
        <TreeSelectContent name="selector" title="非受控选择器">
          <BasicSelectorOption label="黄金搭档" value={1} checked />
          <BasicSelectorOption label="黄金搭档" value={2} />
          <BasicSelectorOption label="黄金搭档" value={3} />
          <BasicSelectorOption label="黄金搭档" value={4} />
        </TreeSelectContent>
        <TreeSelectContent name="selectorwithbase" title="基础选择器">
          <BaseSelector value={[3]} onChange={handleChangeBaseSelector}>
            <BasicSelectorOption label="背背佳" value={1} />
            <BasicSelectorOption label="背背佳" value={2} />
            <BasicSelectorOption label="背背佳" value={3} />
            <BasicSelectorOption label="背背佳" value={4} />
          </BaseSelector>
        </TreeSelectContent>
        <TreeSelectContent name="selectormultiple" title="多选">
          <BaseSelector
            value={[1, 3]}
            // max={2}
            // min={1}
            multiple={false}
            onChange={handleChangeBaseSelector}
          >
            <BasicSelectorOption
              color="info"
              label="背背佳"
              disabled
              value={1}
            />
            <BasicSelectorOption label="背背佳" value={2} />
            <BasicSelectorOption label="背背佳" value={3} />
            <BasicSelectorOption label="背背佳" value={4} />
          </BaseSelector>
        </TreeSelectContent>
        <TreeSelectContent name="imageselector" title="自定义选择器">
          <BaseSelector
            value={[3]}
            multiple
            onChange={handleChangeBaseSelector}
          >
            <ImageSelectorOption
              color="info"
              label="图片"
              src="/public/img1.png"
              value={1}
            />
            <ImageSelectorOption
              label="图片"
              src="/public/img1.png"
              value={2}
            />
            <ImageSelectorOption
              label="图片"
              src="/public/img1.png"
              value={3}
            />
            <ImageSelectorOption
              label="图片"
              src="/public/img1.png"
              value={4}
            />
          </BaseSelector>
        </TreeSelectContent>
      </TreeSelect>
    </>
  );
};

export default TreeSelectView;
