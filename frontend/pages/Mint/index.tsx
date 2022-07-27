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
} from '@chakra-ui/react';
import * as React from 'react';
import { Dropzone } from '../../components/Dropzone';

export default function Mining() {
  return (
    <Box maxW="5xl">
      <Flex ml={200}>
        <Heading>Mint</Heading>
      </Flex>
      <SimpleGrid
        columns={2}
        alignContent="center"
        gap={{ base: '8', lg: '12' }}
        ml={200}
        mt={30}
      >
        {/* <Container maxW="lg" justifyContent="center"> */}
        <HStack>
          <Stack>
            <FormControl id="file" w={388}>
              <FormLabel>Upload a file</FormLabel>
              <Dropzone />
            </FormControl>
            <FormControl isRequired w={388}>
              <FormLabel mt={5}>Title</FormLabel>
              <Input
                placeholder="e.g. The Cool Group"
                bg="#FEFFFE"
                borderColor="#D3D3D3"
              />
            </FormControl>
            <FormControl isRequired w={388}>
              <FormLabel mt={5}>NFT Share</FormLabel>
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
            <HStack w={388}>
              <FormControl isRequired>
                <FormLabel mt={5}>Pricing</FormLabel>
                <Input
                  placeholder="ETH"
                  bg="#FEFFFE"
                  borderColor="#D3D3D3"
                  width={100}
                />
              </FormControl>
              {/* <Spacer /> */}
              <VStack>
                <FormControl width="auto">
                  <FormLabel mt={5}>Every</FormLabel>
                  <ButtonGroup
                    // width="fit-content"
                    // spacing="4"
                    variant="outline"
                    color="#9BA3AF"
                    size={'md'}
                    width={270}
                  >
                    <Button
                      bg="#FEFFFE"
                      borderColor="#D3D3D3"
                      _hover={{ bg: '#ebedf0' }}
                      _active={{
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                      }}
                      _focus={{
                        boxShadow: '0 0 1px 2px #FECD5B',
                      }}
                    >
                      Month
                    </Button>
                    <Button
                      // size={'md'}
                      bg="#FEFFFE"
                      borderColor="#D3D3D3"
                      _hover={{ bg: '#ebedf0' }}
                      _active={{
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                      }}
                      _focus={{
                        boxShadow: '0 0 1px 2px #FECD5B',
                      }}
                    >
                      6 Months
                    </Button>
                    <Button
                      // size={'md'}
                      bg="#FEFFFE"
                      borderColor="#D3D3D3"
                      _hover={{ bg: '#ebedf0' }}
                      _active={{
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                      }}
                      _focus={{
                        boxShadow: '0 0 1px 2px #FECD5B',
                      }}
                    >
                      12 Months
                    </Button>
                  </ButtonGroup>
                </FormControl>
              </VStack>
            </HStack>
          </Stack>
        </HStack>
        {/* </Container> */}
      </SimpleGrid>
    </Box>
  );
}
