// styles.ts
import { createGlobalStyle } from 'styled-components';
import bodyBackground from './assets/sky/sky-small.png';
import bodyAfterBackground from './assets/background/background-small.png';
import DoSSaemmul from './static/font/DOSSaemmul.ttf';
import DOSGothic from './static/font/DOSGothic.ttf';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: url(${bodyBackground});
        background-size: cover;
        background-position: center ;
        background-repeat: no-repeat;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;
        overflow: auto;
    }

    body::after {
        content: "";
        position: absolute;
        top: 65px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: url(${bodyAfterBackground});
        background-size: cover;
        background-position: center ;
        background-repeat: no-repeat;
        z-index: 1;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;
        overflow: auto;
    }
    @font-face {
    font-family: 'DOSSaemmul';
    src: url(${DoSSaemmul}) format('ttf');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
        font-family: 'DOSGothic';
        src: url(${DOSGothic}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }
    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;