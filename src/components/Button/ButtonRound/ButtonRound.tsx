import { useState } from "react";
import { StyledButtonRound } from "./ButtonRound.styled";
import { ButtonProps } from "../../../types";

export const ButtonRound = ({ ...props }: ButtonProps): JSX.Element => {
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
