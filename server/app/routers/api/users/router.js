const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  add,
  destroyUser,
} = require("../../../controllers/userActions");
const { login, logout } = require("../../../controllers/AuthActions");
const { hashPassword, verifyCookie } = require("../../../services/auth");
// Route to get a list of items

// Route to get a specific item by ID
// router.get("/:id", read);

// Route to add a new item
router.get("/", browse);
router.post("/login", login);
router.get("/logout", logout);
router.post("/registers", hashPassword, add);
router.delete("/delete-user", verifyCookie, destroyUser);
/* ************************************************************************* */

module.exports = router;
