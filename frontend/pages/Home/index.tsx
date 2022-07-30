import {
  Text,
  Stack,
  Flex,
  HStack,
  Heading,
  Button,
  VStack,
} from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Sidebar() {
  const router = useRouter();

  return (
    <Layout>
      <Flex direction='column'>
        <Flex ml={200}>
          <Heading>Dashboard</Heading>
        </Flex>
        <Flex justify='center'>
          <Button
            as='button'
            minW={'314px'}
            minH={'429px'}
            maxW={'314px'}
            maxH={'429px'}
            borderRadius={25}
            bg='#FEFFFE'
            borderColor='#FECD5B'
            borderWidth='4px'
            boxShadow='inner'
            p='6'
            onClick={() => router.push('/Mint')}
            // colorScheme="#FECD5B"
          >
            <VStack spacing='5px'>
              <BiAddToQueue size='100px' />
              <Text fontSize='lg'>Mint an NFT</Text>
            </VStack>
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}
