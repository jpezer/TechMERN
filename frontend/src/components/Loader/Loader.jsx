import "./Loader.scss";
import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
    const { showLoader } = useSelector((state) => state.loaderStore);
    return (
        <>
            {showLoader ? (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            ) : null}
        </>
    );
};

export default Loader;
