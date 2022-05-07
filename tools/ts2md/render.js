const path = require('path');
const ejs = require('ejs');
const { template } = require('./template.js');
let config = require(path.join(process.cwd(), 'ts2md.config'));

const { compile } = config;
const { beforeRender = (f) => f } = compile;

const renderToMd = (schema) => {
  let newSchema = beforeRender(schema);
  let md = ejs.render(template, { schema: newSchema });

  return {
    schema: newSchema,
    md
  };
};
module.exports = {
  renderToMd
};
