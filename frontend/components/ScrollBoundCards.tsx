import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Center,
} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';

import { useRef } from 'react';

// USES MANTINE

const useStyles = createStyles((theme) => ({
  card: {
    height: 398,
    width: 301,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.001)',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    // page
    <Paper
      p="xl"
      sx={{ backgroundImage: `url(${image})`, maxHeight: 475 }}
      className={classes.card}
    ></Paper>
  );
}

const data = [
  {
    image: 'bound1nft.png',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image: 'bound2nft.png',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image: 'bound3nft.png',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
];

export default function ScrollBoundCards() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Center>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        mx="auto"
        mt={24}
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        // slideGap="2xl"
        align="start"
        slidesToScroll={1}
        orientation="vertical"
        withControls={false}
        withIndicators
        styles={{
          indicator: {
            width: 12,
            height: 10,
            transition: 'width 250ms ease',

            '&[data-active]': {
              height: 40,
            },
          },
        }}
        sx={{
          maxWidth: 301,
          maxHeight: 398,
        }}
      >
        {slides}
      </Carousel>
    </Center>
  );
}
