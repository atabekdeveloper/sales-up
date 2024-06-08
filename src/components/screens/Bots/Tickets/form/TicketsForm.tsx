// eslint-disable-next-line object-curly-newline
import { Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import {
  useCreateBotTicketMutation,
  useEditBotTicketMutation,
  useGetBotCoursesQuery,
} from 'src/services/user';
import { TBotTicketChange } from 'src/services/user/bots/tickets/bot-tickets.types';
import { useFormStorageStore } from 'src/store';
import { formatNum, formMessage, handleNumericInputKeyDown } from 'src/utils';

const TicketsForm: React.FC = () => {
  const [form] = Form.useForm();

  const { data: courses } = useGetBotCoursesQuery({ limit: 100 });
  const {
    mutate: addTicket,
    isLoading: addLoading,
    isError: addError,
  } = useCreateBotTicketMutation();
  const {
    mutate: editTicket,
    isLoading: editLoading,
    isError: editError,
  } = useEditBotTicketMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TBotTicketChange) => {
    if (paramsForm) {
      editTicket({ ...values, id: paramsForm.id });
      return;
    }
    addTicket(values);
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Tickets Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Цена"
          rules={[{ required: true, message: formMessage('Цена') }]}
        >
          <InputNumber
            formatter={formatNum}
            addonAfter="uzs"
            onKeyDown={handleNumericInputKeyDown}
          />
        </Form.Item>
        <Form.Item
          name="course_id"
          label="Курс"
          rules={[{ required: true, message: formMessage('Курс') }]}
        >
          <Select
            options={courses?.data.map((course) => ({ value: course.id, label: course.title }))}
          />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { TicketsForm };
