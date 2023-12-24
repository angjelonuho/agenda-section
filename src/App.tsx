import { QueryClient, QueryClientProvider } from 'react-query';
import AgendaSection from './pages/AgendaSection';
import './App.css';


const queryClient = new QueryClient();
//TODO: remove the dev tools 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AgendaSection/>
      
      {/* <ReactQueryDevtools/> */}
    </QueryClientProvider>
  );
}

export default App;



