import { Container } from "../../Components/Container/index";
import Button  from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Text } from "../../Components/Text";
import { Comment } from "../../Components/Comments"
import "./styles.css"
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
//@ts-ignore
import pana from "../../Assests/pana.svg"
//@ts-ignore
import rafiki from "../../Assests/rafiki.svg"
//@ts-ignore
import Type from "../../Assests/Group25.svg"
import ButtonStyle from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { Chart } from "../../Components/Chart";
import { Company } from "../../Components/Company";
import { StarRating } from "../../Components/StarRating";

export function LocalRegister(){
    const navigate = useNavigate()
    const ratingNote = (note:number) => { alert(note); return note }

    return (
        <>
        <Header/>
        {/* <Company/> */}
            <div className="container-main-evaluate">

                <div className="container-evaluate">

                    <div className="container-title-evaluate">
                        <Text variant="font-semibold title-3">Registrar um novo <span>local</span></Text>
                        <Text variant="muthed font-regular body-small">Preencha os dados e avalie um novo local.</Text>
                    </div>

                    <form className="form-input">
                        <div className="container-flex-local">
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">Nome do local</label>
                                <Input type="text" variant="default" name="title" id="title" placeholder="Nome do local"/>
                            </div>
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">CEP</label>
                                <Input type="text" variant="default" name="title" id="title" placeholder="CEP"/>
                            </div>
                        </div>
                        <div className="container-flex-local">
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">Estado</label>
                                <Input type="select" variant="default" placeholder="Pesquisar" icon={true} >
                                    <option>Estado</option>
                                </Input>

                            </div>
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">Cidade</label>
                                <Input type="text" variant="default" name="title" id="title" placeholder="Cidade"/>
                            </div>
                        </div>
                        <div className="container-flex-local">
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">Bairro</label>
                                <Input type="text" variant="default" name="title" id="title" placeholder="Bairro"/>
                            </div>
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">Número</label>
                                <Input type="text" variant="default" name="title" id="title" placeholder="Número"/>
                            </div>
                            <div className="container-evaluate-content-input">
                                <label htmlFor="title">Complemento</label>
                                <Input type="text" variant="default" name="title" id="title" placeholder="Complemento"/>
                            </div>
                        </div>

                        <div className="container-evaluate-content-input">
                            <label htmlFor="description">Endereço</label>
                            <Input type="text" variant="default" name="title" id="title" placeholder="Endereço"/>
                        </div>
                        <div className="container-evaluate-button">
                            <Text variant="color-blue font-regular body-small"></Text>
                            <ButtonStyle variant="medium-button" type="submit">Registrar</ButtonStyle>
                        </div>
                    </form>

                </div>

            </div>
        <Footer/>
        </>

    )
}