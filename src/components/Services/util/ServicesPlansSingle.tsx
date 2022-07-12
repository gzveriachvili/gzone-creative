import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { NavLink as ReactNavLink } from 'react-router-dom';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function ServicesPlansSingle() {
  return (
    <Box py={12} pt={0} mt={0}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              eCommerce
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='3xl' fontWeight='600'>
                $
              </Text>
              <Text fontSize='5xl' fontWeight='900'>
                799
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                Content Management System
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                Back-End Programming
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                3rd Party Integrations
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={'19px'}
                  as={IoMdCloseCircle}
                  color='red.400'
                />
                eCommerce Website Maintenance
              </ListItem>
            </List>

            <Box w='80%' pt={7}>
              <ReactNavLink to={'/contact'}>
                <Button
                  w='full'
                  border='2px'
                  bg={'none'}
                  borderColor={useColorModeValue('#ff5118', '#b5eb46')}
                >
                  Contact Us
                </Button>
              </ReactNavLink>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              Standard
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='3xl' fontWeight='600'>
                $
              </Text>
              <Text fontSize='5xl' fontWeight='900'>
                399
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />5 Pages
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                Branding & Graphic Design
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                Domain & Hosting Configuration
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={'19px'}
                  as={IoMdCloseCircle}
                  color='red.400'
                />
                Unlimited Edits
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <ReactNavLink to={'/contact'}>
                <Button
                  w='full'
                  border='2px'
                  bg={'none'}
                  borderColor={useColorModeValue('#ff5118', '#b5eb46')}
                >
                  Contact Us
                </Button>
              </ReactNavLink>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
