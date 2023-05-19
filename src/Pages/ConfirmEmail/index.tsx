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
import { useLocation, useNavigate } from "react-router-dom";
import { Chart } from "../../Components/Chart";
//@ts-ignore
import { Company } from "../../Components/Company";
import { StarRating } from "../../Components/StarRating";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function ConfirmEmail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("solicitation_token");

  console.log(token);

  return (
    <div className="container-confirmEmail">
      <div className="container-content-confirmEmail">
        <div className="continaer-lateral-form">
          <div className="container-form-confirmEmail">
            <div className="container-confirmEmail-content-title">
              <Text variant="font-bold headline">
                Acabamos de enviar um código para seu e-mail
              </Text>

              <Text variant="muthed font-regular body-small">
                Um email de redefinição de senha foi enviado para o endereço
                fornecido.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
