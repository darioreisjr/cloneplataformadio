import Card from "../../components/Card";
import Header from "./../../components/Header/index";
import UserInfo from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from "./styles";

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo
            nome="Dario Reis"
            percentual={99}
            image="https://avatars.githubusercontent.com/u/85812823?v=4"
          />
          <UserInfo
            nome="Lázaro Pimentel"
            percentual={90}
            image="https://avatars.githubusercontent.com/u/79115354?v=4"
          />
          <UserInfo
            nome="Nathalia Cruz"
            percentual={87}
            image="https://avatars.githubusercontent.com/u/100943905?v=4"
          />
          <UserInfo
            nome="Daniela Salermi"
            percentual={76}
            image="https://avatars.githubusercontent.com/u/51088476?v=4"
          />
          <UserInfo
            nome="Manoela"
            percentual={75}
            image="https://avatars.githubusercontent.com/u/106315497?v=4"
          />
        </Column>
      </Container>
    </>
  );
}
