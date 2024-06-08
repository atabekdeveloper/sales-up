import { Space, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteSourceLinkMutation } from 'src/services/index.api';
import { TSourceLinkItem } from 'src/services/user/sources/links/source-links.types';
import { useFormStorageStore } from 'src/store';
import { formatPrice } from 'src/utils';

export const useLinksColumnsTable = () => {
  const { mutate: deleteLink } = useDeleteSourceLinkMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditLink = (item: TSourceLinkItem) => setParamsForm(item);

  const columns: ColumnsType<TSourceLinkItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (value: number) => <Tag color="cyan">{formatPrice(value, 'uzs')}</Tag>,
    },
    {
      title: 'Количество клиентов',
      dataIndex: 'leads_count',
      key: 'leads_count',
      ellipsis: true,
      render: (value: number) => <Tag color="orange">{formatPrice(value, '')}</Tag>,
    },
    {
      title: 'Бот',
      dataIndex: 'url',
      key: 'url',
      ellipsis: true,
      render: (value: string) => (
        <a href={value} target="_blank" rel="noreferrer">
          {value}
        </a>
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
              onClick={() => onEditLink(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteLink(r.id)} title={r.title}>
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
