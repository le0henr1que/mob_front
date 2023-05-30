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
import {
  CircularProgress,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { Alert, Snackbar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// import InputMask from 'react-input-mask';
// import MaskedInput from 'react-text-mask';
import InputMask from "react-input-mask";
import brasilApi from "../../utils/api/brasilApi";
import { Load } from "../../Components/Load";
import { states } from "../../utils/Brasil-State";
import api from "../../utils/api";
import authService from "../../service/AuthService";

export function LocalRegister() {
  const navigate = useNavigate();

  const [cnpfField, setCnpjField] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);

  const ratingNote = (note: number) => {
    alert(note);
    return note;
  };

  const currencies = [
    {
      value: "SP",
      label: "São Paulo",
    },
    {
      value: "RJ",
      label: "Rio de Janeiro",
    },
  ];

  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");

  const formatCnpj = (value: string) => {
    const cnpjRegex = /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/;
    const match = value.replace(/\D/g, "").match(cnpjRegex);
    if (match) {
      return `${match[1]}${match[1] && "."}${match[2]}${match[2] && "."}${
        match[3]
      }${match[3] && "/"}${match[4]}${match[4] && "-"}${match[5]}`;
    }
    return value;
  };
  const getCepInfo = async (cep: string) => {
    setLoad(true);
    brasilApi
      .get(`/cep/v1/${cep}`)
      .then((content) => {
        handleCreateLocal.setFieldValue("city", content.data.city);
        handleCreateLocal.setFieldValue(
          "neighborhood",
          content.data.neighborhood
        );
        handleCreateLocal.setFieldValue("state", content.data.state);
        handleCreateLocal.setFieldValue("address", content.data.street);
        setLoad(false);
      })
      .catch((error) => {
        setError(error.response.data.errors[3].message);
        setOpen(true);
        setLoad(false);
      });
  };

  const getCnpjInfo = async (cnpj: string) => {
    setLoad(true);

    brasilApi
      .get(`/cnpj/v1/${cnpj}`)
      .then((content) => {
        console.log(content.data);
        handleCreateLocal.setFieldValue("name", content.data.razao_social);
        if (content.data.cep) {
          getCepInfo(content.data.cep);
          let cep = formatCep(content.data.cep);
          handleCreateLocal.setFieldValue("cep", cep);
          // setLoad(false)
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
        setOpen(true);
        setLoad(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const cnpjFormatted = formatCnpj(value);
    setCnpj(cnpjFormatted);
    handleCreateLocal.setFieldValue("cnpj", cnpjFormatted);

    if (cnpjFormatted.length === 18) {
      // alert(cnpjFormatted)
      getCnpjInfo(
        cnpjFormatted
          .replaceAll(".", "")
          .replaceAll("/", "")
          .replaceAll("-", "")
      );
    }
  };

  const formatCep = (value: string) => {
    const cepRegex = /^(\d{5})(\d{3})$/;
    const match = value.replace(/\D/g, "").match(cepRegex);

    if (match) {
      return `${match[1]}-${match[2]}`;
    }
    return value;
  };

  const handleChangeCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // alert(value)
    const cepFormatted = formatCep(value);
    setCep(cepFormatted);
    if (cepFormatted.length === 9) {
      getCepInfo(cepFormatted.replaceAll("-", ""));
    }
    // setCnpj(cnpjFormatted);
    handleCreateLocal.setFieldValue("cep", cepFormatted);
  };

  const schema = Yup.object().shape({
    haveCnpj: Yup.string(),
    category: Yup.string().required("Categoria obrigatória"),
    cnpj: Yup.string().when("haveCnpj", {
      is: "sim",
      then: (schema) => Yup.string().required("CNPJ obrigatório"),
      otherwise: (schema) => Yup.string().notRequired(),
    }),
    name: Yup.string().required("O nome é obrigatório"),
    cep: Yup.string().required("O CEP é obrigatório"),
    state: Yup.string().required("O estado é obrigatório"),
    city: Yup.string().required("A cidade é obrigatória"),
    neighborhood: Yup.string().required("O bairro é obrigatório"),
    number: Yup.string().required("O número é obrigatório"),
    complement: Yup.string(),
    address: Yup.string().required("O endereço é obrigatório"),
  });

  const handleCreateLocal = useFormik({
    initialValues: {
      haveCnpj: "",
      category: "",
      cnpj: cnpj,
      name: "",
      cep: cep,
      state: "",
      city: "",
      neighborhood: "",
      number: "",
      complement: "",
      address: "",
    },
    validationSchema: schema,

    onSubmit: (values) => {
      // alert("Foi");
      setLoad(true);
      const {
        haveCnpj,
        category,
        cnpj,
        name,
        cep,
        state,
        city,
        neighborhood,
        number,
        complement,
        address,
      } = values;

      const config = {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      };

      const data = {
        name: name,
        category: category,
        cnpj: cnpj.replaceAll(".", "").replaceAll("/", "").replaceAll("-", ""),
        address: {
          cep: cep.replaceAll("-", ""),
          complement: complement,
          number: number,
          logradouro: address,
          bairro: neighborhood,
          city: city,
          state: state,
        },
      };

      api
        .post("/local", data, config)
        .then((response) => {
          // alert("Ok, deu certo");
          console.log(response.data);
          navigate("/local/cadastro-local/success");
          setLoad(false);
        })
        .catch((error) => {
          // alert("Não, deu erro fio -> Para de tentar quebrar o MOB");
          console.log(error);
          setLoad(false);
        });
    },
  });

  return (
    <>
      <Header />
      {/* <Company/> */}

      <div className="container-main-evaluate">
        <Snackbar
          TransitionComponent={Fade}
          open={open}
          autoHideDuration={10000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          key="top right"
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="error"
            sx={{ width: "300px" }}
          >
            {error}
          </Alert>
        </Snackbar>
        <div className="container-evaluate">
          <form
            className="form-input"
            onSubmit={handleCreateLocal.handleSubmit}
          >
            <div className="container-title-evaluate">
              <div className="title-first">
                <Text variant="font-semibold headline">Local</Text>
                <Text variant="muthed font-regular body-small">
                  Informe os detalhes do local.
                </Text>
              </div>
            </div>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Possui CNPJ?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="haveCnpj"
                id="haveCnpj"
                value={handleCreateLocal.values.haveCnpj}
                onChange={handleCreateLocal.handleChange}
                onBlur={handleCreateLocal.handleBlur}
              >
                <FormControlLabel
                  value="sim"
                  onClick={() => setCnpjField(true)}
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="não"
                  onClick={() => setCnpjField(false)}
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>

            <div className="container-info">
              <Text variant="muted font-regular caption">
                Por que precisamos do CNPJ?
              </Text>
              <InfoIcon />
            </div>

            <div
              className="container-flex-local"
              style={{ display: load ? "flex" : "none" }}
            >
              <Load width="100%" height={100} />
              <Load width="100%" height={100} />
              <Load width="100%" height={100} />
            </div>
            <div
              className="container-flex-local"
              style={{ display: !load ? "flex" : "none" }}
            >
              <div className="container-evaluate-content-input">
                <TextField
                  id="category"
                  name="category"
                  variant="outlined"
                  select
                  label="Categoria"
                  defaultValue="Estabelecimentos comerciais"
                  value={handleCreateLocal.values.category}
                  onChange={handleCreateLocal.handleChange}
                  onBlur={handleCreateLocal.handleBlur}
                  error={Boolean(
                    handleCreateLocal.touched.category &&
                      handleCreateLocal.errors.category
                  )}
                  helperText={
                    handleCreateLocal.touched.category &&
                    handleCreateLocal.errors.category
                  }
                >
                  <MenuItem
                    key="Estabelecimentos comerciais"
                    value="Estabelecimentos comerciais"
                  >
                    Estabelecimentos comerciais
                  </MenuItem>
                  <MenuItem key="Serviços públicos" value="Serviços públicos">
                    Serviços públicos
                  </MenuItem>
                  <MenuItem
                    key="Espaços de entretenimento"
                    value="Espaços de entretenimento"
                  >
                    Espaços de entretenimento
                  </MenuItem>
                  <MenuItem key="Transporte" value="Transporte">
                    Transporte
                  </MenuItem>
                </TextField>
              </div>

              <div
                className="container-evaluate-content-input"
                style={{ display: cnpfField ? "flex" : "none" }}
              >
                <TextField
                  value={handleCreateLocal.values.cnpj}
                  onChange={(event: any) => handleChange(event)}
                  // onKeyUp={(event:any) => handleChange(event)}
                  onBlur={handleCreateLocal.handleBlur}
                  error={Boolean(
                    handleCreateLocal.touched.cnpj &&
                      handleCreateLocal.errors.cnpj
                  )}
                  helperText={
                    handleCreateLocal.touched.cnpj &&
                    handleCreateLocal.errors.cnpj
                  }
                  // style={{ background: cnpfField ? "#EFEFEF" : "#FFF" }}
                  // disabled={cnpfField}
                  inputProps={{
                    maxLength: 18,
                  }}
                  id="cnpj"
                  name="cnpj"
                  label="CNPJ"
                  variant="outlined"
                />
                <Text variant="muted font-regular caption">
                  Não encontrou o CNPJ?{" "}
                  <a href="/" className="link-forgot">
                    Clique aqui
                  </a>
                </Text>
              </div>
              <div className="container-evaluate-content-input">
                <TextField
                  value={handleCreateLocal.values.name}
                  onChange={handleCreateLocal.handleChange}
                  onBlur={handleCreateLocal.handleBlur}
                  error={Boolean(
                    handleCreateLocal.touched.name &&
                      handleCreateLocal.errors.name
                  )}
                  helperText={
                    handleCreateLocal.touched.name &&
                    handleCreateLocal.errors.name
                  }
                  id="name"
                  name="name"
                  label="Nome"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="address-container">
              <div className="container-title-evaluate">
                <Text variant="font-semibold headline">Endereço</Text>
                <Text variant="muthed font-regular body-small">
                  Informe os detalhes de endereço do local.
                </Text>
              </div>

              <div
                className="container-flex-local"
                style={{ display: load ? "flex" : "none" }}
              >
                <Load width="100%" height={100} />
                <Load width="100%" height={100} />
                {/* <Load width="100%" height={100}/> */}
              </div>
              <div
                className="container-flex-local"
                style={{ display: load ? "flex" : "none" }}
              >
                <Load width="100%" height={100} />
                <Load width="100%" height={100} />
                {/* <Load width="100%" height={100}/> */}
              </div>
              <div
                className="container-flex-local"
                style={{ display: load ? "flex" : "none" }}
              >
                <Load width="100%" height={100} />
                <Load width="100%" height={100} />
                <Load width="100%" height={100} />
              </div>

              <div
                className="container-flex-local"
                style={{ display: !load ? "flex" : "none" }}
              >
                <div className="container-evaluate-content-input">
                  <TextField
                    id="cep"
                    name="cep"
                    label="CEP"
                    variant="outlined"
                    inputProps={{
                      maxLength: 9,
                    }}
                    value={handleCreateLocal.values.cep}
                    onChange={(event: any) => handleChangeCep(event)}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.cep &&
                        handleCreateLocal.errors.cep
                    )}
                    helperText={
                      handleCreateLocal.touched.cep &&
                      handleCreateLocal.errors.cep
                    }
                  />
                  <Text variant="muted font-regular caption">
                    Não encontrou o CEP?{" "}
                    <a href="/" className="link-forgot">
                      Clique aqui
                    </a>
                  </Text>
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="address"
                    name="address"
                    label="Endereço"
                    variant="outlined"
                    value={handleCreateLocal.values.address}
                    onChange={handleCreateLocal.handleChange}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.address &&
                        handleCreateLocal.errors.address
                    )}
                    helperText={
                      handleCreateLocal.touched.address &&
                      handleCreateLocal.errors.address
                    }
                  />
                </div>
              </div>
              <div
                className="container-flex-local"
                style={{ display: !load ? "flex" : "none" }}
              >
                <div className="container-evaluate-content-input">
                  <TextField
                    id="state"
                    name="state"
                    variant="outlined"
                    select
                    label="Estado"
                    defaultValue="São Paulo"
                    value={handleCreateLocal.values.state}
                    onChange={handleCreateLocal.handleChange}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.state &&
                        handleCreateLocal.errors.state
                    )}
                    helperText={
                      handleCreateLocal.touched.state &&
                      handleCreateLocal.errors.state
                    }
                  >
                    {states.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="city"
                    name="city"
                    label="Cidade"
                    variant="outlined"
                    value={handleCreateLocal.values.city}
                    onChange={handleCreateLocal.handleChange}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.city &&
                        handleCreateLocal.errors.city
                    )}
                    helperText={
                      handleCreateLocal.touched.city &&
                      handleCreateLocal.errors.city
                    }
                  />
                </div>
              </div>
              <div
                className="container-flex-local"
                style={{ display: !load ? "flex" : "none" }}
              >
                <div className="container-evaluate-content-input">
                  <TextField
                    id="neighborhood"
                    name="neighborhood"
                    label="Bairro"
                    variant="outlined"
                    value={handleCreateLocal.values.neighborhood}
                    onChange={handleCreateLocal.handleChange}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.neighborhood &&
                        handleCreateLocal.errors.neighborhood
                    )}
                    helperText={
                      handleCreateLocal.touched.neighborhood &&
                      handleCreateLocal.errors.neighborhood
                    }
                  />
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="number"
                    name="number"
                    label="Número"
                    variant="outlined"
                    value={handleCreateLocal.values.number}
                    onChange={handleCreateLocal.handleChange}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.number &&
                        handleCreateLocal.errors.number
                    )}
                    helperText={
                      handleCreateLocal.touched.number &&
                      handleCreateLocal.errors.number
                    }
                  />
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="complement"
                    name="complement"
                    label="Complemento"
                    variant="outlined"
                    value={handleCreateLocal.values.complement}
                    onChange={handleCreateLocal.handleChange}
                    onBlur={handleCreateLocal.handleBlur}
                    error={Boolean(
                      handleCreateLocal.touched.complement &&
                        handleCreateLocal.errors.complement
                    )}
                    helperText={
                      handleCreateLocal.touched.complement &&
                      handleCreateLocal.errors.complement
                    }
                  />
                </div>
              </div>

              {/* <div className="container-evaluate-content-input">
              <TextField
                id="address"
                name="address"
                label="Endereço"
                variant="outlined"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.address && formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div> */}
              <div className="container-evaluate-button">
                <Text variant="color-blue font-regular body-small"></Text>
                <ButtonStyle variant="medium-button" type="submit">
                  {load ? <CircularProgress /> : "Cadastrar"}
                </ButtonStyle>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
