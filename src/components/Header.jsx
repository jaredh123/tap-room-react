import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>The Tap Room</h1>
      <Link to="/">Beer Menu</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
