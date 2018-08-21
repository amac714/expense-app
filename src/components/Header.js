import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expense App</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home </NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expenses </NavLink>
  </header>
);

export default Header;