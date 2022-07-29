import React from 'react';
import CustomModal from './CustomModal';
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

export function GalleryCard(props: any) {
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
                <Text fontWeight="bold" color="white" bg="#1D2C2F" size="sm" p={2} borderRadius='md'>
                  {product.cardInfo.price} | {product.cardInfo.recur}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Button>
      </Flex>
      {showModal ? (
        <CustomModal
          modalInfo={modalInfo}
          cardInfo={cardInfo}
          toggleModal={toggleModal}
          isOpen={showModal}
        />
      ) : null}
    </Stack>
  );
}
