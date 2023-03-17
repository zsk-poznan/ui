import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
  }
`;
