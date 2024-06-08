import { Space, Tag } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';
import { useGetGuestItemQuery } from 'src/services/guest';
import { formatEmptyValue, formatPrice } from 'src/utils';

import s from './guest.module.scss';

const statusColors = ['#30BCB5', '#FCED23', '#8CC640'];
const paidOrConfirmedColors = ['#FAAD14', '#8CC640'];

const Guest: React.FC = () => {
  const { uuid } = useParams();
  const { data: guest } = useGetGuestItemQuery(String(uuid));
  return (
    <div className={s.guest}>
      <div className={s.guest__container}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={s.guest__items}>
          <li>
            <h2>Имя</h2>
            <span>{guest?.data.lead.first_name}</span>
          </li>
          <li>
            <h2>Фамилия</h2>
            <span>{formatEmptyValue(guest?.data.lead.last_name)}</span>
          </li>
          <li>
            <h2>Телефон</h2>
            <span>{formatEmptyValue(guest?.data.lead.phone)}</span>
          </li>
          <li>
            <h2>Курс</h2>
            <Tag color="gold">{guest?.data.course.title}</Tag>
          </li>
          <li>
            <h2>Статус</h2>
            <Tag color={statusColors[Number(guest?.data.order_status.id) - 1]}>
              {guest?.data.order_status.name}
            </Tag>
          </li>
          <li>
            <h2>Билеты</h2>
            <Space direction="vertical">
              {guest?.data.tickets.map((ticket, index) => (
                <Tag key={ticket.id} color="cyan">
                  {`${index + 1}. ${ticket.name} / ${formatPrice(
                    ticket.quantity,
                    'штук',
                  )} / ${formatPrice(ticket.price * ticket.quantity, 'uzs')}`}
                </Tag>
              ))}
            </Space>
          </li>
          <li>
            <h2>Оплата</h2>
            <Tag color={paidOrConfirmedColors[Number(guest?.data.is_paid)]}>
              {guest?.data.is_paid ? 'Принято' : 'Ожидается'}
            </Tag>
          </li>
          <li>
            <h2>Подтверждение</h2>
            <Tag color={paidOrConfirmedColors[Number(guest?.data.is_confirmed)]}>
              {guest?.data.is_confirmed ? 'Принято' : 'Ожидается'}
            </Tag>
          </li>
          <li>
            <h2>Сумма</h2>
            <Tag color="cyan">{formatPrice(Number(guest?.data.amount), 'uzs')}</Tag>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Guest };
