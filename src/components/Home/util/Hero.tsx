import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

import { NavLink as ReactNavLink } from 'react-router-dom';

import homeIntro from '../../../assets/img/home_intro.png';
import ScrollDown from './ScrollDown';
import ScrollDownDark from './ScrollDownDark';

import { BsFillChatDotsFill } from 'react-icons/bs';

export default function HomeIntro() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        paddingBottom={{ md: 5 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: useColorModeValue('#ff5118', ''),
                zIndex: -1,
              }}
            >
              Small Business,
            </Text>
            <br />
            <Text as={'span'} color={useColorModeValue('#ff5118', '#b5eb46')}>
              Web Design + Development
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            No page builders or WordPress - we offer 100% custom websites,
            hand-coded by professional developers using the latest technologies
            and up to the highest standards. Hand-coded websites bring superior
            results - starting at only $129 per month.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <ReactNavLink to={'/services'}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                bg={useColorModeValue('#01e6bf', '#171923')}
                _hover={{ bg: 'gray.400' }}
              >
                Get started
              </Button>
            </ReactNavLink>
            <ReactNavLink to={'/contact'}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<BsFillChatDotsFill color={'gray.300'} />}
              >
                Get In Touch
              </Button>
            </ReactNavLink>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('gray.200', '#171923')}
          />
          <Box position={'relative'} height={'auto'} width={'full'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={homeIntro}
            />
          </Box>
        </Flex>
      </Stack>

      {colorMode === 'light' ? <ScrollDown /> : <ScrollDownDark />}
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox='0 0 578 440'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
        fill='currentColor'
      />
    </Icon>
  );
};
