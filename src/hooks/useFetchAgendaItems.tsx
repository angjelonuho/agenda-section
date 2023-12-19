import { useQuery, UseQueryResult } from 'react-query';
import dummyData from '../dummy.json';
import {getAgenda} from '../api/api'


// const useFetchAgendaItems = (): UseQueryResult<Api.EventAgenda.IFetchResults> => {
//   return useQuery(['apiData'], () => getAgenda());
// };

//Coros error so we fake the request

const useFetchAgendaItems = (): UseQueryResult<Api.EventAgenda.IFetchResults> => {
  return useQuery(['apiData'], () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 1000);
    });
  });
};

export default useFetchAgendaItems;