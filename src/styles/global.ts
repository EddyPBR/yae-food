import { createGlobalStyle, css } from "styled-components";

import Exo2Bold from "@fontsource/exo-2/700.css";
import RobotoRegular from "@fontsource/roboto/400.css";
import RobotoBold from "@fontsource/roboto/700.css";

const Fonts = css`
  ${Exo2Bold}
  ${RobotoRegular}
  ${RobotoBold}
`;

export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    font: ${props => props.theme.fonts.text};
  }
`;
