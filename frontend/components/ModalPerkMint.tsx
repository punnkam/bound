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
  Textarea,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiStar, BiPlus } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';
import PerkForm from './PerkForm';

export default function ModalPerkMint() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        minH={115}
        backgroundColor='#FEFFFE'
        borderColor='#D3D3D3'
        borderWidth={1}
        borderRadius='lg'
        p={3}
      >
        <Box p={1}>
          <BiStar size={30} color='#1A202C' />
        </Box>
        <Spacer />
        <VStack spacing={1}>
          <Heading size='sm'>Perks</Heading>
          <Text>List the benefits of having the token</Text>
        </VStack>

        <Spacer />
        <IconButton
          icon={<FiPlusSquare />}
          aria-label='Add a requirement'
          onClick={onOpen}
          fontSize='4xl'
          background='none'
          color='#FDB251'
        />

        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={'inside'}
        >
          <ModalOverlay />
          <ModalContent h='600px' maxW='800px'>
            <ModalHeader>Perks</ModalHeader>
            <ModalBody>
              <PerkForm />
            </ModalBody>
            <ModalCloseButton />

            <ModalFooter>
              {/* <Button leftIcon={<BiPlus size={20} />}>Add Another Perk</Button>
              <Spacer /> */}

              <Button colorScheme='blue' mr={3}>
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
