import React, { useState } from 'react';
import {
  Flex,
  Text,
  SlideFade,
  VStack,
  Stack,
  Link,
  Icon,
  UseDisclosureProps,
  Wrap,
  
} from '@chakra-ui/react';
import SideBarItem from './SideBarItem';
import {
  BiDotsHorizontal,
  BiGridAlt,
  BiUser,
  BiHomeAlt,
  BiCompass,
} from 'react-icons/bi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const navigation = [
  {
    title: 'Home',
    description:
      'Danish lollipop marzipan dragée gingerbread tart wafer sweet lemon.',
    href: '/Home',
    icon: BiHomeAlt,
  },
  {
    title: 'Explore',
    description: 'Macaroon tiramisu tart bonbon apple pie jujubes brownie.',
    href: '/Explore',
    icon: BiCompass,
  },
  {
    title: 'Profile',
    description:
      'Dragée jujubes brownie pastry biscuit croissant wafer halvah apple pie',
    href: '/Profile',
    icon: BiUser,
  },
];

export const SideBar = (props: UseDisclosureProps) => {
  const { isOpen } = props;
  return (
    // have sidebar absolute position
    <Wrap justify="start" position="absolute" zIndex={2}>
      <VStack>
        <SlideFade in={isOpen} offsetX="0px">
          <Flex
            borderRadius="20px"
            h="22vh"
            w="200px"
            marginTop={5}
            // boxShadow="10px 10px 12px 0 rgba(0, 0, 0, 0.05)"
            bg="#FEFFFE"
          >
            <Stack>
              {navigation.map((page, id) => (
                <Link variant="menu" href={page.href} key={id}>
                  <Stack spacing="5" direction="row" p="3">
                    <Icon as={page.icon} boxSize="6" color="accent" ml={3} />
                    <Text fontWeight="medium">{page.title}</Text>
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Flex>
        </SlideFade>
      </VStack>
    </Wrap>
  );
};
