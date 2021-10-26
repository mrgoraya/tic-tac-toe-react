export type LayoutProps = {
  gap: number,
};

export type BoardProps = {
  board: BoardState,
  onClick: (square: number) => void 
}

export type SquareProps = {
  value: Value,
  onClick: () => void
}

export type LogProps = {
  history: BoardState[],
  jumpTo: (step: number) => void
}

export type Value = "X" | "O" | null;

export type BoardState = Value[];

export type GameState = {
  history: BoardState[],
  step: number
};