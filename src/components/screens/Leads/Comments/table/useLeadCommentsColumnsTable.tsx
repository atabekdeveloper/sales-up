import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteLeadCommentMutation } from 'src/services/user';
import { TLeadCommentItem } from 'src/services/user/leads/comments/lead-comments.types';
import { formatEmptyValue } from 'src/utils';

export const useLeadCommentsColumnsTable = () => {
  const { mutate: deleteComment } = useDeleteLeadCommentMutation();
  const columns: ColumnsType<TLeadCommentItem> = [
    {
      title: 'Админ',
      dataIndex: 'created_by',
      key: 'created_by',
      ellipsis: true,
      render: (_, r) => formatEmptyValue(r.created_by?.name),
    },
    {
      title: 'Описание',
      dataIndex: 'text',
      key: 'text',
      ellipsis: true,
      render: formatEmptyValue,
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
      ellipsis: true,
    },
    {
      fixed: 'right',
      key: 'action',
      align: 'end',
      width: 150,
      render: (_, r) => (
        <GlobalPopconfirm onConfirm={() => deleteComment(r.id)} title={r.created_by?.name}>
          <Tooltip title="Удалить">
            <UiButton color="#FF5757" icon={<RiDeleteBinLine />} aria-label="Delete" />
          </Tooltip>
        </GlobalPopconfirm>
      ),
    },
  ];
  return columns;
};
