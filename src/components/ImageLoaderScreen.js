import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import styled from "styled-components";
import { ImgBox } from "./WebpackLoadersScreen";

export default function ImageLoaderScreen() {
  return (
    <Container>
      <h1>
        O que é o Image Loader do Webpack e como usá-lo (sem Create React App)?
      </h1>
      <AnimatedText>
        <h2>
          Novamente, Image Loader é um "plugin" do webpack! (Inesperado né??)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Ele é parecido com o css-loader e style-loader, minificando suas{" "}
          <strong>imagens</strong>
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Porém, assim como o css e style loaders, o img-loader também tem seu
          par!
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Geralmente usa-se o <strong>file-loader</strong>, então, instalamos
          ambos pelo npm (npm i --save-dev img-loader file-loader)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Depois, importamos nossa imagem dentro de um arquivo JavaScript, como
          por exemplo: import img from './file.png';
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>E novamente, adicionamos o loader ao nosso webpack.config.js</h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Não irei repetir o código aqui pra evitar o tédio da apresentação, mas
          basta checar a documentação do loader :)
        </h2>
      </AnimatedText>
      <Link to={"/import"}>
        <Button>Clique aqui para começar!</Button>
      </Link>
    </Container>
  );
}
