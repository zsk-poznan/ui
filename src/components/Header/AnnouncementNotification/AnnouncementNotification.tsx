import {
  StyledAnnouncementNotification,
  StyledAnnouncementNotificationWrapper,
} from "./AnnouncementNotification.styled";
import type { AnnouncementNotificationProps } from "../../../types/Header";

export const AnnouncementNotification = ({
  children,
}: AnnouncementNotificationProps): JSX.Element => {
  return (
    <StyledAnnouncementNotificationWrapper>
      {children}
      <StyledAnnouncementNotification />
    </StyledAnnouncementNotificationWrapper>
  );
};
