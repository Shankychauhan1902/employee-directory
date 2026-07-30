function EmployeeCard({ employee }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h4>{employee.name}</h4>
        <p>{employee.email}</p>
        <p>{employee.department}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
