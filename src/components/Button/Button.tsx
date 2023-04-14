import { StyledButton, StyledButtonRound } from "./Button.styled";
import { useBoolean } from "src/hooks";

type ButtonProps = {
	children: React.ReactNode;
	rounded?: boolean;
};

export const Button = (props: ButtonProps) => {
	const { value, setTrue, setFalse } = useBoolean(false);

	if (props.rounded) {
		return (
			<StyledButtonRound
				onTouchStart={setTrue}
				onTouchEnd={setFalse}
				isPressed={value}
				{...props}
			>
				{props.children}
			</StyledButtonRound>
		);
	} else {
		return (
			<StyledButton
				onTouchStart={setTrue}
				onTouchEnd={setFalse}
				isPressed={value}
				{...props}
			>
				{props.children}
			</StyledButton>
		);
	}
};
