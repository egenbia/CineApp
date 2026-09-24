import { Pressable, Text } from 'react-native';
import { styles } from '@/styles/global';

interface BotaoProps {
  texto: string;
  onPress: () => void;
  cor?: string;
}

export default function Botao({ texto, onPress, cor = '#2563EB' }: BotaoProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.botao,
        { backgroundColor: cor },
        pressed && styles.botaoPressionado,
      ]}
      onPress={onPress}
    >
      <Text style={styles.botaoTexto}>{texto}</Text>
    </Pressable>
  );
}
