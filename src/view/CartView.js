import { useTheme } from '@emotion/react';
import { Button } from '@wemo-ui/marrs';
import { createTheme, makeStyles, ThemeProvider } from '@wemo-ui/marrs/styles';

const myTheme = createTheme({
  palette: {
    primary: { main: '#00ff00' }
  }
});

const nestTheme = createTheme({
  palette: {
    primary: { main: '#ff0000' }
  }
});

const cusTheme = createTheme({
  components: {
    MarrsButton: {
      defaultProps: {
        volume: 'tiny',
        color: 'info',
        textTransform: 'uppercase'
      }
    }
  }
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette
        .getColor(theme.globalProps.color)
        .lighten()
        .color(),
      height: '500px'
    }
  };
});

export default function CartView() {
  const classes = useStyles();

  const hteme = useTheme();
  console.log('asdfasd', hteme);

  return (
    <div style={{ padding: 100 }} className={classes.root}>
      <ThemeProvider theme={myTheme}>
        <Button>myTheme</Button>
        <ThemeProvider theme={nestTheme}>
          <Button>nestTheme</Button>
        </ThemeProvider>
        <ThemeProvider theme={cusTheme}>
          <Button>cusTheme</Button>
          <Button color="success" volume="medium">
            cusTheme2
          </Button>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}
