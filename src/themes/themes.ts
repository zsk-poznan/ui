import type { Theme } from "../types";

const basicTheme = {
  fontFamily: "Poppins, sans-serif",
  classroomBgColor: {
    fredry: "#90A9CF",
    bukowska: "#E07474",
    wf: "#7CE074",
  },
  notificationDotColor: "CD00000",
};

export const lightTheme: Theme = {
  ...basicTheme,
  bgColor: "#fafafa",
  fontColor: "#1A1A1A",
  borderColor: "#d2d3db",
  primaryColor: "#e4e5f1",
  secondaryColor: "#484b6a",
  classroomFontColor: "#fafafa",
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
