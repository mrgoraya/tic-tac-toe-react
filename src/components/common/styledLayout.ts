import styled from "styled-components";
import { LayoutProps } from "../../types/types";

export const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;