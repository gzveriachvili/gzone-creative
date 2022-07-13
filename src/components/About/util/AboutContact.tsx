import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

import emailjs from 'emailjs-com';
import ContactSuccess from '../../Contact/util/ContactSuccess';
import { useRef, useState } from 'react';

export default function AboutContact() {
  const form = useRef();

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qew0szc',
        'template_azd470e',
        e.target,
        'VY0mmJD-nJPu8UXxd'
      )
      .then(
        (result) => {
          setStatus('SUCCESS');
          console.log(result.text);

          window.scrollTo({ top: 800, behavior: 'smooth' });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container maxW='full' mt={0} centerContent overflow='hidden'>
      {status === 'SUCCESS' && <ContactSuccess />}
      <Flex>
        <Box
          bg={useColorModeValue('gray.200', 'gray.900')}
          color={useColorModeValue('#171923', 'gray.50')}
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <Button
                        display={'flex'}
                        justifyContent='flex-start'
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color={useColorModeValue('gray.700', '#DCE2FF')}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color='#1970F1' size='20px' />}
                      >
                        +45 50 32 22 58
                      </Button>
                      <Button
                        display={'flex'}
                        justifyContent='flex-start'
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color={useColorModeValue('gray.700', '#DCE2FF')}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color='#1970F1' size='20px' />}
                      >
                        info@gzonecreative.com
                      </Button>
                      <Button
                        display={'flex'}
                        justifyContent='flex-start'
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color={useColorModeValue('gray.700', '#DCE2FF')}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color='#1970F1' size='20px' />}
                      >
                        Denmark
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems='flex-start'
                  >
                    <a
                      href='https://www.instagram.com/gzonecreative/'
                      target='_blank'
                    >
                      <IconButton
                        aria-label='Instagram'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsInstagram size='28px' />}
                      />
                    </a>
                    <a href='https://twitter.com/CreativeGzone' target='_blank'>
                      <IconButton
                        aria-label='Twitter'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsTwitter size='28px' />}
                      />
                    </a>
                    <a
                      href='https://www.facebook.com/GZONE-Creative-Web'
                      target='_blank'
                    >
                      <IconButton
                        aria-label='Facebook'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsFacebook size='28px' />}
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <form onSubmit={sendEmail}>
                        <FormControl id='name' isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<BsPerson color='gray.800' />}
                            />
                            <Input
                              type='text'
                              name='to_name'
                              placeholder='Your Name'
                              size='md'
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id='name' isRequired>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<MdOutlineEmail color='gray.800' />}
                            />
                            <Input
                              type='email'
                              name='from_name'
                              placeholder='Your Email'
                              size='md'
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id='name' isRequired>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor='gray.300'
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            name='message'
                            placeholder='Your Message'
                          />
                        </FormControl>
                        <FormControl id='name' float='right'>
                          <Button
                            type='submit'
                            variant='solid'
                            bg='#0D74FF'
                            color='white'
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
