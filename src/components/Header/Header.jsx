import React from 'react';
import  './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
      <header>
        <NavLink
          to="/tree-selectors"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Simple selectors
        </NavLink>
        <NavLink
          to="/composite-selectors"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Composite selectors
        </NavLink>
        <NavLink
          to="/registration-form"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Registration
        </NavLink>
      </header>
  );
};

export default Header;
