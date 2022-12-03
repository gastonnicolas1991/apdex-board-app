import styled from "styled-components";
import colors from "../../styles/colors";

export const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 30px;
  margin: 15px;
  width: 375px;
`;

export const Title = styled.h3`
  color: ${colors.black} 100%;
  font-size: 16px;
  font-family: "Helvetica Neue";
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 23px;
  margin-top: 0;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Score = styled.div`
  color: ${colors.grey};
  padding-right: 20px;
  opacity: 62%;
  font-family: "Helvetica Neue";
  font-weight: 900;
  line-height: 1.5;
  font-size: 13px;
  min-width: 40px;
`;

export const AppName = styled.div`
  color: ${colors.grey};
  font-family: "Helvetica Neue";
  line-height: 1.2;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 62%;
  }
`;
