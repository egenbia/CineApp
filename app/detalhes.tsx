import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { styles } from '@/styles/global';
import Botao from '@/components/Botao';
import { filmesIniciais } from '@/data/filmes';

export default function Detalhes() {
  const { id, favorito } = useLocalSearchParams<{ id: string; favorito: string }>();
  const filme = filmesIniciais.find((f) => f.id === id);

  if (!filme) return null;

  const ehFavorito = favorito === 'true';

  return (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detalhesLinha}>
        <Image source={filme.imagem} style={styles.detalhesImagem} resizeMode="cover" />

        <View style={styles.detalhesTextos}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.detalhesTitulo}>{filme.titulo}</Text>
            <Text style={styles.estrela}>{ehFavorito ? '★' : '☆'}</Text>
          </View>

          <Text style={styles.detalhesInfo}>
            {filme.genero} • {filme.ano}
          </Text>
        </View>
      </View>

      <Text style={styles.detalhesSinopse}>{filme.sinopse}</Text>

      <Botao texto="Voltar ao catálogo" onPress={() => router.back()} />
    </ScrollView>
  </SafeAreaView>
);
}