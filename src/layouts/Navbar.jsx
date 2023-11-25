import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        Income
      </NavLink>
      <NavLink className="nav-link" to="/expense">
        Expense
      </NavLink>
    </nav>
  );
};

export default Navbar;
