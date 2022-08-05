import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  VStack,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { DropNft } from './DropNft';
import { RecurringButton } from './RecurringButton';

export default function LeftSideMint({
  name,
  setName,
  symbol,
  setSymbol,
  price,
  setPrice,
  setInterval,
  max,
  setMax,
  setFilePath,
}: any) {
  return (
    <Box>
      <Box>
        <FormControl id='file' isRequired>
          <FormLabel fontWeight='semibold'>Upload a file</FormLabel>
          <Text>Create your subscription pass</Text>

          <DropNft mt={5} />
        </FormControl>
        <HStack>
          <FormControl isRequired>
            <Heading size='xs' mt={5} fontWeight='normal'>
              Subscription Details
            </Heading>

            <FormLabel mt={1} fontWeight='semibold'>
              Title
            </FormLabel>
            <Input
              placeholder='e.g. The Cool Group'
              bg='#FEFFFE'
              borderColor='#D3D3D3'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>
          <FormControl isRequired>
            <Heading size='xs' mt={5} fontWeight='normal'>
              Collection Symbol
            </Heading>

            <FormLabel mt={1} fontWeight='semibold'>
              Symbol
            </FormLabel>
            <Input
              placeholder='e.g. TCG'
              bg='#FEFFFE'
              borderColor='#D3D3D3'
              onChange={(e) => setSymbol(e.target.value)}
              value={symbol}
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired width='50%'>
            <FormLabel mt={5} fontWeight='semibold'>
              NFT Share
            </FormLabel>
            <Select
              // placeholder="# people you share with"
              placeholder='Feature coming soon!'
              bg='#FEFFFE'
              borderColor='#D3D3D3'
              color='#9BA3AF'
            >
              {/* <option value="option1">+ 1</option>
              <option value="option2">+ 2</option>
              <option value="option3">+ 3</option> */}
            </Select>
          </FormControl>
          <FormControl isRequired width='50%'>
            <FormLabel mt={5} fontWeight='semibold'>
              Supply
            </FormLabel>
            <Input
              placeholder='# of subscriptions'
              bg='#FEFFFE'
              borderColor='#D3D3D3'
              onChange={(e) => setMax(e.target.value)}
              value={max}
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired width='50%'>
            <FormLabel mt={5} fontWeight='semibold'>
              Pricing
            </FormLabel>
            <Input
              placeholder='ETH (per cycle)'
              bg='#FEFFFE'
              borderColor='#D3D3D3'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </FormControl>

          <VStack>
            <FormControl width='auto'>
              <FormLabel mt={5} fontWeight='semibold'>
                Every
              </FormLabel>
              <RecurringButton setValue={setInterval} />
            </FormControl>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
