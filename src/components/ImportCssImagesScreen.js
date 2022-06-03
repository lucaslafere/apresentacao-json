import { Link } from 'react-router-dom';
import { Container, Button, AnimatedText } from './MainScreen';
import styled from 'styled-components';

export default function ImportCssImagesScreen() {
    return (
        <Container>
            <h1>Como importar CSS e Imagens dentro dos seus arquivos JS?</h1>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <Link to={"/randomhash"}>
                <Button>Clique aqui para começar!</Button>
            </Link>
        </Container>
    )
}