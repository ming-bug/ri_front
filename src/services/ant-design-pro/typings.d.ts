// @ts-ignore
/* eslint-disable */

declare namespace API {
  type LoginInfo = {
    autoLogin?: boolean;
    email?: string;
    groupUin?: string;
    password?: string;
  };

  type ResultCont = {
    data?: any;
    errorCode?: string;
    errorMessage?: string;
    /** error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page */
    showType?: number;
    success?: boolean;
  };
}
