import React from "react";

import background from '../../../assets/background.jpg';
import ImgTitulo from "../../../assets/TituloRickEMorty.webp";

import YoutubeIframe from "react-native-youtube-iframe";

import { Container, Titulo, AppBar, Text, TituloImg, CardText, CardConteudo, CardVideo } from "./style";

export default function PageTwo() {
    return (
        <Container source={background}>
            <AppBar />

            <CardConteudo>
                <TituloImg source={ImgTitulo} />
                <CardText>
                    <Titulo>Conteúdos</Titulo>
                    <Text>A api foi retirada do site abaixo, onde contém diversas formas de buscas diferentes, como busca de localidades, episódios e de personagens, que foi a usada na outra página.</Text>
                </CardText>

                <CardText>
                    <Text>https://rickandmortyapi.com/</Text>
                </CardText>

                <CardVideo>
                    <YoutubeIframe 
                        height={300}
                        width={350}
                        play={true}
                        videoId="lDX16SVg6-8"
                    />
                    
                </CardVideo>

                
            </CardConteudo>
        </Container>
    );
}
