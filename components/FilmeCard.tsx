import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '@/styles/global';

interface FilmeCardProps {
  titulo: string;
  genero: string;
  ano: number;
  imagem: string;
  favorito: boolean;
  onPress: () => void;
  onToggleFavorito: () => void;
}

export default function FilmeCard({
  titulo,
  genero,
  ano,
  imagem,
  favorito,
  onPress,
  onToggleFavorito,
}: FilmeCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}
      onPress={onPress}
    >
      <Image source={{ uri: imagem }} style={styles.cardImagem} resizeMode="cover" />
      <View style={styles.cardConteudo}>
        <Text style={styles.cardTitulo} numberOfLines={1}>
          {titulo}
        </Text>
        <Text style={styles.cardInfo}>
          {genero} • {ano}
        </Text>

        <View style={styles.linhaFavorito}>
          <Text style={styles.cardInfo}>{favorito ? 'Favorito' : 'Favoritar'}</Text>
          <Pressable
            hitSlop={8}
            onPress={(e) => {
              e.stopPropagation();
              onToggleFavorito();
            }}
            style={({ pressed }) => [pressed && { opacity: 0.6 }]}
          >
            <Text style={styles.estrela}>{favorito ? '★' : '☆'}</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
