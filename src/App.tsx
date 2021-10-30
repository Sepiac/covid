import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApiTest } from './components/ApiTest';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
         <ApiTest />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
