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
import ButtonStyle from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <div className="main-card">
          <div className="card">
            <img src={pana} />
            <div className="card-title">
              <Text variant="font-bold headline">
                Procure por um <span>local</span>
              </Text>
            </div>
            <div className="card-text">
              <Text variant="muted font-regular subheadline">
                Digite o nome de uma empresa ou estabelecimento e mostraremos à
                você, se esses ambientes são acessiveis ou possuel
                acessibilidade.
              </Text>
            </div>
            <div className="card-input">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="search-local"
                  label="Pesquisar..."
                  variant="outlined"
                />
              </Box>
              {/* <Input variant="default" icon={true} placeholder="Pesquisar"/> */}
            </div>
            <div className="card-text-last">
              <Text variant="muted font-regular body">
                Não encontrou o local? <a href="/local">Clique aqui</a>
              </Text>
            </div>
          </div>

          <div className="card">
            <img src={rafiki} />
            <div className="card-title">
              <Text variant="font-bold headline">
                Cadastre um <span>local</span>
              </Text>
            </div>
            <div className="card-text">
              <Text variant="muted font-regular subheadline">
                Quer que sua empresa seja vista como um ambiente acessível a
                todos? cadastre ela em nosso site!
              </Text>
            </div>
            <div className="card-buttom">
              <ButtonStyle
                variant="medium-button"
                onClick={() => navigate("/local")}
              >
                Cadastre um local
              </ButtonStyle>
            </div>
            <div className="card-text-last">
              {/* <Text variant="muted font-regular body" >Problemas para cadastrar? <a href="#">Clique aqui</a></Text>    */}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
