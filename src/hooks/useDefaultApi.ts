import { useQuery } from "react-query";
import {getDefault, DefaultData} from '../api'

const useDefaultApi = () => {
  return useQuery<DefaultData, Error>('default', getDefault)
}

export default useDefaultApi