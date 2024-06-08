/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import { Badge, Popover, Select, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { LuTicket } from 'react-icons/lu';
import { UiButton } from 'src/components/ui';
import { useEditOrderMutation } from 'src/services/user';
import { TOrderItem } from 'src/services/user/orders/orders.types';
import { formatEmptyValue, formatPrice } from 'src/utils';

import s from './table.module.scss';

const statusColors = ['#30BCB5', '#FCED23', '#8CC640'];
const paidOrConfirmedColors = ['#FAAD14', '#8CC640'];

interface IOrderColumns {
  isPaid: boolean | null;
  isConfirmed: boolean | null;
  setIsPaid: React.Dispatch<React.SetStateAction<boolean | null>>;
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const useOrdersColumnsTable = ({
  setIsConfirmed,
  setIsPaid,
  isConfirmed,
  isPaid,
}: IOrderColumns) => {
  const paidOrConfirmedItems = [
    { value: true, label: 'Принято' },
    { value: false, label: 'Ожидается' },
  ];

  const { mutate: editOrder } = useEditOrderMutation();

  const columns: ColumnsType<TOrderItem> = [
    {
      title: 'Клиент',
      dataIndex: 'lead_name',
      key: 'lead_name',
      render: (_, r) => `${r.lead?.first_name} ${r.lead?.last_name || ''}`,
      ellipsis: true,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, r) => `${r.lead.phone}`,
      ellipsis: true,
    },
    {
      title: 'Курс',
      dataIndex: 'course',
      key: 'course',
      render: (_, r) => formatEmptyValue(r.course.title),
      ellipsis: true,
    },
    {
      width: 150,
      title: (
        <Select
          style={{ width: 120 }}
          placeholder="Оплата"
          value={isPaid}
          onSelect={(value) => setIsPaid(value)}
          options={paidOrConfirmedItems}
          onClear={() => setIsPaid(null)}
          allowClear
        />
      ),
      dataIndex: 'paid',
      key: 'paid',
      render: (_, r) => (
        <Space>
          <span
            className={s.orderStatus}
            style={{ backgroundColor: paidOrConfirmedColors[Number(r.is_paid)] }}
          />
          <Select
            value={r.is_paid}
            onSelect={(value) => editOrder({ id: r.id, is_paid: value })}
            options={paidOrConfirmedItems}
          />
        </Space>
      ),
    },
    {
      width: 150,
      title: (
        <Select
          style={{ width: 120 }}
          placeholder="Подтверждение"
          value={isConfirmed}
          onSelect={(value) => setIsConfirmed(value)}
          options={paidOrConfirmedItems}
          onClear={() => setIsConfirmed(null)}
          allowClear
        />
      ),
      dataIndex: 'confirmed',
      key: 'confirmed',
      render: (_, r) => (
        <Space>
          <span
            className={s.orderStatus}
            style={{ backgroundColor: paidOrConfirmedColors[Number(r.is_confirmed)] }}
          />
          <Select
            value={r.is_confirmed}
            onSelect={(value) => editOrder({ id: r.id, is_confirmed: value })}
            options={paidOrConfirmedItems}
          />
        </Space>
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
      render: (_, r) => (
        <Tag color={statusColors[r.order_status.id - 1]}>{r.order_status.name}</Tag>
      ),
    },
    {
      title: 'Билеты',
      dataIndex: 'ticket',
      key: 'ticket',
      ellipsis: true,
      render: (_, r) => (
        <Popover
          trigger="click"
          content={
            <Space direction="vertical">
              {r.tickets.map((ticket, index) => (
                <Tag key={ticket.id} color="cyan">
                  {`${index + 1}. ${ticket.name} / ${formatPrice(
                    ticket.quantity,
                    'штук',
                  )} / ${formatPrice(ticket.price * ticket.quantity, 'uzs')}`}
                </Tag>
              ))}
            </Space>
          }
        >
          <Badge count={r.tickets.length}>
            <UiButton icon={<LuTicket />} />
          </Badge>
        </Popover>
      ),
    },
    {
      width: 100,
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      ellipsis: true,
      render: (value) => <Tag color="cyan">{formatPrice(value, 'uzs')}</Tag>,
    },
    {
      title: 'Получил оплату',
      dataIndex: 'paid_by',
      key: 'paid_by',
      render: (_, r) => formatEmptyValue(r.paid_by?.name),
      ellipsis: true,
    },
    {
      title: 'Принял курс',
      dataIndex: 'confirmed_by',
      key: 'confirmed_by',
      render: (_, r) => formatEmptyValue(r.confirmed_by?.name),
      ellipsis: true,
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
  ];
  return columns;
};
