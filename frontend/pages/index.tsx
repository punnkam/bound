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
  HStack,
  Link,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Spacer,
  Center,
  ButtonGroup,
} from '@chakra-ui/react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import ScrollBoundCards from '../components/ScrollBoundCards';
import ListFeatures from '../components/ListFeatures';

export default function Landing() {
  return (
    <div>
      <Stack>
        <HStack direction={{ base: 'column', md: 'row' }} margin={'2rem'}>
          <Flex justifyContent={'space-between'}>
            <Link href="/Explore">
              <Image src="boundlogo.png" width={32} alt={''} />
            </Link>
          </Flex>
          <Spacer />
          <Box>
            <Link href="/Explore">
              <Button
                rounded={'lg'}
                bg={'#1D2C2F'}
                color={'white'}
                _hover={{
                  bg: '#425255',
                }}
                margin={'1rem'}
                // textShadow="2px 2px #FEA401"
                // m="1"
              >
                Enter App
              </Button>
            </Link>
          </Box>
        </HStack>

        <AnimatePresence>
          <motion.div
            className="box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Center>
              <Stack height={300} width={500} mt={16}>
                <Stack spacing={5} align="center" py={5}>
                  <HStack>
                    <Heading size="3xl">Gamify</Heading>
                    <Heading size="3xl">Your</Heading>
                  </HStack>
                  <Heading size="3xl">Subscriptions</Heading>
                </Stack>

                <Stack align="center" spacing={3} p={4}>
                  <Heading
                    fontWeight="medium"
                    fontSize={20}
                    color="rgba(11, 11, 13, 0.4)"
                    textAlign="center"
                  >
                    The only platform that gamifies tiered subsctiption passes
                    using NFTs and credentials
                  </Heading>
                  <ButtonGroup variant="outline" spacing="6" p={5}>
                    <Box
                      width={'auto'}
                      height={100}
                      bg="#FEA401"
                      rounded="lg"
                      objectFit="cover"
                      position="absolute"
                      inset={0}
                      filter="blur(8000px)"
                      zIndex={-1}
                      transform="scale(1.1, 1.1)"
                    ></Box>
                    <Link href="https://airtable.com/shrFwWZBwQXJb78Ss">
                      <Button
                        bg="#FEA401"
                        variant="solid"
                        color={'white'}
                        _hover={{
                          bg: '#FFB93A',
                        }}
                        py={0}
                        px={10}
                      >
                        Get Access Now
                      </Button>
                    </Link>

                    <Link href="https://calendly.com/boundlabs/30min?month=2022-08">
                      <Button py={0} px={10}>
                        Free Demo Call
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Stack>
              </Stack>
            </Center>
          </motion.div>
        </AnimatePresence>

        {/* <AnimatePresence> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex p={10} justify={'center'}>
            <ScrollBoundCards />
          </Flex>
        </motion.div>
        {/* </AnimatePresence> */}

        <AnimatePresence>
          <motion.div
            className="box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <ListFeatures />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            className="box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Box w="100%" p={4} maxWidth="900px">
                <Stack spacing={20}>
                  <Stack alignItems="center">
                    <Heading size="2xl">Frequently asked questions</Heading>
                  </Stack>
                  <Box>
                    <Accordion allowToggle allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            borderRadius="lg"
                            py={5}
                            _expanded={{ bg: '#FEA401', color: 'white' }}
                          >
                            <Box
                              flex="1"
                              textAlign="left"
                              fontWeight="semibold"
                            >
                              <Heading size="md">
                                How are these subscriptions different?
                              </Heading>
                            </Box>
                            <AccordionIcon w={10} h={10} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight="medium">
                          In Web2, you can subscribe to a tier of a
                          subscription. If you decide to cancel, your commitment
                          or loyalty to the product isn't rewarded and yet your
                          back to 0. With Bound, you can purchase to a
                          subscription pass sold by a business or creator. If
                          you decide to cancel or your subscription expires,
                          your credentials earned throughout the subscription
                          pass stay with you forever. That makes it if you ever
                          do decide to purchaase or revew the subscription,
                          you'll still enjoy the perks you've earned initially.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            borderRadius="lg"
                            py={5}
                            _expanded={{ bg: '#FEA401', color: 'white' }}
                          >
                            <Box
                              flex="1"
                              textAlign="left"
                              fontWeight="semibold"
                            >
                              <Heading size="md">
                                How do "Credentials" work?
                              </Heading>
                            </Box>
                            <AccordionIcon w={10} h={10} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight="medium">
                          Credentials are make up of non-transferrable tokens. A
                          good analogy to think of this would be like a Fortnite
                          or Call of Duty Battle Pass. Instead of receving skins
                          or other items, you'll receive a pass that you can use
                          to unlock new perks provided by the creator or
                          business.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            borderRadius="lg"
                            py={5}
                            _expanded={{ bg: '#FEA401', color: 'white' }}
                          >
                            <Box
                              flex="1"
                              textAlign="left"
                              fontWeight="semibold"
                            >
                              <Heading size="md">
                                What chain do you use?
                              </Heading>
                            </Box>
                            <AccordionIcon w={10} h={10} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight="medium">
                          We will start with the Ethereum blockchain as our
                          first network.
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </Stack>
              </Box>
            </Flex>
          </motion.div>
        </AnimatePresence>
      </Stack>
    </div>
  );
}
