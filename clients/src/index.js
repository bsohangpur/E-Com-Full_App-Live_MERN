import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import State from './container/contexApi/States';
import store from './container/Redux/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <State>
        <App />
      </State>
    </Provider>
  </React.StrictMode>
)
