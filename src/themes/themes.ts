import type { Theme } from "./themes.d";

const basicTheme = {
	fontFamily: "Poppins, sans-serif",
	classroomBgColor: {
		fredry: "#90A9CF",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	notificationDotColor: "#e41111",
	borderRadius: "12px",
};

export const lightTheme: Theme = {
	...basicTheme,
	bgColor: "#E7E7EF",
	fontColor: "#333842",
	secondaryFontColor: "#9AA5B6",
	borderColor: "#d2d3db",
	primaryColor: "#E7EEF5",
	secondaryColor: "#484b6a",
	tertiaryColor: "#c3cedf",
	classroomFontColor: "#fafafa",
	classroomBgColor: {
		fredry: "#90A9CF",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	primaryShadow: "rgb(255, 255, 255, 0.2)",
	secondaryShadow: "rgb(255, 255, 255, 0.6)",
	tertiaryShadow: "rgb(163, 177, 198, 0.6)",
	boxShadow: "0px 0px 0px 4px rgb(255, 255, 255, 0.2)",
	secondaryBoxShadow: "-9px -9px 16px 0 rgba(255, 255, 255, 0.6)",
	tertiaryBoxShadow: "9px 9px 16px 0 rgb(163, 177, 198, 0.6)",
	dropShadow: "9px 9px 16px rgb(163, 177, 198, 0.6)",
};

export const darkTheme: Theme = {
	...basicTheme,
	bgColor: "#303234",
	fontColor: "#FFFFFF",
	secondaryFontColor: "#9AA5B6",
	borderColor: "#4E5E76",
	primaryColor: "#211E2B",
	secondaryColor: "#9AA5B6",
	tertiaryColor: "#292B2E",
	classroomFontColor: "#2E3B4E",
	classroomBgColor: {
		fredry: "#C2D2EB",
		bukowska: "#E07474",
		wf: "#7CE074",
	},
	primaryShadow: "rgb(0, 0, 0, 0.1)",
	secondaryShadow: "rgb(73, 73, 73, 0.6)",
	tertiaryShadow: "rgba(0, 0, 0, 0.6)",
	boxShadow: "0px 0px 0px 4px rgb(0, 0, 0, 0.1)",
	secondaryBoxShadow: "-9px -9px 16px 0 rgb(73, 73, 73, 0.6)",
	tertiaryBoxShadow: "9px 9px 16px 0 rgba(0, 0, 0, 0.6)",
	dropShadow: "9px 9px 16px rgba(0, 0, 0, 0.6)",
};
