import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { useCreateLeadNotificationMutation } from 'src/services/user';
import { TLeadNotificationChange } from 'src/services/user/leads/notifications/lead-notifications.types';
import { formMessage } from 'src/utils';

const LeadNotificationsForm: React.FC = () => {
  const [form] = Form.useForm();

  const {
    mutate: addLeadNotification,
    isLoading: addLoading,
    isError: addError,
  } = useCreateLeadNotificationMutation();

  const onFinish = (values: TLeadNotificationChange) => addLeadNotification(values);

  return (
    <GlobalDrawer form={form} isLoading={addLoading} isError={addError}>
      <Form
        name="Lead Notification Form"
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
          <Input />
        </Form.Item>
        <Form.Item
          name="link"
          label="Ссылка"
          rules={[{ required: false, message: formMessage('Ссылка') }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { LeadNotificationsForm };
