import React from 'react';
import './layout.css'
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <nav className="help-nav">
        <ul>
          <li>
            <NavLink className="help-nav-link" activeClassName="active" to={"faq"}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className="help-nav-link" activeClassName="active" to={"contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="help-content">
        <Outlet />
      </main>
    </div>
  );
}

export default HelpLayout;

