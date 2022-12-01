import styled, { css } from "styled-components";
import colors from "../../styles/colors";

export const ModalBase = styled.div``;
export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  width: 250px;
  height: 170px;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  p {
    padding-left: 20px;
  }
`;

export const ModalHeader = styled.div`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid ${colors.grey2}; ;
`;

export const TitleHeader = styled.h5`
  margin: 0;
  padding: 10px;
  color: ${colors.grey};
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;
