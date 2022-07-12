import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

import servicesBg from '../../../assets/img/services_bg.svg';
import servicesBgDark from '../../../assets/img/services_bg_dark.svg';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function ServicesIntro() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>
            Quality Web Design and Development With a Different Approach
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            If a smaller business wants to obtain web presence, they'll usually
            end up with a website made in Wordpress or other other templates.
            Our approach is entirely different; We only do custom websites,
            where quality and uniqueness, and performance is our utmost
            priority. And we do this for a very affordable and reasonable price!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Unique Website - Business Growth'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Affordable Service Plans'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Tailored and Optimized Solutions'}
            />
          </Stack>
        </Stack>
        <Flex>
          {colorMode === 'light' ? (
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={servicesBg}
              objectFit={'cover'}
              maxW={'600px'}
              transform='scale(1.1)'
            />
          ) : (
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={servicesBgDark}
              objectFit={'cover'}
              maxW={'600px'}
              transform='scale(1.1)'
            />
          )}
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
