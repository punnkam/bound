import {
  Text,
  Stack,
  Flex,
  HStack,
  Heading,
  Button,
  VStack,
  GridItem,
  Grid,
  Center,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import StatTotalSales from '../../components/StatTotalSales';
import StatTotalSupply from '../../components/StatTotalSupply';
import StatNumberOwners from '../../components/StatNumberOwners';
import EventList from '../../components/EventTable';
import { DashGalleryCard } from '../../components/DashGalleryCard';
import { products } from '../../components/common/products';

export default function Sidebar() {
  const router = useRouter();

  // insert the gallerycards left of the "add mint button"
  return (
    <Layout>
      <Flex direction='column'>
        <Flex ml={170}>
          <Heading margin={'1rem'}>Dashboard</Heading>
        </Flex>
        <Grid
          // h="500px"
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={4}
          width={1050}
          height={575}
          mx='auto'
        >
          {products.map((product) => (
            <GridItem rowSpan={1} colSpan={1}>
              <DashGalleryCard key={product.id} product={product} />
            </GridItem>
          ))}

          <GridItem rowSpan={1} colSpan={1}>
            <Stack align='center'>
              <Button
                as='button'
                minW={'205px'}
                minH={'294px'}
                maxW={'205px'}
                maxH={'280px'}
                borderRadius='xl'
                bg='#FEFFFE'
                borderColor='#FECD5B'
                borderWidth='4px'
                boxShadow='inner'
                onClick={() => router.push('/Mint')}
                // colorScheme="#FECD5B"
              >
                <VStack>
                  <BiAddToQueue size='50px' />
                  <Text fontSize='lg'>Mint an NFT</Text>
                </VStack>
              </Button>
            </Stack>
          </GridItem>

          <GridItem rowSpan={2} colSpan={3}>
            <EventList />
          </GridItem>

          <GridItem rowSpan={2} colSpan={1}>
            <VStack>
              <StatTotalSales />
              <StatTotalSupply />
              <StatNumberOwners />
            </VStack>
          </GridItem>
        </Grid>
      </Flex>
    </Layout>
  );
}
