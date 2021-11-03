import axios from 'axios';

interface AxiosResponse<T> {
  data: T,
}

const getResponse = async <T>(path: string):Promise<T> => {
  const response:AxiosResponse<T> = await axios.get(`https://api.covid19api.com${path}`)
  return response?.data
};

export default getResponse;
