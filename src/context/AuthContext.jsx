import { createContext, useEffect, useState } from "react";
import API from "../services/api.js";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data.employees);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        employees,
        setEmployees,
        loading,
        fetchEmployees,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
