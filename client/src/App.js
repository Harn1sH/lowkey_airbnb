import "./App.css";
import Header from "./components/header/header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Layout from "./components/Layout";
import Register from "./components/register/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./slice/reducers";
import Account from "./components/account/Account";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/account/:subpage?"} element={<Account />} />
          <Route path={"/account/:subpage/:action"} element={<Account />} />/
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
