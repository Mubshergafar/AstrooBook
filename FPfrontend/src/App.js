import "./App.css";
import HomePage from "./Components/Homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Login/Main";
import Register from "./Components/register/Register";
import Profile from "./Components/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={user ? <HomePage /> : <Main />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
