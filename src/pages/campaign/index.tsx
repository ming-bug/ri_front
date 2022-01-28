import type { TableListItem } from './data';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { TableListPagination } from './data';
import { getCampaignMyCampaigns } from '@/services/ant-design-pro/campaign';
import { useRef, useState } from 'react';
import { useModel } from 'umi';
import { Button } from 'antd';
import { ModalForm, ProFormDateRangePicker } from '@ant-design/pro-form';

const TableList: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  const userUin = currentUser.userUin;

  /** 新建窗口的弹窗 */
  const [queryReportModalVisible, handleModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  /** 国际化配置 */
  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'UIN',
      dataIndex: 'campaignUin',
      tip: 'uin 是唯一的 key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: 'Campaign Name',
      dataIndex: 'campaignName',
    },
    {
      title: 'status',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        5: {
          text: 'Unknow',
          color: '#D8D8D8',
        },
        6: {
          text: 'Unknow',
          color: '#D8D8D8',
        },
        8: {
          text: 'Aborted',
          color: '#FFFF00',
        },
        9: {
          text: 'Suspended',
          color: '#0040FF',
        },
        10: {
          text: 'Completed',
          color: '#00FF00',
        },
        11: {
          text: 'Approved',
          color: '#40FF00',
        },
        12: {
          text: 'Suspending',
          color: '#0080FF',
        },
        13: {
          text: 'Closed',
          color: '#40FF00',
        },
        14: {
          text: 'Unknow',
          color: '#D8D8D8',
        },
        15: {
          text: 'Idle',
          color: '#000000',
        },
        16: {
          text: 'Unkonw',
          color: '#D8D8D8',
        },
        17: {
          text: 'Unknow',
          color: '#D8D8D8',
        },
        18: {
          text: 'Unkonw',
          color: '#D8D8D8',
        },
      },
    },
    {
      title: 'Last Modify Time',
      sorter: true,
      dataIndex: 'lastModifyTime',
      valueType: 'dateTime',
    },
    {
      title: 'Action',
      dataIndex: 'CampaignAction',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleModalVisible(true);
            setCurrentRow(record);
          }}
        >
          Summary Report
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<TableListItem, TableListPagination>
        headerTitle="Campaign"
        actionRef={actionRef}
        rowKey="campaignUin"
        search={{
          labelWidth: 120,
        }}
        request={async (params) => {
          const data = Object.assign(params, { userUin });
          const res = await getCampaignMyCampaigns(data);
          return {
            data: res.data,
            success: res.success,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Choise <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a> record
              &nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              handleModalVisible(true);
              setSelectedRows([]);
            }}
          >
            Summary Report
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title="Transaction Time"
        width="400px"
        visible={queryReportModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          console.log(value);
          // 请求查询summaryReport，跳转页面展示或者当前页面展示
          handleModalVisible(false);
        }}
          >
        
        <ProFormDateRangePicker allowClear={true} name="dateRange" label="date" />
      </ModalForm>
    </PageContainer>
  );
};

export default TableList;
