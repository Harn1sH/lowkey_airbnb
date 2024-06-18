import "./App.css";
import Header from "./components/header/header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Layout from "./components/Layout";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
