'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EventsNewsViewModel } from './EventsNewsViewModel';
import { EventsNewsViewModelBuilder } from './EventsNewsViewModelBuilder';
import { PageWrapper } from '@/wrappers';
import { Heading } from '@chakra-ui/react';

type EventsNewsViewType = {
  model: EventsNewsViewModel;
};

const EventsNewsView: NextPage<EventsNewsViewType> = observer((props) => {
  return (
    <PageWrapper>
      <Heading as="h1" color="mainDark">
        Festivals list
      </Heading>
    </PageWrapper>
  );
});

export default withModel<EventsNewsViewModel, EventsNewsViewModelBuilder>(
  EventsNewsView,
  EventsNewsViewModelBuilder,
);
