import {
  Box,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import * as React from 'react';
import { BiStar, BiPlus } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';

export default function ModalPerkMint() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    {/* Three perks only for now */}
      <VStack spacing={3}>
        <FormControl isRequired>
          <FormLabel mt={5} fontWeight="semibold">
            Name
          </FormLabel>
          <Box>
            <Input
              size="lg"
              resize="none"
              // h={400}
              placeholder="e.g. Free chicken nuggies for lyfe"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
            />
          </Box>
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={-1} fontWeight="semibold">
            Description
          </FormLabel>
          <Box>
            <Textarea
              size="lg"
              resize="none"
              h={84}
              placeholder="Further describe this perk - Markdown syntax is supported"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
            />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel mt={5} fontWeight="semibold">
            Name
          </FormLabel>
          <Box>
            <Input
              size="lg"
              resize="none"
              // h={400}
              placeholder="e.g. Free chicken nuggies for lyfe"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
            />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel mt={-1} fontWeight="semibold">
            Description
          </FormLabel>
          <Box>
            <Textarea
              size="lg"
              resize="none"
              h={84}
              placeholder="Further describe this perk - Markdown syntax is supported"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
            />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel mt={5} fontWeight="semibold">
            Name
          </FormLabel>
          <Box>
            <Input
              size="lg"
              resize="none"
              // h={400}
              placeholder="e.g. Free chicken nuggies for lyfe"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
            />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel mt={-1} fontWeight="semibold">
            Description
          </FormLabel>
          <Box>
            <Textarea
              size="lg"
              resize="none"
              h={84}
              placeholder="Further describe this perk - Markdown syntax is supported"
              bg="#FEFFFE"
              borderColor="#D3D3D3"
            />
          </Box>
        </FormControl>
      </VStack>
    </>
  );
}
