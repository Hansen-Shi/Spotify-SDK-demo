export class UserInfoModel {
  guid: string;
  uid: string;
  email: string;

  password: string;

  constructor(obj: any = null) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}

