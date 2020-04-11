import React from 'react';
import EmployeeList from './EmployeeList'

function ResultSection({ data: result, filter, children }) {
  return (
    <section>
      {children}
      {result && (
        <>
          <EmployeeList data={result} filter={filter} />
        </>
      )}
    </section>
  )
}

export default ResultSection;