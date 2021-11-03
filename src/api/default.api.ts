import getResponse from './covid19.api';

export interface DefaultData {
  countriesRoute: CountriesRoute;
  countryDayOneRoute: CountriesRoute;
  countryDayOneTotalRoute: CountriesRoute;
  countryRoute: CountriesRoute;
  countryRoutePremium: CountriesRoute;
  countryRoutePremiumData: CountriesRoute;
  countryStatusDayOneLiveRoute: CountriesRoute;
  countryStatusDayOneRoute: CountriesRoute;
  countryStatusDayOneTotalRoute: CountriesRoute;
  countryStatusLiveRoute: CountriesRoute;
  countryStatusRoute: CountriesRoute;
  countryStatusTotalRoute: CountriesRoute;
  countrySummaryRoutePremium: CountriesRoute;
  countryTestingPremium: CountriesRoute;
  countryTotalRoute: CountriesRoute;
  exportRoute: CountriesRoute;
  liveCountryRoute: CountriesRoute;
  liveCountryStatusAfterDateRoute: CountriesRoute;
  liveCountryStatusRoute: CountriesRoute;
  summaryRoute: CountriesRoute;
  travelAdvicePremium: CountriesRoute;
  webhookRoute: CountriesRoute;
}

interface CountriesRoute {
  Name: string;
  Description: string;
  Path: string;
}


const getSummary = async ():Promise<DefaultData> => {
  const response = await getResponse<DefaultData>('/')
  return response
};

export default getSummary;
