import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { UiPhoneIMaskInput } from 'src/components/ui';
import { useCreateLeadMutation, useEditLeadMutation } from 'src/services/user';
import { TLeadChange } from 'src/services/user/leads/leads.types';
import { useFormStorageStore } from 'src/store';
import { formatPhoneStringJoin, formMessage } from 'src/utils';

const LeadsForm: React.FC = () => {
  const [form] = Form.useForm();

  const { mutate: addLead, isLoading: addLoading, isError: addError } = useCreateLeadMutation();
  const { mutate: editLead, isLoading: editLoading, isError: editError } = useEditLeadMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TLeadChange) => {
    if (paramsForm) {
      editLead({ ...values, id: paramsForm.id, phone: formatPhoneStringJoin(`${values.phone}`) });
      return;
    }
    addLead({ ...values, phone: formatPhoneStringJoin(`${values.phone}`) });
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({ ...paramsForm, phone: paramsForm?.phone?.substring(4) });
    }
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Leads Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="first_name"
          label="Имя"
          rules={[{ required: true, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Фамилия"
          rules={[{ required: false, message: formMessage('Фамилия') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: formMessage('Телефон') }]}
        >
          <UiPhoneIMaskInput />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { LeadsForm };
