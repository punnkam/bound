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
import { BiEditAlt } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';

export default function ModalDescriptionMint() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [resize, setResize] = React.useState('none');

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
          <BiEditAlt size={30} color='#1A202C' />
        </Box>
        <Spacer />
        <VStack spacing={1}>
          <Heading size='sm'>Description</Heading>
          <Text>Include links and information</Text>
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

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent h='600px' maxW='800px'>
            <ModalHeader>Description</ModalHeader>
            <ModalBody>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel mt={5} fontWeight='semibold'>
                    Details
                  </FormLabel>
                  <Box>
                    <Textarea
                      size='lg'
                      resize='none'
                      h={400}
                      placeholder='Include three pieces of information about the subscription (separate with commas)'
                      bg='#FEFFFE'
                      borderColor='#D3D3D3'
                    />
                  </Box>
                </FormControl>
                {/* <Button leftIcon={<FiPlusSquare />}>Add Another Detail</Button> */}
              </VStack>
            </ModalBody>
            <ModalCloseButton />

            <ModalFooter>
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
