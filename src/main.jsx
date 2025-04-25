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
import Form from './Day-4/FormInReact/Form'
import InputChange from './Day-4/InputChange/InputChange'
import Main from './Day-11/frontend/Main'
// import Main from './Day-5/Main'
// import Main from './Day-4/components/Main'
// import Main from './Day-7/Main'

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
    {/* <App /> */}
    {/* <Form /> */}
    {/* <InputChange /> */}
    {/* <Main /> */}
    {/* <Form /> */}
    {/* <Main /> */}
    {/* <Main /> */}
    {/* <Main /> */}
    <Main />
  </div>
)