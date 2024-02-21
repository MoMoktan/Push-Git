import React from "react";
import List from './NavList';
import './App.css';
import { NavLink } from "react-router-dom";

export default function Form() {
  const navlists = List.map((list, index) => (
    <div key={index}>
      
      <NavLink
        to={list.path}
        activeClassName="active"
        className="navlink"
      >
        {list.Name}
      </NavLink>
    </div>
  ));

  return (
    <div className="navbar"> 
      {navlists}
    </div>
  );
}
