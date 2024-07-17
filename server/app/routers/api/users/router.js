const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse } = require("../../../controllers/userActions");

// Route to get a list of items

// Route to get a specific item by ID
// router.get("/:id", read);

// Route to add a new item
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
