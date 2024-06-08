import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { TAdminTaskChange } from 'src/services/admin/tasks/tasks.types';
import { useCreateAdminTaskMutation, useEditAdminTaskMutation } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';
import { formMessage } from 'src/utils';

const AdminTasksForm: React.FC = () => {
  const [form] = Form.useForm();

  const {
    mutate: addTask,
    isLoading: addLoading,
    isError: addError,
  } = useCreateAdminTaskMutation();
  const {
    mutate: editTask,
    isLoading: editLoading,
    isError: editError,
  } = useEditAdminTaskMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TAdminTaskChange) => {
    if (paramsForm) {
      editTask({ ...values, id: paramsForm.id });
      return;
    }
    addTask(values);
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Task Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { AdminTasksForm };
