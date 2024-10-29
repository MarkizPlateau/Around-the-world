import { IModelBuilder } from '@/model/mvvm';
import { MyProfileViewModel } from './MyProfileViewModel';
import { getUserData } from '@/calls/userData';
import { makeClient } from '@/apollo/client';
import { getCustomServerSession } from '@/hooks';

export type MyProfileViewApiData = {
  dummy: string;
  userData: USER_DATA;
};
export class MyProfileViewModelBuilder
  implements IModelBuilder<MyProfileViewModel, MyProfileViewApiData>
{
  build(apiData: MyProfileViewApiData): MyProfileViewModel {
    return new MyProfileViewModel(apiData);
  }

  async loadApiData() {
    const session = await getCustomServerSession();

    const userData = await getUserData(makeClient(session.jwt));

    const apiData = {
      dummy: 'dummy',
      userData: {
        id: userData.id,
        username: userData.username,
        email: userData.email,
      },
    };
    return apiData;
  }
}
