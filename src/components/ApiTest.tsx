import React from 'react'
import useCovid19Api from '../hooks/useCovid19Api'

export const ApiTest = () => {
  const {error, isLoading, data } = useCovid19Api()
  return (
    <div>
      {isLoading && !error ? null : JSON.stringify(data)}
    </div>
  )
}
