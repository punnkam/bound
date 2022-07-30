import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Stack,
} from '@chakra-ui/react';

export default function StatNumberOwners() {
  return (
    <Stack
      bg="#FEFFFE"
      minW={'205px'}
      minH={'90px'}
      maxW={'205px'}
      maxH={'90px'}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="#D3D3D3"
      p={5}
      align="justify-start"
    >
      <Stat>
        <StatLabel>Number of Owners</StatLabel>
        <StatNumber>700</StatNumber>
        {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
      </Stat>
    </Stack>
  );
}
