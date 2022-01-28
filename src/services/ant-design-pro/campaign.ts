// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Get user basic campaign info Get campaign info by email, current page and page size GET /api/campaign/myCampaigns */
export async function getCampaignMyCampaigns(
  params: {
    // query
    /** user identify */
    userUin: string;
    /** list current page */
    current: number;
    /** list page size */
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ResultCont>('/api/campaign/myCampaigns', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
