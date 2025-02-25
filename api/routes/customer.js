const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// Define routes for handling CRUD operations for customers
router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
