import { Flex, Heading, Text, Image, useColorModeValue, Badge } from '@chakra-ui/react';
import { observer } from 'mobx-react';

const News = observer(({ title, picture, content, category }: any) => {
  const bgColor = useColorModeValue('news.bgLight', 'news.bgDark');
  const textColor = useColorModeValue('news.textLight', 'news.textDark');
  const cardShadow = useColorModeValue('cardLight', 'cardDark');
  const borderColor = useColorModeValue('news.borderLight', 'news.borderDark');

  return (
    <Flex
      _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out' }}
      bg={bgColor}
      borderColor={borderColor}
      borderRadius="xl"
      borderWidth="1px"
      boxShadow={cardShadow}
      direction="column"
      maxWidth="3xl"
      my="8"
      p="6"
    >
      <Heading as="h3" mb="4">
        {title}
      </Heading>
      <Badge mb="4">{category.toUpperCase()}</Badge>
      <Image
        alt={title}
        borderRadius="lg"
        boxShadow="md"
        maxWidth="100%"
        mb="6"
        objectFit="cover"
        src={picture}
      />
      <Text color={textColor} fontSize="md" lineHeight="1.8" mt="4" textAlign="justify">
        {content.repeat(2)}
      </Text>
    </Flex>
  );
});

export default News;
