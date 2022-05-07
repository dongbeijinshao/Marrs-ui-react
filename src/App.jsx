import { BackTop, Tabbar } from '@wemo-ui/marrs';
import {
  IconAppointment,
  IconCart,
  IconHome,
  IconMineGoods
} from '@wemo-ui/marrs-icons';
import { ThemeFactory } from '@wemo-ui/marrs-theming';
import { createTheme, ThemeProvider } from '@wemo-ui/marrs/styles';
import { TabbarItem } from '@wemo-ui/marrs/Tabbar';
import { debounce } from '@wemo-ui/marrs/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import CartView from './view/CartView';
import components from './view/components';
import ShowAll from './view/ShowAll';
import Welcome from './view/Welcome';
import Waimai from './view/Wwaimai';

const myTheme = createTheme({
  globalProps: {
    // color: 'info'
  },
  palette: {},
  sizingMode: 'px',
  components: {
    MarrsTag: {
      defaultProps: {
        radius: 8
      }
    },
    MarrsSearchBar: {
      defaultProps: {
        radius: 1
      }
    },
    MarrsImage: {
      defaultProps: {
        radius: 10
      }
    },
    // MarrsStepper: {
    //   defaultProps: {
    //     radius: 0
    //   }
    // },
    // MarrsPopup: {
    //   defaultProps: {
    //     radius: 0
    //   }
    // },
    MarrsButton: {
      defaultProps: {
        radius: 20
      },
      variants: [
        {
          props: { color: 'mytag' },
          style: {
            color: 'yellow'
          }
        }
      ]
    }
  }
});

function App() {
  const [thisTheme, setTheme] = useState(myTheme);

  console.log(thisTheme);

  useEffect(() => {
    const themeSaved = JSON.parse(localStorage.getItem('theme-saved') || '{}');

    // setTheme(createTheme(themeSaved));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetTheme = React.useCallback(
    debounce((t) => {
      // setTheme(t);
    }, 200),
    []
  );

  const handleThemeChange = useCallback(
    (evt) => {
      const newTheme = createTheme({ ...thisTheme, ...evt.detail });

      debouncedSetTheme(newTheme);
    },
    [thisTheme, debouncedSetTheme]
  );
  useEffect(() => {
    document.body.addEventListener('themechanged', handleThemeChange);

    return () => {
      document.body.removeEventListener('themechanged', handleThemeChange);
    };
  }, [handleThemeChange]);

  const location = useLocation();
  return (
    <div className="App">
      <ThemeProvider theme={thisTheme}>
        <div>
          <Switch>
            <Route key="welcome" path="/" component={Welcome} exact />
            <Route key="show" path="/show" component={ShowAll} />
            <Route key="waimai" path="/waimai" component={Waimai} />
            <Route key="cart" path="/cart" component={CartView} />
            <Route
              key="theme-factory"
              path="/theme-factory"
              component={ThemeFactory}
            />

            {components.map((item) => (
              <Route
                key={item.name}
                path={`/${item.name}`}
                component={item.component}
              />
            ))}
          </Switch>
          <BackTop smooth />
          <Tabbar current={location.pathname}>
            <Link to="/">
              <TabbarItem text="首页" icon={<IconHome />} name="/" />
            </Link>

            <Link to="/show">
              <TabbarItem text="分类" icon={<IconAppointment />} name="/show" />
            </Link>
            <Link to="/cart">
              <TabbarItem
                badge="99+"
                text="购物车"
                icon={<IconCart />}
                name="/cart"
              />
            </Link>
            <Link to="/theme-factory">
              <TabbarItem
                text="我的"
                icon={<IconMineGoods />}
                name="/theme-factory"
              />
            </Link>
          </Tabbar>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
