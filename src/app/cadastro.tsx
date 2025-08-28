import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { Form } from "../components/form"
import { Button } from "../components/button"

export default function Cadastro() {

  function cadastrar() {
    console.log("Usuário cadastrado!")
    router.navigate("/login")
  }

  function voltarLogin() {
    router.back()
  }

  const cadastroFields = [
    { placeholder: "Nome completo" },
    { placeholder: "Email" },
    { placeholder: "Senha", secureTextEntry: true },
    { placeholder: "Confirmar senha", secureTextEntry: true }
  ]

  return(
    <View style={styles.container}>
      <Form
        title="Criar Conta"
        fields={cadastroFields}
        submitButton={
          <Button title="Criar Conta" onPress={cadastrar} />
        }
        footer={
          <>
            <Text style={styles.footerText}>Já tem uma conta?</Text>
            <Button
              title="Fazer Login"
              onPress={voltarLogin}
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