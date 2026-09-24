# CineApp — Catálogo de Filmes

**Nome:** [SEU NOME AQUI]
**RA:** [SEU RA AQUI]
**Aplicativo:** CineApp
**Disciplina:** Programação para Dispositivos Móveis I

## Descrição

CineApp é um aplicativo mobile desenvolvido com **React Native + Expo (Expo Router)** que
apresenta um catálogo de filmes cadastrados diretamente no código. O usuário pode navegar
entre a tela inicial, o catálogo, a tela de detalhes de cada filme e a tela "Sobre",
além de marcar/desmarcar filmes como favoritos.

## Funcionalidades

- Tela inicial com nome do app, logo, descrição e botão de acesso ao catálogo (`Pressable`);
- Catálogo com 6 filmes (título, imagem, gênero, ano e status de favorito);
- Componente reutilizável `FilmeCard` (recebe dados via **Props**);
- Componente reutilizável `Botao` (usado em todas as telas);
- Sistema de favoritos com `useState` (☆ Favoritar → ★ Favorito);
- Feedback visual ao pressionar (`Pressable` com `pressed`);
- Tela de detalhes do filme, navegação via **Expo Router**;
- Tela "Sobre" com informações do app e disciplina;
- `useEffect` no catálogo, registrando no console quando a lista é carregada;
- Layout organizado com **Flexbox** (`StyleSheet`).

## Estrutura do projeto

```
CineApp/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── catalogo.tsx
│   ├── detalhes.tsx
│   └── sobre.tsx
├── components/
│   ├── FilmeCard.tsx
│   └── Botao.tsx
├── data/
│   └── filmes.ts
├── styles/
│   └── global.ts
├── assets/
│   └── images/
└── package.json
```

## Como executar

```bash
npm install
npx expo start
```

Em seguida, escaneie o QR Code com o app **Expo Go** (Android/iOS) ou pressione `w` para
abrir no navegador.

## Roteiro para o vídeo de verificação (30% da nota)

1. **useState**: usado em `app/catalogo.tsx` para controlar a lista de filmes e o status
   de favorito de cada item.
2. **Botão de favorito**: ao pressionar a estrela no `FilmeCard`, o estado do filme
   correspondente é atualizado (`alternarFavorito`) e o ícone muda de ☆ para ★.
3. **useEffect**: registra no console a mensagem de que o catálogo foi carregado, assim
   que a tela é montada (array de dependências vazio).
4. **Componentes reutilizáveis**: `FilmeCard.tsx` e `Botao.tsx`.
5. **Props do FilmeCard**: `titulo`, `genero`, `ano`, `imagem`, `favorito`, `onPress`,
   `onToggleFavorito`.
6. **Navegação**: feita com Expo Router — `router.push` para avançar entre telas
   (Início → Catálogo → Detalhes/Sobre) e `router.back()`/`router.push('/catalogo')`
   para retornar.
7. **Pressable**: usado no botão reutilizável e no card do filme, com alteração visual
   de opacidade/escala ao ser pressionado.
8. **Flexbox**: usado em `styles/global.ts` para organizar o catálogo em grade
   (`numColumns{2}` + `columnWrapperStyle`) e para centralizar conteúdo nas telas.

# CineApp
