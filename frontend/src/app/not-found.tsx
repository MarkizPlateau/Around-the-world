'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Box, Button, Flex, useColorMode, useTheme } from '@chakra-ui/react';
import { ROUTES } from '@/constants/routes';

function NotFoundPage() {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const lightMode = colorMode === 'light';
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center" mx="5">
      <Box my="14">
        <Image
          priority
          alt="Obrazek kotka - strona nie została znaleziona"
          height={400}
          src={lightMode ? '/404_light.jpg' : '/404_dark.jpg'}
          style={{
            borderRadius: '50%',
            border: `10px solid ${lightMode ? theme.colors.main : theme.colors.white}`,
          }}
          width={600}
        />
      </Box>
      <Button
        aria-label="Przejdź do strony głównej"
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
