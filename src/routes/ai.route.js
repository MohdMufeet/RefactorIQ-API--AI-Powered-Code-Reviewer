const router = require("express").Router();
const { getResponse } = require("../controllers/ai.controller.js");

router.post("/get", getResponse);

module.exports = router;
