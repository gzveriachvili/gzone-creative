import {
  Container,
  Box,
  chakra,
  Text,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Center,
  IconProps,
} from '@chakra-ui/react';

import './features.scss';

import { FaReact } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { GiRayGun, GiResize } from 'react-icons/gi';
import { BsGear } from 'react-icons/bs';
import { IconType } from 'react-icons';

import { MdDesignServices } from 'react-icons/md';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Cutting-Edge Technology',
    content:
      'We use the latest technologies available currently in the industry. Namely, React and Node.JS, which both allow the best performance possible and the highest flexibility in terms of design and customization. We can create anything you want, your imagination is the limit.',
    icon: FaReact,
  },
  {
    heading: 'Mobile-First Approach',
    content: `The vast majority of the world's internet users - 92.4% - use a mobile phone to go online at least some of the time. Because of this, it is crucial to get the mobile version of your website right. We always build are websites with the mobile-first approach, and then move onto the tablet and desktop versions.`,
    icon: AiOutlineMobile,
  },
  {
    heading: 'Fully Responsive',
    content:
      'We make sure your new website will look impeccable regardless of the screen size or device in order to give the best user-experience for your customers.',
    icon: GiResize,
  },
  {
    heading: 'Optimization',
    content: `We take testing and optimization very seriously. Our websites are guaranteed to reach 98 out of 100 points on the Speed Index (SI) performance metric. `,
    icon: BsGear,
  },
];

const Features = () => {
  return (
    <Container maxW='7xl' p={{ base: 5, md: 10 }} position={'relative'}>
      <chakra.h3
        fontSize='4xl'
        fontWeight='extrabold'
        mb={3}
        textAlign='center'
        color={useColorModeValue('#ff5118', '#b5eb46')}
      >
        WHAT{' '}
        <Text
          display='inline'
          color={useColorModeValue('#1A202C', 'rgba(255, 255, 255, 0.92)')}
        >
          WE CAN OFFER
        </Text>
        <Center fontSize='50px'>
          <MdDesignServices />
        </Center>
      </chakra.h3>
      <Text
        mt='20px'
        px={['0px', '0px', '0px', '0px', '0px', '200px']}
        textAlign='center'
        fontSize={'18px'}
      >
        We specialize in small to medium business web development and design for
        clients all around the globe. It has been prove that custom websites -
        hand-written by a professional - yield much better results. Our custom
        code ensures the best performance, which helps bring in more customers
        to your site and bring more revenue to your business.
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        placeItems='center'
        spacing={16}
        mt={12}
        mb={4}
      >
        {features.map((feature, index) => (
          <Box key={index} textAlign='center'>
            <Icon
              as={feature.icon}
              w={10}
              h={10}
              color={useColorModeValue('#ff5118', '#b5eb46')}
            />
            <chakra.h3 fontWeight='semibold' fontSize='2xl'>
              {feature.heading}
            </chakra.h3>
            <Text
              boxShadow='2xl'
              fontSize='md'
              py={'20px'}
              px={'15px'}
              bg={'rgba(255, 255, 255, 0.2'}
            >
              {feature.content}
            </Text>

            <Blob
              w={'100%'}
              h={'100%'}
              position={'absolute'}
              top={'15%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('gray.100', '#171923')}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const Blob = (props: IconProps) => {
  return (
    <Icon
      className='features-blob'
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

export default Features;
