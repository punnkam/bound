// http://localhost:3000/Explore
// https://github.com/tailwindlabs/tailwindcss-aspect-ratio

import React from 'react';
import Modal from '../../components/CustomModal';
import { Box, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import { NftCard1, products } from '../../components/NftCard1';

export const Explore = () => (
  <Flex direction="column">
    <Flex ml={200}>
      <Heading>Explore Subscriptions</Heading>
    </Flex>
    <Box
      // contains the grid of cards
      maxW="5xl"
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
          <NftCard1 key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  </Flex>
);

export default Explore;
