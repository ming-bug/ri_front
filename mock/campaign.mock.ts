// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/campaign/myCampaigns': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: [
        {
          campaignUin: '13986',
          campaignName: 'BusinessSurvey_BH_Weekly_0901',
          creator: 'shiming.xue@hgc.com.hk',
          status: 15,
          createTime: '2021/07/30 14:36:23',
          lastModifyTime: '2021/11/08 16:06:39',
        },
        {
          campaignUin: '14388',
          campaignName: 'CS_transaction_survery_test_1011',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/10/11 09:53:55',
          lastModifyTime: '2021/10/11 09:59:47',
        },
        {
          campaignUin: '14075',
          campaignName: 'NPS_Survey_Actual_CN (20210817) ',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/17 14:19:57',
          lastModifyTime: '2021/08/17 14:20:58',
        },
        {
          campaignUin: '14074',
          campaignName: 'NPS_Survey_Actual_EN (20210817)',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/17 14:18:37',
          lastModifyTime: '2021/08/17 14:19:42',
        },
        {
          campaignUin: '14050',
          campaignName: 'NPS_Survey_Actual_EN (20210811)',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/11 12:58:35',
          lastModifyTime: '2021/08/11 12:59:37',
        },
        {
          campaignUin: '14049',
          campaignName: 'NPS_Survey_Actual_CN (20210811)',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/11 12:56:59',
          lastModifyTime: '2021/08/11 12:58:14',
        },
        {
          campaignUin: '14030',
          campaignName: 'NPS_Survey_Actual_EN (20210809)',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/09 14:47:16',
          lastModifyTime: '2021/08/09 14:49:46',
        },
        {
          campaignUin: '14031',
          campaignName: 'NPS_Survey_Actual_CN (20210809)',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/09 14:48:45',
          lastModifyTime: '2021/08/09 14:49:30',
        },
        {
          campaignUin: '14015',
          campaignName: 'NPS_Survey_Actual_EN (202108) ',
          creator: 'shiming.xue@hgc.com.hk',
          status: 10,
          createTime: '2021/08/05 11:16:27',
          lastModifyTime: '2021/08/05 14:07:40',
        },
      ],
      errorCode: '',
      errorMessage: '',
      showType: 0,
    });
  },
};
