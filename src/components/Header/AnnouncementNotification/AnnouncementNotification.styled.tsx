import styled from "styled-components";

export const StyledAnnouncementNotificationWrapper = styled.span`
	display: flex;
	flex-direction: row;
`;

export const StyledAnnouncementNotification = styled.span`
	display: flex;
	align-self: flex-end;

	&::before {
		content: "";
		position: relative;
		bottom: 5px;
		right: 7px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: ${(props) =>
	`radial-gradient(circle, ${props.theme.notificationDotColor} 0%, #bc0d0d 100%`});
		z-index: 9999;
		box-shadow:
			${(props) => `${props.theme.tertiaryBoxShadow}`};
	}
`;
