import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@material-ui/core'
import theme from './utils/theme'

import {Provider} from 'react-redux'
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import {store} from './redux/store'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount : false ,
    },
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
        <Provider store = {store}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </Provider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
