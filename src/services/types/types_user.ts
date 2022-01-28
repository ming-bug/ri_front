// @ts-ignore
/* eslint-disable */

declare namespace USER {
  type UserInfo = {
    userUin: string;
    name: string;
    email: string;
    currentGroup: Group;
    groups: Group[];
  };

  type Group = {
    groupUin?: string;
    name?: string;
  };
}
