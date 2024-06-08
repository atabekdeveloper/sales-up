import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteBotCourseMutation } from 'src/services/index.api';
import { TBotCourseItem } from 'src/services/user/bots/courses/bot-courses.types';
import { useFormStorageStore } from 'src/store';

export const useCoursesColumnsTable = () => {
  const { mutate: deleteCourse } = useDeleteBotCourseMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditCourse = (item: TBotCourseItem) => setParamsForm(item);

  const columns: ColumnsType<TBotCourseItem> = [
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
      title: 'Начало',
      dataIndex: 'started_at',
      key: 'started_at',
      ellipsis: true,
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
              onClick={() => onEditCourse(r)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteCourse(r.id)} title={r.title}>
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
