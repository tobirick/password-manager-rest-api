const express = require("express");
const config = require("config");

const cors = require("./startup/cors")
const routes = require("./startup/routes")
const db = require("./startup/db")

const app = express();

cors(app);
routes(app);
db();

const port = process.env.PORT || config.get('port');
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
