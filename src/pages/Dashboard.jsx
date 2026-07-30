import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import EmployeeCard from "../components/EmployeeCard";
import Loader from "../components/Loader";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { employees, loading, fetchEmployees } = useContext(AuthContext);
  const deleteEmployee = async (id) => {
    try {
      await API.delete(`/employees/${id}`);
      await fetchEmployees();
      alert("Employee Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("failed to delete employee");
    }
  };

  const editEmployee = (employee) => {
    navigate(`/edit/${employee._id}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>

      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-4 mb-3" key={employee._id}>
            <EmployeeCard
              employee={employee}
              onDelete={deleteEmployee}
              onEdit={editEmployee}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
