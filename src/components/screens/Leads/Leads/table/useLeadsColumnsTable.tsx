/* eslint-disable object-curly-newline */
import { Avatar, Badge, Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import telegram from 'src/assets/images/telegram.svg';
import { UiButton } from 'src/components/ui';
import { TLeadItem } from 'src/services/user/leads/leads.types';
import { useFormStorageStore, useNumericStringVault, useToggleStore } from 'src/store';
import { formatEmptyValue } from 'src/utils';

export const useLeadsColumnsTable = () => {
  const navigate = useNavigate();

  const setNumericStringVault = useNumericStringVault((state) => state.setNumericStringVault);
  const toggleChatModal = useToggleStore((state) => state.toggleChatModal);
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditLead = (item: TLeadItem) => setParamsForm(item);

  const onToggleChat = (id: number) => {
    toggleChatModal();
    setNumericStringVault(id);
  };

  const columns: ColumnsType<TLeadItem> = [
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
      ellipsis: true,
      render: formatEmptyValue,
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
      ellipsis: true,
      render: formatEmptyValue,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
      render: formatEmptyValue,
    },
    {
      title: 'Чат',
      dataIndex: 'chat',
      key: 'chat',
      render: (_, r) => (
        <Badge count={r.unread_messages_count}>
          <Avatar
            shape="square"
            size="large"
            src={telegram}
            style={{ cursor: 'pointer' }}
            onClick={() => onToggleChat(r.telegraph_chat_id)}
          />
        </Badge>
      ),
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
      width: 150,
      render: (_, r) => (
        <Space>
          <Tooltip title="Комменты">
            <UiButton
              icon={<FaRegComment />}
              onClick={() => navigate(`/leads/${r.id}/${r.first_name}`)}
              aria-label="Comment"
            />
          </Tooltip>
          <Tooltip title="Изменить">
            <UiButton
              color="#FFC108"
              icon={<BiSolidEdit />}
              onClick={() => onEditLead(r)}
              aria-label="Edit"
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
  return columns;
};
