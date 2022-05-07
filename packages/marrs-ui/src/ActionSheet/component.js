import ButtonBase from '../ButtonBase';
import { styled } from '../styles';
import generateShouldForwardProp from '../utils/generateShouldForwardProp';
import { ComponentName } from './constant';

export const ActionSheetRoot = styled('div', {
  name: ComponentName,
  slot: 'root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme }) => ({
  fontSize: theme.sizing(18)
}));

export const ActionSheetHeader = styled('div', {
  name: ComponentName,
  slot: 'header'
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(18, 0),
  textAlign: 'center',
  fontSize: theme.sizing(theme.typography.fontSize),
  lineHeight: 1.5
  // borderBottom: `${theme.sizing(1)} solid ${theme.palette.divider}`
}));

export const ActionSheetTitle = styled('div', {
  name: ComponentName,
  slot: 'title'
})(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.grey[900],
  fontSize: theme.sizing(theme.typography.fontSize + 1),
  lineHeight: theme.sizing(18)
}));

export const ActionSheetDescription = styled('div', {
  name: ComponentName,
  slot: 'description'
})(({ theme }) => ({
  fontSize: theme.sizing(theme.typography.fontSize - 2),
  color: theme.palette.grey[500]
}));

export const ActionSheetFooter = styled('div', {
  name: ComponentName,
  slot: 'footer'
})(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0),
  borderTop: `${theme.sizing(10)} solid ${theme.palette.grey[200]}`
}));

export const ActionSheetBody = styled('div', {
  name: ComponentName,
  slot: 'body'
})({});

export const ActionSheetItem = styled(ButtonBase, {
  name: ComponentName,
  slot: 'item'
})(({ theme, styleProps }) => ({
  width: '100%',
  fontSize: theme.sizing(theme.typography.fontSize),
  padding: theme.spacing(17),
  ...(styleProps.disabled && { color: theme.palette.text.secondary })
}));

export const ActionSheetItemTitle = styled('span', {
  name: ComponentName,
  slot: 'itemTitle'
})(({ theme, styleProps }) => ({
  display: 'inline-block',
  padding: theme.spacing(0, 4),
  // color: styleProps.color || theme.palette.grey[900],
  color: theme.palette.getColor(styleProps.color).color(),
  ...(styleProps.disabled && { color: 'inherit' })
}));

export const ActionSheetItemLabel = styled('span', {
  name: ComponentName,
  slot: 'itemLabel'
})(({ theme, styleProps }) => ({
  fontSize: theme.sizing(theme.typography.fontSize - 2),
  color: theme.palette.grey[600],
  ...(styleProps.disabled && { color: 'inherit' })
}));

export const ActionSheetHeadStartBtn = styled('span', {
  name: ComponentName,
  slot: 'StartBtn'
})(({ theme }) => ({
  display: 'inherit',
  position: 'absolute',
  left: theme.sizing(18),
  top: theme.sizing(18),
  fontSize: theme.sizing(15)
}));

export const ActionSheetHeadEndBtn = styled('span', {
  name: ComponentName,
  slot: 'EndBtn'
})(({ theme }) => ({
  display: 'inherit',
  position: 'absolute',
  right: theme.sizing(18),
  top: theme.sizing(18),
  fontSize: theme.sizing(15),
  minWidth: 0
}));
