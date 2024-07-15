import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-5 flex flex-col min-h-screen ">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
