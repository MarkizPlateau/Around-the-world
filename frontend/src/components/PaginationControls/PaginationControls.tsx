import { useMemo } from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  StackProps,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export interface PaginationControlsProps extends StackProps {
  total: number;
  selectPage: (page: number) => void;
  size: number;
  newCurrentPage: number;
}

export const PaginationControls = observer(
  ({ total, selectPage, size, newCurrentPage, ...props }: PaginationControlsProps) => {
    const pageSize = useBreakpointValue({ base: 1, lg: 2 });
    const isMobile = useBreakpointValue({ base: true, md: false });

    const pagesCount = Math.ceil(total / size);

    const pages = useMemo(() => {
      const startPages = [1];
      const endPages = [pagesCount];

      const currentPageGroup = Array.from(
        { length: pageSize! * 2 + 1 },
        (_, i) => newCurrentPage - pageSize! + i,
      ).filter((page) => page > 1 && page < pagesCount);

      const combined = [...startPages, ...currentPageGroup, ...endPages];
      return Array.from(new Set(combined)).sort((a, b) => a - b);
    }, [newCurrentPage, pageSize, pagesCount]);

    return (
      <Stack
        align="center"
        direction="row"
        justify="center"
        mt="4"
        spacing={isMobile ? 1 : 3}
        {...props}
      >
        <IconButton
          aria-label="Previous"
          colorScheme="purple"
          icon={<ChevronLeftIcon />}
          isDisabled={newCurrentPage === 1}
          size={isMobile ? 'sm' : 'md'}
          onClick={() => selectPage(newCurrentPage - 1)}
        />

        {pages.map((page, index) => (
          <Flex key={page}>
            {index > 0 && pages[index - 1] + 1 < page && (
              <Box alignSelf="end" color="purple" mr={3}>
                ...
              </Box>
            )}
            <Button
              colorScheme="purple"
              size={isMobile ? 'sm' : 'md'}
              variant={page === newCurrentPage ? 'solid' : 'outline'}
              onClick={() => selectPage(page)}
            >
              {page}
            </Button>
          </Flex>
        ))}

        <IconButton
          aria-label="Next"
          colorScheme="purple"
          icon={<ChevronRightIcon />}
          isDisabled={newCurrentPage === pagesCount}
          size={isMobile ? 'sm' : 'md'}
          onClick={() => selectPage(newCurrentPage + 1)}
        />
      </Stack>
    );
  },
);
