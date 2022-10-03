import React from "react";
import "./styles.css";

const Button = ({ className, variant = "default", children, ...props }) => {
	const classNames = `${
		variant === "unfilled" ? "unfilled-btn" : "default-btn"
	} ${className}`;

	return (
		<button type="button" className={classNames} {...props}>
			{children}
		</button>
	);
};

export default Button;
