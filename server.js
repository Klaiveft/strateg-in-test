const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/route_user");
const app = require("./app")

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

require("./routes/route_user")(app);

app.listen(3000)
