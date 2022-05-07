import { IconClearDelete, IconLoading, IconRecord } from '@wemo-ui/marrs-icons';
import {
  Children,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import Icon from '../Icon';
import Image from '../Image';
import { Can, Loading } from '../index';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { noop, resolved } from '../utils/helperFunctions';
import { commonIconStyles } from './Uploader';
import UploaderContext from './UploaderContext';
import { ComponentName as NameOfUploaderPreviewSlot } from './UploaderPreviewSlot';

const ComponentName = getComponentName('UploaderPreview');

const PreviewRoot = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(() => ({
  position: 'relative',
  margin: '0 8px 8px 0',
  cursor: 'pointer'
}));

const PreviewPreview = styled('div', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps: { volume } }) => ({
  display: 'block',
  overflow: 'hidden',
  borderRadius: 4,
  ...commonIconStyles(volume, theme)
}));

const PreviewImage = styled(Image, {
  name: ComponentName,
  slot: 'Image'
})(() => ({
  display: 'block',
  width: '100%',
  height: '100%'
}));

const PreviewMask = styled('div', {
  name: ComponentName,
  slot: 'Mask'
})(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(50, 50, 51, 0.88)',
  zIndex: 2,
  borderRadius: theme.sizing(4),
  fontSize: theme.sizing(18),
  marginBottom: theme.sizing(5)
}));

const PreviewIconWrapper = styled('div', {
  name: ComponentName,
  slot: 'IconWrapper'
})(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  borderRadius: theme.spacing(0, 0, 0, 12),
  zIndex: 3
}));

const PreviewIcon = styled('div', {
  name: ComponentName,
  slot: 'Icon'
})(({ theme }) => ({
  position: 'absolute',
  top: theme.sizing(5),
  right: theme.sizing(6),
  fontSize: theme.sizing(14),
  zIndex: 999,
  lineHeight: theme.sizing(10)
}));

const PreviewMessage = styled(Can, {
  name: ComponentName,
  slot: 'message'
})(({ theme }) => ({
  padding: theme.spacing(0, 4),
  fontSize: theme.sizing(12),
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '100%'
}));

const PreviewLoading = styled(Loading, {
  name: ComponentName,
  slot: 'Loading'
})(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  color: 'inherit',
  marginBottom: theme.sizing(5),
  fontSize: theme.sizing(18)
}));

const PreviewFile = styled('div', {
  name: ComponentName,
  slot: 'PreviewFile'
})(({ theme, styleProps: { volume } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[100],
  ...commonIconStyles(volume, theme)
}));

const PreviewText = styled('div', {
  name: ComponentName,
  slot: 'Text'
})(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(16, 0),
  height: 'auto',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textAlign: 'center'
}));

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

const isImageUrl = (url) => {
  if (url.includes(';')) {
    // 如果是base64
    return url.split(';')[0].includes('image');
  } else {
    return IMAGE_REGEXP.test(url);
  }
};

const Preview = forwardRef((inProps, ref) => {
  const { emitDelete = resolved, volume } = useContext(UploaderContext);
  const props = useThemeProps({ props: inProps, name: ComponentName });

  const {
    deleteIconControl,
    item,
    index,
    className,
    children,
    onDelete = noop,
    ...other
  } = props;

  const styleProps = {
    volume,
    className
  };

  const [realChildren, setRealChildren] = useState(undefined);

  useEffect(() => {
    const childs = Children.map(children, (child) => {
      if (child?.type.name === NameOfUploaderPreviewSlot) {
        return child;
      }
    });
    setRealChildren(childs);
  }, [children]);
  const handleDelete = useCallback(() => {
    onDelete(index);
    emitDelete({ index });
  }, [emitDelete, index, onDelete]);

  const renderPreview = () => {
    let url = item.dataUrl || item.url;
    let name = item.file?.name;

    if (isImageUrl(url)) {
      return (
        <PreviewPreview styleProps={styleProps}>
          <PreviewImage src={url} {...other} />
          {realChildren}
        </PreviewPreview>
      );
    }

    return (
      <PreviewFile styleProps={styleProps}>
        <Icon sx={{ marginBottom: '5px' }} icon={<IconRecord />} />
        <PreviewText>{name}</PreviewText>
      </PreviewFile>
    );
  };

  const renderMask = () => {
    const { status, message } = item;
    if (status === 'pending' || status === 'failed') {
      const MaskIcon =
        status === 'failed' ? (
          <Icon
            sx={{ marginBottom: (theme) => theme.sizing(5) }}
            icon={<IconClearDelete />}
          />
        ) : (
          <PreviewLoading spin="true" icon={<IconLoading />} />
        );

      return (
        <PreviewMask>
          {MaskIcon}
          {message && <PreviewMessage>{message}</PreviewMessage>}
        </PreviewMask>
      );
    }
  };

  const renderIcon = (
    <PreviewIconWrapper onClick={handleDelete}>
      <PreviewIcon>
        {isValidElement(deleteIconControl) && deleteIconControl}
      </PreviewIcon>
    </PreviewIconWrapper>
  );

  return (
    <PreviewRoot styleProps={styleProps} ref={ref}>
      {renderPreview()}
      {renderMask()}
      {renderIcon}
    </PreviewRoot>
  );
});
Preview.name = ComponentName;
Preview.displayName = ComponentName;
export default Preview;
