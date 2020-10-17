import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        outline:0;

    }
    body{
        background:#eee; 
        color:#333;
        -webkit-font-smoothing: antialiased;

    }
    border-style, input , button{
        font-family: 'Roboto', sans-serif;
        font-size:16px;
    }
    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 500;
    }
    button{
        cursor: pointer;
    }
    
`;
