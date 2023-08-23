// styles.ts
import { createGlobalStyle } from 'styled-components';
import bodyBackground from './assets/sky/sky-small.png';
import bodyAfterBackground from './assets/background/background-small.png';
import DoSSaemmul from './static/font/DOSSaemmul.ttf';
import DOSGothic from './static/font/DOSGothic.ttf';

export const GlobalStyle = createGlobalStyle`
    html, body {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        margin: 0;
        padding: 0;
        background: url(${bodyBackground});
        background-position: center ;
        background-repeat: no-repeat;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;

    }

    body::after {
        content: "";
        position: absolute;
        top: 49px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: url(${bodyAfterBackground});
        background-position: center ;
        background-repeat: no-repeat;
        z-index: 1;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;

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
        z-index: 1;
    }
`;