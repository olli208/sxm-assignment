import React, { useMemo } from 'react';
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

function EmployeeList({ data, filter: addedFilters }) {

  const listItems = useMemo(() => (
    data.filter((el, i, self) => (addedFilters.length === 0) ? self : addedFilters.includes(el.function)).map((el, i) => (
      <StyledListItem key={i}>
        <span>{el.first_name} {el.last_name}</span>
        <span>{el.function}</span>
      </StyledListItem>
    ))
  ), [data, addedFilters]);

  return (
    <StyledList>
      {listItems.length === 0 ? 'no results' : listItems}
    </StyledList>
  )
}

export default EmployeeList;