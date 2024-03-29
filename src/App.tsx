import { ThemeProvider,CssBaseline } from '@mui/material'; 
import React, { FC, ReactElement } from 'react';
import { Dashboard } from './pages/dashboard/Dashboard';
import { customTheme } from './theme/customTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 
const queryClient =  new QueryClient()
const App:FC = () :ReactElement=> {
  return (
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
