import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'

const Main = () => {
    return (
       <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
       </Provider>
            
    )
}

export default Main