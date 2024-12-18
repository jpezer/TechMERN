const Users = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.register = catchAsync(async (req, res, next) => {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
        const newUser = Users(req.body);
        const saveNewUser = await newUser.save();
        return res.status(200).json({
            status: "success",
            message: "User created",
        });
    } else {
        return next(new AppError("User already exists", 409));
    }
});

exports.login = catchAsync(async (req, res, next) => {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
        return next(new AppError("User not found. Please register", 401));
    }
    if (user) {
        if (user.password === req.body.password) {
            return res.status(200).json({
                status: "success",
                message: "User logged in",
            });
        } else {
            return next(new AppError("Incorrect credentials", 401));
        }
    } else {
        return next(new AppError("User not found", 404));
    }
});
