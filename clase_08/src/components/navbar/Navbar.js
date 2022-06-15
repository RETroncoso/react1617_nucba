import React from "react";
import {
  LogoStyled,
  NavbarContainerStyled,
  NavbarStyled,
} from "./NavbarStyles";
import Separador from "../separador/Separador";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate("/")}>
        <img
          alt="Logo de helado"
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1653953150/coding/logoPixel_qihcme.png"
        />
      </LogoStyled>
      <NavbarStyled>
        <Separador />
        Holu, aca van a ir los links a las rutas
        <Separador />
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
