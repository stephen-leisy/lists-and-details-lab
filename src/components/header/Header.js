import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" exact activeClassName="hidden">
          Home
        </NavLink>
        <NavLink to="/random" activeClassName="hidden">
          Random
        </NavLink>
      </header>
    );
  }
}
