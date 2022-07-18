import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";

export default function NewEndScreen() {
    return (
        <Container>
            <h1>- - Compare um objeto serializado em JSON, XML e YAML lado a lado</h1>
            <AnimatedText>
                <h2>
                    Como já vimos exemplos antes, vamos apenas colocar os formatos lado a lado, com os mesmos exemplos de antes
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2><a href="https://excalidraw.com/#json=38ldvhmEWsr7VLUbXAWk4,Xq1_a5sKZuh9B81gmadYIg" target={"_blank"}>
                    Link aqui, é só clicar
                </a>
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>Fim :)</h2>
            </AnimatedText>
            <Link to={"/"}>
                <Button>Clique aqui para voltar ao começo!</Button>
            </Link>
        </Container>
    );
}