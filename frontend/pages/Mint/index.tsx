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
} from '@chakra-ui/react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';
import factoryAbi from '../../abis/SubFactory.json';
import * as React from 'react';
import LeftSideMint from '../../components/LeftSideMint';
import RightSideMint from '../../components/RightSideMint';
import Layout from '../../components/Layout';
import { ethers } from 'ethers';
import axios from 'axios';

type Args = {
  [key: string]: any;
  name?: string;
  symbol?: string;
  price?: number | undefined;
  interval?: number | undefined;
  max?: number | undefined;
};

export default function Minting() {
  const { isConnected } = useAccount();
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState<number>();
  const [interval, setInterval] = useState<number>();
  const [max, setMax] = useState<number>();
  // const [filePath, setFilePath] = useState('');

  const [args, setArgs] = useState<Args>({});

  let { config: contractWriteConfig } = usePrepareContractWrite({
    addressOrName: '0x512f775f99A443E3f7be3c7F3B819E58805AEAB4',
    contractInterface: factoryAbi.abi,
    functionName: 'createSub',
    args: [args.name, args.symbol, args.price, args.interval, args.max],

    overrides: {
      gasPrice: 2000000000,
      gasLimit: 5000000,
      value: ethers.utils.parseEther('0.1'),
    },
  });

  const {
    data: subData,
    write: createSub,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
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
  const handleMint = () => {
    setArgs({
      name: name,
      symbol: symbol,
      price: price,
      interval: interval,
      max: max,
    });
    createSub?.();

    const json = {
      tokenId: 10,
      name: name,
      description: 'mock data',
      price: 'mock data',
      interval: 'mock data',
      max: 100,
      perks: 'mock perks',
      details: 'mock details',
      history: 'mock history',
    };
    axios
      .post('http://localhost:6900/api/collections', json)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <Box>
        {mintError && (
          <p style={{ marginTop: 24, color: '#FF6257' }}>
            Error: {mintError.message}
          </p>
        )}
        {txError && (
          <p style={{ marginTop: 24, color: '#FF6257' }}>
            Error: {txError.message}
          </p>
        )}
        <Flex ml={200}>
          <Heading>Mint</Heading>
        </Flex>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          mt={30}
          mx='auto'
          w={1000}
          spacing={8}
        >
          <LeftSideMint
            setName={setName}
            name={name}
            setSymbol={setSymbol}
            symbol={symbol}
            setMax={setMax}
            max={max}
            setPrice={setPrice}
            price={price}
            setInterval={setInterval}
            // setFilePath={setFilePath}
          />
          <RightSideMint />
        </SimpleGrid>

        <Center mt='0'>
          {isConnected && !isMinted && (
            <Button
              backgroundColor='#FDB251'
              // disabled={!createSub || isMintLoading || isMintStarted}
              color='white'
              width={200}
              size='lg'
              borderRadius='xl'
              margin='6'
              onClick={() => handleMint()}
            >
              {isMintLoading && 'Waiting for approval'}
              {isMintStarted && 'Minting...'}
              {!isMintLoading && !isMintStarted && 'Mint'}
            </Button>
          )}
          {isMinted && (
            <Text marginTop={'3rem'}>
              View on{' '}
              <Link href={`https://goerli.etherscan.io/tx/${subData?.hash}`}>
                Etherscan
              </Link>
            </Text>
          )}
        </Center>
      </Box>
    </Layout>
  );
}
