import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import EmployeeForm from "../components/EmployeeForm";
import API from "../services/api.js";

function AddEmployee() {
  const { fetchEmployees } = useContext(AuthContext);

  const addEmployee = async (employee) => {
    try {
      await API.post("/employees", employee);

      await fetchEmployees();
      alert("Employee Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Employee</h2>

      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
}

export default AddEmployee;
