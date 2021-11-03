import React from 'react'
import { useDefaultApi } from '../hooks'

export const ApiTest = (): JSX.Element => {
  const { error, isLoading, data } = useDefaultApi()

  return (
   !isLoading ? <h1>{data?.countriesRoute.Path}</h1> : <p>Loading ...</p>
  )
}
