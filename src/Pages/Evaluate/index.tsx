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
//@ts-ignore
import { Company } from "../../Components/Company";
import { StarRating } from "../../Components/StarRating";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Evaluete() {
  const navigate = useNavigate();
  const ratingNote = (note: number) => {
    alert(note);
    return note;
  };

  return (
    <>
      <Header />
      {/* <Company/> */}
      <div className="container-main-evaluate">
        <div className="container-evaluate">
          <div className="container-title-evaluate">
            <Text variant="font-semibold title-3">
              Faça uma <span>avaliação</span>
            </Text>
            <Text variant="muthed font-regular body-small">
              Preencha e avalie o local para ajudar outras pessoas.{" "}
            </Text>
          </div>
          <div className="container-form-evaluate">
            <StarRating
              variant="nothing"
              rating={3}
              starType="select"
              onReturnRating={ratingNote}
              size="large"
            />
          </div>
          <form className="form-input">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="title"
                label="Titulo"
                variant="outlined"
                placeholder="Defina um titulo para sua avaliação"
              />

              <TextField
                id="description"
                label="Descrição"
                multiline
                rows={4}
                placeholder="Faça uma descrição do ocorrido ou situação"

                // defaultValue="Default Value"
              />
            </Box>
            <div className="container-evaluate-button">
              <Text variant="color-blue font-regular body-small">
                Não inclua dados pessoais
              </Text>
              <ButtonStyle variant="medium-button" type="submit">
                Avaliar
              </ButtonStyle>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
