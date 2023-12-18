import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import AgendaSection from './pages/AgendaSection';
import './App.css';


const queryClient = new QueryClient();
// just remove the dev tools to work
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AgendaSection/>
      
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;



