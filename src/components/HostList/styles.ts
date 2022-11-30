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
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  font-family: "HelveticaNeue";

  margin: 20px 30px;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserEmail = styled.div`
  font-size: 16px;
  font-family: "HelveticaNeue";
  margin-right: 20px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-family: "HelveticaNeue-Bold";
`;
