import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#24282a',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  containerCentralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
    textAlign: 'center',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 24,
  },
  lista: {
    paddingBottom: 24,
  },
  linhaCatalogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#671a20',
    borderRadius: 14,
    marginBottom: 16,
    width: '48%',
    overflow: 'hidden',
  },
  cardImagem: {
    width: '100%',
    height: 500,
  },
  cardConteudo: {
    padding: 10,
  },
  cardTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 2,
  },
  cardInfo: {
    fontSize: 12,
    color: '#94A3B8',
  },
  linhaFavorito: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  estrela: {
    fontSize: 20,
  },
  detalhesImagem: {
    width: '100%',
    height: 320,
    borderRadius: 14,
    marginBottom: 16,
  },
  detalhesTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  detalhesInfo: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 12,
  },
  detalhesSinopse: {
    fontSize: 15,
    color: '#E2E8F0',
    lineHeight: 22,
    marginBottom: 24,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoPressionado: {
    opacity: 0.75,
    transform: [{ scale: 0.97 }],
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sobreLinha: {
    fontSize: 15,
    color: '#E2E8F0',
    marginBottom: 8,
  },
  sobreLabel: {
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
});
