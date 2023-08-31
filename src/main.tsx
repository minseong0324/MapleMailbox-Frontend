import React from 'react';
import CreateDOM from 'react-dom/client'; //중요
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import {GlobalStyle, GlobalStylePC, BackgroundAfter, Background, BackgroundPC, BackgroundAfterPC, AppStyle} from './style'
import { BrowserView, MobileView } from 'react-device-detect';
import Clouds from './components/Clouds/Clouds';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = CreateDOM.createRoot(rootElement); // reactDOM 쓰니 자꾸 에러 발생합니다. CreateDOM으로 사용.


root.render(
  <React.StrictMode>
      <BrowserView>
        <GlobalStylePC />
        <BackgroundPC>
          <BackgroundAfterPC>
              <App />
          </BackgroundAfterPC>
        </BackgroundPC>
        <Clouds />

      </BrowserView>
      { /* mobile */ }
      <MobileView>
        <Background />
        <GlobalStyle />
        <BackgroundAfter />
        <Clouds />
        <App />
      </MobileView>
  </React.StrictMode>
);