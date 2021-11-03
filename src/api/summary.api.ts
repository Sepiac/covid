import getResponse from './covid19.api';

export interface SummaryData {
  ID: string;
  Message: string;
  Global: Global;
  Countries: Country[];
  Date: string;
}

interface Country {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  Premium: Premium;
}

interface Premium {
}

interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}


const getSummary = async ():Promise<SummaryData> => {
  const response = await getResponse<SummaryData>('/summary')
  return response
};

export default getSummary;
