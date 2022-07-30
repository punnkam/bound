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
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Image,
} from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';

export default function Event() {
  return (
    <Tbody>
      <Tr>
        <Td>
          <HStack>
            <BiShoppingBag color="#FECD5B" />
            <Text>Buy</Text>
          </HStack>
        </Td>
        <Td>
          <HStack>
            <Image src="racer.png" boxSize={5} />
            <Text>Verci</Text>
          </HStack>
        </Td>
        <Td>
          <HStack>
            <Text>0xD410e6d...</Text>
          </HStack>
        </Td>
        <Td>
          <HStack>
            <Text>0.69 ETH</Text>
          </HStack>
        </Td>
        <Td>
          <HStack>
            <Text>Jul 7, 2022</Text>
          </HStack>
        </Td>
      </Tr>
    </Tbody>
  );
}
