export interface PlayerT {
  id?: number, name: string; score: number;
}

export interface PlayerProp extends PlayerT {
  handleIncrement: (id: number, score: number) => void;
  handleDecrement: (id: number) => void;
}