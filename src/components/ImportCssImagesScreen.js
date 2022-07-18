import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function ImportCssImagesScreen() {
  return (
    <Container>
      <h1>- O que acontece quando serializamos objetos que tenham uma função dentro? Por quê?</h1>
      <AnimatedText>
        <h2>
          Nenhuma função é serializável para JSON. JSON não suporta uma "function" como tipo de dado.
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Ele aceita strings, numeros, objetos, arrays, true, false, null. Mas não uma funçao.
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Aí vem a pergunta: e se eu fizer um .toString() na function? Ai ele serializa, mas na hora de
          desserializar, ela não vai virar uma função de volta.
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Além disso, o ambiente e o contexto de variáveis e estados numa função seriam desconhecidos para o JSON
          e para o novo ambiente após serializar e desserializar.
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2><a href="https://codesandbox.io/s/inspiring-buck-wyftvb?file=/src/index.js" target={"_blank"}>
        Vejamos um exemplo no codesandbox novamente, clicando aqui
        </a>
        </h2>
      </AnimatedText>
      <Link to={"/randomhash"}>
        <Button>Clique aqui para continuar! (o próximo é complicadinho, viu?!... kkk)</Button>
      </Link>
    </Container>
  );
}
