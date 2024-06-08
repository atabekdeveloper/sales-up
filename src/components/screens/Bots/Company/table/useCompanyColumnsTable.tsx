import { Space, Tooltip, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteCompanyMutation } from 'src/services/index.api';
import { TCompanyItem } from 'src/services/user/bots/company/company.types';
import { useFormStorageStore } from 'src/store';
import { formatEmptyValue, generateGoogleMapsLink } from 'src/utils';

export const useCompanyColumnsTable = () => {
  const { mutate: deleteBot } = useDeleteCompanyMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditBot = (item: TCompanyItem) => setParamsForm(item);

  const columns: ColumnsType<TCompanyItem> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Токен',
      dataIndex: 'token',
      key: 'token',
      ellipsis: true,
      render: (value) => <Typography.Paragraph copyable={{ text: value }} />,
    },
    {
      title: 'О нас',
      dataIndex: 'about_us',
      key: 'about_us',
      ellipsis: true,
      render: formatEmptyValue,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
    },
    {
      title: 'Телеграм',
      dataIndex: 'telegram_channel',
      key: 'telegram_channel',
      ellipsis: true,
      render: (link) => (
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      ),
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
      ellipsis: true,
      render: (_, r) => (
        <a href={generateGoogleMapsLink(r.latitude, r.longitude)} target="_blank" rel="noreferrer">
          {generateGoogleMapsLink(r.latitude, r.longitude)}
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
              onClick={() => onEditBot(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteBot(r.token)} title={r.name}>
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
