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
import Rafiki1 from "../../Assests/success.svg";
import ButtonStyle from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export function SucessPage() {
  const navigate = useNavigate();

  const handleRegisterLocal = () => {
    navigate("/", { state: { from: "/" } });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container-local">
          <div className="row-2">
            <img src={Rafiki1} width={500} />
          </div>
          <div className="row-1">
            <Text variant="headline font-bold title-3">
              Tudo certo por <span>aqui!</span>
            </Text>

            <Text variant="muted font-bold subheadline">
              Um novo local foi cadastrado com sucesso!
            </Text>

            <ButtonStyle variant="medium-button" onClick={handleRegisterLocal}>
              Voltar para home
            </ButtonStyle>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
