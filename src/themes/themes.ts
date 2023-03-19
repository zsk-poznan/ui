import type { Theme } from "../types";

const basicTheme = {
  fontFamily: '"Inter", sans-serif',
  classroomBgColor: {
    fredry: "#90A9CF",
    bukowska: "#E07474",
    wf: "#7CE074",
  },
};

export const lightTheme: Theme = {
  ...basicTheme,
  bgColor: "#ffffff",
  fontColor: "#2E3B4E",
  borderColor: "#C2D2EB",
  primaryColor: "#E6ECF6",
  secondaryColor: "#A9B3C3",
  classroomFontColor: "#ffffff",
  classroomBgColor: {
    fredry: "#90A9CF",
    bukowska: "#E07474",
    wf: "#7CE074",
  },
};

export const darkTheme: Theme = {
  ...basicTheme,
  bgColor: "#15131E",
  fontColor: "#F5F5F7",
  borderColor: "#4E5E76",
  primaryColor: "#211E2B",
  secondaryColor: "#9AA5B6",
  classroomFontColor: "#2E3B4E",
  classroomBgColor: {
    fredry: "#C2D2EB",
    bukowska: "#E07474",
    wf: "#7CE074",
  },
};
