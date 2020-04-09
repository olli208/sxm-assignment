import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  span {
    display: block
  }
`

function EmployeeList({ data }) {
  return (
    <ul>
      {data.map((el, i) => (
        <ListItem key={i}>
          <span>{el.first_name} {el.last_name}</span>
          <span>{el.function}</span>
        </ListItem>
      ))}
    </ul>
  )
}

export default EmployeeList;