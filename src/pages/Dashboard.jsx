import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import EmployeeCard from "../components/EmployeeCard";
import Loader from "../components/Loader";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const { employees, loading, fetchEmployees } = useContext(AuthContext);
  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/employees/${id}`);
      await fetchEmployees();

      toast.success("Employee deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete employee");
    }
  };

  const editEmployee = (employee) => {
    navigate(`/edit/${employee._id}`);
  };

  if (loading) {
    return <Loader />;
  }
  if (employees.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>No Employees Found</h3>
        <p>Add your first employee.</p>
      </div>
    );
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
