'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EventsViewModel } from './EventsViewModel';
import { EventsViewModelBuilder } from './EventsViewModelBuilder';

type EventsViewType = {
  model: EventsViewModel;
};

const EventsView: NextPage<EventsViewType> = observer((props) => {
  return <h1>Events OHAYO</h1>;
});

export default withModel<EventsViewModel, EventsViewModelBuilder>(
  EventsView,
  EventsViewModelBuilder,
);
