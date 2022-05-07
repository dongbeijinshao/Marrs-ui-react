import { Calendar } from '@wemo-ui/marrs';
import { makeStyles } from '@wemo-ui/marrs/styles';
import React from 'react';

const useStyles = makeStyles({
  CalendarCell: {
    margin: '20px 12px',
    overflow: 'hidden',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(125, 126, 128, 0.16)',
    height: 500
  }
});
//TODO，PopUp组件
function CalendarView() {
  const classes = useStyles();
  const onConfirm = (date) => {
    console.log(date);
  };

  const formatter = (day) => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();

    if (month === 7) {
      if (date === 29) {
        day.topInfo = '劳动节';
      } else if (date === 4) {
        day.topInfo = '青年节';
      } else if (date === 11) {
        day.text = '文案';
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '开始';
    } else if (day.type === 'end') {
      day.bottomInfo = '结束';
    }

    return day;
  };
  return (
    <div className={classes.CalendarCell}>
      <Calendar
        onConfirm={onConfirm}
        poppable={false}
        defaultDate={[new Date('2024-10-20')]}
        // minDate={new Date('2021-01-01')}
        maxDate={new Date('2024-12-31')}
        // type="single"
        // type="multiple"
        type="range"
        // maxRange={4}
        showConfirm={false}
        formatter={formatter}
        title="自定义标题"
        // color="info"
        // firstDayOfWeek={0}
      />
    </div>
  );
}

export default CalendarView;
