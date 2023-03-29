import { useState } from "react";
import { StyledButtonRound } from "./ButtonRound.styled";

export const ButtonRound = ({ ...props }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <StyledButtonRound
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      isPressed={isPressed}
      {...props}
    >
      {props.children}
    </StyledButtonRound>
  );
};
