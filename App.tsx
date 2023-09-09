
import {  Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import  Logo  from './Logo'
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [isValid, setIsValid] = useState(false)

  function handleSignIn() {
    if(email === 'teste23@gmail.com' && senha === '123456') {
      setIsValid(true)
    } else {
      Alert.alert('Email ou Senha incorreta!')
      setIsValid(false)
    }
  }
  return (
    <View style={styles.container}>
      <Logo  />
      <Text style={styles.Title}>Faça seu Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput 
      style={styles.input}
      placeholder="Ex.:maria@gmail.com" 
      onChangeText={setEmail}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput 
      style={styles.input}
      placeholder="******" 
      secureTextEntry
      onChangeText={setSenha}
      />

      <TouchableOpacity
      onPress={handleSignIn}
      style={styles.button}>
        <Text style={styles.buttonTitle}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Se não tiver registro{'\n'}
        Faça seu cadastro
      </Text>

      {
        isValid &&
          <Text style={styles.message}>
            Logado com sucesso!
          </Text>
      }
    </View>
  );
}

