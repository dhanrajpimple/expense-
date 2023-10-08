const express = require("express");
const router = express.Router();
const { createExpense } = require("../controller/createExpense");
const { getExpense } = require("../controller/getExpense");
router.post("/createExpense", createExpense);
router.get("/getallExpense", getExpense);

module.exports = router;
