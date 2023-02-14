interface HeldItems {
  item: {
    name: string;
  };
}
interface Moves {
  move: {
    name: string;
  };
}
interface AbilityProps {
  abilityColor: string;
}
interface EvolutedPokemonProps {
  prev: string;
  next: string;
}
interface Species {
  name: string;
  url: string;
}
interface EvoChain {
  species: Species;
  evolves_to: [
    {
      species: Species;
      evolves_to: any;
    }
  ];
}
interface AbilityContain {
  name: string;
  url: string;
}
interface Ability {
  ability: AbilityContain;
  is_hidden: boolean;
  slot: number;
}

interface TypeContent {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: TypeContent;
}

interface StatContent {
  name: string;
  url: string;
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: StatContent;
}

export type {
  HeldItems,
  Moves,
  AbilityProps,
  EvolutedPokemonProps,
  Species,
  EvoChain,
  Ability,
  PokemonType,
  PokemonStats,
};
