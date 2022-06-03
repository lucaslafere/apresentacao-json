import { Link } from "react-router-dom";
import { Container, Button, AnimatedText } from "./MainScreen";
import { ImgBox } from "./WebpackLoadersScreen";

export default function RandomHashScreen() {
    return (
        <Container>
            <h1>
                Por que as imagens processadas pelo Image Loader contém um hash
                aleatório no nome?
            </h1>
            <AnimatedText>
                <h2>Chegou a hora da nerdice, vamos lá</h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Quando o webpack faz seu bundle (build), ele prepara e otimiza nossos
                    arquivos para serem lidos pelo navegador
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    No primeiro acesso ao site, o navegador guarda esses arquivos em <strong>cache</strong>, que é como uma memória
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    O navegador faz isso para otimizar o carregamento da página, evitando
                    recarregar arquivos que ele já conhece
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Ok, ótimo, mas há um problema nisso: é possível que existam mudanças
                    nesses arquivos <strong>não-lidas</strong> pelo navegador.
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Caso ele verifique no cache um arquivo com o mesmo nome
                    do arquivo "modificado", ele pode escolher não atualizá-lo
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Isso acontece porque, como ambos têm o mesmo nome, ele poupa o usuário de baixar novamente os arquivos
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Ou seja, mesmo atualizando seu site, usuários com certos navegadores podem <strong>não</strong> receber essa atualização
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Para solucionar isso, o Image-Loader (assim como os outros loaders vistos aqui), alteram os nomes dos arquivos
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Sendo assim, os arquivos sempre terão um <strong>novo nome</strong> após uma atualização, e portanto o cache será atualizado
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Isso acontece transformando o nome do arquivo, dado por você, em um <strong>hash aleatório</strong>, garantindo um nome único
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Esse processo acontece durante o <strong>build</strong> (quando rodamos o webpack, com npx webpack), e <strong>não</strong> está restrito à imagens
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    O mesmo acontece com nossos arquivos css (com css-loader) ou js (com o babel)
                </h2>
            </AnimatedText>
            <AnimatedText>
                <h2>
                    Um exemplo de Data URL, um hash aleatório em base64:
                </h2>
            </AnimatedText>
            <ImgBox>
                <img src="https://i.stack.imgur.com/8kCkH.png" alt="" />
            </ImgBox>
            <Link to={"/end"}>
                <Button>Clique aqui para continuar! (finalmente né...)</Button>
            </Link>
        </Container>
    );
}
