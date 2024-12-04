import { useState } from "react";
import PropTypes from "prop-types";

const Button = ({
    color = "bg-blue-500", 
    text = "Click Me", 
    width = "w-auto", 
    onClick,
    disabledAfterClick = false,
    delay = 2000, 
    isDisabled = false,
}) => {
    const [disabled, setDisabled] = useState(isDisabled);

    const handleClick = () => {
        if (onClick) onClick();

        if (disabledAfterClick) {
            setDisabled(true);
            setTimeout(() => setDisabled(false), delay);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`${color} ${width} text-white py-2 px-4 rounded-lg ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 transition-colors"
                }`}
        >
            {text}
        </button>
    );
};


Button.propTypes = {
    color: PropTypes.string, 
    text: PropTypes.string, // Validates that text is a string
    width: PropTypes.string, // Validates that width is a string
    onClick: PropTypes.func, // Validates that onClick is a function
    disabledAfterClick: PropTypes.bool, // Validates that disabledAfterClick is a boolean
    delay: PropTypes.number, // Validates that delay is a number
    isDisabled: PropTypes.bool, // Validates that isDisabled is a boolean
};

// Default Props
Button.defaultProps = {
    color: "bg-blue-500",
    text: "Click Me",
    width: "w-auto",
    onClick: null,
    disabledAfterClick: false,
    delay: 2000,
    isDisabled: false,
};

export default Button;
