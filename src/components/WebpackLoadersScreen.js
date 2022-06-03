import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import styled from "styled-components";
import print from "../assets/babel-loader.jpeg";

export default function WebpackLoadersScreen() {
  return (
    <Container>
      <h1>O que são Loaders do Webpack?</h1>
      <AnimatedText>
        <h2>Resumidamente, loaders são como plugins do Webpack</h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Podemos pensar que é parecido com o uso de libs, instaladas pelo npm
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Ou seja, ao rodar o comando npm i babel-loader, por exemplo, estamos
          deixando o plugin à nossa disposição
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Depois, basta configurar o plugin instalado (babel-loader) dentro do
          nosso arquivo "webpack.config.js"
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Acessando o arquivo, devemos adicionar um module com algumas
          configurações, segundo documentação:
        </h2>
      </AnimatedText>
      <ImgBox>
        <img src={print} alt="" />
      </ImgBox>
      <Link to={"/cssstyleloader"}>
        <Button>Clique aqui para continuar!</Button>
      </Link>
    </Container>
  );
}

const ImgBox = styled.div`
  width: 600px;
  height: 400px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #c2e9fb;
  border-radius: 20px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
export { ImgBox };
