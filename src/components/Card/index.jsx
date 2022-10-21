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
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/85812823?v=4" />
          <div>
            <h4>Dario Reis</h4>
            <p>10 minutos atrás</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            quis excepturi iste architecto et deleniti, voluptate rem nulla ex
            pariatur quasi ipsum doloribus enim ea ut quas, vitae totam? Sint.
            <strong>Saiba Mais...</strong>
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
  )
}
