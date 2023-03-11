import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../component/nav/Nav.css';

const NavLayout = () => {
  return (
    <div className="nav-layout">
      <nav className="nav">
        <ul>
          <li>
            <NavLink className="nav-link"  to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link"  to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link"  to={"/carrers"}>
              Carriers
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link"  to={"/help"}>
              Help
            </NavLink>
          </li>

        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default NavLayout;
