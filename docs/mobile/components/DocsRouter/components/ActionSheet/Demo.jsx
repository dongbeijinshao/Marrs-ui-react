import { ActionSheet, Cell, CellGroup, Can } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { useState } from 'react';
import DemoContainer from '../DemoContainer/Demo';

const item1 = [{ title: '选项一' }, { title: '选项二' }, { title: '选项三' }];

const items = [
  {
    title: '标题',
    label: '副标题'
  },
  {
    title: '标题',
    label: '副标题'
  },
  {
    title: '标题',
    label: '副标题',
    icon: IconAdd
  },
  {
    title: '标题',
    label: '副标题',
    disabled: true
  }
];

const ActionSheetDemo = () => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState();
  const [currentItems, setCurrentItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState();
  const [currentContent, setCurrentContent] = useState();
  const [currentCancelButton, setCurrentCancelButton] = useState(false);
  const [description, setDescription] = useState();

  const handleDes = () => {
    setColor();
    setCurrentItems(items);
    setVisible(true);
    setCurrentContent();
    setCurrentCancelButton(true);
  };

  const handleContent = () => {
    setColor();
    setCurrentTitle('标题');
    setCurrentItems(items);
    setVisible(true);
    setCurrentCancelButton(false);
    setCurrentContent(<Can sx={{ padding: 10 }}>内容</Can>);
  };

  const handleBase = () => {
    setColor();
    setCurrentItems(item1);
    setVisible(true);
    setCurrentContent();
    setCurrentCancelButton(false);
  };

  const handleCancel = () => {
    setColor();
    setCurrentItems(item1);
    setVisible(true);
    setCurrentContent();
    setCurrentCancelButton(true);
  };

  const handleClose = ($type) => {
    setVisible(false);
    setColor();
    setDescription('');
    console.log($type);
  };

  return (
    <>
      <DemoContainer title="基本用法">
        <CellGroup>
          <Cell title="基本用法" showArrow onClick={handleBase} />
          <Cell title="展示取消按钮" showArrow onClick={handleCancel} />
          <Cell title="展示描述信息" showArrow onClick={handleDes} />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="自定义面板">
        <CellGroup>
          <Cell title="自定义面板" showArrow onClick={handleContent} />
        </CellGroup>
      </DemoContainer>
      {visible && (
        <ActionSheet
          visible={visible}
          color={color}
          description={description}
          title={currentTitle}
          items={currentItems}
          showCancelButton={currentCancelButton}
          onClickItem={handleClose}
          onClose={handleClose}
          headStartBtnText="取消"
          headEndBtnText="确定"
        >
          {currentContent}
        </ActionSheet>
      )}
    </>
  );
};

export default ActionSheetDemo;
