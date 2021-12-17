const express = require("express");
const app = express();
const items = require("./routes/items.js");
const usersRoute = require("./routes/usersRoute.js");
const mongoose = require("mongoose");

// ** CONNECT TO DB ***
//mongoose.connect("http//localhost:27017/db_name")
mongoose.connect(
  "mongodb+srv://dilshodDCI:dilshodDCI123@cluster0.ldws3.mongodb.net/mentor?retryWrites=true&w=majority",
);

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("Database connected ...");
});

app.use(express.urlencoded({ extended: true }));

const port = process.env.port || 5000;

//***ROUTES***

//http://localhost:5000/items
app.use("/items", items);
//http://localhost:5000/user
app.use("/user", usersRoute);

app.get("/", (req, res) => {
  res.send("Hi JavaScript!!!!");
});

app.listen(port, () => {
  console.log("Listening on port:.... ", port);
});
