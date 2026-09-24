import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { styles } from "../styles/global";
import Botao from "../components/Botao";

export default function Home() {
  function acessarCatalogo() {
    router.push("/catalogo");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerCentralizado}>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={styles.logo}
          resizeMode="cover"
        />

        <Text style={styles.titulo}>CineApp</Text>
        <Text style={styles.descricao}>
          Descubra, explore e salve seus filmes favoritos em um catálogo simples
          e rápido.
        </Text>

        <Botao texto="Acessar catálogo" onPress={acessarCatalogo} />

        <View style={{ marginTop: 12 }}>
          <Botao
            texto="Sobre o app"
            cor="#432c2e"
            onPress={() => router.push("/sobre")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
