import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function ImageLoaderScreen() {
  return (
    <Container>
      <h1>
        - Como podemos converter um Objeto JS em JSON e vice versa?
      </h1>
      <AnimatedText>
        <h2>
          É bem simples!
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          JSON.stringify() serializa um objeto pra string, portanto, transformando um Objeto JS para JSON ("stringificou" rs)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          JSON.parse() desserializa uma string para objeto, portanto, transformando a string objeto JSON para Objeto JS
        </h2>
      </AnimatedText>
      <Link to={"/import"}>
        <Button>Clique aqui para continuar!</Button>
      </Link>
    </Container>
  );
}
