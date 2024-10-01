import { Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';

export interface LinkNextProps extends TextProps {
  route: string;
}

export const LinkNext = ({ children, route, ...rest }: LinkNextProps) => {
  return (
    <Link href={route} passHref>
      <Text {...rest}>{children}</Text>
    </Link>
  );
};

export default LinkNext;
