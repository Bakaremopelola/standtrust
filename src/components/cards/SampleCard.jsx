import PropTypes from "prop-types";

const SampleCard = ({
    title = "Default Title",
    description = "Default description",
    bgColor = "bg-black",
    textColor = "text-white",
    height = "h-[30vh]",
    width = "w-[40vw] md:w-[20vw]",
    rounded = "rounded-lg",
    bgImage = "", // Added bgImage prop
}) => {
    return (
        <div
            className={`flex flex-col ${height} py-8 px-4 gap-4 ${width} ${rounded} ${bgColor} bg-cover bg-center`}
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
        >
            <h1 className={`font-bold ${textColor}`}>{title}</h1>
            <p className={`${textColor}`}>{description}</p>
        </div>
    );
};

// Props Validation with PropTypes
SampleCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    rounded: PropTypes.string,
    bgImage: PropTypes.string, // Validate bgImage as a string
};

SampleCard.defaultProps = {
    title: "Default Title",
    description: "Default description",
    bgColor: "bg-black",
    textColor: "text-white",
    height: "h-[30vh]",
    width: "w-[40vw] md:w-[20vw]",
    rounded: "rounded-lg",
    bgImage: "", // Default to no background image
};

export default SampleCard;
