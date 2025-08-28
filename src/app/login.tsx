import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { Form } from "../components/form"
import { Button } from "../components/button"

export default function Login(){

  function login (){
    router.navigate("/home")
  }

  function cadastro() {
    router.navigate("/cadastro")
  }

  const loginFields = [
    { placeholder: "Email" },
    { placeholder: "Senha", secureTextEntry: true }
  ]

  return(
    <View style={styles.container}>
      <Form
        title="Bem Vindo!"
        fields={loginFields}
        submitButton={
          <Button title="Entrar" onPress={login} />
        }
        footer={
          <>
            <Text style={styles.footerText}>Não tem uma conta?</Text>
            <Button
              title="Cadastre-se"
              onPress={cadastro}
              style={styles.footerButton}
            />
          </>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8600b3",
  },
  footerText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: '#8600b3',
    borderWidth: 2,
    borderColor: '#8600b3',
  }
})