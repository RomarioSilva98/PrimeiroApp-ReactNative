import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"

import { Button } from "../components/button"

export default function Home() {

  function logout() {
    router.navigate("/login") // Volta para a tela inicial (Login)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Página Inicial
      </Text>

      <Text style={styles.subtitle}>
        Você está logado!
      </Text>

      <Button title="Sair" onPress={logout}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 16,
  },
  title: {
    color: "#8600b3",
    fontSize: 32,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#333",
    fontSize: 16
  }
})