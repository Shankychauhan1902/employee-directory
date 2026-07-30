import { useContext, useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchEmployees } = useContext(AuthContext);

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await API.get(`/employees/${id}`);
      setEmployee(res.data.employee);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmployee = async (data) => {
    try {
      await API.put(`/employees/${id}`, data);
      await fetchEmployees();
      alert("Employee Updated Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Failed to update employee");
    }
  };

  return (
    <div className="text-center mt-4">
      <h2>Edit Employee</h2>

      <EmployeeForm initialData={employee} onSubmit={updateEmployee} />
    </div>
  );
}

export default EditEmployee;
