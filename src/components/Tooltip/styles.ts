import styled from "styled-components";
import colors from "../../styles/colors";

interface TooltipBaseProps {
  show: boolean;
}

export const TooltipBase = styled.div<TooltipBaseProps>`
  position: absolute;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  z-index: 1;
  border-radius: 8px;

  background-color: ${colors.black};
  color: ${colors.white};
`;

export const TooltipLabel = styled.div`
  text-align: center;
  padding: 10px;
`;

export const TooltipArrow = styled.div`
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
`;
