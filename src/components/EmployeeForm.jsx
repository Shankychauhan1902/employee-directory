import { useRef, useState, useEffect } from "react";

function EmployeeForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const nameRef = useRef();

  useEffect(() => {
    setName(initialData.name || "");
    setEmail(initialData.email || "");
    setDepartment(initialData.department || "");
  }, [initialData]);

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
    if (!initialData._id) {
      setName("");
      setEmail("");
      setDepartment("");
      nameRef.current.focus();
    }
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

      <button className="btn btn-primary">
        {initialData._id ? "Update Employee" : "Save Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;
