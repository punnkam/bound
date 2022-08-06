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
import * as React from 'react';
import EventList from '../../components/EventTable';
import { DashGalleryCard } from '../../components/DashGalleryCard';
import { products } from '../../components/common/products';

export default function Profile() {
  const router = useRouter();
  /* fixes hydration error */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  // insert the gallerycards left of the "add mint button"
  return (
    <Layout>
      <Tabs>
        <TabList justifyContent={'center'}>
          <Tab
            _selected={{
              color: '#FEC000',
            }}
          >
            Collection
          </Tab>
          <Tab
            _selected={{
              color: '#FEC000',
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
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(4, 1fr)'
              gap={4}
              width={1050}
              height={575}
              mx='auto'
            >
              {products.map((product) => (
                <GridItem key={product.id} margin={'0.5rem'}>
                  <DashGalleryCard key={product.id} product={product} />
                  <Text margin={'5px'}>
                    Expires on
                    <Text textColor={'grey'}>{product.cardInfo.expires}</Text>
                  </Text>
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
      <Flex direction='column'></Flex>
    </Layout>
  );
}
