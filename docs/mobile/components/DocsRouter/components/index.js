import { upperCasePath } from '../../../../common/utils';

const moduleFile = require.context('./', true, /\.jsx$/);

export default moduleFile.keys().reduce((rs, filePath) => {
  const component = moduleFile(filePath);

  return { ...rs, [`/${upperCasePath(filePath)}`]: component.default };
}, {});
