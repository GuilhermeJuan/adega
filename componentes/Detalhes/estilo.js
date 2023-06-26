import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head:{
        paddingVertical: 19,
        paddingStart:8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    head_title:{
        fontSize: 18,
        fontWeight: '500',
        color: '#444',
        marginHorizontal: 7
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slides:{
       flexDirection: 'row',
       width: 370,
       height: 350,
    },
    Foto:{
        marginTop: 30,
        width: 380,
        height: 320,
        resizeMode: 'contain',

    },
    info:{
        width: 350,
        textAlign: 'center'
    },
    Titulo:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 15,
        padding: 5,
    },
    Descrição:{
        fontSize: 17,
        fontWeight: 'normal',
    }
});

export default styles;