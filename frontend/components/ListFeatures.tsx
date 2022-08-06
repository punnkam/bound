import { Center } from '@chakra-ui/react';
import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  Stack,
} from '@mantine/core';
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from '@tabler/icons';

// USES MANTINE

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Chakra Petch, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: 2,
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  highlight: {
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: 'orange',
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
  root: {
    display: 'flex',
  },
}));

const features = [
  {
    icon: IconReceiptOff,
    title: 'Tiered Credentials',
    description:
      'Earn credit for your commitment to subscriptions. Credit comes in the form of non-transferable tokens.',
  },
  {
    icon: IconFileCode,
    title: 'Exponential Rewards & Perks',
    description:
      'Users receive credentials that will stay even after their subscription pass expires.',
  },
  {
    icon: IconCircleDotted,
    title: 'Enlist Requirements',
    description:
      'Creators and Businesses can create requirements to ensure their most active users are eligible to receive credentials.',
  },
  {
    icon: IconFlame,
    title: 'Stay Devoted',
    description:
      'With non-transferrable tokens, you can enjoy your earned perks anytime. Using those perks is easy as purchasing the subscription pass.',
  },
];

export default function ListFeatures() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <Center>
        <ThemeIcon
          mx={50}
          size={50}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: 'orange', to: 'yellow' }}
        >
          <feature.icon size={26} stroke={1.5} />
        </ThemeIcon>
        <Stack>
          <Text size="lg" mt="sm" weight={500}>
            {feature.title}
          </Text>
          <Text color="dimmed" size="sm">
            {feature.description}
          </Text>
        </Stack>
      </Center>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Center>
        <Stack>
          <Title className={classes.title} order={2}>
            Loyalty is <span className={classes.highlight}>our</span> motto
          </Title>
          <Text color="dimmed" align="center" size="lg">
            Your commitment is earned day by day. Why lose it all?
          </Text>

          <Grid gutter={0} justify="center">
            <Col span={12} md={7}>
              <SimpleGrid
                cols={2}
                spacing={50}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                style={{ marginTop: 30 }}
              >
                {items}
              </SimpleGrid>
            </Col>
          </Grid>
        </Stack>
      </Center>
    </div>
  );
}
