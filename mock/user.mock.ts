// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/current': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: {
        userUin: '2068',
        name: 'Shiming Xue',
        email: 'shiming.xue@hgc.com.hk',
        currentGroup: {
          groupUin: '2',
          name: 'DEFAULT GROUP',
        },
        groups: [
          {
            groupUin: '1',
            name: 'ROOT',
          },
          {
            groupUin: '2',
            name: 'DEFAULT GROUP',
          },
          {
            groupUin: '224',
            name: 'OSUP',
          },
        ],
      },
      errorCode: '',
      errorMessage: '',
      showType: 0,
    });
  },
  'GET /api/user/groups': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: [
        {
          groupUin: '1',
          name: 'ROOT',
        },
        {
          groupUin: '2',
          name: 'DEFAULT GROUP',
        },
        {
          groupUin: '224',
          name: 'OSUP',
        },
        {
          groupUin: '63',
          name: 'SCFR',
        },
        {
          groupUin: '83',
          name: 'IBHK',
        },
        {
          groupUin: '144',
          name: 'Demo',
        },
        {
          groupUin: '184',
          name: 'Fixed CS & Operation',
        },
        {
          groupUin: '204',
          name: 'SMPR',
        },
        {
          groupUin: '165',
          name: 'Corporate',
        },
        {
          groupUin: '84',
          name: 'SCFZ',
        },
        {
          groupUin: '245',
          name: 'ITSZ',
        },
      ],
      errorCode: '',
      errorMessage: '',
      showType: 0,
    });
  },
  'POST /api/user/login': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: {
        token:
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVWluIjoiMjA2OCIsInVzZXJuYW1lIjoiU2hpbWluZyBYdWUiLCJleHAiOjE2Mzg0MDk3MDUsImlhdCI6MTYzODMyMzMwNSwiaXNzIjoicmlfc2VydmVyIiwic3ViIjoiYXV0aF90b2tlbiJ9.zytyXvobvxdlCkJyH8e095TMRLynFfECghbU1TlL8_551DM7p_qltQow3lda3_BjLEi52vvwDF9UG-KLWLb_fA',
      },
      errorCode: '',
      errorMessage: '',
      showType: 0,
    });
  },
  'POST /api/user/outLogin': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: {
        userUin: '',
        name: '',
        email: '',
        currentGroup: {
          groupUin: '',
          name: '',
        },
        groups: [],
      },
      errorCode: '',
      errorMessage: '',
      showType: 0,
    });
  },
};
