import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import EmployeeCard from "../components/EmployeeCard.jsx";
import Loader from "../components/Loader.jsx";

function Dashboard() {
  const { employees, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="mb-4">Employee Dashboard</h2>

      {employees.map((employee) => (
        <EmployeeCard key={employee._id} employee={employee} />
      ))}
    </div>
  );
}

export default Dashboard;
