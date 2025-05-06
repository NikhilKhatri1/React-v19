import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const Main = () => {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>


  )
}

export default Main