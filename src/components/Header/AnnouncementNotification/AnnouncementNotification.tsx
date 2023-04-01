import {
	StyledAnnouncementNotification,
	StyledAnnouncementNotificationWrapper,
} from "./AnnouncementNotification.styled";
import type { AnnouncementNotificationProps } from "../../../types/Header";

export const AnnouncementNotification = (
	props: AnnouncementNotificationProps
): JSX.Element => {
	return (
		<StyledAnnouncementNotificationWrapper>
			{props.children}
			<StyledAnnouncementNotification />
		</StyledAnnouncementNotificationWrapper>
	);
};
