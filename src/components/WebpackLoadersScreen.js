import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import styled from "styled-components";

export default function WebpackLoadersScreen() {
  return (
    <Container>
      <h1>- O que é serialização e deserialização? Quando precisamos usar essa técnica?</h1>
      <AnimatedText>
        <h2>Resumidamente, JSON codifica objetos em uma string, porque dados precisam ser byte strings</h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
        Serializar = converter um objeto nessa string
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
        Objeto: {'{foo: [1, 4, 7, 10], bar: "baz"}'}
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
        Serializar para JSON string = '{'{"foo": [1,4,7,10], "bar":"baz"}'}'
        </h2>
      </AnimatedText>
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
