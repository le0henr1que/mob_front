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
import Rafiki1 from "../../Assests/rafiki1.svg"
import ButtonStyle from "../../Components/Button";
import { useNavigate } from "react-router-dom";


export function Local(){
    const navigate = useNavigate();

    const handleRegisterLocal = () => {
        navigate("/notFoun")
    };

    return (
        <>
        <Header/>
        <Container>  
            <div className="container-local">
                <div className="row-2">
                    <img src={Rafiki1}/>
                </div>
                <div className="row-1">
                    <Text variant="headline font-bold title-3">Não encontrou o <span>local?</span></Text>     

                    <Text variant="muted font-bold subheadline">Ajude outras pessoas criando e avaliando um novo local.</Text>     

                    <ButtonStyle variant="medium-button" onClick={handleRegisterLocal}>Cadastrar um novo local</ButtonStyle>

                </div>

            </div>
       
                  
        </Container>
        <Footer/>
        </>

    )
}