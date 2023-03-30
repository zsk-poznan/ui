import type { Theme } from "../types";

const basicTheme = {
	fontFamily: "Poppins, sans-serif",
	classroomBgColor: {
		fredry: "#90A9CF",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	notificationDotColor: "#FF3030",
	borderRadius: "16px",
};

export const lightTheme: Theme = {
	...basicTheme,
	bgColor: "#EEF3FA",
	fontColor: "#313e53",
	borderColor: "#d2d3db",
	primaryColor: "#E7EEF5",
	secondaryColor: "#484b6a",
	classroomFontColor: "#fafafa",
	classroomBgColor: {
		fredry: "#90A9CF",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	boxShadow: `0px 0px 0px 4px rgb(255, 255, 255, 0.2),
  -9px -9px 16px 0 rgba(255, 255, 255, 0.6), 9px 9px 16px 0 rgb(163, 177, 198, 0.6)`,
	// bgColor: "#e5efff",
	// primaryColor: "#c3cedf",
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
  -9px -9px 16px 0 rgba(73, 73, 73, 0.4), 0px 0px 0px 2px rgb(255, 255, 255, 0.2)`,
};
