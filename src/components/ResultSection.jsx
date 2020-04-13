import React from 'react';
import styled from 'styled-components'
import EmployeeList from './EmployeeList';
import FlexWrapper from './FlexWrapper';

const Wrapper = styled.div`
width: 100%;

@media (min-width: 780px) {
  width: 60%;
}
`

function ResultSection({ data: result, filter, children }) {
  return (
    <section>
      {result && (
        <FlexWrapper justifyContent='center'>
          <Wrapper>
            <FlexWrapper>
              {children}
            </FlexWrapper>
            <FlexWrapper>
              <EmployeeList data={result} filter={filter} />
            </FlexWrapper>
          </Wrapper>
        </FlexWrapper>
      )}
    </section>
  )
}

export default ResultSection;