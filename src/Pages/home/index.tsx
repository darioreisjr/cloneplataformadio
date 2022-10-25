import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/index";

import Banner from "../../assets/bannerhome.png";

import { Container, TextContent, Title, TitleHightLight, ImgContainer, ImgContext, ContextContainer } from "./styles";
import Button from "../../components/Button";

export default function Home() {

  const navigate = useNavigate()

  const handClickSignin = () => {
      navigate('/login')
  }


  return (
    <>
      <Header />
      <Container>
        <ContextContainer>
          <Title>
            <TitleHightLight>
              Implemente <br />
            </TitleHightLight>
            o seu futuro global agora!
          </Title>

          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>

          <Button
            variant="secondary"
            title="Começar Agora"
            onClick={handClickSignin}
          />
        </ContextContainer>

        <ImgContainer>
          <ImgContext src={Banner} alt="Imagem principal" />
        </ImgContainer>
      </Container>
    </>
  );
}
