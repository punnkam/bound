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
} from '@chakra-ui/react';
import { BiDotsHorizontal } from 'react-icons/bi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SideBar } from './SideBar';

export default function Sidebar() {
  const isDesktop = useBreakpointValue({ base: true, lg: true }); // base is the same at sm, md
  const { onToggle, isOpen } = useDisclosure({ defaultIsOpen: false });

  return (
    <Box>
      <Flex mx={5} mt={35} gap={5} align='center'>
        <Link href='/'>
          <Image src='Logo.svg' boxSize='40px' alt='logo' />
        </Link>
        <Button size='sm' onClick={onToggle}>
          <BiDotsHorizontal size={30} />
        </Button>
        <Spacer />
        <ConnectButton />
      </Flex>
      <SideBar isOpen={isDesktop && isOpen} />
    </Box>
  );
}

// label active in the NavItem component if active is true
