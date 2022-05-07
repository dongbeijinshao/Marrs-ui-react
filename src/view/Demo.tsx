import { makeStyles } from '@wemo-ui/marrs/styles';
import { FC } from 'react';

interface DemoProps {
  title?: String;
  card?: Boolean;
  padding?: Boolean;
  [key: string]: any;
}

const useStyles = makeStyles({
  root: { background: '#f7f8fa' },
  padding: {
    padding: '0 15px'
  },
  title: {
    margin: 0,
    padding: '20px 15px 15px',
    color: 'rgba(69, 90, 100, 0.6)',
    fontWeight: 400,
    fontSize: '14px',
    '& padding': {
      paddingLeft: 0
    }
  },
  card: {
    overflow: 'hidden',
    borderRadius: 8
  }
});

const Demo: FC<DemoProps> = (props) => {
  const classes = useStyles();
  const { title, card, padding, children, ...other } = props;

  return (
    <div {...other} className={`${padding && classes.padding} ${classes.root}`}>
      {title && <div className={classes.title}>{title}</div>}
      {card ? <div className={classes.card}>{children}</div> : children}
    </div>
  );
};

export default Demo;
