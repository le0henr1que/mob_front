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

export function MyRating() {
  const navigate = useNavigate();
  const data = [1, 7, 9, 5, 10];
  return (
    <>
      <Header />
      <div className="container-myratings-main">
        <div className="container-myratings-comments">
          <div className="comment-myratings">
            <div className="container-myratings-options">
              <Text variant="font-bold title-3">Minhas Avaliações</Text>
              <Text variant="font-regular subheadline">
                Ordenar por Mais Recente
              </Text>
            </div>
            <Comment
              variant="muthed-avatar"
              author="Lojas Brasileiras"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={5}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              variant="muthed-avatar"
              author="Lojas Brasileiras"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae. Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={2}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              variant="muthed-avatar"
              author="Lojas Brasileiras"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={2}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              variant="muthed-avatar"
              author="Lojas Brasileiras"
              title="Sem Rampa de acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={1}
              createdAt="02/19/2023 00:48 AM"
            />
            <Comment
              variant="muthed-avatar"
              author="Lojas Brasileiras"
              title="Dificil acesso"
              comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae."
              rating={4}
              createdAt="02/19/2023 00:48 AM"
            />

            <Comment
              variant="muthed-avatar"
              author="Lojas Brasileiras"
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
