import { Can, Timer } from '@wemo-ui/marrs';
import React from 'react';

function IconView() {
  const date = new Date();
  date.setMonth(9);
  return (
    <div style={{ fontSize: 30, padding: 20 }}>
      <Can sx={{ background: '' }}>
        <Timer timeEnd={date} />
      </Can>
    </div>
  );
}

export default IconView;
