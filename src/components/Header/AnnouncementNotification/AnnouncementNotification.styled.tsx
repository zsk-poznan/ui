import styled from "styled-components";

export const StyledAnnouncementNotificationWrapper = styled.span`
  display: flex;
  flex-direction: row;
`;

export const StyledAnnouncementNotification = styled.span`
  display: flex;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.notificationDotColor};
  }
`;
