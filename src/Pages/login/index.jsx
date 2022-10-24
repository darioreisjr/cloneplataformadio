import { MdEmail, MdLock } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "./../../components/Header/index";
import Button from "../../components/Button";
import Input from "../../components/input";

import { api } from "../../services/api";

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

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não e valido")
      .required("Compo Obrigatorio"),
    password: yup
      .string()
      .min(3, "no minimo 3 caracterer")
      .required("Campo Obrigadorio"),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async formData => {
    try {
      const {data} = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`)
        if(data.length === 1) {
          navigate("/feed");
        } else {
          alert('Email ou senha invalido')
        }
    } catch {
      alert("Houve um erro, tente novamente")
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="btnEntrar"
                type="submit"
                // onClick={handClickSignin}
              />
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
