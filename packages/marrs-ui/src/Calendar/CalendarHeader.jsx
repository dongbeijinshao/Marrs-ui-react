import { makeStyles } from '@wemo-ui/marrs-core/styles';
import { forwardRef, useMemo } from 'react';
import styled from '../styles/styled';

const CalendarHeaderRoot = styled('div', {
  name: 'MarrsCalendarHeader',
  slot: 'Root'
})(() => ({
  flexShrink: 0,
  boxShadow: '0 2px 10px rgba(125, 126, 128, 0.16)',
  color: '#323233'
}));

//TODO, 样式问题
const useStyles = makeStyles({
  headerTitle: {
    fontSize: 16,
    height: 44,
    lineHeight: '44px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerSubTitle: {
    fontSize: 14,
    height: 44,
    lineHeight: '44px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  weekdays: {
    display: 'flex'
  },
  weekText: {
    flex: 1,
    fontSize: 12,
    lineHeight: '30px',
    textAlign: 'center'
  }
});

const CalendarHeader = forwardRef((props, ref) => {
  const classes = useStyles();

  const { title, subtitle, showTitle, showSubtitle, firstDayOfWeek } = props;
  const styleProps = {
    showTitle,
    showSubtitle
  };

  // 根据自定义周起始日确定周排列
  const weekdays = useMemo(() => {
    const weekList = ['日', '一', '二', '三', '四', '五', '六'];
    return [
      ...weekList.slice(firstDayOfWeek, 7),
      ...weekList.slice(0, firstDayOfWeek)
    ];
  }, [firstDayOfWeek]);

  return (
    <CalendarHeaderRoot ref={ref} styleProps={styleProps}>
      {showTitle && <div className={classes.headerTitle}>{title}</div>}
      {showSubtitle && <div className={classes.headerSubTitle}>{subtitle}</div>}
      <div className={classes.weekdays}>
        {weekdays.map((text) => (
          <span key={text} className={classes.weekText}>
            {text}
          </span>
        ))}
      </div>
    </CalendarHeaderRoot>
  );
});
export default CalendarHeader;
