import { useQuery } from 'react-query'
import getSummary, { SummaryData } from '../api/covid19api.api'

const useCovid19Api = () => {
  return useQuery<SummaryData, Error>('summary', getSummary,
  {
    cacheTime: 1000 * 60 * 60 * 6,
    refetchOnWindowFocus: false
  })
}

export default useCovid19Api