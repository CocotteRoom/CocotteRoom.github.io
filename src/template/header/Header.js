import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: 200px;

  background-color: grey;
`;

export const Header = ({ children }) => <Wrapper>{children}</Wrapper>;

Header.propTypes = {
  children: PropTypes.element.isRequired,
};
