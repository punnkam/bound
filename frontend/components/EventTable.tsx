import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Stack,
  VStack,
  HStack,
  Heading,
  Box,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Image,
} from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';
import Event from './Event';

export default function EventList() {
  return (
    <Stack
      bg="#FEFFFE"
      minW={'783px'}
      minH={'287px'}
      maxW={'783px'}
      maxH={'287px'}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="#D3D3D3"
      p={5}
      overflowY="auto"
    >
      <VStack>
        <TableContainer>
          <Table
            variant="simple"
            size="md"
            minW={'720px'}
            maxW={'720px'}
            overflowY="auto"
          >
            <Thead>
              <Tr>
                <Th color="#1A202C" fontSize="sm">
                  Event
                </Th>
                <Th color="#1A202C" fontSize="sm">
                  Collection
                </Th>
                <Th color="#1A202C" fontSize="sm">
                  From
                </Th>
                <Th color="#1A202C" fontSize="sm">
                  Amount
                </Th>
                <Th color="#1A202C" fontSize="sm">
                  Date
                </Th>
              </Tr>
            </Thead>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </Table>
        </TableContainer>
      </VStack>
    </Stack>
  );
}
