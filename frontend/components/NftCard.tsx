// http://localhost:3000/Explore
// https://github.com/tailwindlabs/tailwindcss-aspect-ratio

import React from 'react';
import Modal from './CustomModal';
import {
  Flex,
  Image,
  Button,
  Text,
  Skeleton,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';

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
        first: 'Valid for 2 years starting August 10th 2022',
      },
      Perks: {
        first: 'Event entries around the world',
      },
      History: {
        first: 'Started by dropouts',
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
      Title: 'Killa Killa',
      Slogan: 'Fulfill your need for speed',
      Description: 'Go to racing events with your frens',
      Details: {
        first: 'Valid for 1 year starting January 1st 2023',
      },
      Perks: {
        first: 'Race around the world',
      },
      History: {
        first: 'Started by F1 Drivers',
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
        first: 'Valid for 5 years starting January 1st 2023',
      },
      Perks: {
        first: 'Meet gorls around the world',
      },
      History: {
        first: 'Started by gorls',
      },
    },
  },
  // More Subs...
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;

interface Props {
  product: Product;
}

export function NftCard(props: Props) {
  const { product } = props;

  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});
  const [cardInfo, setCardInfo] = React.useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Stack>
      <Flex direction="column" align="center">
        <Button
          key={product.id}
          minW={'314px'}
          minH={'314px'}
          maxW={'314px'}
          maxH={'314px'}
          onClick={() => {
            setCardInfo(product.cardInfo);
            setModalInfo(product.modalInfo);
            setShowModal(true);
          }}
        >
          <VStack spacing="0px">
            <Image
              src={product.cardInfo.imageSrc}
              alt={product.cardInfo.name}
              draggable="false"
              fallback={<Skeleton />}
              objectFit="cover"
              minW={'314px'}
              minH={'314px'}
              maxW={'314px'}
              maxH={'314px'}
              borderTopRadius="xl"
            />
            <HStack
              // justifyContent="space-between"
              bg="#FEFFFE"
              minW={'314px'}
              minH={'115px'}
              borderBottomRadius="xl"
              spacing="24"
              justify="center"
            >
              <VStack spacing="8px" align="flex-start">
                <Text color="gray">{product.cardInfo.creator}</Text>
                <Text fontSize="lg" fontWeight="bold">
                  {product.cardInfo.name}
                </Text>
                <Text as="i">SBT Share +{product.cardInfo.share}</Text>
              </VStack>
              <VStack spacing="20px" align="flex-end">
                <Text>
                  #{product.cardInfo.sold} | {product.cardInfo.supply}
                </Text>
                <Text
                  fontWeight="bold"
                  color="white"
                  bg="#1D2C2F"
                  size="sm"
                  p={2}
                  borderRadius={5}
                >
                  {product.cardInfo.price} | {product.cardInfo.recur}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Button>
      </Flex>
      {showModal ? (
        <Modal
          modalInfo={modalInfo}
          cardInfo={cardInfo}
          toggleModal={toggleModal}
          isOpen={showModal}
        />
      ) : null}
    </Stack>
  );
}
