import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import styled from "styled-components";

export default function CssStyleLoaderScreen() {
    return (
        <Container>
            <h1>O que são o CSS Loader e o Style Loader do Webpack e como usá-los (sem
                Create React App)?</h1>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <Link to={"/imageloader"}>
                <Button>Clique aqui para começar!</Button>
            </Link>
        </Container>
    );
}
