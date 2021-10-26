import React, { FC } from "react";
import { Board } from "./Board";
import { Log } from "./Log";
import { Column, Row } from "./common/styledLayout";
import { useGameState } from "./../hooks/useGameState";

export const Game: FC = () => {
  const { gameState, current, xIsNext, winner, handleClick, jumpTo } =
    useGameState();
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>
          {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`}
        </div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
};
