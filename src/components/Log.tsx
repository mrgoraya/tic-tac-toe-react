import React, { FC } from "react";
import { LogProps } from "../types/types";

export const Log: FC<LogProps> = ({ history, jumpTo }) => (
  <ol>
    {history.map((_, index) => (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>
          Go to {index === 0 ? "start" : `move #${index}`}
        </button>
      </li>
    ))}
  </ol>
);
