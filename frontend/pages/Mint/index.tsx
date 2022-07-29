import {
  Box,
  HStack,
  Flex,
  Heading,
  SimpleGrid,
  Button,
  Center,
} from '@chakra-ui/react';
import * as React from 'react';
import LeftSideMint from '../../components/LeftSideMint';
import RightSideMint from '../../components/RightSideMint';
import Layout from '../../components/Layout';

export default function Mining() {
  return (
    <Layout>
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
          <HStack>
            <RightSideMint />
          </HStack>
        </SimpleGrid>

        {/* <Center mt='0'>
          <Button
            backgroundColor='#FDB251'
            color='white'
            width={200}
            size='lg'
            borderRadius='xl'
            margin='6'
          >
            Mint
          </Button>
        </Center> */}
      </Box>
    </Layout>
  );
}
