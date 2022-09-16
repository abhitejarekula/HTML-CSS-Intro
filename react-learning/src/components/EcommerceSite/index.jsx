import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function EcommerceSite() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <nav className="flex justify-between bg-slate-300 p-5">
        <div className="m-3">
          <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
          Cozy
        </div>

        <div>
          <ul className="flex">
            <li className="m-3">
              <a>Shop</a>
            </li>
            <li className="m-3">
              <a>collective</a>
            </li>
            <li className="m-3">
              <a>Designers</a>
            </li>
            <li className="m-3">
              <a>About Us</a>
            </li>
            <li className="m-3">
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex">
            <li className="m-3">
              <a>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </a>
            </li>
            <li className="m-3">
              <a>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </a>
            </li>
            <li className="m-3">
              <a>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default EcommerceSite;
