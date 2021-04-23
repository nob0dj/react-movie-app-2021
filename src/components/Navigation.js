import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return <nav className="nav">
    <Link to="/">Home</Link>
    {/* <Link to="/about" >About</Link> */}
    <Link
      to={{
        pathname: "/about",
        search: "?sort=name&limit=5",
        hash: "#the-hash",
        state: { fromDashboard: true } /* router props의 location객체에서 확인 */
      }}
    >About</Link>
  </nav>
}

export default Navigation;