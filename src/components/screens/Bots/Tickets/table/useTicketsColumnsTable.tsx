import { Space, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteBotTicketMutation } from 'src/services/index.api';
import { TBotTicketItem } from 'src/services/user/bots/tickets/bot-tickets.types';
import { useFormStorageStore } from 'src/store';
import { formatPrice } from 'src/utils';

export const useTicketsColumnsTable = () => {
  const { mutate: deleteTicket } = useDeleteBotTicketMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditTicket = (item: TBotTicketItem) => setParamsForm(item);

  const columns: ColumnsType<TBotTicketItem> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (value: number) => <Tag color="cyan">{formatPrice(value, 'uzs')}</Tag>,
    },
    {
      title: 'Курс',
      dataIndex: 'course_title',
      key: 'course_title',
      render: (value) => <Tag color="cyan-inverse">{value}</Tag>,
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
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              color="#FFC108"
              icon={<BiSolidEdit />}
              onClick={() => onEditTicket(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteTicket(r.id)} title={r.name}>
            <Tooltip title="Удалить">
              <UiButton color="#FF5757" icon={<RiDeleteBinLine />} aria-label="Delete" />
            </Tooltip>
          </GlobalPopconfirm>
        </Space>
      ),
    },
  ];
  return columns;
};
