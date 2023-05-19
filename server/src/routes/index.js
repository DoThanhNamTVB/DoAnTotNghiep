//admin
const adminAccountRouter = require("./adminAccountRoute");
//manager user
const managerUserRouter = require("./managerUserRoute");
//manager catagory
const managerCatagoryRouter = require("./managerCatagoryRoute");
//manager product
const managerProductRouter = require("./managerProductRoute");
//manager cart
const managerCartRouter = require("./managerCartRoute");
//manager Color
const managerColorRouter = require("./managerColorRoute");
//manager ProductColor
const managerProductColorRouter = require("./managerProductColorRoute");
//manager Order
const managerOrderRouter = require("./managerOrderRoute");
//manager setting
const settingRouter = require("./settingRoute");
//manage ProductFavourite
const managerProductFavouriteRouter = require("./managerProductfavouriteRoute");
//user
const authRouter = require("./auth");
//chart
const chatRouter = require("./chartRoute");

const initRoutes = (app) => {
    //admin
    app.use("/api/adminAccountRouter", adminAccountRouter);
    //manager user
    app.use("/api/managerUser", managerUserRouter);
    //manager catagory
    app.use("/api/managerCatagory", managerCatagoryRouter);
    //manager product
    app.use("/api/managerProduct", managerProductRouter);
    //manager cart
    app.use("/api/managerCart", managerCartRouter);
    //manager color
    app.use("/api/managerColor", managerColorRouter);
    //manager productColor
    app.use("/api/managerProductColor", managerProductColorRouter);
    //manager order
    app.use("/api/managerOrder", managerOrderRouter);
    //manager setting
    app.use("/api/setting", settingRouter);
    //manager setting
    app.use("/api/managerProductFavourite", managerProductFavouriteRouter);
    //user
    app.use("/api/auth", authRouter);
    //chart
    app.use("/api/chart", chatRouter);

    return app.use("/", (req, res) => {
        res.send("server on ...");
    });
};

module.exports = initRoutes;
