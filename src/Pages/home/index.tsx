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
import ButtonStyle from "../../Components/Button";

export function Home(){
    return (
        <>
        <Header/>
        <Container>  

            <div className="main-card">

                <div className="card">
                    <img src={pana} />    
                    <div className="card-title">
                        <Text variant="font-bold title-3">Procure por uma <span>local</span></Text>    
                    </div>  
                    <div className="card-text">
                        <Text variant="muted font-regular subheadline">Digite o nome de uma empresa ou estabelecimento e mostraremos a vocÊ se esses ambientes possui acessibilidade.</Text>     
                    </div>  
                    <div className="card-input">
                        <Input variant="default" icon={true} placeholder="Pesquisar"/>
                    </div>  
                    <div className="card-text-last">
                        <Text variant="muted font-regular body" >Não achou a empresa? <a href="#">Clique aqui</a></Text>   
                    </div>     
                </div>

                <div className="card">
                    <img src={rafiki} />    
                    <div className="card-title">
                        <Text variant="font-bold title-3">Cadastre um <span>local</span></Text>    
                    </div>  
                    <div className="card-text">
                        <Text variant="muted font-regular subheadline">Quer que sua empresa seja vista como um ambiente acessível a todos? cadastre ela em nosso site!</Text>     
                    </div>  
                    <div className="card-buttom">
                        <ButtonStyle variant="medium-button">Cadastre sua empresa</ButtonStyle>
                    </div>  
                    <div className="card-text-last">
                        <Text variant="muted font-regular body" >Problemas para cadastrar? <a href="#">Clique aqui</a></Text>   
                    </div>     
                </div>

            </div>
                  
        </Container>
        <Footer/>
        </>

    )
}