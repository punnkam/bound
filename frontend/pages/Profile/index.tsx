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
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
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

export default function Profile() {
  const router = useRouter();

  // insert the gallerycards left of the "add mint button"
  return (
    <Layout>
      <Tabs>
        <TabList justifyContent={'center'}>
          <Tab
            _selected={{
              color: '#FEA401',
            }}
          >
            Collection
          </Tab>
          <Tab
            _selected={{
              color: '#FEA401',
            }}
          >
            Activity
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex justifyContent={'center'}>
              <Heading margin={'1.5rem'}>Your Subscriptions</Heading>
            </Flex>
            <Grid
              // h="500px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
              width={1050}
              height={575}
              mx="auto"
            >
              {products.map((product) => (
                <GridItem key={product.id} margin={'0.5rem'}>
                  <DashGalleryCard key={product.id} product={product} />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Flex justifyContent={'center'}>
              <Heading margin={'1.5rem'}>Your Activity</Heading>
            </Flex>
            <Flex justifyContent={'center'}>
              <GridItem>
                <EventList />
              </GridItem>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex direction="column"></Flex>
    </Layout>
  );
}
