import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
         overflow-x: hidden;
         overflow-y: hidden;
         background: rgba(0, 0, 0, 0.83);
    }
`;
export default GlobalStyle;
