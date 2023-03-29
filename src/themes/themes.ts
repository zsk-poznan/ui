import type { Theme } from "../types";

const basicTheme = {
	fontFamily: "Poppins, sans-serif",
	classroomBgColor: {
		fredry: "#90A9CF",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	notificationDotColor: "#FF3030",
	borderRadius: "16px", // described in px
};

export const lightTheme: Theme = {
	...basicTheme,
	bgColor: "#e5efff",
	fontColor: "#313e53",
	borderColor: "#d2d3db",
	primaryColor: "#e4e5f1",
	secondaryColor: "#484b6a",
	classroomFontColor: "#fafafa",
	classroomBgColor: {
		fredry: "#90A9CF",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	boxShadow: `9px 9px 16px 0 rgba(0, 0, 0, 0.1),
  -9px -9px 16px 0 rgba(255, 255, 255, 0.45)`,
};

export const darkTheme: Theme = {
	...basicTheme,
	bgColor: "#303234",
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
	boxShadow: `9px 9px 16px 0 rgba(0, 0, 0, 0.4),
  -9px -9px 16px 0 rgba(73, 73, 73, 0.4)`,
};
