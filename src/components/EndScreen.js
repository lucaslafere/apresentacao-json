import { Link } from 'react-router-dom';
import { Container, Button, AnimatedText } from './MainScreen';
import styled from 'styled-components';

export default function EndScreen() {
    return (
        <Container>
            <h1>Por que as imagens processadas pelo Image Loader contém um hash aleatório no nome? (dica: tem a ver com Cache do navegador!)</h1>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <Link to={"/"}>
                <Button>Clique aqui para começar!</Button>
            </Link>
        </Container>
    )
}