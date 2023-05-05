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
//user
const authRouter = require("./auth");

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
    //user
    app.use("/api/auth", authRouter);

    return app.use("/", (req, res) => {
        res.send("server on ...");
    });
};

module.exports = initRoutes;
