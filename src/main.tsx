import CreateDOM from 'react-dom/client'; //중요
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import {GlobalStyle, GlobalStylePC, BackgroundAfter, Background, BackgroundPC, BackgroundAfterPC, AppStyle} from './style'
import { BrowserView, MobileView } from 'react-device-detect';
import Clouds from './components/Clouds/Clouds';
import React, { useState, useEffect } from 'react';
// ... (기타 import 문)

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = CreateDOM.createRoot(rootElement);

// eslint-disable-next-line react-refresh/only-export-components
const AppContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px을 넘으면 isScrolled를 true로 설정
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.StrictMode>
      <BrowserView>
        <GlobalStylePC />
        <BackgroundPC>
          <BackgroundAfterPC>
            <AppStyle isScrolled={isScrolled}>
              <App />
            </AppStyle>
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
};

root.render(<AppContainer />);
