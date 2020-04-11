import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 1rem;
  background: pink;
`

function Header({ handleInput, fetchData }) {
  return (
    <StyledHeader>
      <input type="text" onChange={handleInput} placeholder="search by name/function" />
      <button onClick={fetchData}>all saxumers</button>
    </StyledHeader>
  )
}

export default Header;