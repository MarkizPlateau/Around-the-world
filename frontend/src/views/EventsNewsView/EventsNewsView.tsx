'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EventsNewsViewModel } from './EventsNewsViewModel';
import { EventsNewsViewModelBuilder } from './EventsNewsViewModelBuilder';
import { PageWrapper } from '@/wrappers';

type EventsNewsViewType = {
  model: EventsNewsViewModel;
};

const EventsNewsView: NextPage<EventsNewsViewType> = observer((props) => {
  return (
    <PageWrapper>
      <h1>Events OHAYO</h1>
    </PageWrapper>
  );
});

export default withModel<EventsNewsViewModel, EventsNewsViewModelBuilder>(
  EventsNewsView,
  EventsNewsViewModelBuilder,
);
