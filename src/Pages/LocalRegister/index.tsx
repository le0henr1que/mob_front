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
import { StarRating } from "../../Components/StarRating";
import { MenuItem, TextField } from "@material-ui/core";

export function LocalRegister() {
  const navigate = useNavigate();
  const ratingNote = (note: number) => {
    alert(note);
    return note;
  };

  const currencies = [
    {
      value: "São Paulo",
      label: "São Paulo",
    },
    {
      value: "Rio de Janeiro",
      label: "Rio de Janeiro",
    },
  ];

  return (
    <>
      <Header />
      {/* <Company/> */}
      <div className="container-main-evaluate">
        <div className="container-evaluate">
          <div className="container-title-evaluate">
            <Text variant="font-semibold title-3">
              Registrar um novo <span>local</span>
            </Text>
            <Text variant="muthed font-regular body-small">
              Preencha os dados e avalie um novo local.
            </Text>
          </div>

          <form className="form-input">
            <div className="container-flex-local">
              <div className="container-evaluate-content-input">
                <TextField id="nome-local" label="Nome" variant="outlined" />
              </div>
              <div className="container-evaluate-content-input">
                <TextField id="nome-loca" label="CEP" variant="outlined" />
              </div>
            </div>
            <div className="container-flex-local">
              <div className="container-evaluate-content-input">
                <TextField
                  id="outlined-select-currency"
                  variant="outlined"
                  select
                  label="Estado"
                  defaultValue="São Paulo"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="container-evaluate-content-input">
                <TextField id="city-local" label="Cidade" variant="outlined" />
              </div>
            </div>
            <div className="container-flex-local">
              <div className="container-evaluate-content-input">
                <TextField
                  id="neighborhood-local"
                  label="Bairro"
                  variant="outlined"
                />
              </div>
              <div className="container-evaluate-content-input">
                <TextField
                  id="number-local"
                  label="Número"
                  variant="outlined"
                />
              </div>
              <div className="container-evaluate-content-input">
                <TextField
                  id="complement-local"
                  label="Complemento"
                  variant="outlined"
                />
              </div>
            </div>

            <div className="container-evaluate-content-input">
              <TextField
                id="address-local"
                label="Endereço"
                variant="outlined"
              />
            </div>
            <div className="container-evaluate-button">
              <Text variant="color-blue font-regular body-small"></Text>
              <ButtonStyle variant="medium-button" type="submit">
                Registrar
              </ButtonStyle>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
