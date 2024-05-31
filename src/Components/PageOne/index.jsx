import React, { useState } from "react";

import Api from '../../Services/api';

import RickMorty from '../../../assets/Rick-e-Morty.jpg';
import img from '../../../assets/search.png';
import ImgError from '../../../assets/Rick-e-Morty-Error.jpg'
import background from '../../../assets/background.jpg'
import  ImgTitulo  from "../../../assets/TituloRickEMorty.webp";

import { Keyboard, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';


import { Container, ContainerCima, AppBar, CardTop, ImgBackground,
     InputStyle, BotaoSearch, FotoSearch, CardBaixo, ImageBottom, CardConteudo, 
     TextCard, CardText, TituloImg, Divtextos } from "./style";

export default function PageOne(){
    const [personagem, setPersonagem] = useState('')
    const [dados, setDados] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)
    
    async function searchPersonagem(){
        Keyboard.dismiss()
        if (personagem !== '') {
                try{
                    setCarregando(true)
                    setErro(false);
                    const response = await Api.get(`/character/?name=${personagem}`)
                    const totalCharacters = response.data.results.length;
                    const randomIndex = Math.floor(Math.random() * totalCharacters);
                    const randomCharacter = response.data.results[randomIndex];
                    setDados([randomCharacter]);
                    setCarregando(false)
                }catch(error){
                    setDados([]);
                    setCarregando(false);
                    setErro(true);
                }
        }else{
            alert("Digita alguém ai po!")
        }
        return (
            Keyboard.dismiss()
        )
    }

    const renderItem = ({ item }) => (
        <CardConteudo>
          <ImageBottom source={{uri: item.image}} />

          <CardText style={{ width: '100%' }}>
            <TextCard style={{ textAlign: "center" }}>Name: {item.name}</TextCard>
          </CardText>

          
            <Divtextos>
                <CardText>
                    <TextCard>Status: {item.status}</TextCard>
                </CardText>

                <CardText>
                    <TextCard>Species: {item.species}</TextCard>
                </CardText>
            </Divtextos>
            
            <CardText style={{ width: '100%' }}>
                <TextCard style={{ textAlign: "center" }}>Ultima vez visto(a): {item.location.name}</TextCard>
            </CardText>

        </CardConteudo>
    );


    return (
        <Container source={background}>
            <AppBar />
            <TituloImg source={ImgTitulo}></TituloImg>
            <ContainerCima>
                <ImgBackground source={RickMorty}>
                    
                    <CardTop>
                        <InputStyle 
                           placeholder="Digite aqui" 
                           onChangeText={(text) => setPersonagem(text)}
                        />
                        <BotaoSearch onPress={searchPersonagem}>
                            <FotoSearch source={img}/>
                        </BotaoSearch>
                    </CardTop>
                </ImgBackground>
            </ContainerCima>

            <CardBaixo>
                {carregando ?
                <CardConteudo style={{alignItems: 'center'}}>
                    <LottieView
                        autoPlay
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        source={require('../../../assets/loading.json')}
                    />
                    <LottieView
                        autoPlay
                        style={{
                            width: 150,
                            height: 150,
                        }}
                        source={require('../../../assets/carregando.json')}
                    />
                </CardConteudo>
                
                :
                erro ?
                    <CardConteudo>
                        <ImageBottom source={ImgError} />
                        <CardText style={{ width: '100%' }}>
                            <TextCard style={{textAlign: 'justify'}}>Por incresça que parível, não tem ninguém com esse nome!</TextCard>
                        </CardText>
                    </CardConteudo>
                :
                    <FlatList
                        data={dados}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ flexGrow: 1 }}
                    />
                }
            </CardBaixo>

        </Container>
    )
}