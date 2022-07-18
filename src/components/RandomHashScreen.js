import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function RandomHashScreen() {
    return (
        <Container>
            <h1>
                - O que é XML? Como serializamos um objeto JS em XML?
            </h1>
            <AnimatedText>
                <h2>XML = eXtensible Markup Language (parecido com HTML), guarda dados para serem transportados</h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    XML "nao faz nada", é apenas informaçao dentro de tags parecidas com html
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2><a href="https://codesandbox.io/s/pedantic-rosalind-r5d8uf?file=/src/index.js" target={"_blank"}>
                    Um exemplo de formato XML pode ser visto aqui:</a>
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                XML guarda dados, HTML mostra dados
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2><a href="https://codesandbox.io/s/nervous-cohen-6j2vo9?file=/src/index.js" target={"_blank"}>
                    Para serializar um Objeto JS em XML, seria possível com o seguinte código, visto no codesandbox
                    </a>
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                Mas sinceramente? É mais simples usar uma lib xml-to-json, pode dar um stringify no objeto JS para JSON, e depois utilizar a lib
                </h2>
            </AnimatedText>
            <Link to={"/end"}>
                <Button>Clique aqui para continuar!</Button>
            </Link>
        </Container>
    );
}
