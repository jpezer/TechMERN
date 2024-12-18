import React from "react";

const Label = ({ children, htmlFor, color = true }) => {
    return (
        <div>
            <label htmlFor={htmlFor} style={{ color: color ? "" : "tomato" }}>
                {children}
            </label>
        </div>
    );
};

export default Label;
