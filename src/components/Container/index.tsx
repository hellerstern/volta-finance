import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

interface PropsType {
  children: React.ReactNode;
}

export const Container = (props: PropsType) => {
  return (
    <Wrapper>
      <ContainerWrapper>{props.children}</ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center'
});

const ContainerWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  width: '100%',
  padding: '0 40px',
  [theme.breakpoints.down(480)]: {
    padding: '0 20px'
  }
}));
