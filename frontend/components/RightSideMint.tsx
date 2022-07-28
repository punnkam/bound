import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Center,
} from '@chakra-ui/react';
import * as React from 'react';
import { DropImage } from './DropImage';
import { BiListPlus } from 'react-icons/bi';

export default function RightSideMint() {
  return (
    <Box overflowY="scroll" maxH={580} width={1000}>
      <FormControl id="file">
        <FormLabel fontWeight="semibold">Upload Images</FormLabel>
        <Text>Further describe the NFT</Text>
        <DropImage />
      </FormControl>
      <FormControl isRequired>
        <Heading size="xs" mt={5} fontWeight="normal">
          Description
        </Heading>
        <FormLabel mt={1} fontWeight="semibold">
          Details
        </FormLabel>
        <Input
          placeholder="Describe what this NFT/SBT is about"
          bg="#FEFFFE"
          borderColor="#D3D3D3"
        />
      </FormControl>
      <FormControl isRequired>
        <Heading size="xs" mt={5} fontWeight="normal">
          Perks
        </Heading>
        <FormLabel mt={1} fontWeight="semibold">
          Name
        </FormLabel>
        <Select
          placeholder="# people NFT owner shares with"
          bg="#FEFFFE"
          borderColor="#D3D3D3"
          color="#9BA3AF"
        >
          <option value="option1">+ 1</option>
          <option value="option2">+ 2</option>
          <option value="option3">+ 3</option>
        </Select>
      </FormControl>
      <FormControl isRequired>
        <FormLabel mt={5} fontWeight="semibold">
          Description
        </FormLabel>
        <Input
          placeholder="Describe the new perk of receiving this NFT/SBT"
          bg="#FEFFFE"
          borderColor="#D3D3D3"
          // width={150}
        />
      </FormControl>
      <Center mt={5}>
        <BiListPlus size={40} color="#1A202C" />
      </Center>
    </Box>
  );
}

// to do in future:
// 1. Create RightSideMintDescription.tsx
// 2. Copy paste code into the file
// 3. Make it so if you click on the plus sign (Button), it will add a new RightSideMintDescription.tsx to the VStack (Box)
