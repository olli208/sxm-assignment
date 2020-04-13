import React from 'react';
import styled from 'styled-components'

const StyledList = styled.ul`
  width: 100%;
  padding:0;
`

const StyledListItem = styled.li`
  margin: .5rem;
  list-style: none;
`

function FilterList({ data, filter, setFilter }) {
  return (
    <StyledList>
      {data.map(el => (
        <StyledListItem>
          <label>
            <input
              name="function"
              type="checkbox"
              checked={filter.includes(el)}
              onChange={() => setFilter(el)}
            />
            {el}
          </label>
        </StyledListItem>
      ))}
    </StyledList>

  )
}

export default FilterList;