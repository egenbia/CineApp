import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { styles } from '@/styles/global';
import { filmesIniciais, Filme } from '@/data/filmes';
import FilmeCard from '@/components/FilmeCard';

export default function Catalogo() {
  const [filmes, setFilmes] = useState<Filme[]>(filmesIniciais);


  useEffect(() => {
    console.log('Catálogo carregado com', filmes.length, 'filmes');
  }, []);

  function alternarFavorito(id: string) {
    setFilmes((filmesAtuais) =>
      filmesAtuais.map((filme) =>
        filme.id === id ? { ...filme, favorito: !filme.favorito } : filme
      )
    );
  }

function abrirDetalhes(filme: Filme) {
  router.push({
    pathname: '/detalhes',
    params: {
      id: filme.id,
      favorito: String(filme.favorito),
    },
  });
}

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Catálogo</Text>
        <Text style={styles.descricao}>Toque em um filme para ver os detalhes</Text>

        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.linhaCatalogo}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <FilmeCard
              titulo={item.titulo}
              genero={item.genero}
              ano={item.ano}
              imagem={item.imagem}
              favorito={item.favorito}
              onPress={() => abrirDetalhes(item)}
              onToggleFavorito={() => alternarFavorito(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
