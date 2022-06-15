import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
  username: "",
  password: "",
};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuth(true);
      setUser(localStorage.getItem("user"));
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      alert("Completa correctamente los datos");
      return;
    }

    setUser(form.username);
    setForm(initialState);
    setIsAuth(true);

    localStorage.setItem("user", form.username);

    navigate(`/usuario/${form.username}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setIsAuth(false);
    setUser("");
  };

  const data = { isAuth, form, user, handleChange, handleSubmit, handleLogout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
