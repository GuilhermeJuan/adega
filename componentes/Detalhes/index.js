import estilo from './estilo';
import {View, Text, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes(props) {
  let vinho  = props.route.params;
  console.log(vinho);
  const voltar = () => { props.navigation.goBack(); };
  return (
    <View style={estilo.container}>
      <View style={estilo.head}>
        <Ionicons name="arrow-back-outline" size={24} color="#555" onPress={voltar} />
        <Text style={estilo.head_title}>
          Detalhes
        </Text>
      </View>


      <View style={estilo.body}>
          <View style={estilo.slides}>
            <ScrollView horizontal={true}>
              {              
                vinho.fotos.map(foto=>(
                  <Image style={estilo.Foto} source={require(`../../assets/img_vinhos/${foto}`)} />)
                )
              }
            </ScrollView>
          </View>
          
          <View style={estilo.info}>
            <Text style={estilo.Titulo}>{vinho.Nome}</Text>
            <Text style={estilo.Descrição}>{`Descrição: ${vinho.Descrição}`}</Text>
          </View>
      </View>
    </View>
  );
}
