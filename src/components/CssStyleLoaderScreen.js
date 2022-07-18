import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function CssStyleLoaderScreen() {
  return (
    <Container>
      <h1>
        - O que é e quais as regras do formato JSON?
      </h1>
      <AnimatedText>
        <h2>
          JSON = JavaScript Object Notation, é um formato leve de guardar e transportar dados, e suas regras são:
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          1 - Os dados devem ter um nome e um valor {'{"name": "value"'}
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          2 - Os dados sao separados por virgula {'{"key": "value", "foo": "bar", "number": 23}'}
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Ps: O primeiro dado se chama key (como visto acima, e value é o valor dessa key)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          3 - Os dados JSON devem ser strings com "aspas duplas", tanto keys quanto values, diferente de Objetos JavaScript, que poderiam ser {'{key: "value", foo: "bar"}'}
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>
          Ps: Repare que números nao precisam das "aspas duplas", como em {'{"number": 23}'}
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>4 - É cercado por chaves, como visto acima</h2>
      </AnimatedText>
      <AnimatedText>
        <h2>5 - colchetes seguram arrays {'{"name": "value", "foo": "bar", "demo": [{"arrayElement": "value", "arrayElement2": "value"}]}'}
        </h2>
      </AnimatedText>
      <Link to={"/imageloader"}>
        <Button>Clique aqui para continuar!</Button>
      </Link>
    </Container>
  );
}
