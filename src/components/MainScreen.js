import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainScreen() {
  return (
    <Container>
      <h1>Oi gente! Eu odeio fazer slides em PowerPoint etc, então...</h1>
      <AnimatedText>
        <h2>
          Cá estamos com um pequeno site pra pesquisa sobre Webpack Asset
          Management :)
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h2>Ps: Não deu tempo de aprender scrollIntoView no React :(</h2>
      </AnimatedText>
      <AnimatedText>
        <h2>Então vamos scrollar manualmente mesmo</h2>
      </AnimatedText>
      <Link to={"/webpackloaders"}>
        <Button>Clique aqui para começar!</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 120vh;
  gap: 1rem;
  padding: 3rem;

  h1 {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const AnimatedText = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  h2 {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    animation: animate 2s ease-in-out forwards;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
  }
  h2:before {
    content: "•";
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
    100% {
      width: 50px;
      height: 80px;
    }
  }
`;
export { Container };
export { AnimatedText };

const Button = styled.button`
  width: 100%;
  border-radius: 20px;
  border: none;
  font-family: "Recursive", sans-serif;

  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  :hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
export { Button };
