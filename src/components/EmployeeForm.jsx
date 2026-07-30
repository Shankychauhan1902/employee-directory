import { useRef, useState } from "react";

function EmployeeForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [department, setDepartment] = useState(initialData.department || "");

  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !department) {
      alert("All field are required");
      return;
    }

    onSubmit({
      name,
      email,
      department,
    });

    setName("");
    setEmail("");
    setDepartment("");

    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>

        <input
          ref={nameRef}
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>

        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Department</label>
        <input
          className="form-control"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>

      <button className="btn btn-primary">Save Employee</button>
    </form>
  );
}

export default EmployeeForm;
