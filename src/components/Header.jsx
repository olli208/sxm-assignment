import React from 'react';
import styled from 'styled-components';
import logo from '../assets/saxum.jpg';
import FlexWrapper from './FlexWrapper'

const StyledHeader = styled.header`
  padding: 1rem;
`

const StyledLogo = styled.img`
  margin: 1.5rem 0;
`

const StyledSearchbar = styled.input`
  padding: 1rem .75rem;
  border-radius: 24px;
  border: 0;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  margin: 0 auto;
  width: 100%;

@media (min-width: 780px) {
  width: 60%;
}
`

function Header({ handleInput, children }) {
  return (
    <StyledHeader>
      <FlexWrapper justifyContent='center' isFullWidth>
        <StyledLogo src={logo} alt="saxum logo" />
        <FlexWrapper justifyContent='center' isFullWidth>
          <StyledSearchbar
            type="text"
            onChange={handleInput}
            placeholder="search by name/function" />
          {children}
        </FlexWrapper>
      </FlexWrapper>
    </StyledHeader>
  )
}

export default Header;