import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles({
  container: {
    marginBottom: 10,
    borderRadius: 12
  },
  default: {
    background: '#fff'
  },
  root: {
    background: '#f7f8fa'
  },
  padding: {
    padding: 16
  },
  title: {
    margin: 0,
    padding: `32px 16px 16px`,
    color: '#212121',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: '17px'
  },
  card: {
    margin: `12px 12px 0`,
    overflow: 'hidden',
    borderRadius: 8
  }
});

const DemoContainer = (props) => {
  const classes = useStyles();

  const { title, padding, background = true, children } = props;

  const Title = title && <h2 className={classes.title}>{title}</h2>;

  const Content = (
    <div className={`${padding ? classes.padding : ''}`}>{children}</div>
  );

  return (
    <div
      className={`${background ? classes.root : classes.default}`}
      style={{ marginBottom: 10, borderRadius: 10, fontSzie: '12px' }}
    >
      {Title}
      {Content}
    </div>
  );
};

export default DemoContainer;
