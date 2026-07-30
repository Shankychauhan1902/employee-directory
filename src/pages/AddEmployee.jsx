import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
  const { employees, setEmployees } = useContext(AuthContext);

  const addEmployee = (employee) => {
    const newEmployee = {
      id: Date.now(),
      ...employee,
    };
    console.log("Before:", employees);
    setEmployees([...employees, newEmployee]);
    console.log("Adding:", newEmployee);
    alert("Employee Added");
  };

  return (
    <div>
      <h2 className="mb-4">Add Employee</h2>

      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
}

export default AddEmployee;
