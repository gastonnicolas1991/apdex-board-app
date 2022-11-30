import { TooltipBase, TooltipLabel, TooltipArrow } from "./styles";

interface TooltipProps {
  content: string;
  show: boolean;
}

const Tooltip = ({ content, show }: TooltipProps) => {
  return (
    <TooltipBase show={show}>
      <TooltipArrow />
      <TooltipLabel>{content}</TooltipLabel>
    </TooltipBase>
  );
};

export default Tooltip;
