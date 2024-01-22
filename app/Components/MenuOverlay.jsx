import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div>
      <ul className="flex flex-col py4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.href} title={link.title}></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
