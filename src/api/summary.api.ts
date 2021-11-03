import axios from 'axios';
import getResponse from './covid19.api';

// TODO(drussell): run this through a type generator
export interface SummaryData {
  Global: object,
  Countries: object[],
  Date: string,
  ID: string,
  Message: string,
}

const getSummary = async ():Promise<SummaryData> => {
  const response = await getResponse<SummaryData>('/summary')
  return response
};

export default getSummary;
