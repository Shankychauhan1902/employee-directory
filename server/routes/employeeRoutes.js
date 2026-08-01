import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", protect, getEmployees);
router.get("/:id", protect, getEmployeeById);
router.post("/", protect, addEmployee);
router.put("/:id", protect, updateEmployee);
router.delete("/:id", protect, deleteEmployee);

export default router;
