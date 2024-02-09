import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconResponsiveMenuArea, Nav } from "./styles";
import { CgMenu, CgCloseO } from "react-icons/cg";

export const Menu = () => {
  const [responsiveMenuIsSelected, setResponsiveMenuIsSelected] =
    useState(false);

  return (
    <>
      <IconResponsiveMenuArea
        responsiveMenuIsSelected={responsiveMenuIsSelected}
        onClick={() => setResponsiveMenuIsSelected(!responsiveMenuIsSelected)}
      >
        {responsiveMenuIsSelected ? <CgCloseO /> : <CgMenu />}
      </IconResponsiveMenuArea>

      <Nav responsiveMenuIsSelected={responsiveMenuIsSelected}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projetos">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contact</NavLink>
          </li>
        </ul>
      </Nav>
    </>
  );
};
