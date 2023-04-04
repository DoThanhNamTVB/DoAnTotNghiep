const express = require("express")
const homeController = require("../controllers/homeController")
const adminController = require("../controllers/adminController")

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/admin", adminController.gethomeAdmin);
    router.get("/crud", homeController.getCRUD);
    router.post("/postcrud",homeController.postCRUD);
    router.get("/thanhnam",(req,res) => {
        return res.send("Hello world with thanhnam");
    });

    return app.use("/",router);
}

module.exports = initWebRoutes;