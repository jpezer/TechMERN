import React from "react";

const Input = ({ type, id, placeholder, onChange }) => {
    return (
        <div>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
