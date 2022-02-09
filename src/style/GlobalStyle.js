import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Montserrat";
    }    

    .form-control{
        padding: 12px 20px;
        border-radius: 10px;
        color: ${colors.dark};

        &:hover, &:active, &:focus{
            box-shadow: none;
        }
    }
    .nav-link{
         width: 200px;
         padding: 12px 20px;
         border-radius: 10px;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: 600;
         font-size: 20px;
        color : black !important;
        text-decoration : none;
        text-align : center;
    }

    .styledBtn{
       padding: 10px 20px;
       border-radius: 10px;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        outline: none;

       font-weight: 600;
       font-size: 20px;
        background: #FFEC00;
        color : black !important;
        text-decoration : none;

    }
    .active{
        background: #FFEC00;
    }

`;

export default GlobalStyle;
