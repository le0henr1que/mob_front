import "./styles.css";

//@ts-ignore
import Google from "../../Assests/icon-google.svg";
import { Text } from "../../Components/Text";
import Checkbox from "@material-ui/core/Checkbox";
import { useEffect, useState } from "react";
import ButtonStyle from "../../Components/Button";
import GoogleSignIn from "../../Components/Button-login-google";
//@ts-ignore
import LogMob from "../../Assests/mob-white.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Snackbar } from "@mui/material";
import {
  CircularProgress,
  Fade,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export function Terms() {
  return (
    <>
      <div className="container-terms">
        <div className="container-content-terms">
          {/* <div className="continaer-lateral-logo">
            <img src={LogMob} />
          </div> */}

          <div className="container-form-terms">
            <div className="container-terms-content-title">
              <Text variant="font-bold headline">
                Termos e condições gerais de uso do site
              </Text>
            </div>
            <h1>Bem-vindo ao nosso site!</h1>
            <p>
              Um serviço que permite aos usuários realizar avaliações de
              acessibilidade em locais.
            </p>
            <p>
              Antes de utilizar nosso site, leia atentamente estes Termos e
              Condições Gerais de Uso, pois eles estabelecem os direitos e
              obrigações legais entre você (o "Usuário") e nossa empresa (o
              "Site"). Ao acessar ou utilizar o site, você concorda em cumprir
              estes termos e condições. Se você não concordar com qualquer parte
              destes termos, não utilize o site.
            </p>

            <h2>Acesso e Utilização do Site</h2>
            <ol>
              <li>
                <h3>Registro</h3>
                <p>
                  Para utilizar todos os recursos do site, é necessário criar
                  uma conta de usuário. Você deve fornecer informações precisas,
                  atualizadas e completas durante o processo de registro. É sua
                  responsabilidade manter a confidencialidade de suas
                  informações de login e senha e notificar imediatamente o site
                  sobre qualquer uso não autorizado de sua conta.
                </p>
              </li>
              <li>
                <h3>Uso Adequado</h3>
                <p>
                  Ao utilizar o site, você concorda em cumprir todas as leis e
                  regulamentos aplicáveis. Você concorda em não usar o site para
                  qualquer finalidade ilegal, prejudicial, difamatória, abusiva,
                  assediante, fraudulenta ou que viole os direitos de terceiros.
                </p>
              </li>
              <li>
                <h3>Conteúdo do Usuário</h3>
                <p>
                  Ao enviar comentários, avaliações ou qualquer outro conteúdo
                  para o site, você concede ao site uma licença não exclusiva,
                  gratuita, mundial e transferível para usar, reproduzir,
                  modificar, adaptar, distribuir e exibir o conteúdo em conexão
                  com a operação do site.
                </p>
              </li>
            </ol>

            <h2>Propriedade Intelectual</h2>
            <ol>
              <li>
                <h3>Direitos Autorais</h3>
                <p>
                  Todo o conteúdo disponibilizado no site, incluindo texto,
                  gráficos, logotipos, imagens, vídeos e software, é protegido
                  por direitos autorais e outras leis de propriedade
                  intelectual. Você concorda em não copiar, modificar,
                  distribuir, transmitir, exibir, vender ou explorar qualquer
                  conteúdo do site sem a permissão prévia por escrito do site ou
                  dos respectivos proprietários dos direitos autorais.
                </p>
              </li>
              <li>
                <h3>Marcas Registradas</h3>
                <p>
                  Todas as marcas registradas, marcas de serviço, logotipos e
                  nomes comerciais exibidos no site são propriedade exclusiva do
                  site ou de terceiros. Nada neste contrato concede a você o
                  direito de usar qualquer marca registrada sem a permissão
                  prévia por escrito do proprietário da marca.
                </p>
              </li>
            </ol>

            <h2>Limitação de Responsabilidade</h2>
            <ol>
              <li>
                <h3>Isenção de Garantias</h3>
                <p>
                  O site é fornecido "como está", sem garantias de qualquer
                  tipo, expressas ou implícitas. O site não garante a precisão,
                  confiabilidade, integridade, adequação ou disponibilidade do
                  conteúdo e serviços oferecidos.
                </p>
              </li>
              <li>
                <h3>Limitação de Responsabilidade</h3>
                <p>
                  Em nenhuma circunstância, o site será responsável por
                  quaisquer danos diretos, indiretos, incidentais, especiais,
                  punitivos ou consequenciais decorrentes ou relacionados ao uso
                  ou incapacidade de uso do site ou dos serviços oferecidos.
                </p>
              </li>
            </ol>

            <h2>Privacidade</h2>
            <ol>
              <li>
                <h3>Coleta de Dados</h3>
                <p>
                  O site coleta e armazena informações pessoais dos usuários de
                  acordo com sua Política de Privacidade. Ao utilizar o site,
                  você concorda com a coleta, uso e divulgação dessas
                  informações de acordo com a Política de Privacidade.
                </p>
              </li>
              <li>
                <h3>Cookies</h3>
                <p>
                  O site utiliza cookies para melhorar a experiência do usuário.
                  Ao utilizar o site, você concorda com o uso de cookies de
                  acordo com a Política de Cookies.
                </p>
              </li>
            </ol>

            <h2>Disposições Gerais</h2>
            <ol>
              <li>
                <h3>Modificações</h3>
                <p>
                  O site reserva-se o direito de modificar estes Termos e
                  Condições Gerais de Uso a qualquer momento, a seu exclusivo
                  critério. As modificações entrarão em vigor a partir da sua
                  publicação no site.
                </p>
              </li>
              <li>
                <h3>Rescisão</h3>
                <p>
                  O site pode encerrar ou suspender sua conta e acesso ao site a
                  qualquer momento, por qualquer motivo, sem aviso prévio.
                </p>
              </li>
              <li>
                <h3>Lei Aplicável</h3>
                <p>
                  Estes Termos e Condições Gerais de Uso são regidos e
                  interpretados de acordo com as leis do país em que o site está
                  localizado.
                </p>
              </li>
            </ol>

            <p>
              Ao utilizar o nosso site, você reconhece e concorda que leu,
              compreendeu e aceitou estes Termos e Condições Gerais de Uso. Se
              você não concordar com eles, não utilize o site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
