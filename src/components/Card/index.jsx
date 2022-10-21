import React from "react";

import { TfiThumbUp } from "react-icons/tfi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

export default function Card() {
  

  // const dados = [
  //   {
  //     id: 1,
  //     imagemPerfil:
  //       "https://arquivo.devmedia.com.br/marketing/img/artigo-conceitos-fundamentais-de-banco-de-dados-1649.png",
  //     imagemPost:
  //       "https://arquivo.devmedia.com.br/marketing/img/artigo-conceitos-fundamentais-de-banco-de-dados-1649.png",
  //     nome: "Dario Reiddds",
  //     tempo: "10 minutos atrás",
  //     titulo:
  //       "Está com duvidas no desafio de projeto lógico para banco de dados?",
  //     post: "Hoje estou passando aqui para ajudar aqueles que estão com dificuldades no desafio de projeto lógico para banco de dados deECOMMERCE.....",
  //     tags: "#HTML #CSS #ReactJS",
  //   },
  // ];
  
  return (
    <>
      <CardContainer>
        <ImageBackground src="https://arquivo.devmedia.com.br/marketing/img/artigo-conceitos-fundamentais-de-banco-de-dados-1649.png" />
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/85812823?v=4" />
            <div>
              <h4>Dario Reis</h4>
              <p>10 minutos atrás</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>
              Está com duvidas no desafio de projeto lógico para banco de dados?
            </h4>
            <p>
              Hoje estou passando aqui para ajudar aqueles que estão com
              dificuldades no desafio de projeto lógico para banco de dados de
              ECOMMERCE.....
              <strong>Saiba Mais</strong>
            </p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #ReactJS</h4>
            <p>
              <TfiThumbUp /> 23
            </p>
          </HasInfo>
        </Content>
      </CardContainer>
    </>
  );
}
