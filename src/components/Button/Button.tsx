import { useState } from "react";
import { StyledButton } from "./Button.styled";
import type { ButtonProps } from "../../types/button";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<StyledButton
			onTouchStart={() => setIsPressed(true)}
			onTouchEnd={() => setIsPressed(false)}
			isPressed={isPressed}
			{...props}
		>
			{props.children}
		</StyledButton>
	);
};
