import React from 'react'
import { Summary } from '.'
import { useSummaryApi } from '../hooks'

const ApiTest = (): JSX.Element => {
  const { error, isLoading, data } = useSummaryApi()

  return (
   !isLoading ? <Summary summary={data} /> : <p>Loading ...</p>
  )
}

export default ApiTest
