const express = require("express");

const router = express.Router();

const { browse, add } = require("../../../controllers/ReviewActions");

router.get("/", browse);
router.post("/post-review", add);

module.exports = router;
