import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'}>{title}</StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function AboutStats() {
  return (
    <Box
      mb={'60px'}
      maxW='7xl'
      mx={'auto'}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        <Text display='inline' color={useColorModeValue('#ff5118', '#b5eb46')}>
          Quality
        </Text>{' '}
        Over Quantity
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Quality Custom Code'} stat={'Unique & Engaging'} />
        <StatsCard
          title={'Exceptional Customer Service'}
          stat={'Available When Needed'}
        />
        <StatsCard
          title={'Your imagination is the limit'}
          stat={'Say Bye To Constraints'}
        />
      </SimpleGrid>
    </Box>
  );
}
