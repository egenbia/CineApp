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
    imagem: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    favorito: false,
    sinopse:
      'Um grupo de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.',
  },
  {
    id: '2',
    titulo: 'O Poderoso Chefão',
    genero: 'Drama/Crime',
    ano: 1972,
    imagem: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    favorito: false,
    sinopse:
      'A saga da família Corleone, uma das mais poderosas famílias da máfia italiana nos Estados Unidos.',
  },
  {
    id: '3',
    titulo: 'Divertida Mente',
    genero: 'Animação',
    ano: 2015,
    imagem: 'https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg',
    favorito: false,
    sinopse:
      'Dentro da mente da jovem Riley, cinco emoções trabalham para ajudá-la a lidar com as mudanças em sua vida.',
  },
  {
    id: '4',
    titulo: 'Matrix',
    genero: 'Ficção Científica',
    ano: 1999,
    imagem: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    favorito: false,
    sinopse:
      'Um hacker descobre que a realidade em que vive é, na verdade, uma simulação criada por máquinas.',
  },
  {
    id: '5',
    titulo: 'Coringa',
    genero: 'Drama/Suspense',
    ano: 2019,
    imagem: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    favorito: false,
    sinopse:
      'A origem de um dos vilões mais icônicos dos quadrinhos, mergulhando na mente de Arthur Fleck.',
  },
  {
    id: '6',
    titulo: 'Parasita',
    genero: 'Drama/Suspense',
    ano: 2019,
    imagem: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    favorito: false,
    sinopse:
      'A ganância e a desigualdade social ameaçam a relação simbiótica entre a rica família Park e a pobre família Kim.',
  },
];
