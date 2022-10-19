import React from "react";

import logo from "../../assets/logodio.webp";

import Button from "./../Button/index";

import { Link } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" style={{ width: 80 }} />
          <BuscarInputContainer>
            <Input placeholder="Buscar....." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <Link to="/">
            <MenuRight href="#">
              Home
            </MenuRight>
          </Link>
          <Link to="/login">
          <Button title="Entrar" />
          </Link>
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
}
