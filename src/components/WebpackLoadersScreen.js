import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

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

