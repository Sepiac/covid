import React from 'react'
import { useSummaryApi } from '../hooks'

export const ApiTest = (): JSX.Element => {
  const { error, isLoading, data } = useSummaryApi()

  return (
   !isLoading ? <h1>{data?.Global.TotalDeaths}</h1> : <p>Loading ...</p>
  )
}
