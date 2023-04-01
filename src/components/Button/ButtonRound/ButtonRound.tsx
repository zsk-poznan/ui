import { useState } from "react";
import { StyledButtonRound } from "./ButtonRound.styled";
import { ButtonProps } from "../../../types";

export const ButtonRound: React.FC<ButtonProps> = ({ ...props }) => {
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
