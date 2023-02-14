# React-Typescript Pokemon App

### Used Tech and Libraries
* React JS
* Used React Router Dom for routing.
* Powered by Typescript
* Styled Components used for modular stying with Pure CSS
* Redux Toolkit / RTK Query used for data fetching and caching.

## [Click here for live demo](https://pokedex-typescript-chi.vercel.app/)

![pokemon-new](https://user-images.githubusercontent.com/11324886/218631430-9453920e-dc7d-4421-93bc-7b9c33808a84.gif)

## Folder Structure
```bash
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── app
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── App.tsx
│   ├── assets
│   │   ├── banner.jpg
│   │   ├── icons
│   │   │   ├── bug.png
│   │   │   ├── dark.svg
│   │   │   ├── electric.svg
│   │   │   ├── fairy.svg
│   │   │   ├── fighting.svg
│   │   │   ├── fire.png
│   │   │   ├── flying.png
│   │   │   ├── ground.svg
│   │   │   ├── ice.svg
│   │   │   ├── normal.svg
│   │   │   ├── poison.svg
│   │   │   ├── psy.svg
│   │   │   ├── rock.svg
│   │   │   ├── steel.svg
│   │   │   └── water.svg
│   │   ├── load_ball.png
│   │   ├── pokeball.png
│   │   └── pokemon-logo.png
│   ├── components
│   │   ├── BackToTop
│   │   │   ├── BackToTop.styled.ts
│   │   │   └── BackToTop.tsx
│   │   ├── DetailCard
│   │   │   ├── DetailCard.styled.ts
│   │   │   └── DetailCard.tsx
│   │   ├── LoadingBar
│   │   │   ├── LoadingBar.styled.ts
│   │   │   └── LoadingBar.tsx
│   │   ├── Navbar
│   │   │   ├── Navbar.styled.ts
│   │   │   └── Navbar.tsx
│   │   └── PokeCard
│   │       ├── PokeCard.styled.ts
│   │       └── PokeCard.tsx
│   ├── features
│   │   └── themeSlice.ts
│   ├── hooks
│   │   └── useCapitalizeLetter.ts
│   ├── index.css
│   ├── main.tsx
│   ├── router
│   │   └── AppRouter.tsx
│   ├── services
│   │   └── pokemonApi.ts
│   ├── styles
│   │   ├── globalStyles.ts
│   │   ├── mixins.ts
│   │   └── themeVariables.ts
│   ├── tests
│   │   ├── App.test.tsx
│   │   ├── Navbar.test.tsx
│   │   └── PokeCard.test.tsx
│   ├── types
│   │   ├── interfaces.ts
│   │   └── types.ts
│   ├── utils
│   │   └── utils.ts
│   ├── views
│   │   ├── Detail
│   │   │   ├── Detail.styled.ts
│   │   │   ├── Detail.tsx
│   │   │   └── index.ts
│   │   └── Home
│   │       ├── Home.styled.ts
│   │       ├── Home.tsx
│   │       └── index.ts
│   └── vite-env.d.ts
├── task.txt
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Elements
### Pokemon Card
![pokecard](https://user-images.githubusercontent.com/11324886/218634857-7e1c7e87-3af5-483e-8a2f-f5bdb94347ff.png)
###### Card element contains:
 * Pokemon Type Icon
 * Pokemon Animated Gif
 * Pokemon Stats
 * Pokemon Moves
 * Pokemon Items(if any)
 
### Pokemon Evolution
![evocard](https://user-images.githubusercontent.com/11324886/218634885-4878f080-e505-460a-9202-f03f8035b0c0.png)
###### Evolution element contains:
* Pokemon Evolve Stages
* Pokemon Abilities(color by type)
* Pokemon Evolve Names
* Pokemon Evolve Images
* Pokemon Weight and Height

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Project created by Can Berk Ocalir for educational purposes.
