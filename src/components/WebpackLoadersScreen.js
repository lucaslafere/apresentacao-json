import { Link } from 'react-router-dom';
import { Container, Button, AnimatedText } from './MainScreen';
import styled from 'styled-components';

export default function WebpackLoadersScreen() {
    return (
        <Container>
            <h1>O que são Loaders do Webpack?</h1>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <Link to={"/cssstyleloader"}>
                <Button>Clique aqui para continuar!</Button>
            </Link>
        </Container>
    )
}