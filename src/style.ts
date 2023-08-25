// styles.ts
import { createGlobalStyle } from 'styled-components';
import bodyBackground from './assets/sky/sky-small.png';
import bodyAfterBackground from './assets/background/background-small.png';
import DoSSaemmul from './static/font/DOSSaemmul.ttf';
import DOSGothic from './static/font/DOSGothic.ttf';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    @media screen and (min-width: 51.31em) and (orientation: landscape) {
      padding-top: 1.25em;
      background-color: rgb(62 192 255);
    }

    @media screen and (max-width: 51.25em) and (orientation: portrait) {
      transform: translateY(0em);
    }

    @media screen and (max-width: 56.19em) and (orientation: landscape) {
      padding-top: 6.25em;
      background-color: rgb(62 192 255);
    }

    @media screen and (max-width: 37.44em) and (orientation: portrait) {
      padding-top: 0.625em;
      background-color: rgb(80 198 255);
    }

    @media screen and (max-width: 49.94em) and (orientation: landscape) {
      padding-top: 6.25em;
      background-color: rgb(62 192 255);
    }

    @media screen and (max-width: 24.94em) and (orientation: portrait) {
      padding-top: 1.25em;
      background-color: rgb(80 198 255);
    }
  }

  @font-face {
    font-family: 'DOSSaemmul';
    src: url(${DoSSaemmul}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DOSGothic';
    src: url(${DOSGothic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: url(${bodyBackground});
  background-position: center;
  background-repeat: no-repeat;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  background-size: 51.25em 73.75em;
  background-attachment: scroll;
  overflow: auto;

  @media screen and (min-width: 51.31em) and (orientation: landscape){
    min-height: 64em;
    transform: translateY(13.375em);
  }

  @media screen and (max-width: 51.25em) and (orientation: portrait) {
    min-height: 46.25em;
  }

  @media screen and (max-width: 49.94em) and (orientation: landscape) {
    min-height: 46.25em;
  }

  @media screen and (max-width: 37.44em) and (orientation: portrait) {
    min-height: 46.875em;
  }

  @media screen and (max-width: 24.94em) and (orientation: portrait) {
    min-height: 37.5em;
    transform: translateY(0.4375em);
  }
`;

export const BackgroundAfter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: url(${bodyAfterBackground});
  background-position: center calc(50% - 2.5em);
  background-repeat: no-repeat;
  z-index: 1;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  background-size: 51.25em 73.75em;
  background-attachment: scroll;
  overflow: auto;

  @media screen and (min-width: 51.31em) and (orientation: landscape){
    min-height: 64em;
    transform: translateY(20.25em);
  }

  @media screen and (max-width: 51.25em) and (orientation: portrait) {
    transform: translateY(3.125em);
    min-height: 64em;
  }

  @media screen and (max-width: 49.94em) and (orientation: landscape) {
    transform: translateY(35.5625em);
    min-height: 50em;
  }

  @media screen and (max-width: 48em) and (orientation: portrait) {
    transform: translateY(4.375em);
    min-height: 64em;
  }

  @media screen and (max-width: 37.44em) and (orientation: portrait) {
    transform: translateY(4.875em);
    min-height: 43.125em;
  }

  @media screen and (max-width: 24.31em) and (orientation: portrait) {
    transform: translateY(9.375em);
    min-height: 50em;
  }
`;
