import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import styled from "styled-components";
import print from "../assets/css-loader.jpeg";
import { ImgBox } from "./WebpackLoadersScreen";

export default function CssStyleLoaderScreen() {
  return (
    <Container>
      <h1>
        O que são o CSS Loader e o Style Loader do Webpack e como usá-los (sem
        Create React App)?
      </h1>
      <AnimatedText>
        <h2>
          Ambos são "plugins", e é recomendado o uso dos dois em conjunto, mas
          eles cumprem funções diferentes
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          O CSS Loader coleta por meio do Webpack o CSS de todos seus arquivos
          CSS em seu projeto
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Após essa coleta, ele os transforma em uma string, e é agora que o
          Style Loader entra em ação:
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Ele coleta a string gerada acima, e a insere dentro das tags
          {" <style>"} do seu index.html
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Para que isso aconteça, primeiro devemos instalá-los via npm (npm i
          --save-dev style-loader css-loader)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Depois, importamos nosso css dentro de um arquivo JavaScript, como por
          exemplo: import './style.css';
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>E como todo loader, precisamos adicioná-lo ao webpack.config.js</h2>
      </AnimatedText>
      <ImgBox>
        <img src={print} alt="" />
      </ImgBox>
      <Link to={"/imageloader"}>
        <Button>Clique aqui para começar!</Button>
      </Link>
    </Container>
  );
}
