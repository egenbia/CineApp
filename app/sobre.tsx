import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { styles } from '@/styles/global';
import Botao from '@/components/Botao';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Sobre o CineApp</Text>

        <Text style={styles.sobreLinha}>
          <Text style={styles.sobreLabel}>Nome: </Text>CineApp — Catálogo de Filmes
        </Text>
        <Text style={styles.sobreLinha}>
          <Text style={styles.sobreLabel}>Finalidade: </Text>
          Aplicação para apresentação e interação com um catálogo de filmes, permitindo
          visualizar detalhes e marcar favoritos.
        </Text>
        <Text style={styles.sobreLinha}>
          <Text style={styles.sobreLabel}>Versão: </Text>1.0.0
        </Text>
        <Text style={styles.sobreLinha}>
          <Text style={styles.sobreLabel}>Disciplina: </Text>
          Programação para Dispositivos Móveis I
        </Text>

        <View style={{ marginTop: 16 }}>
          <Botao texto="Voltar ao catálogo" onPress={() => router.push('/catalogo')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
