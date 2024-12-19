import { client } from '@/apollo/client';
import * as GraphQL from '@/graphql/generates/graphql';

export async function getNews() {
  try {
    const { data } = await client.query<GraphQL.NewsQuery>({
      query: GraphQL.NewsDocument,
    });
    return {
      meta: data.news?.meta,
      news: data.news?.data,
    };
  } catch (e) {
    console.log('Error', e);
  }
}
