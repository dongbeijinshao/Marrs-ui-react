import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { upperCasePath } from '@wemo-ui/marrs-docs/common/utils';

import {
  BASE_NAV,
  GROUP_NAV
} from '@wemo-ui/marrs-docs/common/constants/index';

const navConfig = [...BASE_NAV, ...GROUP_NAV];

const [{ groupName, children }] = BASE_NAV;

const renderComponent = (child, isBase) => {
  const Markdown = loadable(() =>
    isBase
      ? import(`../../md${child.path}.md`)
      : import(`@wemo-ui/marrs/${upperCasePath(child.path)}/README.md`)
  );

  return <Markdown />;
};

const DocsContent = () => {
  const homeRoute = (
    <Route
      key="/"
      path="/"
      exact
      render={() => {
        return <Redirect to={children[0].path} />;
      }}
    />
  );

  const routeContent = navConfig.map((route) =>
    route.children.map((child) => (
      <Route
        key={child.path}
        path={child.path}
        exact={child.exact}
        render={() => {
          document.title = child.name;
          return renderComponent(child, route.groupName === groupName);
        }}
      />
    ))
  );

  return (
    <Switch>
      {homeRoute}
      {routeContent}
    </Switch>
  );
};
export default DocsContent;
