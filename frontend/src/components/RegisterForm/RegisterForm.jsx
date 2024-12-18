import "./RegisterForm.scss";
import React, { useState } from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Button from "../Button/Button";
import { checkEmailValidation } from "../../utils/checkEmailValidation";
import { register } from "../../services/userService";
import { useDispatch } from "react-redux";
import { showLoader } from "../../store/loader/loaderSlice";
import { toast } from "react-toastify";
import { showLoginForm } from "../../store/loginRegister/loginRegisterSlice";
import { FaArrowRightLong } from "react-icons/fa6";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [isEmail, setIsEmail] = useState(true);
    const [isPassword, setIsPassword] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsername, setIsUsername] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        !data.email ? setIsEmail(false) : setIsEmail(true);
        !data.password ? setIsPassword(false) : setIsPassword(true);
        !data.username ? setIsUsername(false) : setIsUsername(true);
        !checkEmailValidation(data.email) ? setIsEmailValid(false) : setIsEmailValid(true);

        if (!data.email || !data.username || !data.password || !checkEmailValidation(data.email))
            return;

        dispatch(showLoader(true));
        const res = await register(data);
        dispatch(showLoader(false));
        if (res.status === "success") {
            toast.success(res.message);
            dispatch(showLoginForm());
        } else {
            toast.error(res.message);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        const newData = { ...data };
        newData[id] = value;
        setData(newData);
    };

    return (
        <div>
            <div className="register-form-wrapper">
                <div className="content">
                    <h3>Welcome to TechMern Shop</h3>
                    <p>
                        If already have an account please{" "}
                        <span onClick={() => dispatch(showLoginForm())}>
                            Go to login <FaArrowRightLong />{" "}
                        </span>
                    </p>
                </div>

                <form onSubmit={handleSubmit} action="" className="register-form">
                    <div className="input-wrapper">
                        <Label htmlFor="email" color={isEmail ? isEmailValid : isEmail}>
                            {isEmail
                                ? isEmailValid
                                    ? "Email"
                                    : "Email is not valid"
                                : "Email is required"}
                        </Label>
                        <Input
                            type="text"
                            id="email"
                            placeholder="email@example.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <Label htmlFor="username" color={isUsername}>
                            {isUsername ? "Username" : "Username is required"}
                        </Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Type username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <Label htmlFor="password" color={isPassword}>
                            {isPassword ? "Password" : "Password is required"}
                        </Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEye /> : <IoEyeOff />}
                        </span>
                    </div>

                    <Button className="btn btn-primary">Register</Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
