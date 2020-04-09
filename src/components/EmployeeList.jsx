import React, { useMemo } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  span {
    display: block
  }
`

function EmployeeList({ data, filter: addedFilters }) {
  console.log(addedFilters)

  const listItems = useMemo(() => {
    return data.filter((el, i, self) => {
      if (addedFilters.length === 0) return self

      return addedFilters.includes(el.function)

    }).map((el, i) => {
      console.log('mapped', el)
      return <ListItem key={i}>
        <span>{el.first_name} {el.last_name}</span>
        <span>{el.function}</span>
      </ListItem>
    })
  }, [data, addedFilters]);

  console.log('memo', listItems)

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default EmployeeList;