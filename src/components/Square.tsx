import React, { FC } from "react";
import styled from "styled-components";
import { SquareProps } from "../types/types";

const StyledSquare = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Square: FC<SquareProps> = ({ value, onClick }) => (
  <StyledSquare onClick={onClick}>{value}</StyledSquare>
);
