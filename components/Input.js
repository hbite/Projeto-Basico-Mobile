import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input ({placeholder, value, onChangeText, secureText, secureTextEntry}) {
    return(
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        valeus={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height:40,
        borderColor: 'gray',
        borderWidth:1,
        marginBottom: 20,
        paddingHorizontal:10,
        borderRadius:10,
    },
});