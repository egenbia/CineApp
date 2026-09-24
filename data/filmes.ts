export interface Filme {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  imagem: string;
  favorito: boolean;
  sinopse: string;
}

export const filmesIniciais: Filme[] = [
  {
    id: '1',
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    ano: 2014,
    imagem: require('../assets/images/interstellar.jpg'),
    favorito: false,
    sinopse:
      'Um grupo de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.',
  },
  {
    id: '2',
    titulo: 'O Poderoso Chefão',
    genero: 'Drama/Crime',
    ano: 1972,
    imagem: require('../assets/images/godfather.jpg'),
    favorito: false,
    sinopse:
      'A saga da família Corleone, uma das mais poderosas famílias da máfia italiana nos Estados Unidos.',
  },
  {
    id: '3',
    titulo: 'Divertida Mente',
    genero: 'Animação',
    ano: 2015,
    imagem: require('../assets/images/divertidamente.jpg'),
    favorito: false,
    sinopse:
      'Dentro da mente da jovem Riley, cinco emoções trabalham para ajudá-la a lidar com as mudanças em sua vida.',
  },
  {
    id: '4',
    titulo: 'Matrix',
    genero: 'Ficção Científica',
    ano: 1999,
    imagem: require('../assets/images/matrix.jpg'),
    favorito: false,
    sinopse:
      'Um hacker descobre que a realidade em que vive é, na verdade, uma simulação criada por máquinas.',
  },
  {
    id: '5',
    titulo: 'Coringa',
    genero: 'Drama/Suspense',
    ano: 2019,
    imagem: require('../assets/images/joker.jpg'),
    favorito: false,
    sinopse:
      'A origem de um dos vilões mais icônicos dos quadrinhos, mergulhando na mente de Arthur Fleck.',
  },
  {
    id: '6',
    titulo: 'Parasita',
    genero: 'Drama/Suspense',
    ano: 2019,
    imagem: require('../assets/images/parasita.jpg'),
    favorito: false,
    sinopse:
      'A ganância e a desigualdade social ameaçam a relação simbiótica entre a rica família Park e a pobre família Kim.',
  },
    {
    id: '7',
    titulo: 'Vingadores: Ultimato',
    genero: 'Ação/Ficção Científica',
    ano: 2019,
    imagem: require('../assets/images/endgame.jpg'),
    favorito: false,
    sinopse:
      'Os Vingadores restantes se unem para tentar reverter as consequências causadas por Thanos e salvar a humanidade.',
  },
  {
    id: '8',
    titulo: 'Homem-Aranha: Sem Volta para Casa',
    genero: 'Ação/Fantasia',
    ano: 2021,
    imagem: require('../assets/images/miranha.jpg'),
    favorito: false,
    sinopse:
      'Peter Parker pede ajuda ao Doutor Estranho para fazer todos esquecerem sua identidade, mas o feitiço acaba abrindo o multiverso.',
  },
  {
    id: '9',
    titulo: 'Batman: O Cavaleiro das Trevas',
    genero: 'Ação/Drama',
    ano: 2008,
    imagem: require('../assets/images/batman.jpg'),
    favorito: false,
    sinopse:
      'Batman enfrenta o Coringa, um criminoso que ameaça mergulhar Gotham City no caos.',
  },
  {
    id: '10',
    titulo: 'Toy Story',
    genero: 'Animação/Aventura',
    ano: 1995,
    imagem: require('../assets/images/toystory.jpg'),
    favorito: false,
    sinopse:
      'Um grupo de brinquedos ganha vida quando os humanos não estão por perto e precisa lidar com a chegada de um novo brinquedo.',
  },
  {
    id: '11',
    titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
    genero: 'Fantasia/Aventura',
    ano: 2001,
    imagem: require('../assets/images/senhor.jpg'),
    favorito: false,
    sinopse:
      'Frodo recebe a missão de destruir um poderoso anel antes que ele caia nas mãos do Senhor das Trevas.',
  },
  {
    id: '12',
    titulo: 'Jurassic Park',
    genero: 'Aventura/Ficção Científica',
    ano: 1993,
    imagem: require('../assets/images/park.png'),
    favorito: false,
    sinopse:
      'Um parque temático com dinossauros recriados geneticamente sai de controle e coloca seus visitantes em perigo.',
  },
];
