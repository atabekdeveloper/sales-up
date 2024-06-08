import { ColumnsType } from 'antd/es/table';
import { TLeadNotificationChange } from 'src/services/user/leads/notifications/lead-notifications.types';
import { formatEmptyValue } from 'src/utils';

export const useLeadNotificationsColumnsTable = () => {
  const columns: ColumnsType<TLeadNotificationChange> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
      render: formatEmptyValue,
    },
    {
      title: 'Ссылка',
      dataIndex: 'link',
      key: 'link',
      ellipsis: true,
      render: (link) => (
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      ),
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
      ellipsis: true,
    },
  ];
  return columns;
};
