import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { TUserItem } from 'src/services/admin/users/users.types';
import { useDeleteUserMutation } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';

export const useAdminUsersColumnsTable = () => {
  const { mutate: deleteUser } = useDeleteUserMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditUser = (item: TUserItem) => setParamsForm(item);

  const columns: ColumnsType<TUserItem> = [
    {
      title: 'Ф.И.О',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      fixed: 'right',
      key: 'action',
      align: 'end',
      width: 100,
      hidden: true,
      render: (_, r) => (
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              color="#FFC108"
              icon={<BiSolidEdit />}
              onClick={() => onEditUser(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteUser(r.id)} title={r.name}>
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
