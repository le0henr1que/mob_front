import { SwiperSlide } from "swiper/react";
import { CardLocal } from "../../Components/CardLocal";
import { Comment } from "../../Components/Comments";
import { Container } from "../../Components/Container";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { SliderSlider } from "../../Components/Slider";
import { Text } from "../../Components/Text";
import "./styles.css";
import { TextField } from "@material-ui/core";
import Box from '@mui/material/Box';


export function SearchLocal(){
   
    return(
        <>
            <Header/>
  
            <div className="container-search-local-main">
        
                <div className="container-search-local">
                    <div className="card-title-search-local">
                        <Text variant="font-bold title-3">Procure por um <span>local</span></Text> 

                       <div className="input-search">
                  
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                            
                                    <TextField 
                                        id="search-local" 
                                        label="Pesquisar..." 
                                        variant="outlined" 
                                    />

            
                            </Box>
                        </div> 
                    </div> 
                    <div className="container-content-two">
                    </div>
                    
                    <div className="container-card-find-local">
                        <div className="card-title-find-local">
                            <Text variant="font-bold headline">Locais <span>relacionados</span></Text> 
                            <Text variant="muthed font-regular body-small">Locais relacionados a sua busca.</Text>
                        </div> 

                        <div className="card-local-main">
                            <SliderSlider>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>
                                <SwiperSlide><CardLocal author='Lojas Americanas' rating={4}/></SwiperSlide>

                            </SliderSlider>
                        </div>

                    </div> 
                    
    
                    
                    <div className="container-search-local-comments">
                        

                        <div className="comment-search-local">
                        <div className="container-search-local-options">
                            <div>
                                <Text variant="font-bold headline">Avaliações em <span>destaque</span></Text>  
                                <Text variant="muthed font-regular body-small">Locais relacionados a sua busca.</Text>
                            </div>
                            <Text variant="font-regular subheadline">Ordenar por Mais Recente</Text>  
                            
                        </div>
                            <Comment 
                                author="Amanda" 
                                title="Sem Rampa de acesso"
                                comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                                rating={5}
                                createdAt="02/19/2023 00:48 AM"
                            />
                            <Comment 
                                author="Joana Carolliny" 
                                title="Sem Rampa de acesso"
                                comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae. Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae.Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                                rating={2}
                                createdAt="02/19/2023 00:48 AM"
                            />
                         
                    
                        </div>
                    </div>

                </div>
            </div>  

            <Footer/>
        </>
    );
}