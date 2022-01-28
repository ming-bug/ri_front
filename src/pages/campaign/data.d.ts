export type TableListItem = {
  campaignUin: string;
  campaignName: string;
  creator: string;
  status: number;
  createTime: string;
  LastModifyTime: string;
};

export type TableListPagination = {
  pageSize: number;
  current: number;
  userUin: string;
};
