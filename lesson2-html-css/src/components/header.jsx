import React from "react";
import "./reset.css";
import "./styles.css";
import "../script.js";
import logo from "../assets/logo-CLV.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div id="header" className="navbar">
      <a className="logo" href="https://www.cyberlogitec.com.vn/">
        <img src={logo} alt="CyberLogitec" />
      </a>

      <ul className="menu-list">
        <li className="menu-item">
          <a href="#Solutions">
            <span>Solutions</span>
            <FontAwesomeIcon icon={faChevronDown} className="icon-down" />
          </a>
          <ul className="subnav">
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Forwarding</a>
            </li>
            <li>
              <a href="">Container Tracking</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Factory</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#Solutions">
            <span>Services</span>
            <FontAwesomeIcon icon={faChevronDown} className="icon-down" />
          </a>
          <ul className="subnav">
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Software Developement</a>
            </li>
            <li>
              <a href="">Quality Assurance</a>
            </li>
            <li>
              <a href="">Global Service Desk</a>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <a href="#Solutions">
            <span>Careers</span>
            <FontAwesomeIcon icon={faChevronDown} className="icon-down" />
          </a>
          <ul className="subnav">
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Experienced Hire</a>
            </li>
            <li>
              <a href="">Fresher Training Program</a>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <a href="#Solutions">About Us</a>
        </li>
      </ul>

      <button className="contact-btn">Contact Us</button>
      <button className="mobile-menu-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="menu-btn"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </div>
  );
}
