import {
	StyledAnnouncementNotification,
	StyledAnnouncementNotificationWrapper,
} from "./AnnouncementNotification.styled";

type AnnouncementNotificationProps = {
	children: React.ReactNode;
};

export const AnnouncementNotification = (
	props: AnnouncementNotificationProps
) => {
	return (
		<StyledAnnouncementNotificationWrapper>
			{props.children}
			<StyledAnnouncementNotification />
		</StyledAnnouncementNotificationWrapper>
	);
};
