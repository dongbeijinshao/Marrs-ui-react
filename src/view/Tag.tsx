import Tag from '@wemo-ui/marrs/Tag';
import React from 'react';

function TagView() {
  return (
    <div style={{ fontSize: 16, padding: 20 }}>
      <Tag volume="small" className="demo-margin-10">
        28标签
      </Tag>

      <br />
      <br />
      <Tag volume="medium" className="demo-margin-10">
        32标签
      </Tag>
      <br />
      <br />
      <Tag volume="big" className="demo-margin-10">
        36标签
      </Tag>

      <br />
      <br />
      <br />
      <Tag face="plain" volume="small" className="demo-margin-10">
        28标签
      </Tag>
      <br />
      <br />
      <Tag face="plain" volume="medium" className="demo-margin-10">
        32标签
      </Tag>
      <br />
      <br />
      <Tag face="plain" volume="big" className="demo-margin-10">
        36标签36
      </Tag>
    </div>
  );
}

export default TagView;
