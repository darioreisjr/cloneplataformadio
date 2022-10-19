import { MdEmail,MdLock } from 'react-icons/md'


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
              <Button title="Entrar" variant="secondary" onClick={()=>(alert('Você entrou Parabéns'))} />
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
