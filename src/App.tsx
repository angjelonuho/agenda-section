import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import AgendaNavMenu from './components/Agenda/AgendaNavMenu';
import './App.css';


const queryClient = new QueryClient();
// just remove the dev tools to work
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AgendaNavMenu />
      
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;



