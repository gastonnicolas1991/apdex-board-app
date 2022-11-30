import styled, { css } from "styled-components";
import { Mode } from "../../domain/type";
import colors from "../../styles/colors";

interface LayoutMode {
  mode: Mode;
}

const cssListLayoutMixin = css`
  display: flex;
  flex-direction: column;
`;

export const HostListBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.white2};
`;

export const Container = styled.div<LayoutMode>`
  display: flex;
  flex-wrap: wrap;
  ${({ mode }) => mode === "list" && cssListLayoutMixin}
`;

export const Header = styled.div`
  display: flex;
`;
