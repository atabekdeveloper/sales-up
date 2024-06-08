import { Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteBotPaymentCardMutation } from 'src/services/index.api';
import { TBotPaymentCardItem } from 'src/services/user/bots/payment-cards/bot-payment-cards.types';

export const useBotPaymentCardsColumnsTable = () => {
  const { mutate: deletePaymentCard } = useDeleteBotPaymentCardMutation();

  const columns: ColumnsType<TBotPaymentCardItem> = [
    {
      title: 'Владелец',
      dataIndex: 'holder_name',
      key: 'holder_name',
      ellipsis: true,
    },
    {
      title: 'Карта',
      dataIndex: 'payment_card_type_name',
      key: 'payment_card_type_name',
      render: (value) => <Tag color="geekblue">{value}</Tag>,
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Номер',
      dataIndex: 'number',
      key: 'number',
      render: (value) => <Tag color="cyan">{value}</Tag>,
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
      ellipsis: true,
    },
    {
      title: 'Обновлено',
      dataIndex: 'updated_at',
      key: 'updated_at',
      ellipsis: true,
    },
    {
      fixed: 'right',
      key: 'action',
      align: 'end',
      width: 100,
      render: (_, r) => (
        <GlobalPopconfirm onConfirm={() => deletePaymentCard(r.id)} title={r.name}>
          <Tooltip title="Удалить">
            <UiButton color="#FF5757" icon={<RiDeleteBinLine />} aria-label="Delete" />
          </Tooltip>
        </GlobalPopconfirm>
      ),
    },
  ];
  return columns;
};
