import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Center,
  Wrap,
  Flex,
  Stack,
  Button,
  HStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { DropImage } from './DropImage';
import { BiLayerPlus } from 'react-icons/bi';
import ModalRequirementMint from './ModalRequirementMint';
import ModalDescriptionMint from './ModalDescriptionMint';
import ModalPerkMint from './ModalPerkMint';

export default function RightSideMint() {
  return (
    <Box maxH={590} width="auto">
      <FormControl id="file">
        <FormLabel fontWeight="semibold">Upload Images</FormLabel>
        <Text>Further describe the NFT</Text>
        <DropImage />
      </FormControl>

      <Stack mt={5} spacing={5}>
        <ModalRequirementMint />
        <ModalDescriptionMint />
        <ModalPerkMint />
      </Stack>

      <HStack mt={1}>
        <Center>
          <Button
            backgroundColor="#1A202C"
            color="white"
            width={275}
            size="md"
            borderRadius="lg"
            mt={15}
            fontSize="xl"
            variant="outline"
          >
            <Box mx={1}>
              <BiLayerPlus size={25} />
            </Box>
            Add an SBT
          </Button>
        </Center>
        <Center>
          <Button
            backgroundColor="#FDB251"
            color="white"
            width={200}
            size="md"
            borderRadius="lg"
            mt={15}
            fontSize="xl"
            variant="outline"
          >
            Mint Collection
          </Button>
        </Center>
      </HStack>
    </Box>
  );
}

// to do in future:
// 1. Create RightSideMintDescription.tsx
// 2. Copy paste code into the file
// 3. Make it so if you click on the plus sign (Button), it will add a new RightSideMintDescription.tsx to the VStack (Box)
