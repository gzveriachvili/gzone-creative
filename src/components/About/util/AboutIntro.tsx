import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import gzoneAgency from '../../../assets/img/gzone_agency.jpg';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={'md'}
            variant='solid'
            bg={useColorModeValue('#ff5118', '#b5eb46')}
            color={useColorModeValue('gray.50', 'gray.800')}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const AboutIntro = () => {
  return (
    <Container maxW={'7xl'} p='12'>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'
      >
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='flex-start'
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'
          >
            <Image
              borderRadius='lg'
              src={gzoneAgency}
              alt='GZONE Creative'
              objectFit='contain'
            />
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogTags tags={['GZONE Creative']} />
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              Hand-Written Websites for Small and Medium Businesses
            </Link>
          </Heading>
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize='lg'
          >
            My name is Gia Z, I am the owner and sole developer at GZONE
            Creative Web Design and Development agency. I got into programming
            in 2016, which lead me into obtaining a Computer Science degree, and
            later I worked as a frontend developer at one of the biggest
            agencies in the world. I have noticed a discrepancy in the world of
            web development: agencies only truly care about the biggest
            companies, such as Ranger Rover or Puma. Most of the time, small and
            medium-sized companies have to settle with websites that were built
            with Wordpress, Wix, and other template-like solutions. Now, while
            the websites built with these tools seem reasonable, in reality, the
            performance and conversion rates aren't comparable with websites
            that were built properly by a professional from scratch.
          </Text>

          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize='lg'
          >
            What I found was that a lot of small businesses don't have the funds
            to spend thousands of dollars upfront on a new, fully custom-built
            website. And the ones that do actually have the funds, often get
            taken advantage of and are presented with a website that is either
            built with a template, or built with technologies that are massively
            outdated in 2022. Using modern web technologies and custom code are
            the two main pillars of maintaining a successful online presence.
            These two factors give businesses the opportunity to stand out in a
            huge pool of template-built and outdated junk. Web design and
            development nowadays is extremely competitive, and the only way to
            stand out is to provide quality services at fair prices - even for
            small and medium-sized businesses, and not only for the giants who
            can afford it.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutIntro;
