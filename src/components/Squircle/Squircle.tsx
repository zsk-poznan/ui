import { SmoothCorners } from "react-smooth-corners";
import type { SquircleProps } from "../../types/squircle";

export const Squircle: React.FC<SquircleProps> = ({
  corners,
  borderRadius,
  as,
  children,
  ...props
}) => {
  return (
    <SmoothCorners
      corners={corners ? corners : "180, 5"}
      borderRadius={borderRadius ? borderRadius : "12px"}
      as={as}
      {...props}
    >
      {children}
    </SmoothCorners>
  );
};
