import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { styles } from '@/styles/global';
import Botao from '@/components/Botao';

export default function Detalhes() {
  const { titulo, genero, ano, imagem, sinopse, favorito } =
    useLocalSearchParams<{
      titulo: string;
      genero: string;
      ano: string;
      imagem: string;
      sinopse: string;
      favorito: string;
    }>();

  const ehFavorito = favorito === 'true';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: imagem }} style={styles.detalhesImagem} resizeMode="cover" />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.detalhesTitulo}>{titulo}</Text>
          <Text style={styles.estrela}>{ehFavorito ? '★' : '☆'}</Text>
        </View>

        <Text style={styles.detalhesInfo}>
          {genero} • {ano}
        </Text>

        <Text style={styles.detalhesSinopse}>{sinopse}</Text>

        <Botao texto="Voltar ao catálogo" onPress={() => router.back()} />
      </ScrollView>
    </SafeAreaView>
  );
}
