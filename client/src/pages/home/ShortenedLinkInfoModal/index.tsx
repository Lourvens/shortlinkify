import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useLinkModal } from "../../../context/LinkModalContext";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";

const ShortenedLinkInfoModal = () => {
  const { isOpen, onClose, props } = useLinkModal();

  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      size="md"
      backdrop="blur"
      classNames={{
        backdrop: "bg-gray-900 bg-opacity-80",
        wrapper: "bg-blur backdrop-blur",
      }}
      onOpenChange={(isOpen) => {
        !isOpen && onClose();
      }}
    >
      <ModalContent>
        <ModalHeader className="flex items-center gap-3">
          <Button isIconOnly size="sm" radius="full" variant="shadow">
            <BsFillPatchCheckFill size="24" />
          </Button>
          Url shortened !
        </ModalHeader>
        <ModalBody>
          <span className="italic">Here's your short link:</span>
          <div className="flex items-center justify-between bg-white bg-opacity-5 rounded-xl pl-3">
            <h3 className="text-primary-500">{props?.short_url}</h3>
            <Button startContent={<AiFillCopy />} color="primary">
              Copy Link
            </Button>
          </div>
          <Divider />
          <Button color="warning" startContent={<IoAnalyticsOutline />}>
            Get Analytics Data
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShortenedLinkInfoModal;
