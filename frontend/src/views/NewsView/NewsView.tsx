'use client';

import { NextPage } from 'next';
import { observer } from 'mobx-react';
import { NewsViewModel } from './NewsViewModel';
import { NewsViewModelBuilder } from './NewsViewModelBuilder';
import { useState } from 'react';
import { withModel } from '@/utils/hooks/withModel';
import ContentWrapper from '@/wrappers/ContentWrapper/ContentWrapper';
import { Box, Heading } from '@chakra-ui/react';
import { PaginationControls } from '@/components';
import News from '@/components/News/News';
import { GiArchiveResearch } from 'react-icons/gi';

type NewsViewType = {
  model: NewsViewModel;
};

const news: any = [];

const NewsView: NextPage<NewsViewType> = observer(({ model }: NewsViewType) => {
  const [page, setPage] = useState(1);
  const pageSize = 1;
  const totalPages = 10;
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };
  return (
    <ContentWrapper minHeight="xl" px={['0', '100']}>
      <Box alignItems="center" mx="auto">
        {news.length > 0 ? (
          <>
            <Heading as="h1" color="purple" fontSize="4xl" ml={{ base: '4', sm: '2' }}>
              News
            </Heading>
            <PaginationControls
              justify={{ base: 'center', sm: 'end' }}
              newCurrentPage={page}
              selectPage={handlePageChange}
              size={pageSize}
              total={totalPages}
            />
            <Box alignItems="center" as="section" mx="auto">
              {news.map((newsItem: any, index: any) => {
                return <News key={index} {...newsItem} />;
              })}
            </Box>
            <PaginationControls
              newCurrentPage={page}
              selectPage={handlePageChange}
              size={pageSize}
              total={totalPages}
            />
          </>
        ) : (
          <>
            <Box
              as={GiArchiveResearch}
              boxSize={{ base: '10rem', sm: 'md' }}
              color="main"
              mx="auto"
            />
            <Heading as="h2" color="purple" fontSize="4xl" textAlign="center">
              {'Currently no news :('}
            </Heading>
          </>
        )}
      </Box>
    </ContentWrapper>
  );
});

export default withModel<NewsViewModel, NewsViewModelBuilder>(NewsView, NewsViewModelBuilder);
