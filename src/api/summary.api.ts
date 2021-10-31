import axios from 'axios';

type SummaryDataResponse = {
  data: SummaryData
}

export type SummaryData = {
  Global: object,
  Countries: object[],
  Date: string,
  ID: string,
  Message: string,
}

const getSummary = async ():Promise<SummaryData> => {
  const response:SummaryDataResponse = await axios.get('https://api.covid19api.com/summary')
  return response?.data
};

export default getSummary;
