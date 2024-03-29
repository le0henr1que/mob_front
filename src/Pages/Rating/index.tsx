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
import { useNavigate, useParams } from "react-router-dom";
import { Chart } from "../../Components/Chart";
import { Company } from "../../Components/LocalInfoHeader";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { CircleLoad } from "../../Components/circleLoad";
import { getInitials } from "../../utils/GetInitials";

export function Rating() {
  const [local, setLocal] = useState<any>(null);
  const [load, setLoad] = useState<boolean>(false);

  const navigate = useNavigate();
  const data = [1, 7, 9, 5, 10];
  const { id } = useParams();

  useEffect(() => {
    const handleGetLocalInfo = async () => {
      setLoad(true);
      await api
        .get(`/local/${id}`)
        .then(async (content) => {
          await setLocal(content.data.local);
          // console.log(content.data)
          setLoad(false);
        })
        .catch((error) => {
          setLoad(false);
        });
    };
    handleGetLocalInfo();
  }, []);

  if (local === null) {
    return <CircleLoad />;
  }

  return (
    <>
      <Header />
      <div className="content-main-company">
        <div className="content-rating-main">
          <div className="info-company">
            <div className="container-banner-option-company"></div>
            <div className="circle-white-avatar">
              <div className="circle-logo-company">
                {getInitials(local.name)}
              </div>
            </div>
          </div>

          <div className="company">
            <div className="company-search"></div>

            <div className="company-comments"></div>
          </div>
        </div>
      </div>

      {/* <Company name={local.name} />
    

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
      </div> */}

      <Footer />
    </>
  );
}
