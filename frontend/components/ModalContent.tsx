import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Card,
  Grid,
} from '@nextui-org/react';

export default function ModalContent({ modalInfo, cardInfo }: any) {
  return (
    <div>
      <Grid.Container gap={3}>
        <Grid sm={12} md={5}>
          <Card.Image
            src={cardInfo.imageSrc}
            objectFit='cover'
            width='100%'
            height={340}
            alt='Card image background'
          />
        </Grid>
        <Grid sm={12} md={5}>
          <Card css={{ mw: '330px' }}>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify='flex-end'>
                <Button size='sm' light>
                  Share
                </Button>
                <Button size='sm' color='secondary'>
                  Learn more
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}
