export interface LayoutProps {
  gap: number;
};

export interface BoardProps {
  board: BoardState;
  onClick: (square: number) => void;
}

export interface SquareProps {
  value: Value;
  onClick: () => void;
}

export interface LogProps {
  history: BoardState[];
  jumpTo: (step: number) => void;
}

export type Value = "X" | "O" | null;

export type BoardState = Value[];

export interface GameState {
  history: BoardState[];
  step: number;
};