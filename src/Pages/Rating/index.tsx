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
import rafiki from "../../Assests/rafiki.svg";
//@ts-ignore
import Type from "../../Assests/Group25.svg";
import ButtonStyle from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { Chart } from "../../Components/Chart";
import { Company } from "../../Components/LocalInfoHeader";

export function Rating() {
  const navigate = useNavigate();
  const data = [1, 7, 9, 5, 10];
  return (
    <>
      <Header />
      <Company />

      <div className="container-rating-main">
        <div className="container-rating-comments">
          <div className="comment-rating">
            <div className="container-rating-options">
              <Text variant="font-bold title-3">Avaliações</Text>
              <Text variant="font-regular subheadline">
                Ordenar por Mais Recente
              </Text>
            </div>
            <Comment
              author="Amanda"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={5}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              author="Joana Carolliny"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae. Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={2}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              author="Felipe Silva"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={2}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              author="Juninho "
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={1}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              author="Danilo Santos"
              title="Dificil acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={4}
              createdAt="02/19/2023 00:48 AM"
            />

            <Comment
              author="Nilson Ferreira"
              title="Local sem atendimento em libras"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={3}
              createdAt="02/19/2023 00:48 AM"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
