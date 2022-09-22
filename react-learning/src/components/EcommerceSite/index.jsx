import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faBars,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

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
  const tabCons = [
    {
      id: 1,

      fontName: <FontAwesomeIcon icon={faBars} />,
      href: "#",
    },
    {
      id: 2,
      fontName: <FontAwesomeIcon icon={faMagnifyingGlass} />,
      href: "#",
    },
    {
      id: 3,
      fontName: <FontAwesomeIcon icon={faCartShopping} />,
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-screen">
      <nav className="flex justify-between bg-slate-300 p-5">
        <div className="m-3">
          <FontAwesomeIcon icon={faChair} />
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
          {tabCons.map(({ id, fontName, href }) => {
            return (
              <li className="m-3" key={id}>
                <a href={href}>{fontName}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default EcommerceSite;
