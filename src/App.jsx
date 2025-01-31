// App.js
import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrintingProjects from "./pages/PrintingProjects";
import CodingProjects from "./pages/CodingProjects";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
