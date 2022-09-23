import React from "react";
import './header.css';
import PGH from '../../../assets/images/pgh-logo.svg';
const Header = () => {
  return (
    <>
      <header className="bg-white py-2 border-bottom border-light">
        <div className="container-fluid d-flex py-1">
          <a href="#">
            <img src={PGH} alt="pgh" />
          </a>
          <ul className="nav ms-auto mb-0">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Account</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">My Devices</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Tech Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-primary">File a Claim</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
