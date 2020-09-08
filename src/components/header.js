import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #23c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextHeader = styled.h1`
  font-size: 2em;
  margin: 0;
  font-family: Helvetica, sans-serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <TextHeader>{title}</TextHeader>
    </HeaderContainer>
  );
};

export default Header;
