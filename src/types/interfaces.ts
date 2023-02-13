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

export type { HeldItems, Moves, AbilityProps, EvolutedPokemonProps };
