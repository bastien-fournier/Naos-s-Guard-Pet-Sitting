const express = require("express");

const router = express.Router();

const { browse, add } = require("../../../controllers/ReviewActions");
const { verifyCookie } = require("../../../services/auth");

router.get("/", browse);
router.post("/post-review", verifyCookie, add);

module.exports = router;
