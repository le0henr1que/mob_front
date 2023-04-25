import { Container } from "../../Components/Container/index";
import Button from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Text } from "../../Components/Text";
import { Comment } from "../../Components/Comments";
import "./styles.css";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
//@ts-ignore
import pana from "../../Assests/pana.svg";
//@ts-ignore
import Notfound from "../../Assests/notfound.svg";
import ButtonStyle from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container-notfound">
          <div className="row-1">
            <Text variant="color-blue font-extrabold title-1">Ooops...</Text>
            <Text variant="font-regular  title-1">Página não existente</Text>
            <Text variant="muted font-regular subheadline">
              A página que procura não existe ou ocorreu outro erro.
            </Text>

            <ButtonStyle variant="medium-button" onClick={handleGoBack}>
              Voltar
            </ButtonStyle>
          </div>
          <div className="row-2">
            <img src={Notfound} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
