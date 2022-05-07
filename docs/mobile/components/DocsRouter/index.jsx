import { Switch, Route } from 'react-router-dom';
import { GROUP_NAV } from '@wemo-ui/marrs-docs/common/constants';
import { upperCasePath } from '@wemo-ui/marrs-docs/common/utils';

import DocsHome from '../DocsHome';
import DocsPalette from '../DocsPalette';

import components from './components';

const homeRoute = <Route key="/" path="/" exact component={DocsHome} />;
const paletteRoute = (
  <Route key="palette" path="/palette" exact component={DocsPalette} />
);

const DocsRouter = () => {
  const routeContent = GROUP_NAV.map((route) =>
    route.children.map(({ path }) => (
      <Route
        key={path}
        path={path}
        component={components[`/${upperCasePath(path)}`]}
      />
    ))
  );

  return (
    <Switch>
      {homeRoute}
      {paletteRoute}
      {routeContent}
    </Switch>
  );
};
export default DocsRouter;
