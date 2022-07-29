import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Center,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  HStack,
  IconButton,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiStar } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';

export default function ModalPerkMint() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        backgroundColor="#FEFFFE"
        borderColor="#D3D3D3"
        borderWidth={1}
        borderRadius="lg"
        p={3}
      >
        <Box p={1}>
          <BiStar size={30} color="#1A202C" />
        </Box>
        <Spacer />
        <VStack spacing={1}>
          <Heading size="sm">Perks</Heading>
          <Text>List the benefits of having the token</Text>
        </VStack>

        <Spacer />
        <IconButton
          icon={<FiPlusSquare />}
          aria-label="Add a requirement"
          onClick={onOpen}
          fontSize="4xl"
          background="none"
          color="#FDB251"
        />

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>{/* <Lorem count={2} /> */}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
    </>
  );
}
