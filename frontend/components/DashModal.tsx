// import {
//   Modal,
//   Button,
//   Text,
//   Input,
//   Row,
//   Checkbox,
//   Card,
//   Grid,
// } from '@nextui-org/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import ModalDetailNew from './ModalDetailNew';

export default function DashModal({
  modalInfo,
  toggleModal,
  cardInfo,
  isOpen,
}: any) {
  return (
    <div>
      <Modal size='4xl' isOpen={isOpen} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {modalInfo.Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalDetailNew modalInfo={modalInfo} cardInfo={cardInfo} />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={toggleModal}>
              Close
            </Button>
            <Button colorScheme='red'>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

//testing
