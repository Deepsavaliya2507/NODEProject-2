const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const config = require("./config/config");

const app = express();

/** upload image */
// app.use(express.static(`./public`));

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

/** Database connection */
connectDB();

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number 3000!");
});
