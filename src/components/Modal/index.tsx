import {
  ModalBase,
  ModalContent,
  ModalOverlay,
  ModalWrapper,
  ModalHeader,
  TitleHeader,
} from "./styles";

interface ModalProps {
  setIsOpen: (value: boolean) => void;
  content: string;
}

const Modal = ({ setIsOpen, content }: ModalProps) => {
  const handleClick = () => setIsOpen(false);

  return (
    <ModalBase data-testid="action-modal">
      <ModalOverlay onClick={handleClick} />
      <ModalWrapper>
        <ModalContent>
          <ModalHeader>
            <TitleHeader>Details</TitleHeader>
          </ModalHeader>
          <p role="content">{content}</p>
        </ModalContent>
      </ModalWrapper>
    </ModalBase>
  );
};

export default Modal;
