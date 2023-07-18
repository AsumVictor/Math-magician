import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="w-full sticky top-0  z-10 px-3 py-2 flex flex-row justify-between bg-white shadow-md h-[1.5cm] items-center">
        <Link to="/" className="font-extrabold md:text-3xl text-blue-800">
          Math Magician
        </Link>
        <nav className="flex flex-row gap-3">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive
              ? 'text-blue-900 font-semibold py-1 px-2 border-b-4 border-b-blue-800'
              : 'font-semibold py-1 px-2 border-b-4 border-b-transparent hover:border-b-blue-800')}
          >
            Home
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive
              ? 'text-blue-900 font-semibold py-1 px-2 border-b-4 border-b-blue-800'
              : 'font-semibold py-1 px-2 border-b-4 border-b-transparent hover:border-b-blue-800')}
          >
            Calculator
          </NavLink>
          <NavLink
            to="/quote"
            className={({ isActive }) => (isActive
              ? 'text-blue-900 font-semibold py-1 px-2 border-b-4 border-b-blue-800'
              : 'font-semibold py-1 px-2 border-b-4 border-b-transparent hover:border-b-blue-800')}
          >
            Quotes
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
