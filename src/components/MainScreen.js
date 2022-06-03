import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainScreen() {
  return (
    <Container>
      <h1>Oi gente! Eu odeio fazer slides em PowerPoint etc, então...</h1>
      <h1>
        Cá estamos com um pequeno site pra pesquisa sobre Webpack Asset
        Management :)
      </h1>
      <Link to={"webpackloaders"}>
        <Button>Clique aqui para começar!</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1.5rem;

  h1 {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
  }
  h2 {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    animation: animate 2s ease-in-out;
  }
  @keyframes animate {
        0% {
            width: 0px;
            height: 0px;
        }
        30% {
            width: 50px;
            height: 0px;
        }
        60% {
            width: 50px;
            height: 80px;
        }
    }
`;
export { Container };
const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-family: "Recursive", sans-serif;

  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: center;
`;
export { Button };
