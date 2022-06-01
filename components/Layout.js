import React, { useRef } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Menu from './Menu';

const FixedContainer = styled.div.attrs(() => ({
  className: `fixed top-0 inset-x-0`
}))`
  top: 0;
  z-index: 20;
`;

const PageContainer = styled.div.attrs(() => ({
  className: `bg-white`
}))``;

export default function Layout(props) {
  const containerRef = useRef(null);
  const headerHeight = containerRef?.current?.clientHeight || 168;

  return (
    <>
      <FixedContainer ref={containerRef}>
        <Header/>
        <Menu/>
      </FixedContainer>
      <PageContainer style={{ paddingTop: `${headerHeight}px`}}>
        {props.children}
      </PageContainer>
    </>
  );
};
