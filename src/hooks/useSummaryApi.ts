import { useQuery } from 'react-query'
import { getSummary, SummaryData } from '../api'


const useSummaryApi = () => {
  return useQuery<SummaryData, Error>('summary', getSummary,
  {
    cacheTime: 1000 * 60 * 60 * 6,
    refetchOnWindowFocus: false
  })
}

export default useSummaryApi