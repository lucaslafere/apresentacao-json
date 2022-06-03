import { Link } from 'react-router-dom';
import { Container, Button, AnimatedText } from './MainScreen';
import styled from 'styled-components';

export default function ImageLoaderScreen() {
    return (
        <Container>
            <h1>O que é o Image Loader do Webpack e como usá-lo (sem Create React App)?</h1>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <AnimatedText><h2>teste?</h2></AnimatedText>
            <Link to={"/import"}>
                <Button>Clique aqui para começar!</Button>
            </Link>
        </Container>
    )
}