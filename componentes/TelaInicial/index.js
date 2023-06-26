import react from "react";
import {View, Text, ImageBackground} from 'react-native';

import imgcapa from '../../assets/capa.jpg';
import estilos from './estilo';

export default function TelaInicial (){
    return (
        <ImageBackground
        blurRadius={10}
        style={estilos.container}
        source={imgcapa}
        >
           <Text style={estilos.titulo}>Adega Preferida</Text>
           <Text style={estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    )
}