import {
  Text,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  useBreakpointValue,
  Box,
  Tabs,
  TabList,
  Tab,
  Fade,
  Link,
} from '@chakra-ui/react';

export default function Landing() {
  return (
    <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex direction={'column'} justifyContent={'space-between'}>
          <Image src='Logo.svg' boxSize='40px' margin={'1rem'} />

          <Flex direction={'row'} margin={'1rem'}>
            <Tabs variant='soft-rounded' colorScheme='yellow'>
              <TabList>
                <Link href='/Explore'>
                  <Tab>Explore</Tab>
                </Link>
              </TabList>
            </Tabs>
          </Flex>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Fade in={true}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 1,
                    bg: 'yellow.400',
                    zIndex: -1,
                  }}
                  marginLeft={'15vh'}
                >
                  Bound.
                </Text>
              </Fade>
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
            ></Stack>
          </Stack>
        </Flex>
        <Box>
          <Link href='/Home'>
            <Button
              rounded={'full'}
              bg={'yellow.400'}
              color={'white'}
              _hover={{
                bg: 'yellow.500',
              }}
              margin={'1rem'}
            >
              Enter App
            </Button>
          </Link>
        </Box>
        <Flex
          flex={'48vh'}
          bgColor={'blackAlpha.900'}
          direction={'row'}
          justify={'space-between'}
          padding={'0.5rem'}
          height={'100vh'}
        >
          <Flex marginRight='0.5rem'>
            <Fade in={true}>
              <Image
                alt={'first col'}
                objectFit={'contain'}
                src={'landing/collage1.png'}
              />
            </Fade>
          </Flex>
          <Flex marginRight='0.5rem'>
            <Fade in={true}>
              <Image
                alt={'first col'}
                objectFit={'contain'}
                src={'landing/collage2.png'}
              />
            </Fade>
          </Flex>
          <Flex marginRight='0rem'>
            <Fade in={true}>
              <Image
                alt={'first col'}
                objectFit={'contain'}
                src={'landing/collage3.png'}
              />
            </Fade>
          </Flex>
        </Flex>
      </Stack>
    </div>
  );
}
