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
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// import InputMask from 'react-input-mask';
// import MaskedInput from 'react-text-mask';
import InputMask from "react-input-mask";

export function LocalRegister() {
  const navigate = useNavigate();

  const [cnpfField, setCnpjField] = useState(false);

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

  const schema = Yup.object().shape({
    haveCnpj: Yup.boolean(),
    cnpj: Yup.string()
      .required('O CNPJ é obrigatório quando "haveCnpj" é igual a "sim"')
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
        "Formato de CNPJ inválido"
      )
      .test("valid-cnpj", "CNPJ inválido", (value) => {
        if (!value) return true;
        const cnpj = value.replace(/[^\d]+/g, "");
        // Restante da lógica de validação do CNPJ
      }),

    name: Yup.string().required("O nome é obrigatório"),
    cep: Yup.string()
      .required("O CEP é obrigatório")
      .matches(/^\d{5}\-\d{3}$/, "Formato de CEP inválido"),
    state: Yup.string().required("O estado é obrigatório"),
    city: Yup.string().required("A cidade é obrigatória"),
    neighborhood: Yup.string().required("O bairro é obrigatório"),
    number: Yup.string().required("O número é obrigatório"),
    complement: Yup.string(),
    address: Yup.string().required("O endereço é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      haveCnpj: "",
      category: "",
      cnpj: "",
      name: "",
      cep: "",
      state: "",
      city: "",
      neighborhood: "",
      number: "",
      complement: "",
      address: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      alert("tewste");
      console.log(schema);
    },
  });

  return (
    <>
      <Header />
      {/* <Company/> */}

      <div className="container-main-evaluate">
        <div className="container-evaluate">
          <form className="form-input" onSubmit={formik.handleSubmit}>
            <div className="container-title-evaluate">
              <div className="title-first">
                <Text variant="font-semibold headline">Local</Text>
                <Text variant="muthed font-regular body-small">
                  Preencha os dados e avalie um novo local.
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
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="não" control={<Radio />} label="Não" />
              </RadioGroup>
            </FormControl>
            <div className="container-flex-local">
              <div className="container-evaluate-content-input">
                <TextField
                  id="category"
                  name="category"
                  variant="outlined"
                  select
                  label="Categoria"
                  defaultValue="Estabelecimentos comerciais"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.category && formik.errors.category
                  )}
                  helperText={formik.touched.category && formik.errors.category}
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

              <div className="container-evaluate-content-input">
                <TextField
                  value={formik.values.cnpj}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.cnpj && formik.errors.cnpj)}
                  helperText={formik.touched.cnpj && formik.errors.cnpj}
                  style={{ background: cnpfField ? "#EFEFEF" : "#FFF" }}
                  disabled={cnpfField}
                  id="cnpj"
                  name="cnpj"
                  label="CNPJ"
                  variant="outlined"
                />
              </div>
              <div className="container-evaluate-content-input">
                <TextField
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
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
                  Preencha os dados e avalie um novo local.
                </Text>
              </div>

              <div className="container-flex-local">
                <div className="container-evaluate-content-input">
                  <TextField
                    id="cep"
                    name="cep"
                    label="CEP"
                    variant="outlined"
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.cep && formik.errors.cep)}
                    helperText={formik.touched.cep && formik.errors.cep}
                  />
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="address"
                    name="address"
                    label="Endereço"
                    variant="outlined"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.address && formik.errors.address
                    )}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </div>
              </div>
              <div className="container-flex-local">
                <div className="container-evaluate-content-input">
                  <TextField
                    id="state"
                    name="state"
                    variant="outlined"
                    select
                    label="Estado"
                    defaultValue="São Paulo"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.state && formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  >
                    {currencies.map((option) => (
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
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.city && formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </div>
              </div>
              <div className="container-flex-local">
                <div className="container-evaluate-content-input">
                  <TextField
                    id="neighborhood"
                    name="neighborhood"
                    label="Bairro"
                    variant="outlined"
                    value={formik.values.neighborhood}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.neighborhood && formik.errors.neighborhood
                    )}
                    helperText={
                      formik.touched.neighborhood && formik.errors.neighborhood
                    }
                  />
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="number"
                    name="number"
                    label="Número"
                    variant="outlined"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.number && formik.errors.number
                    )}
                    helperText={formik.touched.number && formik.errors.number}
                  />
                </div>
                <div className="container-evaluate-content-input">
                  <TextField
                    id="complement"
                    name="complement"
                    label="Complemento"
                    variant="outlined"
                    value={formik.values.complement}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.complement && formik.errors.complement
                    )}
                    helperText={
                      formik.touched.complement && formik.errors.complement
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
                  Registrar
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
