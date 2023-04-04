const express = require("express")
const viewEngine = require("./config/viewEngine")
const initWebRoutes = require("./route/web")
const connectDB = require("./config/connectDB")
require('dotenv').config();

let app = express();

//config app

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("Backend nodejs is runing on the port "+ port);
});