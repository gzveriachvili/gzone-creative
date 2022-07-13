import { ReactNode } from 'react';

import { NavLink as ReactNavLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import logoDark from '../../assets/img/logo_dark.png';
import logoLight from '../../assets/img/logo_light.png';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import './nav.scss';

const Links = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          py='40px'
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box className='nav-logo'>
              {colorMode === 'light' ? (
                <img src={logoLight} alt='GZONE Creative Logo Light' />
              ) : (
                <img src={logoDark} alt='GZONE Creative Logo Dark' />
              )}
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              paddingLeft='50px'
              fontSize={18}
              display={{ base: 'none', md: 'flex' }}
            >
              <ReactNavLink to={'/'}>
                <NavLink>Home</NavLink>
              </ReactNavLink>

              <ReactNavLink to={'/about'}>
                <NavLink>About</NavLink>
              </ReactNavLink>

              <ReactNavLink to={'/services'}>
                <NavLink>Services</NavLink>
              </ReactNavLink>

              <ReactNavLink to={'/contact'}>
                <NavLink>Contact</NavLink>
              </ReactNavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as='div'
              className='nav-social'
              spacing={5}
              fontSize='20px'
              marginRight='50px'
            >
              <Link
                href='https://www.instagram.com/gzonecreative/'
                target='_blank'
                _hover={{
                  color: '#C13584',
                }}
              >
                <BsInstagram />
              </Link>

              <Link
                href='https://twitter.com/CreativeGzone'
                target='_blank'
                _hover={{
                  color: '#0072b1',
                }}
              >
                <BsTwitter />
              </Link>

              <Link
                href='https://www.facebook.com/GZONE-Creative-Web'
                target='_blank'
                _hover={{
                  color: '#4267B2',
                }}
              >
                <BsFacebook />
              </Link>
            </HStack>

            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <ReactNavLink to={'/'}>
                <NavLink>Home</NavLink>
              </ReactNavLink>

              <ReactNavLink to={'/about'}>
                <NavLink>About</NavLink>
              </ReactNavLink>

              <ReactNavLink to={'/services'}>
                <NavLink>Services</NavLink>
              </ReactNavLink>

              <ReactNavLink to={'/contact'}>
                <NavLink>Contact</NavLink>
              </ReactNavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
