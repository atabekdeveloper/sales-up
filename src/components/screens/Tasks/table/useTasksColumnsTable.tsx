import { Select, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEditUserTaskMutation } from 'src/services/user';
import { TUserTaskItem } from 'src/services/user/tasks/tasks.types';

import s from './table.module.scss';

const statusColors = ['#D42127', '#8CC640'];

const completeItems = [
  { value: true, label: 'Выполнено' },
  { value: false, label: 'Не выполнено' },
];

export const useUserTasksColumnsTable = () => {
  const { mutate: editTask } = useEditUserTaskMutation();
  const columns: ColumnsType<TUserTaskItem> = [
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
      title: 'Статус',
      dataIndex: 'is_completed',
      key: 'is_completed',
      render: (_, r) => (
        <Space>
          <span
            className={s.taskStatus}
            style={{ backgroundColor: statusColors[Number(r.is_completed)] }}
          />
          <Select
            value={r.is_completed}
            onSelect={(value) => editTask({ id: r.id, is_completed: value })}
            options={completeItems}
          />
        </Space>
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
  ];
  return columns;
};
