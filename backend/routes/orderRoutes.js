const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createOrder } = require("../controllers/orderController");

const router = express.Router();

router.post("/create", authMiddleware, createOrder);

module.exports = router;
