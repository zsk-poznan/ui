import { SmoothCorners } from "react-smooth-corners";
import { StyledButton } from "./Button.styled";
import type { ButtonProps } from "../../types/button";

export const Button: React.FC<ButtonProps> = ({
  label,
  borderRadius,
  corners,
  ...props
}) => {
  return (
    <SmoothCorners
      corners={corners ? corners : "180, 5"}
      borderRadius={borderRadius ? borderRadius : "12px"}
      as={StyledButton}
      {...props}
    >
      {label}
    </SmoothCorners>
  );
};
