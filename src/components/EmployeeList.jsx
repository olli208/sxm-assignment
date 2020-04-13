import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  width: 100%;
  padding:0;
`

const StyledListItem = styled.li`
  span {
    display: block;
  }

  padding: 1rem;
  margin: 1.5rem 0;
  list-style: none;
`

function EmployeeList({ data }) {
  return (
    <StyledList>
      {data.length === 0 ? 'no results' : (
        data.map((el, i) => (
          <StyledListItem key={i}>
            <h3>{el.first_name} {el.last_name}</h3>
            <span>{el.function}</span>
          </StyledListItem>
        ))
      )}
    </StyledList>
  )
}

export default EmployeeList;