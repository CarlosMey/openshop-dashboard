import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenReducer';


const store = configureStore({
  reducer: {
    tokens: tokenReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);

