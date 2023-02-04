import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
}

export default App;
