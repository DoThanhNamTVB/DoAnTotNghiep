const express = require("express");
const viewEngine = require("./config/viewEngine");
// const initWebRoutes = require("./routes/web");
const initRoutes = require("./routes");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const cors = require("cors");

let app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["POST", "GET", "DELETE", "PUT"],
    })
);

//config app - help read data from client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

viewEngine(app);
// initWebRoutes(app);
initRoutes(app);
connectDB();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backend nodejs is runing on the port " + port);
});
