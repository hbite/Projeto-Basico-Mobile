import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function ProdutosScreen() {

    return ( 

        <View style={styles.container}>       
            <Text>Seja Bem Vindo à tela Produtos</Text>
        </View>
    );    
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }, 
    });





















