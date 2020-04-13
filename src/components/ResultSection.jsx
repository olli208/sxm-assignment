import React, { useMemo } from 'react';
import styled from 'styled-components'
import EmployeeList from './EmployeeList';
import FlexWrapper from './FlexWrapper';

const Wrapper = styled.div`
width: 100%;

@media (min-width: 780px) {
  width: 60%;
}
`

function ResultSection({ data, filter, children }) {
  const listItems = useMemo(() => (
    data.filter((el, i, self) => (filter.length === 0) ? self : filter.includes(el.function))
  ), [data, filter]);

  return (
    <section>
      {data && (
        <FlexWrapper justifyContent='center'>
          <Wrapper>
            <FlexWrapper>
              {children}
            </FlexWrapper>
            <FlexWrapper justifyContent='flex-end'>
              <h2><b>{listItems.length}</b> saxumers found</h2>
              <EmployeeList data={listItems} />
            </FlexWrapper>
          </Wrapper>
        </FlexWrapper>
      )}
    </section>
  )
}

export default ResultSection;