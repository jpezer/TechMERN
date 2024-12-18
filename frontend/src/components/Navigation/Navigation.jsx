import "./Navigation.scss";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../../store/currency/currencySlice";
import { toggleLoginForm } from "../../store/loginRegister/loginRegisterSlice";
import { localStorageConfig } from "../../config/localStorageConfig";

const Navigation = () => {
    const { currency, symbol } = useSelector((state) => state.currencyStore);
    const { isLoginForm } = useSelector((state) => state.loginRegisterStore);
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem(localStorageConfig.CURRENCY, currency);
    }, [currency]);

    const changeCurrency = (e) => {
        dispatch(setCurrency(e.target.value));
    };
    const toggleView = () => {
        dispatch(toggleLoginForm(!isLoginForm));
    };

    return (
        <div>
            <header>
                <div className="container">
                    <div className="navigation-wrapper">
                        <div className="currency">
                            <label htmlFor="currency">Currency</label>
                            <select
                                name="currency"
                                id="currency"
                                onChange={changeCurrency}
                                defaultValue={currency}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="BAM">BAM</option>
                            </select>
                            <span>{symbol}</span>
                        </div>
                        <div className="navigation">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to={routesConfig.SHOP.url}>
                                            Shop
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={routesConfig.CONTACT.url}>
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={routesConfig.AUTHORIZATION.url}
                                            onClick={toggleView}
                                        >
                                            {isLoginForm ? "Register" : "Login"}
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navigation;
