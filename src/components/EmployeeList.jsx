import React, { useMemo } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  span {
    display: block
  }
`

function EmployeeList({ data, filter: addedFilters }) {

  const listItems = useMemo(() => (
    data.filter((el, i, self) => (addedFilters.length === 0) ? self : addedFilters.includes(el.function)).map((el, i) => {
      console.log('mapped', el)
      return (
        <ListItem key={i}>
          <span>{el.first_name} {el.last_name}</span>
          <span>{el.function}</span>
        </ListItem>
      )
    })
  ), [data, addedFilters]);

  console.log('memo', listItems)

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default EmployeeList;