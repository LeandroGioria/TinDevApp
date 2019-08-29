import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

export default function App({ navigation }) {
    const [user, setUser] = useState('');
    
    function handleLogin(){

        navigation.navigation('Main');
    }

    return (
        <KeyboardAvoidingView //Para o teclado n sobrescrever o campo no IOS
            behavior="padding"
            enabled={Platform.OS === 'ios'} // Habilita apenas no ios
            style={styles.container}
        >
            <Image source={logo} />
            <TextInput 
                autoCapitalize='none' //Retira primeira letra maiuscula
                autoCorrect={false} //Não tenta divinhar a palavra
                placeholder="Digite seu usuário no Github"
                placeholderTextColor="#999"
                style={styles.input} 
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text styles={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    },
  
    input: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
      marginTop: 20,
      paddingHorizontal: 15,
    },
  
    button: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#DF4723',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });