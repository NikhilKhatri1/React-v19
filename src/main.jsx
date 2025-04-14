import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClassBasedComponent from './Day-1/ClassBasedComponent/ClassBasedComponent'
import FunctionalComponent from './Day-1/functionalComponent/FunctionalBasedComponent'
import Products from './Day-1/NestedComponent/Products'
import ParentComponent from './Day-1/Props/ParentComponent'

import AxiosFetching from './Day-2/FetchingData/AxiosFetching'
import FetchingData from './Day-2/Fetch/FetchingData'
import AppForContextAPi from './Day-2/Main/AppForContextAPi'
import NewMain from './Day-3/MainData/NewMain'
import UseReducerrHook from './Day-4/UseReducer/UseReducerrHook'
import App from './Day-4/TODO/App/App'

createRoot(document.getElementById('root')).render(
  <div>
    {/* <ClassBasedComponent /> */}
    {/* <FunctionalComponent /> */}
    {/* <Products /> */}
    {/* <ParentComponent /> */}
    {/* <FetchingData /> */}
    {/* <AxiosFetching /> */}
    {/* <FetchingData /> */}
    {/* <AppForContextAPi /> */}
    {/* <UseReducerrHook /> */}
    <App />
  </div>
)