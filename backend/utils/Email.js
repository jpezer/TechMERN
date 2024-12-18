// module.exports = class Email {
//     constructor(user, url) {
//         this.to = user.email;
//         this.from = "TechShop <pezerjosip9@gmail.com>";
//         this.username = user.username;
//         this.url = url;
//     }

//     newTransport() {
//         if (process.env.NODE_ENV === "production") {
//             return;
//         }else{
//             return nodemailer.createTransport({
//                 service: "Gmail",
//                 auth: {
//                     user: process.env.EMAIL_USERNAME,
//                     pass: process.env.EMAIL_PASSWORD,
//                 },
//             });
//         }
//     }
// };
