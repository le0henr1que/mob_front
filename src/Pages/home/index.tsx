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

export function Home(){
    return (
        <>
        <Header/>
        <Container>  

            <div className="main-card">

                <div className="card">
                    <img src={pana} />        
                    <Text>Procure por uma local</Text>      
                    <Text>Digite o nome de uma empresa ou estabelecimento e mostraremos a vocÊ se esses ambientes possui acessibilidade.</Text>     
                    <Input />
                    <Text>Não achou a empresa? Clique aqui</Text>      

                </div>

                <div className="card">
                    <img src={rafiki} />        
                    <Text>Procure por uma local</Text>      
                    <Text>Digite o nome de uma empresa ou estabelecimento e mostraremos a vocÊ se esses ambientes possui acessibilidade.</Text>     
                    <Input />
                    <Text>Não achou a empresa? Clique aqui</Text>             
                    
                </div>

            </div>
                  
        </Container>
        <Footer/>
        </>

    )
}