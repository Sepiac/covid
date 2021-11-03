import type { SummaryData } from '../api'
import moment from 'moment';
interface Props {
  summary: SummaryData | undefined
}

const Summary = (props: Props) => {
  const { summary } = props;

  return summary ? (
    <div>
      <h1>Global Summary {moment(summary.Global.Date).format('MM/DD/yyyy')}</h1>
      <div>
        <p>New Deaths: {summary.Global.NewDeaths}</p>
        <p>Total Deaths: {summary.Global.TotalDeaths}</p>
        <p>New Deaths United States: {summary.Countries.find(country => country.CountryCode === 'US')?.NewDeaths}</p>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
      </div>
    </div>
  ) : (
    <p>nothing here</p>
  )
}

export default Summary
