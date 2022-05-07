import { IconClose } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { forwardRef, Fragment } from 'react';
import Button from '../Button';
import Divider from '../Divider';
import Icon from '../Icon';
import Popup from '../Popup';
import { styled, useThemeProps } from '../styles';
import { generateClassesKey, helperFunctions } from '../utils';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';
import {
  ActionSheetBody,
  ActionSheetDescription,
  ActionSheetFooter,
  ActionSheetHeadEndBtn,
  ActionSheetHeader,
  ActionSheetHeadStartBtn,
  ActionSheetItem,
  ActionSheetItemLabel,
  ActionSheetItemTitle,
  ActionSheetRoot,
  ActionSheetTitle
} from './component';
import { ComponentName } from './constant';

const useUtilityClasses = (styleProps) => {
  const { classes, color } = styleProps;

  const slots = {
    root: ['root', ...generateClassesKey({ color })],
    ...normalizeClasses(
      'header',
      'footer',
      'body',
      'title',
      'item',
      'description',
      'itemLabel',
      'itemTitle',
      'backdrop',
      'popupRoot'
    )
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const { noop } = helperFunctions;

const renderIcon = (icon) => {
  if (!icon) return null;
  const Icon = styled(icon, {
    name: ComponentName,
    slot: 'itemIcon'
  })({});
  return <Icon />;
};

const ActionSheet = forwardRef(function ActionSheet(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    include: ['color']
  });

  const {
    children,
    color,
    classes: classesProps,
    visible = false,
    title,
    description,
    showCancelButton = true,
    cancelButtonText = '取消',
    items = [],
    onClose = noop,
    onClickItem = noop,
    className,
    headStartBtnText,
    headEndBtnText,
    closeable = false,
    ...other
  } = props;

  const styleProps = {
    color,
    classes: classesProps
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <Popup
      visible={visible}
      contentSpace="auto"
      position="bottom"
      onClose={onClose}
      classes={classes}
      ref={ref}
      {...other}
    >
      <ActionSheetRoot className={clsx(classes.root, className)}>
        {(title || description) && (
          <Fragment>
            <ActionSheetHeader className={classes.header}>
              {!closeable && headStartBtnText && (
                <ActionSheetHeadStartBtn onClick={() => onClose('left')}>
                  <Button
                    sx={{
                      padding: 0,
                      minWidth: 0,
                      fontSize: (theme) => theme.sizing(15),
                      lineHeight: (theme) => theme.sizing(18),
                      fontWeight: 400,
                      color: (theme) => theme.palette.action.rightArrow
                    }}
                    volume="big"
                    face="text"
                  >
                    {headStartBtnText}
                  </Button>
                </ActionSheetHeadStartBtn>
              )}

              {title && (
                <ActionSheetTitle className={classes.title}>
                  {title}
                </ActionSheetTitle>
              )}
              {description && (
                <ActionSheetDescription className={classes.description}>
                  {description}
                </ActionSheetDescription>
              )}
              {(closeable || headEndBtnText) && (
                <ActionSheetHeadEndBtn onClick={() => onClose('right')}>
                  {closeable ? (
                    <Icon icon={<IconClose />} />
                  ) : (
                    <Button
                      sx={{
                        padding: 0,
                        minWidth: 0,
                        fontSize: (theme) => theme.sizing(15),
                        lineHeight: (theme) => theme.sizing(18),
                        fontWeight: 400
                      }}
                      volume="big"
                      color="primary"
                      face="text"
                    >
                      {headEndBtnText}
                    </Button>
                  )}
                </ActionSheetHeadEndBtn>
              )}
            </ActionSheetHeader>
          </Fragment>
        )}
        <ActionSheetBody className={classes.body}>
          {children ||
            items.map((item = {}, i) => (
              <Fragment key={`${item.title}__${i}`}>
                <ActionSheetItem
                  className={classes.item}
                  styleProps={{ disabled: item.disabled }}
                  onClick={() => !item.disabled && onClickItem(item, i)}
                >
                  {renderIcon(item.icon)}
                  <ActionSheetItemTitle
                    className={classes.itemTitle}
                    styleProps={{
                      disabled: item.disabled,
                      color: color
                    }}
                  >
                    {item.title}
                  </ActionSheetItemTitle>
                  <ActionSheetItemLabel
                    className={classes.itemLabel}
                    styleProps={{ disabled: item.disabled }}
                  >
                    {item.label}
                  </ActionSheetItemLabel>
                </ActionSheetItem>
                <Divider
                  sx={{ margin: '0', width: '100%' }}
                  gap={1}
                  lineColor="#F2F2F2"
                />
              </Fragment>
            ))}
        </ActionSheetBody>
        {showCancelButton && (
          <ActionSheetFooter className={classes.footer}>
            <Button
              face="text"
              fullWidth
              volume="large"
              onClick={onClose}
              sx={{
                backgroundColor: (theme) => theme.palette.common.white,
                color: (theme) => theme.palette.text.secondary,
                fontSize: (theme) => theme.sizing(14),
                padding: (theme) => theme.spacing(18.5, 18),
                fontWeight: (theme) => theme.typography.fontWeightRegular
              }}
            >
              {cancelButtonText}
            </Button>
          </ActionSheetFooter>
        )}
      </ActionSheetRoot>
    </Popup>
  );
});
ActionSheet.displayName = ComponentName;
ActionSheet.name = ComponentName;
export default ActionSheet;
