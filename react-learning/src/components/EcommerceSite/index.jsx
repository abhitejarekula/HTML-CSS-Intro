import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function EcommerceSite() {
  const tabs = [
    {
      name: "Shop",
      href: "#",
    },
    {
      name: "collective",
      href: "#",
    },
    {
      name: "Designers",
      href: "#",
    },
    {
      name: "About Us ",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-screen">
      <nav className="flex justify-between bg-slate-300 p-5">
        <div className="m-3">
          <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
          Cozy
        </div>

        <ul className="flex">
          {tabs.map(({ name, href }, index) => (
            <li className="m-3" key={index}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>

        <ul className="flex">
          <li className="m-3">
            <a>
              <FontAwesomeIcon icon={faBars} />
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
      </nav>
    </div>
  );
}
export default EcommerceSite;
