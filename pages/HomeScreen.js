import React, {useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({route, navigation}) {
               
    const {username, password} = route.params || {};

    const produto = () => {
        navigation.navigate ('Produtos', {            
        });
    } 
    const perfil = () => {
        navigation.navigate ('Perfil', {            
        });
    } 

    useEffect(() => {
        console.log('Tela Home Carregada');
    }, [username, password]);

    return (        

        <View style={styles.container}>
                     <Text>Seja Bem Vindo Arthur</Text>
              
                     <Image source={require('../assets/imghome.png')} style={styles.imagem}/>
    
                     <TouchableOpacity style={styles.button} onPress={produto}>
                    <Text style={styles.textButton}>Produtos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={perfil}>
                    <Text style={styles.textButton}>Perfil</Text>
            </TouchableOpacity>

        </View>
    );    
}
       const styles = StyleSheet.create({
       container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
              },
       imagem: {
        width: 200,
        height: 200,
        marginTop: 20,
              },
       button: {
              backgroundColor: '#964B00',
              padding: 20,
              borderRadius: 8,
              marginTop: 20,
              width: 300,
              alignItems: 'center',
              },
       textButton: {
              color: 'white',
              fontSize: 16,
       },
   });