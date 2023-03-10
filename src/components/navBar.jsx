import React from "react";

const NavBar = ({ totalItems }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          className="nav-link disabled position-relative"
          href="/"
          tabIndex="-1"
          aria-disabled="true"
        >
          Корзина
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            <span className="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
