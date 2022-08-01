import {
  Button,
  Center,
  CenterProps,
  HStack,
  Icon,
  Square,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export const DropNft = (props: CenterProps, { setFilePath }: any) => (
  <Center
    borderWidth='1px'
    borderRadius='xl'
    px='6'
    py='4'
    {...props}
    bg='#FEFFFE'
    borderColor='#FECD5B'
    boxShadow='inner'
  >
    <VStack spacing='3'>
      <Square size='10' bg='bg-subtle' borderRadius='lg'>
        <Icon as={FiUploadCloud} boxSize='5' color='muted' />
      </Square>
      <VStack spacing='1'>
        <HStack spacing='1' whiteSpace='nowrap'>
          <Button variant='link' color='#FBBF24' size='sm'>
            Click to upload
          </Button>
          <Text fontSize='sm' color='muted'>
            or drag and drop
          </Text>
        </HStack>
        <Text fontSize='xs' color='muted'>
          PNG, GIF, MP4, MP3. MAX 100mb
        </Text>
      </VStack>
    </VStack>
  </Center>
);
