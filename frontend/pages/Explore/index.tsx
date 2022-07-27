import React from 'react';
// import Modal from '../../components/CustomModal';
import { Box, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import { GalleryCard } from '../../components/GalleryCard';
import Layout from '../../components/Layout';

//yo 

export const products = [
  {
    id: 1,
    cardInfo: {
      name: 'Verci DAO',
      href: '#',
      imageSrc: 'fakenft.png',
      imageAlt: 'Fake NFT boi',
      price: 0.2,
      creator: 'Verci',
      recur: 'Yr',
      share: 1,
      sold: 10,
      supply: 500,
    },
    modalInfo: {
      Title: 'Verci DAO',
      Slogan: 'Come vibe with us',
      Description: 'Place for people to chill and hang out',
      Details: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
      },
      Perks: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
      },
      History: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
      },
    },
  },
  {
    id: 2,
    cardInfo: {
      name: 'Killa Killa',
      href: '#',
      imageSrc: 'racer.png',
      imageAlt: 'Fake NFT boi',
      price: 0.2,
      creator: 'Racing DAO',
      recur: 'Yr',
      share: 2,
      sold: 10,
      supply: 500,
    },
    modalInfo: {
      Title: 'Racing DAO',
      Slogan: 'Fulfill your need for speed',
      Description: 'Go to racing events with your frens',
      Details: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/clubs.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/docs.png',
        },
      },
      Perks: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/f1.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/lewis.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/drive-f1.png',
        },
      },
      History: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/f1history.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/abudabi.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/daohistory.png',
        },
      },
    },
  },
  {
    id: 3,
    cardInfo: {
      name: 'Gorls Club',
      href: '#',
      imageSrc: 'gorls.png',
      imageAlt: 'Fake NFT boi',
      price: 0.2,
      creator: 'Gorls',
      recur: 'Yr',
      share: 2,
      sold: 10,
      supply: 500,
    },
    modalInfo: {
      Title: 'Gorls DAO',
      Slogan: 'Touch grass bro',
      Description: 'Meet gorls',
      Details: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
      },
      Perks: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
      },
      History: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
      },
    },
  },
  // More Subs...
];

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
