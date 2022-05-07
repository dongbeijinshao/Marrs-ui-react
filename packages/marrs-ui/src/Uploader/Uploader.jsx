import { IconAdd, IconPreviewDelete } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { noop, resolved } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import UploaderContext from './UploaderContext';
import UploaderPreview from './UploaderPreview';
import { ComponentName as NameOfUploaderPreviewSlot } from './UploaderPreviewSlot';
const ComponentName = getComponentName('Uploader');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses(
      'icon',
      'input',
      'text',
      'wrapper',
      'previewRoot',
      'uploader'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

export const commonIconStyles = (volume, theme) => ({
  ...(volume === 'medium' && {
    width: theme.sizing(60),
    height: theme.sizing(60)
  }),
  ...(volume === 'big' && {
    width: theme.sizing(108),
    height: theme.sizing(108)
  })
});

const UploaderPreviewRoot = styled(UploaderPreview, {
  name: ComponentName,
  slot: 'Preview'
})(() => ({
  position: 'relative',
  display: 'inline-block'
}));

const UploaderRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const UploaderWrapper = styled('div', {
  name: ComponentName,
  slot: 'Wrapper'
})(() => ({
  display: 'flex',
  flexWrap: 'wrap'
}));

const UploaderUploader = styled('div', {
  name: ComponentName,
  slot: 'Uploader'
})(({ theme, styleProps: { volume, disabled } }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.sizing(4),
  lineHeight: '100%',
  ...commonIconStyles(volume, theme),
  ...(disabled && {
    color: theme.palette.text.disabled,
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed'
  })
}));

const UploaderIcon = styled('div', {
  name: ComponentName,
  slot: 'Icon'
})(({ theme, styleProps }) => ({
  color: theme.palette.grey[500],
  ...(styleProps.volume === 'medium' && {
    fontSize: theme.sizing(16)
  }),
  ...(styleProps.volume === 'big' && {
    fontSize: theme.sizing(20)
  }),
  textAlign: 'center'
}));

const UploaderIconText = styled('div', {
  name: ComponentName,
  slot: 'IconText'
})(({ theme, styleProps }) => ({
  color: theme.palette.grey[500],
  ...(styleProps.volume === 'medium' && {
    fontSize: theme.sizing(10)
  }),
  ...(styleProps.volume === 'big' && {
    fontSize: theme.sizing(12)
  })
}));

const UploaderInput = styled('input', {
  name: ComponentName,
  slot: 'Input'
})(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  cursor: 'pointer'
}));

const Uploader = forwardRef((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName
  });

  const inputRef = useRef();

  const {
    className,
    classes: classesProps,
    // 上传区域icon组件,图片组件等
    icon = <IconAdd />,
    // 上传区域文字提示
    text,
    // uploader尺寸规格, 默认medium,可选值tiny、small、medium、large
    volume,
    // 是否禁用文件上传
    disabled,
    // 文件上传数量限制, 0代表无限制
    maxCount = 0,
    // 上传触发的事件,回调参数{ event,file, fileList}
    onChange = noop,
    onDelete = resolved,
    // 自定义上传控件
    uploaderControl,
    // 是否展示预览图
    showPreview = true,
    // 已上传的文件列表,
    // url:图片路径,dataUrl: base64,status:状态(pending(上传中), failed(失败), success（成功)message:提示信息
    value,
    // 预览删除icon
    deleteIconControl = <IconPreviewDelete />,
    // 是否开启图片多选
    multiple,
    children,
    ...other
  } = props;

  const styleProps = {
    volume,
    disabled,
    className,
    classes: classesProps
  };

  const [fileList, setFileList] = useState(value || []);
  const [previewChild, setPreviewChild] = useState([]);
  const [previewSlotChild, setPreviewSlotChild] = useState([]);
  useEffect(() => {
    if (value) {
      setFileList([...value]);
    }
  }, [value]);

  useEffect(() => {
    const previewChild = [];
    const previewSlotChild = [];

    Children.forEach(children, (child) => {
      if (child?.type.name === NameOfUploaderPreviewSlot) {
        previewSlotChild.push(child);
      } else if (child?.type.name === UploaderPreview.name) {
        previewChild.push(child);
      }
    });
    setPreviewChild(previewChild);
    setPreviewSlotChild(previewSlotChild);
  }, [children]);
  const handleDelete = useCallback(
    ({ index }) => {
      onDelete({ file: fileList[index] });
      setFileList(fileList.filter((item, i) => i !== index));
    },
    [fileList, onDelete]
  );

  const context = {
    volume,
    emitDelete: handleDelete
  };

  const readFileContent = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleReadFile = useCallback(
    (files, event) => {
      if (!Array.isArray(files)) return;
      const length = fileList.length;
      const restCount = maxCount ? +maxCount - length : length || files.length;
      if (files.length > restCount) {
        files = files.slice(0, restCount);
      }
      Promise.all(files.map((file) => readFileContent(file))).then(
        (response) => {
          const newFileList = files.map((file, index) => {
            return {
              dataUrl: response[index],
              file
            };
          });
          // 完成回调
          onChange({
            event,
            file: newFileList,
            fileList: fileList.concat(newFileList)
          });
          setFileList([...fileList, ...newFileList]);
        }
      );
    },
    [fileList, maxCount, onChange]
  );
  const handleChange = useCallback(
    (event) => {
      const { files } = event.target;

      if (disabled || !files || !files.length) {
        return;
      }
      handleReadFile(Array.from(files), event);
    },
    [disabled, handleReadFile]
  );

  const inputProps = {
    ref: inputRef,
    type: 'file',
    disabled: disabled && 'disabled',
    multiple,
    onChange: handleChange,
    ...other
  };

  const classes = useUtilityClasses(styleProps);

  const renderIcon = isValidElement(icon) && (
    <UploaderIcon ref={ref} className={classes.icon} styleProps={styleProps}>
      {icon}
      <UploaderIconText className={classes.text} styleProps={styleProps}>
        {text}
      </UploaderIconText>
    </UploaderIcon>
  );

  const renderInput = (
    <UploaderInput
      styleProps={styleProps}
      {...inputProps}
      className={classes.input}
    />
  );

  const customControl = (
    <Fragment>
      {uploaderControl}
      {renderInput}
    </Fragment>
  );

  const defaultControl = (
    <UploaderUploader styleProps={styleProps} className={classes.uploader}>
      {renderIcon}
      {renderInput}
    </UploaderUploader>
  );

  const renderPreviewItem = (item, index) => {
    const previewProps = {
      key: `child-${index}`,
      deleteIconControl,
      index,
      item,
      ...other
    };

    return (
      <UploaderPreviewRoot {...previewProps} className={classes.previewRoot}>
        {previewSlotChild.length > 0 ? previewSlotChild : null}
      </UploaderPreviewRoot>
    );
  };

  const renderPreviewList = () => {
    if (showPreview && Array.isArray(fileList) && fileList.length > 0) {
      return (
        <UploaderContext.Provider value={context}>
          {fileList.map(renderPreviewItem)}
        </UploaderContext.Provider>
      );
    }
  };
  const renderCustomPreviewList = () => {
    const previewProps = {
      deleteIconControl,
      ...other
    };
    return (
      <UploaderContext.Provider value={context}>
        {Children.map(previewChild, (child, index) =>
          cloneElement(child, {
            index: index,
            ...previewProps
          })
        )}
      </UploaderContext.Provider>
    );
  };

  // 是否超过最大限制，超过隐藏
  const isLimitCount = useCallback(() => {
    if (!maxCount) {
      return false;
    }

    return fileList.length >= +maxCount;
  }, [fileList, maxCount]);

  const renderContent = useMemo(() => {
    return (
      <UploaderWrapper {...other} className={classes.wrapper}>
        {previewChild.length > 0
          ? renderCustomPreviewList()
          : renderPreviewList()}
        {!isLimitCount() &&
          (isValidElement(uploaderControl) ? customControl : defaultControl)}
      </UploaderWrapper>
    );
  }, [previewChild, fileList]);

  return (
    <UploaderRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
    >
      {renderContent}
    </UploaderRoot>
  );
});
Uploader.displayName = ComponentName;
Uploader.name = ComponentName;
export default Uploader;
