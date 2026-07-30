import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import EmployeeCard from "../components/EmployeeCard";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { employees, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>

      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-4 mb-3" key={employee._id}>
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
