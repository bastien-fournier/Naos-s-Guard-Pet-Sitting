const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const reviewsRouter = require("./reviews/router");

router.use("/reviews", reviewsRouter);

/* ************************************************************************* */

module.exports = router;
