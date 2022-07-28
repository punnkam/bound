import {
  Button,
  Center,
  CenterProps,
  HStack,
  Icon,
  LinkOverlay,
  Spacer,
  Square,
  Text,
  useColorModeValue,
  VStack,
  LinkBox,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BiImageAdd } from 'react-icons/bi';

export const DropImage = (props: CenterProps) => (
  <HStack mt={5} spacing={5}>
    <LinkBox
      borderWidth="1px"
      borderRadius="xl"
      px="6"
      py="6"
      {...props}
      bg="#FEFFFE"
      borderColor="#D3D3D3"
      boxShadow="inner"
      width="100%"
    >
      <Center>
        <Square size="10" bg="bg-subtle" borderRadius="lg">
          <LinkOverlay href="#">
            <Icon as={BiImageAdd} boxSize="5" color="muted" />
          </LinkOverlay>
        </Square>
      </Center>
    </LinkBox>
     <LinkBox
      borderWidth="1px"
      borderRadius="xl"
      px="6"
      py="6"
      {...props}
      bg="#FEFFFE"
      borderColor="#D3D3D3"
      boxShadow="inner"
      width="100%"
    >
      <Center>
        <Square size="10" bg="bg-subtle" borderRadius="lg">
          <LinkOverlay href="#">
            <Icon as={BiImageAdd} boxSize="5" color="muted" />
          </LinkOverlay>
        </Square>
      </Center>
    </LinkBox> <LinkBox
      borderWidth="1px"
      borderRadius="xl"
      px="6"
      py="6"
      {...props}
      bg="#FEFFFE"
      borderColor="#D3D3D3"
      boxShadow="inner"
      width="100%"
    >
      <Center>
        <Square size="10" bg="bg-subtle" borderRadius="lg">
          <LinkOverlay href="#">
            <Icon as={BiImageAdd} boxSize="5" color="muted" />
          </LinkOverlay>
        </Square>
      </Center>
    </LinkBox>
  </HStack>
);
