import { MdEmail,MdLock } from 'react-icons/md'

import { useNavigate } from 'react-router-dom';

import Header from "./../../components/Header/index";
import Button from "../../components/Button";
import Input from "../../components/input";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

export default function Login() {

  const navigate = useNavigate()

  const handClickSignin = () => {
      navigate('/feed')
  }


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Já tem cadastro?</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form action="">
              <Input placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="btnEntrar" type="submit" onClick={handClickSignin} />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha.</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>

          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
