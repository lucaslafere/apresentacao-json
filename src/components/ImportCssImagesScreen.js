import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function ImportCssImagesScreen() {
  return (
    <Container>
      <h1>Como importar CSS e Imagens dentro dos seus arquivos JS?</h1>
      <AnimatedText>
        <h2>
          Como já foi explicado anteriormente para facilitar o entendimento,
          farei apenas um resumo:
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Instalar os loaders desejados via npm (css-loader, style-loader,
          img-loader, file-loader)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Adicioná-los à seção "module" do seu webpack.config, conforme
          documentação
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Utilizar os loaders nos seus arquivos javascript, via import img from
          './file.png'; e import './style.css';
        </h2>
      </AnimatedText>
      <Link to={"/randomhash"}>
        <Button>Clique aqui para continuar! (o próximo demora viu...)</Button>
      </Link>
    </Container>
  );
}
