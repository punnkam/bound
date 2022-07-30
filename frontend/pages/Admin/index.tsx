import {
  Box,
  HStack,
  Flex,
  Heading,
  SimpleGrid,
  Button,
  Center,
  Text,
  Link,
  Input,
} from '@chakra-ui/react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useEffect, useState } from 'react';
import factoryAbi from '../../../solidity/artifacts/contracts/SubFactory.sol/SubFactory.json';
import * as React from 'react';
import LeftSideMint from '../../components/LeftSideMint';
import RightSideMint from '../../components/RightSideMint';
import Layout from '../../components/Layout';

export default function Admin() {
  const { isConnected } = useAccount();
  const args = {
    address: '',
  };
  const [to, setTo] = useState('');

  const { config: contractWriteConfig } = usePrepareContractWrite({
    addressOrName: '0x512f775f99A443E3f7be3c7F3B819E58805AEAB4',
    contractInterface: factoryAbi.abi,
    functionName: 'addPartner',
    args: [to],
  });

  const {
    data: subData,
    write: addPartner,
    isLoading,
    isSuccess,
    error: error,
  } = useContractWrite(contractWriteConfig);

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: subData?.hash,
  });

  const isMinted = txSuccess;

  /* fixes hydration error */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handleAdd = (e: any) => {};

  return (
    <Layout>
      <Box>
        {error && (
          <p style={{ marginTop: 24, color: '#FF6257' }}>
            Error: {error.message}
          </p>
        )}
        {txError && (
          <p style={{ marginTop: 24, color: '#FF6257' }}>
            Error: {txError.message}
          </p>
        )}
        <Flex ml={200}>
          <Heading>Admin Panel</Heading>
        </Flex>
        <Flex justifyContent={'center'}>
          <Input
            placeholder='Partner Eth Address'
            onChange={(e) => setTo(e.target.value)}
            value={to}
            width='md'
          />
        </Flex>
        <Center mt='0'>
          {isConnected && !isMinted && (
            <Button
              backgroundColor='#FDB251'
              color='white'
              width={200}
              size='lg'
              borderRadius='xl'
              margin='6'
              onClick={() => addPartner?.()}
            >
              {isSuccess && 'Waiting for approval'}
              {isLoading && 'Adding Partner...'}
              {!isSuccess && !isLoading && 'Add Partner'}
            </Button>
          )}
        </Center>
        <Flex justifyContent={'center'}>
          {isMinted && (
            <Text>
              View on{' '}
              <Link href={`https://goerli.etherscan.io/tx/${subData?.hash}`}>
                Etherscan
              </Link>
            </Text>
          )}
        </Flex>
      </Box>
    </Layout>
  );
}
