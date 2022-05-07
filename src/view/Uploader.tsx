import {
  Button,
  FlexBox,
  Uploader,
  UploaderPreview,
  UploaderPreviewSlot
} from '@wemo-ui/marrs';
import { IconAdd, IconPhoto } from '@wemo-ui/marrs-icons';
import { useCallback, useState } from 'react';
import Demo from './Demo';

// (e) => {
//   console.log('触发onChange', e.file);
//   setFileList1([...fileList1, ...e.file]);
// };

const fileList = [
  {
    url: '/public/img1.png'
  },
  { url: '/public/img.png' }
];

const UploaderView = () => {
  // 上传触发事件
  const list = [
    {
      url: '/public/img1.png',
      status: 'pending',
      message: '上传中...'
    },
    { url: '/public/img.png', status: 'failed', message: '上传失败文字过长' },
    { url: '/public/img.png' }
  ];
  const [fileList1, setFileList1] = useState(list);
  const [fileList2] = useState(list);

  const handleChange2 = useCallback((e) => {
    console.log(e);
  }, []);
  const handleChange = useCallback(
    (e) => {
      console.log(111111);
      setFileList1(e.fileList);
    },
    [setFileList1]
  );
  const handelDel = (index) => {
    console.log(index);
    setFileList1(fileList1.filter((item, i) => i !== index));
  };
  return (
    <>
      <Demo title="基础样式" style={{ background: '#ffffff' }} padding>
        <FlexBox container alignItems="center">
          <Uploader
            text="上传图片"
            onChange={handleChange}
            showPreview={false}
          />
          <Uploader showPreview={false} />
          <Uploader icon={<IconPhoto />} text="上传图片" showPreview={false} />
          <Uploader icon={<IconPhoto />} showPreview={false} />
        </FlexBox>
      </Demo>
      <Demo title="尺寸规格" style={{ background: '#ffffff' }} padding>
        <FlexBox container>
          <Uploader text="上传图片" showPreview={false} />
          <Uploader text="上传图片" volume="large" showPreview={false} />
        </FlexBox>
      </Demo>
      <Demo title="上传按钮" style={{ background: '#ffffff' }} padding>
        <FlexBox container style={{ marginRight: 12 }}>
          <Uploader
            style={{ marginRight: 12 }}
            showPreview={false}
            uploaderControl={
              <Button startIcon={<IconAdd />} face="filled">
                上传图片
              </Button>
            }
          />
          <Uploader
            showPreview={false}
            uploaderControl={
              <Button startIcon={<IconAdd />} face="plain">
                上传图片
              </Button>
            }
          />
        </FlexBox>
      </Demo>
      <Demo title="删除图片" style={{ background: '#ffffff' }} padding>
        <FlexBox container style={{ marginRight: 12 }}>
          <Uploader
            value={fileList1}
            multiple
            maxCount={5}
            onChange={handleChange}
          >
            <UploaderPreviewSlot
              sx={{ position: 'absolute', top: '0', zIndex: '2' }}
            >
              <div>1213231</div>
            </UploaderPreviewSlot>

            <UploaderPreviewSlot
              sx={{ position: 'absolute', top: '5px', zIndex: '2' }}
            >
              <div>1213231</div>
            </UploaderPreviewSlot>
            <UploaderPreviewSlot
              sx={{ position: 'absolute', top: '15px', zIndex: '2' }}
            >
              <div>1213231</div>
            </UploaderPreviewSlot>
            {fileList1.map((n, idx) => {
              return (
                <UploaderPreview
                  onDelete={handelDel}
                  key={`child-${idx}`}
                  item={n}
                >
                  {idx == 1 ? (
                    <UploaderPreviewSlot
                      sx={{ position: 'absolute', top: '5px', zIndex: '2' }}
                    >
                      <div>11111</div>
                    </UploaderPreviewSlot>
                  ) : null}
                </UploaderPreview>
              );
            })}
          </Uploader>
        </FlexBox>
      </Demo>
      <Demo title="上传状态" style={{ background: '#ffffff' }} padding>
        <FlexBox container style={{ marginRight: 12 }}>
          <Uploader
            value={fileList2}
            multiple
            maxCount={5}
            onChange={handleChange2}
          />
        </FlexBox>
      </Demo>
      <Demo title="禁用样式" style={{ background: '#ffffff' }} padding>
        <FlexBox container>
          <Uploader disabled />
          <Uploader text="上传图片" disabled />
        </FlexBox>
      </Demo>
    </>
  );
};

export default UploaderView;
