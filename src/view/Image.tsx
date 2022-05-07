import { Can, FlexBox, Image } from '@wemo-ui/marrs';
import { createRef, useState } from 'react';
import Button from '../../packages/marrs-ui/src/Button/Button';

function ImageView() {
  const ref = createRef();
  // const size = ;
  const [szie, setSzie] = useState({ width: '100px', height: '200px' });
  const handleClick = () => {
    setSzie({ width: '200px', height: '200px' });
  };

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={handleClick}>111</Button>
      <FlexBox container gap={2}>
        {new Array(1).fill('').map((n, idx) => {
          return (
            <FlexBox item key={idx}>
              {/* <Can size={szie} radius={2} elevation={1}> */}
              <Image
                src="/public/img1.png"
                ref={ref}
                size={szie}
                // origin={true}
                // loading="loading"
                // loading
                // onClick={handleClick}
              />
              {/* </Can> */}
            </FlexBox>
          );
        })}
      </FlexBox>
      <Can size={{ width: 120, height: 120 }} circle elevation={10}>
        <Image src="/public/img1.pndg"></Image>
      </Can>
      <Can size={{ width: 120, height: 120 }} circle elevation={10}>
        <Image fit="cover" src={'false'} />
      </Can>
      <br />
    </div>
  );
}

export default ImageView;
