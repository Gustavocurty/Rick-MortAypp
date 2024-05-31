import styled from 'styled-components/native'


export const Container = styled.ImageBackground`
    align-items: center;
    flex: 1;
`

export const ContainerCima = styled.View`
    padding: 15px;
`

export const AppBar = styled.View`
    height: 50px;
    width: 100%;
    background-color: #0b342a;
`

export const Titulo = styled.Text`
    color: aliceblue;
    font-size: 53px;
    font-weight: bold;
    margin-top: 70px;
`

export const ImgBackground = styled.ImageBackground`
    padding: 10px;
    height: 130px;
    border-radius: 15px; /* Define o raio das bordas */
    overflow: hidden;   /* Garante que o conteúdo fique dentro das bordas arredondadas */
`

export const CardTop = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
`

export const InputStyle = styled.TextInput`
    background-color: #ffffff;
    width: 300px;
    height: 30px;
    border-radius: 20px;
    padding-left: 20px;
`

export const FotoSearch = styled.Image`
    width: 20px;
    height: 20px;
`

export const BotaoSearch = styled.TouchableOpacity`
    background-color: #ffff;
    border-radius: 20px;
    width: 30px;
    height: 30px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
`

export const CardBaixo = styled.View`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    flex: 1;
`

export const ImageBottom = styled.Image`
    width: 100%;
    height: 250px;
    border-radius: 15px; 
    overflow: hidden;
`

export const CardConteudo = styled.View`
    width: 350px;
    padding: 10px;
    background-color: black;
    border-radius: 20px;
`

export const TextCard = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    font-style: initial;
`

export const CardText = styled.View`
    width: 150px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 15px;
    background-color: #1f1e1e;
`

export const Divtextos = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const TituloImg = styled.Image`
    margin-top: 20px;
    width: 100%;
    height: 120px;
    
`