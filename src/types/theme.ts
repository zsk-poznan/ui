export type Theme = {
	fontFamily: string;
	bgColor: string;
	fontColor: string;
	secondaryFontColor: string;
	borderColor: string;
	primaryColor: string;
	secondaryColor: string;
	tertiaryColor: string;
	classroomFontColor: string;
	classroomBgColor: {
		fredry: string;
		bukowska: string;
		wf: string;
	};
	boxShadow: string;
	secondaryBoxShadow: string;
	tertiaryBoxShadow: string;
	dropShadow: string;
};

export type ThemeProviderProps = {
	children: React.ReactNode;
	theme: Theme | React.Dispatch<React.SetStateAction<Theme>>;
};
