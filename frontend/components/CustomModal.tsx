import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Card,
  Grid,
} from '@nextui-org/react';
import ModalContent from './ModalContent';

export default function CustomModal({ modalInfo, toggleModal, cardInfo }: any) {
  return (
    <div>
      <Modal
        aria-labelledby='modal-title'
        onClose={toggleModal}
        open={true}
        width='50rem'
        scroll={false}
      >
        <Modal.Header>
          <Text id='modal-title' size={26}>
            {modalInfo.Title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ModalContent modalInfo={modalInfo} cardInfo={cardInfo} />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat onClick={toggleModal}>
            Close
          </Button>
          <Button auto onClick={toggleModal}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
