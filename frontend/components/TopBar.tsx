import React, { useState } from 'react';

import {
  Flex,
  useDisclosure,
  Image,
  Spacer,
  Button,
  useBreakpointValue,
  Box,
  Link,
  Stack,
  Icon,
  Text,
  HStack,
} from '@chakra-ui/react';
import {
  BiUser,
  BiHomeAlt,
  BiCompass,
  BiEdit,
} from 'react-icons/bi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SideBar } from './SideBar';

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
  {
    title: 'Create',
    description:
      'Dragée jujubes brownie pastry biscuit croissant wafer halvah apple pie',
    href: '/Mint',
    icon: BiEdit,
  },
];

export default function Sidebar() {
  const isDesktop = useBreakpointValue({ base: true, lg: true }); // base is the same at sm, md
  const { onToggle, isOpen } = useDisclosure({ defaultIsOpen: false });

  return (
    <Box mb={10}>
      <Flex mx={5} mt={35} gap={5} align="center">
        <Link href="/">
          <Image src="boundlogo.png" width={32} alt="logo" />
        </Link>
        {/* <Button size="sm" onClick={onToggle}>
          <BiDotsHorizontal size={30} />
        </Button> */}
        <Flex>
          <HStack>
            {navigation.map((page, id) => (
              <Link variant="menu" href={page.href} key={id}>
                <Stack spacing="3" direction="row" p="3">
                  <Icon as={page.icon} boxSize="6" color="accent" ml={3} />
                  <Text fontWeight="medium">{page.title}</Text>
                </Stack>
              </Link>
            ))}
          </HStack>
        </Flex>
        <Spacer />
        <ConnectButton />
      </Flex>
      {/* <SideBar isOpen={isDesktop && isOpen} /> */}
    </Box>
  );
}

// label active in the NavItem component if active is true
