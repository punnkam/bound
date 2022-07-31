import React from 'react';
import {
  Flex,
  Image,
  Button,
  Text,
  Skeleton,
  Stack,
  HStack,
  VStack,
  Box,
} from '@chakra-ui/react';

import DashModal from './DashModal';

export function DashGalleryCard(props: any) {
  const { product, width } = props;

  const [showModal, setShowModal] = React.useState(false);
  const [cardInfo, setCardInfo] = React.useState({});
  const [modalInfo, setModalInfo] = React.useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Stack>
      <Flex
        direction='column'
        align='center'
        borderWidth='1px'
        borderColor='#D3D3D3'
        borderRadius={'xl'}
      >
        <Button
          key={product.id}
          minW={'250px'}
          minH={'293px'}
          maxW={'250px'}
          maxH={'320px'}
          onClick={() => {
            setCardInfo(product.cardInfo);
            setModalInfo(product.modalInfo);
            setShowModal(true);
          }}
        >
          <Box maxWidth={'240px'} maxHeight={'400px'}>
            <VStack spacing='0px' maxH={'320px'}>
              <Image
                src={product.cardInfo.imageSrc}
                alt={product.cardInfo.name}
                draggable='false'
                fallback={<Skeleton />}
                objectFit='cover'
                minW={'250px'}
                minH={'180px'}
                maxW={'250px'}
                maxH={'180px'}
                borderTopRadius='xl'
              />
              <HStack
                // justifyContent="space-between"
                bg='#FEFFFE'
                minW={'250px'}
                minH={'115px'}
                borderBottomRadius='xl'
                justify='center'
              >
                <VStack spacing='8px' align='flex-start' padding={'0.5rem'}>
                  <Text color='gray' fontSize='sm'>
                    {product.cardInfo.creator}
                  </Text>
                  <Text fontSize='sm' fontWeight='bold'>
                    {product.cardInfo.name}
                  </Text>
                  <Text as='i'>SBT Share +{product.cardInfo.share}</Text>
                </VStack>
                <VStack spacing='10px' align='flex-end' padding={'0.5rem'}>
                  <Text>
                    #{product.cardInfo.sold} | {product.cardInfo.supply}
                  </Text>
                  <Text
                    fontWeight='bold'
                    color='white'
                    bg='#1D2C2F'
                    size=''
                    p={2}
                    borderRadius='md'
                  >
                    {product.cardInfo.price} | {product.cardInfo.recur}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </Button>
      </Flex>
      {showModal ? (
        <DashModal
          modalInfo={modalInfo}
          cardInfo={cardInfo}
          toggleModal={toggleModal}
          isOpen={showModal}
        />
      ) : null}
    </Stack>
  );
}
