import { Button, FlexBox, Icon, IconButton } from '@wemo-ui/marrs';
import { IconAdd, IconHubbleBubble } from '@wemo-ui/marrs-icons';
import { makeStyles, styled } from '@wemo-ui/marrs/styles';
import React, { createRef } from 'react';

const type = ['filled', 'plain', 'text'];

const color = ['success', 'primary', 'secondary', 'error', 'info', 'warning'];

const renderButtons = (...args) => {
  const $btns = [];
  for (const v of type) {
    for (const c of color) {
      $btns.push(
        <Button radius={1} key={`${v}-${c}`} face={v} color={c}>
          {v}-{c}
        </Button>
      );
      $btns.push(
        <Button
          key={`${v}-${c}-disabled`}
          face={v}
          color={c}
          disabled
          endIcon={<Icon icon={<IconHubbleBubble />} />}
        >
          {v}-{c}-disabled
        </Button>
      );
    }
  }
  return $btns.map(($btn, idx) => {
    return (
      <FlexBox item key={idx}>
        {$btn}
      </FlexBox>
    );
  });
};

const useStyles = makeStyles((theme) => {
  console.log('button theme', theme);
  return {
    beautiful: {
      backgroundImage: 'linear-gradient(to bottom right, red, yellow)',
      '&:active': {
        backgroundImage: 'linear-gradient(to bottom right, yellow, red)'
      }
    }
  };
});

const MyLink = styled(Button)(({ theme, color }) => {
  return {
    color: theme.palette[color].main,
    background: 'transparent',
    borderRadius: 'none',
    boxShadow: 'none',
    '&:active': {
      background: 'transparent',
      borderRadius: 'none',
      boxShadow: 'none'
    }
  };
});

function ButtonView() {
  const classes = useStyles();
  const ref = createRef();

  const handleClick = () => {
    console.log(ref);
  };
  return (
    <div style={{ padding: 10 }}>
      <MyLink color="info">link</MyLink>
      <FlexBox gap={2} container>
        {renderButtons()}
      </FlexBox>
      <br />
      <FlexBox gap={2} container>
        <FlexBox item>
          <Button
            disableElevation
            volume="tiny"
            startIcon="√"
            face="filled"
            color="primary"
          >
            tiny
          </Button>
        </FlexBox>
        <FlexBox item>
          <Button disableElevation volume="tiny" face="filled" color="primary">
            tifsdfasdfs
          </Button>
        </FlexBox>
        <FlexBox item>
          <Button volume="small" startIcon="√" face="filled" color="success">
            small
          </Button>
        </FlexBox>
        <FlexBox item>
          <Button
            volume="medium"
            endIcon="√"
            face="filled"
            color="info"
            className={classes.beautiful}
          >
            default
          </Button>
        </FlexBox>
      </FlexBox>
      <Button
        onClick={handleClick}
        volume="large"
        ref={ref}
        startIcon={<IconAdd />}
        endIcon={<IconAdd />}
        face="filled"
        color="warning"
      >
        large
      </Button>
      <IconButton color="info" volume="large" icon={<IconAdd />} />
      <br />
    </div>
  );
}

export default ButtonView;
