import { Modal, ModalBody, ModalContent, Spacer } from "@nextui-org/react";
import { useLinkModal } from "../../../context/LinkModalContext";

const ShortenedLinkInfoModal = () => {
  const { isOpen, onClose, props } = useLinkModal();

  return (
    <Modal
      isOpen={isOpen}
      size="md"
      onOpenChange={(isOpen) => {
        !isOpen && onClose();
      }}
    >
      <ModalContent>
        <ModalBody>
          here's your shorten url !
          <Spacer y={2} />
          {props?.original_url} and
          {props?.short_url}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShortenedLinkInfoModal;
