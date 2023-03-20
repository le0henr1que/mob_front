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
import { useNavigate } from "react-router-dom";
import { Chart } from "../../Components/Chart";

export function Rating(){
    const navigate = useNavigate()
    const data = [4, 7, 9, 5, 10]
    return (
        <>
        <Header/>
        <Container>  

            <div className="main-rating">
                <div className="row-1">
                    <Chart data={data}/>
                </div>
                <div className="row-2">
                    <div className="comment">
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