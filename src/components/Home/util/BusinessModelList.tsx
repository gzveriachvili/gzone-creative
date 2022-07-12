import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

interface IFeature {
  id: number;
  title: string;
  text: string;
}

const features: IFeature[] = [
  {
    id: 0,
    title: 'Hosting Fees Included',
    text: 'Hosting fees are domain configuration are included in the monthly payment.',
  },
  {
    id: 1,
    title: 'Unlimited Edits',
    text: 'Unlimited revisions and edits - request any change you want at any time, and it will be done that same day.',
  },
  {
    id: 2,
    title: '24/7 Customer Service',
    text: 'Call us or drop us a message, and we will make sure to answer you directly with no phone trees or automated responses.',
  },
  {
    id: 3,
    title: 'Web Design & Development',
    text: 'It included a total of 50 hours of design, development, testing and optimization using the most advanced technologies in the web development industry.',
  },
  {
    id: 4,
    title: 'Branding Services',
    text: 'From a distinctive logo and identity system to a conversion-focused website that works for you. We help you define your position in the market to grow your business long-term.',
  },
  {
    id: 5,
    title: 'Web Traffic Monitoring',
    text: "We will implement tools that collect, analyze, and categorize your website's flow data. This will lead to a better understand of your target demographic.",
  },
];

export default function BusinessModelList() {
  return (
    <Box p={4}>
      <Container maxW={'7xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'#01e6bf'} px={0}>
                <Icon fontSize={'30px'} as={IoMdCheckmarkCircleOutline} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={'bold'} fontSize='18px'>
                  {feature.title}
                </Text>
                <Text color={'gray.500'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
