import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function EndScreen() {
  return (
    <Container>
      <h1>- O que é YAML? Como serializamos um objeto JS em YAML?</h1>
      <AnimatedText>
        <h2>
          YAML = Yet Another Markup Language
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
        Geralmente usado para configuraçoes, no lugar de JSON
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>JSON é melhor pra carregar dados, mais rígido, enquanto YAML é mais flexivel, e usa uma sintaxe meio bagunçada, vejamos uma comparação nos links a seguir:</h2>
      </AnimatedText>
      <AnimatedText>
        <h2><a href="https://prnt.sc/oO3RMW-C58HV" target={"_blank"}>JSON Version</a></h2>
      </AnimatedText>
      <AnimatedText>
        <h2><a href="https://prnt.sc/fnK0ja6MnhKU" target={"_blank"}>YAML Version, fonte: https://blog.stackpath.com/yaml/ </a></h2>
      </AnimatedText>
      <Link to={"/newend"}>
                <Button>Clique aqui para continuar! (Última tela)</Button>
            </Link>
    </Container>
  );
}
