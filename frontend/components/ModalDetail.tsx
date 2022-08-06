import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Card,
  Grid,
  Col,
} from '@nextui-org/react';

import { useState } from 'react';

enum modalPageEnum {
  PERKS = 1,
  DETAILS = 2,
  HISTORY = 3,
}

// OLD VERSION

export default function ModalDetail({ modalInfo, cardInfo }: any) {
  const [modalPage, setModalPage] = useState(modalPageEnum.PERKS);

  let page;
  if (modalPage == modalPageEnum.PERKS) {
    page = <Grid md={30}>{modalInfo.Perks.first}</Grid>;
  } else if (modalPage == modalPageEnum.DETAILS) {
    page = <Grid md={30}>{modalInfo.Details.first}</Grid>;
  } else {
    page = <Grid md={30}>{modalInfo.History.first}</Grid>;
  }

  return (
    <div>
      <Grid.Container gap={3}>
        <Grid sm={15} md={5}>
          <Card>
            <Card.Image
              src={cardInfo.imageSrc}
              objectFit='cover'
              width='100%'
              height={360}
              alt='Card image background'
            />
            <Card.Footer
              isBlurred
              css={{
                position: 'absolute',
                bgBlur: '#ffffff66',
                borderTop:
                  '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text color='#000' h2={true}>
                    {cardInfo.name}
                  </Text>
                  <Text color='grey' size={12}>
                    {cardInfo.color}
                  </Text>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid sm={12} md={7}>
          <Card css={{ mw: '400px', dropShadow: 'none', border: 'none' }}>
            <Button.Group color='primary' ghost>
              <Button onClick={() => setModalPage(modalPageEnum.PERKS)}>
                Perks
              </Button>
              <Button onClick={() => setModalPage(modalPageEnum.DETAILS)}>
                Details
              </Button>
              <Button onClick={() => setModalPage(modalPageEnum.HISTORY)}>
                History
              </Button>
            </Button.Group>
            <Grid.Container gap={3}>
              <Grid.Container css={{ fd: 'column' }} gap={4}>
                <Grid xs={10}>
                  <Card.Image
                    src={cardInfo.imageSrc}
                    objectFit='cover'
                    width='100%'
                    height={80}
                    alt='Card image background'
                  />
                </Grid>
                <Grid>{page}</Grid>
              </Grid.Container>
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}
