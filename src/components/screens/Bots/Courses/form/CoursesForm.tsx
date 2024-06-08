/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, DatePickerProps, Form, Input } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { useCreateBotCourseMutation, useEditBotCourseMutation } from 'src/services/user';
import { TBotCourseChange } from 'src/services/user/bots/courses/bot-courses.types';
import { dateFormat } from 'src/shared';
import { useFormStorageStore } from 'src/store';
import { formMessage } from 'src/utils';

const CoursesForm: React.FC = () => {
  const [form] = Form.useForm();
  const [dateString, setDatestring] = React.useState<string>('');

  const {
    mutate: addCourse,
    isLoading: addLoading,
    isError: addError,
  } = useCreateBotCourseMutation();
  const {
    mutate: editCourse,
    isLoading: editLoading,
    isError: editError,
  } = useEditBotCourseMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
    if (date) setDatestring(dateString as string);
  };

  const onFinish = (values: TBotCourseChange) => {
    if (paramsForm) {
      editCourse({ ...values, id: paramsForm.id, started_at: dateString });
      return;
    }
    addCourse({ ...values, started_at: dateString });
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({
        ...paramsForm,
        started_at: paramsForm.started_at ? dayjs(paramsForm.started_at) : '',
      });
      setDatestring(paramsForm?.started_at || '');
    }
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Courses Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          label="Начало"
          name="started_at"
          rules={[{ required: true, message: formMessage('Начало') }]}
        >
          <DatePicker
            showTime
            format={dateFormat}
            onChange={onChangeDatePicker}
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea autoSize />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { CoursesForm };
