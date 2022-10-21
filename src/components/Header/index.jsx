import React from "react";

import { AiFillCaretDown } from "react-icons/ai";

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
  UserPicture,
  Wrapper,
} from "./styles";

export default function Header({ autenticado }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da Dio" style={{ width: 80 }} />
          </Link>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar....." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <Row>
              <UserPicture src="https://avatars.githubusercontent.com/u/85812823?v=4" />
              <AiFillCaretDown />
            </Row>
          ) : (
            <>
              <Link to="/">
                <MenuRight href="#">Home</MenuRight>
              </Link>
              <Link to="/login">
                <Button title="Entrar" />
              </Link>
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
