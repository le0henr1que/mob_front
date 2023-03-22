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

export function Rating(){
    const navigate = useNavigate()
    const data = [1, 7, 9, 5, 10]
    return (
        <>
        <Header/>
        <Container>  

            <div className="main-rating">
                <div className="row-rating-1">
                    
                    <div className="rating-title">
                        
                        <div className="row-rating-title-1">
                            <img src={Type}/>
                            <div>
                                <Text variant="font-semibold title-3">Lojas Brasileiras</Text>
                                <Text variant="muthed font-regular caption">São Paulo - Osasco Super Shopping</Text>
                            </div>
                        </div>
                        <div className="row-rating-title-2">
                            <ButtonStyle>Adicionar Avaliação</ButtonStyle>
                        </div>
                    </div>

                    <div className="container-rating-note">
                        <div className="row-rating-note-1">
                            <Text variant="font-semibold title-3">Classificação</Text>
                            <Text variant="font-semibold title-1">3.7</Text>
                        </div>
                        <div className="row-rating-note-2">
                            {/* <div className="input-select"> */}
                                {/* <Input type="select" variant="default" placeholder="Pesquisar" icon={true} >
                                    <option>Mobilidade</option>
                                </Input>; */}
                                {/* <Chart data={data}/> */}
                            {/* </div> */}
                        </div>
                    </div>

                    <div className="chart-rating">
                        <Chart data={data}/>
                    </div>
                </div>

                <div className="row-rating-2">
                    <div className="comment">
                        <div className="title-comment">
                            <Text variant="muthed font-regular body">
                                Todas Classificações (6)
                            </Text>
                        </div>
                        <Comment 
                            author="Leonardo Henrique" 
                            avatar="R" 
                            comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                            rating={3}
                            createdAt="02/19/2023 00:48 AM"
                        />
                         <Comment 
                            author="Leonardo Henrique" 
                            avatar="L" 
                            comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                            rating={4}
                            createdAt="02/19/2023 00:48 AM"
                        />
                         <Comment 
                            author="Leonardo Henrique" 
                            avatar="M" 
                            comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                            rating={1}
                            createdAt="02/19/2023 00:48 AM"
                        />
                         <Comment 
                            author="Leonardo Henrique" 
                            avatar="L" 
                            comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                            rating={2}
                            createdAt="02/19/2023 00:48 AM"
                        />
                    </div>
                </div>
            </div>
                  
        </Container>
        <Footer/>
        </>

    )
}