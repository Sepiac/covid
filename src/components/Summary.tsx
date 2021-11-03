import { useMemo } from 'react';
import type { SummaryData } from '../api'
import moment from 'moment';
interface Props {
  summary: SummaryData | undefined
  countryCode?: string | undefined
}

const Summary = (props: Props) => {
  const { summary, countryCode = 'US' } = props;

  const countryOfInterest = useMemo(() => summary?.Countries.find(country => country.CountryCode === countryCode), [summary, countryCode])

  return summary ? (
    <div>
      <header>
        <img src="https://images.squarespace-cdn.com/content/v1/5f5c425b5c49976ab6a58516/1601168718757-RKML9G8LY9R57FXHWYUD/COVID-19-virus-5538240_1920.png?format=500w" alt="covid 19 logo" />
      </header>
      <h1>{moment(summary.Global.Date).format('MMMM Do YYYY')}</h1>
      <div>
        <p>New Deaths: {summary.Global.NewDeaths.toLocaleString()}</p>
        <p>Total Deaths: {summary.Global.TotalDeaths.toLocaleString()}</p>
        <p>New Deaths {countryOfInterest?.Country}: {countryOfInterest?.NewDeaths.toLocaleString()}</p>
        <p>Total Deaths {countryOfInterest?.Country}: {countryOfInterest?.TotalDeaths.toLocaleString()}</p>
      </div>
    </div>
  ) : (
    <p>nothing here</p>
  )
}

export default Summary
