import getResponse from './covid19.api';

export interface DefaultData {
  countriesRoute: Route;
  countryDayOneRoute: Route;
  countryDayOneTotalRoute: Route;
  countryRoute: Route;
  countryRoutePremium: Route;
  countryRoutePremiumData: Route;
  countryStatusDayOneLiveRoute: Route;
  countryStatusDayOneRoute: Route;
  countryStatusDayOneTotalRoute: Route;
  countryStatusLiveRoute: Route;
  countryStatusRoute: Route;
  countryStatusTotalRoute: Route;
  countrySummaryRoutePremium: Route;
  countryTestingPremium: Route;
  countryTotalRoute: Route;
  exportRoute: Route;
  liveCountryRoute: Route;
  liveCountryStatusAfterDateRoute: Route;
  liveCountryStatusRoute: Route;
  summaryRoute: Route;
  travelAdvicePremium: Route;
  webhookRoute: Route;
}
export interface Route {
  Name: string;
  Description: string;
  Path: string;
}


const getSummary = async ():Promise<DefaultData> => {
  const response = await getResponse<DefaultData>('/')
  return response
};

export default getSummary;
