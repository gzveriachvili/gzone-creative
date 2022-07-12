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

export default function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Monthly Plans That Fit Your Need
        </Heading>
        <Text fontSize='lg' color={'gray.500'} px={{ sm: '50px', md: '400px' }}>
          No required minimum payment period, and you can cancel any time. Get
          the big business treatment for an affordable price.
        </Text>
      </VStack>
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
                299
              </Text>
              <Text fontSize='3xl' color='gray.500'>
                /month
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
                eCommerce Website Maintenance
              </ListItem>
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
          <Box position='relative'>
            <Box
              position='absolute'
              top='-16px'
              left='50%'
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform='uppercase'
                bg={useColorModeValue('#ff5118', '#b5eb46')}
                px={3}
                py={1}
                color={useColorModeValue('gray.50', 'gray.900')}
                fontSize='sm'
                fontWeight='600'
                rounded='xl'
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight='500' fontSize='2xl'>
                Standard
              </Text>
              <HStack justifyContent='center'>
                <Text fontSize='3xl' fontWeight='600'>
                  $
                </Text>
                <Text fontSize='5xl' fontWeight='900'>
                  129
                </Text>
                <Text fontSize='3xl' color='gray.500'>
                  /month
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
                  Unlimited Edits
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='#01e6bf' />
                  FREE Hosting & Domain
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='#01e6bf' />
                  24/7 Customer Service
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='#01e6bf' />
                  Lifetime Updates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='#01e6bf' />5 Pages
                </ListItem>
              </List>
              <Box w='80%' pt={7}>
                <ReactNavLink to={'/contact'}>
                  <Button
                    w='full'
                    color={useColorModeValue('gray.50', 'gray.900')}
                    bg={useColorModeValue('#ff5118', '#b5eb46')}
                    _hover={{
                      color: useColorModeValue('gray.800', 'gray.800'),
                      bg: useColorModeValue('#01e6bf', '#01e6bf'),
                    }}
                  >
                    Contact Us
                  </Button>
                </ReactNavLink>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              Branding
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='3xl' fontWeight='600'>
                $
              </Text>
              <Text fontSize='5xl' fontWeight='900'>
                0
              </Text>
              <Text fontSize='3xl' color='gray.500'>
                /month
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
                Logos & Graphic Design
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                All file formats provided
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />
                Unlimited color scheme edits
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='#01e6bf' />5 Revisions
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
