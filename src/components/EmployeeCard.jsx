function EmployeeCard({ employee, onDelete, onEdit }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h4>{employee.name}</h4>
        <p>{employee.email}</p>
        <p>{employee.department}</p>

        <div className="d-flex gap-2">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => onEdit(employee)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(employee._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
