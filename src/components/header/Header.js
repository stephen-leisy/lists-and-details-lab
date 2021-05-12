import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/" exact activeClassName="hidden">
          Home
        </NavLink>
        <NavLink to="/random" activeClassName="hidden">
          Random
        </NavLink>
      </div>
    );
  }
}
