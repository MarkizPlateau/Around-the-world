'use client';

import { ROUTES } from '@/constants/routes';
import { Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function NotFoundPage() {
  const router = useRouter();
  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center">
      <Image
        priority
        alt="Obrazek kotka - strona nie została znaleziona"
        height={400}
        src="/Kotek.svg"
        width={500}
      />
      <Button
        className="font-puff"
        colorScheme="pink"
        letterSpacing="2px"
        size="lg"
        onClick={() => router.push(ROUTES.HOME)}
      >
        Leć do głównej
      </Button>
    </Flex>
  );
}

export default NotFoundPage;
