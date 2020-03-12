import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <p>Logout</p>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default NavBar;
