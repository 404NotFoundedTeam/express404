import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Montserrat";
        ::-webkit-scrollbar {
        width: 2px;
        }

/* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    }    

    .form-control{
        padding: 12px 20px;
        border-radius: 10px;
        color: ${colors.dark};

        &:hover, &:active, &:focus{
            box-shadow: none;
        }
    }

    .styledBtn{
        min-width: 200px;
       padding: 12px 20px;
       border-radius: 10px;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       font-weight: 600;
        font-size: 20px;
    }

`;

export default GlobalStyle;
