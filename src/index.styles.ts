import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
         overflow-x: hidden;
         overflow-y: hidden;
    }

    body {
        font-family: 'Lato', sans-serif;
         overflow-x: hidden;
         overflow-y: hidden;
         position: relative;
         background: rgba(0, 0, 0, 0.83);
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
        -webkit-text-fill-color: #797979;
         transition: background-color 5000s ease-in-out 0s;
}
`;
export default GlobalStyle;
