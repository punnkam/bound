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
  useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';

export default function ModalRequirementMint() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const statuses = ['error'];

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
          <BiCheckDouble size={30} color="#1A202C" />
        </Box>
        <Spacer />
        <VStack spacing={1}>
          <Heading size="sm">Requirements</Heading>
          <Text>Add necessities to receive the token</Text>
        </VStack>

        <Spacer />
        <IconButton
          icon={<FiPlusSquare />}
          aria-label="Add a requirement"
          fontSize="4xl"
          background="none"
          color="#FDB251"
          // will use when this feature comes out
          // onClick={onOpen}
          onClick={() =>
            toast({
              title: 'Not Available',
              description: "Only for SBTs: Feature coming soon!",
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
          }
        ></IconButton>

        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Requirements</ModalHeader>
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
