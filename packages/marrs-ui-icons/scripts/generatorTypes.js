const path = require('path');
// const fse = require('fs-extra');
const fs = require('fs');

const src = path.resolve('../src');

fs.readdirSync(src).forEach((file) => {
  var pathname = path.join(src, file);

  if (fs.statSync(pathname).isDirectory()) {
    fs.writeFile(
      pathname + '/index.d.ts',
      [
        `import React from 'react';`,
        '',
        `declare const ${file}: React.RefForwardingComponent<any>;`,
        '',
        `export default ${file};`,
        ''
      ].join('\n'),
      () => {
        console.log(file, 'ok');
      }
    );
  }
});
