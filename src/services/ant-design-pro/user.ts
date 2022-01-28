// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** get current user get current user info, include name & groups GET /api/user/current */
export async function getUserCurrent(options?: { [key: string]: any }) {
  return request<API.ResultCont>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** System groups Get all system groups GET /api/user/groups */
export async function getUserGroups(options?: { [key: string]: any }) {
  return request<API.ResultCont>('/api/user/groups', {
    method: 'GET',
    ...(options || {}),
  });
}

/** login with login info verify login account by email, password and group POST /api/user/login */
export async function postUserLogin(body: API.LoginInfo, options?: { [key: string]: any }) {
  return request<API.ResultCont>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** logout current account logout and return nil POST /api/user/outLogin */
export async function postUserOutLogin(options?: { [key: string]: any }) {
  return request<API.ResultCont>('/api/user/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
