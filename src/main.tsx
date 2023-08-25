import React from 'react';
import CreateDOM from 'react-dom/client'; //중요
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import {GlobalStyle, GlobalStylePC, BackgroundAfter, Background, BackgroundPC, BackgroundAfterPC} from './style'
import { BrowserView, MobileView } from 'react-device-detect';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = CreateDOM.createRoot(rootElement); // reactDOM 쓰니 자꾸 에러 발생합니다. CreateDOM으로 사용.

root.render(
  <React.StrictMode>
      <BrowserView>
        <BackgroundPC/>
        <GlobalStylePC />
        <BackgroundAfterPC />
        <App />
      </BrowserView>
      { /* mobile */ }
      <MobileView>
        <Background />
        <GlobalStyle />
        <BackgroundAfter />
        <App />
      </MobileView>
  </React.StrictMode>
);