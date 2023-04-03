export type HeaderProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type AnnouncementNotificationProps = {
	children: React.ReactNode;
};

export type DateProps = {
	date: string | Date;
} & React.HTMLAttributes<HTMLSpanElement>;

export type LogoProps = {
	label: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export type TitleProps = {
	headerTitle: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;
