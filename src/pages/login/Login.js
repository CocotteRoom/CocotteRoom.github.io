import React from 'react';
import styled from 'styled-components';
import { Google, Facebook } from '../../app/authentication/providers';
import { Header } from '../../template/header/Header';

const Wrapper = styled.div``;

const Main = styled.main`
  padding-left: 200px;

  background-color: pink;
`;

export const Login = () => (
  <Wrapper>
    <Header>
      <div>
        <Google
          onUserConnected={userInfo => console.log(userInfo)}
          SigninButton={() => <div>Google</div>}
        />
        <Facebook
          onUserConnected={userInfo => console.log(userInfo)}
          SigninButton={() => <div>Facebook</div>}
        />
      </div>
    </Header>
    <Main />
  </Wrapper>
);
