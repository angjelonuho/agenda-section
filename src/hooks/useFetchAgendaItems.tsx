import { useQuery, UseQueryResult } from 'react-query';
import dummyData from '../dummy.json';
import {getAgenda} from '../api/api'


// const useFetchAgendaItems = (url: string, method: string = 'POST', body?: object): UseQueryResult<Api.EventAgenda.IFetchResults> => {
//   return useQuery(['apiData', url, method, body], () => getAgenda());
// };

//Coros error so we fake the request

const useFetchAgendaItems = (url: string, method: 'POST', body?: object): UseQueryResult<Api.EventAgenda.IFetchResults> => {
  return useQuery(['apiData', url, method, body], () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 1000);
    });
  });
};

export default useFetchAgendaItems;