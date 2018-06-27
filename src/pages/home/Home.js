import React from 'react';
import styled from 'styled-components';
import { Header } from '../../template/header/Header';

const Wrapper = styled.div``;

const Main = styled.main`
  padding-left: 200px;

  background-color: pink;
`;

export const Home = () => (
  <Wrapper>
    <Header>
      <input />
    </Header>
    <Main>
      <div>Hello world</div>
    </Main>
  </Wrapper>
);
