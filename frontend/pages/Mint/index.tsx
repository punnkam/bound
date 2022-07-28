import {
  Box,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  Input,
  Stack,
  Select,
  ButtonGroup,
  Button,
  Spacer,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import LeftSideMint from '../../components/LeftSideMint';
import RightSideMint from '../../components/RightSideMint';

export default function Mining() {
  return (
    <Box>
      <Flex ml={200}>
        <Heading>Mint</Heading>
      </Flex>

      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        mt={30}
        mx="auto"
        w={1000}
        spacing={8}
      >
        <LeftSideMint />
        <RightSideMint />
      </SimpleGrid>
    </Box>
  );
}
