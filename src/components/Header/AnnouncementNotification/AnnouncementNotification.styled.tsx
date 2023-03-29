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
    bottom: 3px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.notificationDotColor};
    border: 4px solid ${(props) => props.theme.bgColor};
    z-index: 9999;
    box-shadow: ${(props) => props.theme.boxShadow})};
  }
`;
