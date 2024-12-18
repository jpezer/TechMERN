const AppError = require("./AppError");

module.exports = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch((err) => {
            console.log("catchAsync error", err);
            if (err.name === "ValidationError") {
                const messages = Object.values(err.errors).map(
                    (el) => el.message
                );
                const message = messages.join(". ");
                return next(new AppError(message, 400));
            }
            return next(new AppError("Server error", 500));
        });
    };
};
