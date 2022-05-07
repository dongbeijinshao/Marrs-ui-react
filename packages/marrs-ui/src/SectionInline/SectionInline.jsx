import { IconRightArrow } from '@wemo-ui/marrs-icons';
import { useCallback } from 'react';
import FlexBox from '../FlexBox';
import Icon from '../Icon';
import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { noop } from '../utils/helperFunctions';

const name = getComponentName('SectionInline');

const SectionInlineRoot = styled(FlexBox, {
  name,
  slot: 'root'
})(({ theme }) => ({
  padding: theme.spacing(19.5, 14),
  background: theme.palette.common.white,
  ...theme.typography.textLevel.t6
}));

const SectionInlineLabel = styled('div', {
  name,
  slot: 'label'
})(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.grey['900'],
  fontSize: theme.sizing(theme.typography.fontSize)
}));

const SectionInlineDescriptor = styled(FlexBox, {
  name,
  slot: 'descriptor'
})(({ theme, styleProps = {} }) => ({
  position: 'relative',
  flex: '1 1 0',
  marginLeft: theme.spacing(14),
  ...(styleProps.showLine && {
    '::after': {
      position: 'absolute',
      bottom: theme.spacing(-14),
      width: '200%',
      height: 1,
      background: theme.palette.neutral.N3,
      transformOrigin: '0 0',
      transform: 'scale(0.5)',
      content: '" "'
    }
  })
}));

const SectionInlineContent = styled('div', {
  name,
  slot: 'content'
})(({ theme }) => ({
  flex: '1 1 0',
  color: theme.palette.getColor(theme.palette.grey['900']).alpha(0.8).color()
}));

const SectionInlineRightControl = styled('div', {
  name,
  slot: 'right'
})(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontSize: theme.sizing(theme.typography.fontSize),
  color: theme.palette.neutral.N6
}));

export default function SectionInline(props) {
  const {
    children,
    label,
    showArrow,
    showLine = false,
    onClick = noop,
    data
  } = useThemeProps({ props, name });

  const renderRightControl = useCallback(() => {
    if (!showArrow) return null;
    return (
      <SectionInlineRightControl>
        <Icon icon={<IconRightArrow />} />
      </SectionInlineRightControl>
    );
  }, [showArrow]);

  const handleClick = () => {
    return onClick(data);
  };

  return (
    <SectionInlineRoot onClick={handleClick} container>
      <SectionInlineLabel>{label}</SectionInlineLabel>
      <SectionInlineDescriptor container styleProps={{ showLine }}>
        <SectionInlineContent>{children}</SectionInlineContent>
        {renderRightControl()}
      </SectionInlineDescriptor>
    </SectionInlineRoot>
  );
}
