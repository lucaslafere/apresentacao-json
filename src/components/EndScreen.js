import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import styled from "styled-components";

export default function EndScreen() {
  return (
    <Container>
      <h1>Fim da apresentação! :) Mas antes, um recado:</h1>
      <AnimatedText>
        <h2>
          Os nossos loaders (que sâo como plugins do Webpack) podem ter plugins
          dentro deles
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Por isso, não devemos chamar loaders de plugins, apesar das analogias
          feitas para facilitar o entendimento
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>teste?</h2>
      </AnimatedText>
      <AnimatedText>
        <h2>teste?</h2>
      </AnimatedText>
      <Link to={"/"}>
        <Button>Clique aqui para voltar ao começo!</Button>
      </Link>
    </Container>
  );
}
