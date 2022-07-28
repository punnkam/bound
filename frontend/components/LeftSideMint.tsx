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
  useDisclosure,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import * as React from 'react';
import { DropNft } from './DropNft';
import { RecurringButton } from './RecurringButton';

export default function LeftSideMint() {
  return (
    <Box>
      <Box>
        <FormControl id="file" isRequired>
          <FormLabel fontWeight="semibold">Upload a file</FormLabel>
          <Text>Create your subscription pass</Text>

          <DropNft mt={5} />
        </FormControl>
        <FormControl isRequired>
          <Heading size="xs" mt={5} fontWeight="normal">
            Subscription Details
          </Heading>

          <FormLabel mt={5} fontWeight="semibold">
            Title
          </FormLabel>
          <Input
            placeholder="e.g. The Cool Group"
            bg="#FEFFFE"
            borderColor="#D3D3D3"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={5} fontWeight="semibold">
            NFT Share
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
        <HStack>
          <FormControl isRequired>
            <FormLabel mt={5} fontWeight="semibold">
              Pricing
            </FormLabel>
            <Input
              placeholder="ETH"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
              width={100}
            />
          </FormControl>

          <VStack>
            <FormControl width="auto">
              <FormLabel mt={5} fontWeight="semibold">
                Every
              </FormLabel>

              <RecurringButton />
            </FormControl>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
