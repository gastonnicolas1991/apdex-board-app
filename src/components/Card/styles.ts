import styled from "styled-components";
import colors from "../../styles/colors";
import { TooltipBase } from "../Tooltip/styles";

export const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 30px;
`;

export const Title = styled.div`
  color: ${colors.black} 100%;
  font-size: 16px;
  font-family: "HelveticaNeue-Bold";
  line-height: 1.2;
  margin-bottom: 23px;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Score = styled.div`
  color: ${colors.grey};
  margin-right: 20px;
  opacity: 62%;
  font-family: "HelveticaNeue-Bold";
  line-height: 1.5;
  font-size: 13px;
`;

export const AppName = styled.div`
  color: ${colors.grey};
  font-family: "HelveticaNeue";
  line-height: 1.2;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 62%;
  }
`;
