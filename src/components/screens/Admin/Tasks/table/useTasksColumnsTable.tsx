import { Select, Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { TAdminTaskItem } from 'src/services/admin/tasks/tasks.types';
import {
  useAdminTaskAddedUsersMutation,
  useDeleteAdminTaskMutation,
  useGetUsersQuery,
} from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';

export const useTasksColumnsTable = () => {
  const { mutate: deleteTask } = useDeleteAdminTaskMutation();

  const { data: users } = useGetUsersQuery('manager', { limit: 100 });

  const { mutate: addedUsers } = useAdminTaskAddedUsersMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
  const onEditTask = (item: TAdminTaskItem) => setParamsForm(item);

  const handleChange = (id: number, values: any) => {
    addedUsers({ id, user_ids: values });
  };

  const columns: ColumnsType<TAdminTaskItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      width: 200,
      title: 'Менеджеры',
      dataIndex: 'users',
      key: 'users',
      render: (_, r) => (
        <Select
          key={r.id}
          mode="multiple"
          value={r.users.map((user) => user.id)}
          maxTagCount="responsive"
          placeholder="Пользователи"
          onChange={(values) => handleChange(r.id, values)}
          options={users?.data.map((user) => ({ value: user.id, label: user.name }))}
          style={{ width: 150 }}
        />
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
      width: 100,
      render: (_, r) => (
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              color="#FFC108"
              icon={<BiSolidEdit />}
              onClick={() => onEditTask(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteTask(r.id)} title={r.title}>
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
