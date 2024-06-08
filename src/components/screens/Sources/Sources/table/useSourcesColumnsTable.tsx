import { Space, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import clsx from 'clsx';
import { BiSolidEdit } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteSourceMutation } from 'src/services/index.api';
import { TSourceItem } from 'src/services/user/sources/sources.types';
import { useFormStorageStore } from 'src/store';

export const useSourcesColumnsTable = () => {
  const navigate = useNavigate();

  const { mutate: deleteSource } = useDeleteSourceMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditSource = (item: TSourceItem) => setParamsForm(item);

  const networkColors = ['#088CCE', '#D7307A', '#FF0808'];

  const columns: ColumnsType<TSourceItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
      ellipsis: true,
      render: (_, r) => (
        <Tag color={clsx(networkColors[r.source_category.id - 1])}>{r.source_category?.name}</Tag>
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
          <UiButton
            icon={<FaRegEye />}
            onClick={() => navigate(`/sources/${r.id}/${r.title}`)}
            aria-label="View"
          />
          <Tooltip title="Изменить">
            <UiButton
              color="#FFC108"
              icon={<BiSolidEdit />}
              onClick={() => onEditSource(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteSource(r.id)} title={r.title}>
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
