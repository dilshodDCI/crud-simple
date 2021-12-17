const express = require("express");
let router = express.Router();

//http://localhost:5000/items/books

router
  .route("/books")
  .get((req, res) => {
    res.send("GET: it's route is /items/books");
  })
  .post((req, res) => {
    res.send("POST: it's route is /items/books");
  });

//http://localhost:5000/items/books/:bookid
router
  .route("/books/:bookid")
  .get((req, res) => {
    res.send("GET: it's route is /items/books/" + req.params.bookid);
  })
  .put((req, res) => {
    res.send("PUT: it's route is /items/books/" + req.params.bookid);
  })
  .delete((req, res) => {
    res.send("DELETE: it's route is /items/books/" + req.params.bookid);
  });

module.exports = router;
