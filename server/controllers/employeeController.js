import Employee from "../models/Employee.js";

export const getEmployees = async (requestAnimationFrame, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      success: true,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: false,
      message: error.message,
    });
  }
};
