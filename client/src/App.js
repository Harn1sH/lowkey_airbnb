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
import NewPlace from "./components/account/NewPlace";
import Home from "./components/home/Home";
import MoreInfo from "./components/home/moreInfo";
import BookedInfo from "./components/booking/moreInfo";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/account/:subpage?"} element={<Account />} />
          <Route path={"/account/:subpage/:action"} element={<Account />} />
          <Route path={"/edit/:id"} element={<NewPlace />} />/
          <Route path={"/place/:id"} element={<MoreInfo />} />/
          <Route path={"/account/booking/:id"} element={<BookedInfo />} />/
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
