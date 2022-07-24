import {
  Stack,
  Image,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Card, Row, Col } from '@nextui-org/react';

import { useState } from 'react';

enum modalPageEnum {
  PERKS = 1,
  DETAILS = 2,
  HISTORY = 3,
}

export default function ModalDetailNew({ modalInfo, cardInfo }: any) {
  const [modalPage, setModalPage] = useState(modalPageEnum.PERKS);

  let list1;
  let list2;
  let list3;
  let img1;
  let img2;
  let img3;
  if (modalPage == modalPageEnum.PERKS) {
    list1 = <Text>{modalInfo.Perks.first.text}</Text>;
    list2 = <Text>{modalInfo.Perks.second.text}</Text>;
    list3 = <Text>{modalInfo.Perks.third.text}</Text>;

    img1 = modalInfo.Perks.first.imageSrc;
    img2 = modalInfo.Perks.second.imageSrc;
    img3 = modalInfo.Perks.third.imageSrc;
  } else if (modalPage == modalPageEnum.DETAILS) {
    list1 = <Text>{modalInfo.Details.first.text}</Text>;
    list2 = <Text>{modalInfo.Details.second.text}</Text>;
    list3 = <Text>{modalInfo.Details.third.text}</Text>;

    img1 = modalInfo.Details.first.imageSrc;
    img2 = modalInfo.Details.second.imageSrc;
    img3 = modalInfo.Details.third.imageSrc;
  } else {
    list1 = <Text>{modalInfo.History.first.text}</Text>;
    list2 = <Text>{modalInfo.History.second.text}</Text>;
    list3 = <Text>{modalInfo.History.third.text}</Text>;

    img1 = modalInfo.History.first.imageSrc;
    img2 = modalInfo.History.second.imageSrc;
    img3 = modalInfo.History.third.imageSrc;
  }

  return (
    <Stack
      direction='row'
      css={{ borderRadius: '0.5rem', paddingLeft: '0.5rem' }}
    >
      <Box>
        {/* <Image
          src={cardInfo.imageSrc}
          objectFit='cover'
          width='xs'
          height='sm'
          backdropBlur='sm'
          css={{ borderRadius: '0.5rem', positive: 'relative' }}
        /> */}
        <Card>
          <Card.Image
            src={cardInfo.imageSrc}
            objectFit='cover'
            width={300}
            height={360}
            alt='Card image background'
          />
          <Card.Footer
            isBlurred
            css={{
              position: 'absolute',
              bgBlur: '#ffffff66',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color='#000'>{cardInfo.name}</Text>
                <Text color='grey'>{cardInfo.price}</Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Box>
      <Box height='inherit' width='inherit'>
        <VStack
          direction='column'
          justify='start'
          spacing={6}
          css={{ paddingLeft: '1rem' }}
        >
          <Tabs>
            <TabList>
              <Tab onClick={() => setModalPage(modalPageEnum.PERKS)}>Perks</Tab>
              <Tab onClick={() => setModalPage(modalPageEnum.DETAILS)}>
                Details
              </Tab>
              <Tab onClick={() => setModalPage(modalPageEnum.HISTORY)}>
                History
              </Tab>
            </TabList>
          </Tabs>
          <Stack direction='row' spacing={5}>
            <Image
              src={img1}
              objectFit='cover'
              width='5rem'
              height='5rem'
              css={{ borderRadius: '0.5rem', positive: 'relative' }}
            />
            <Box width='xs'>
              <Text>{list1}</Text>
            </Box>
          </Stack>
          <Stack direction='row' spacing={5}>
            <Image
              src={img2}
              objectFit='cover'
              width='5rem'
              height='5rem'
              css={{ borderRadius: '0.5rem', positive: 'relative' }}
            />
            <Box width='xs'>
              <Text>{list2}</Text>
            </Box>
          </Stack>
          <Stack direction='row' spacing={5}>
            <Image
              src={img3}
              objectFit='cover'
              width='5rem'
              height='5rem'
              css={{ borderRadius: '0.5rem', positive: 'relative' }}
            />
            <Box width='xs'>
              <Text>{list3}</Text>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Stack>
  );
}
