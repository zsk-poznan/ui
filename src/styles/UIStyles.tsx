import { createGlobalStyle } from "styled-components";
import type { Theme } from "../types";

export const UIStyles = createGlobalStyle<{ theme: Theme }>`
  html, body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bgColor};
  }
`;
