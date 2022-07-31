import React from 'react';
// import Modal from '../../components/CustomModal';
import { Box, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import { GalleryCard } from '../../components/GalleryCard';
import Layout from '../../components/Layout';
import { products } from '../../components/common/products';

export const Explore = () => (
  <Layout>
    <Flex direction='column'>
      <Flex ml={200}>
        <Heading>Explore Subscriptions</Heading>
      </Flex>
      <Box
        // contains the grid of cards
        maxW='5xl'
        ml={200}
        mt={105}
        // px={{ base: '4', md: '8', lg: '12' }}
        // py={{ base: '6', md: '8', lg: '12' }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          gap={{ base: '8', lg: '12' }}
        >
          {products.map((product) => (
            <GalleryCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  </Layout>
);

export default Explore;
