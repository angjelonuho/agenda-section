import { useQuery, UseQueryResult } from 'react-query';
import { FetchResults } from '../types/agendaFetchResults';
import dummyData from '../dummy.json' 


//Real request

// const fetchData = async (url: string, method: string, body?: object) => {
//   const response = await fetch(url, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return response.json();
// };

// const useFetch = (url: string, method: string = 'GET', body?: object): UseQueryResult<FetchResults> => {
//   return useQuery(['apiData', url, method, body], () => fetchData(url, method, body));
// };

//Coros error so we fake the request

const useFetch = (url: string, method: 'GET' | 'POST' = 'GET', body?: object): UseQueryResult<FetchResults> => {
  return useQuery(['apiData', url, method, body], () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 1000);
    });
  });
};

export default useFetch;