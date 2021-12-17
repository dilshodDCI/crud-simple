const express = require("express");
let router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers.js");

//http://localhost:5000/user/
router.route("/").get(getUsers); // print all users from DB (Database)

router.route("/create-user").post(createUser); //Creat a new user to DB

router.route("/:id").put(updateUser); // Update a user

router.route("/:id").delete(deleteUser); // Delete a user

module.exports = router;

//CRUD - Create, Read, Update, Delete
