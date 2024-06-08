import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { UiPhoneIMaskInput } from 'src/components/ui';
import { TUserChange } from 'src/services/admin/users/users.types';
import { useCreateUserMutation, useEditUserMutation } from 'src/services/index.api';
import { useFormStorageStore, useNumericStringVault } from 'src/store';
import { formatPhoneStringJoin, formMessage } from 'src/utils';

const AdminUsersForm: React.FC = () => {
  const [form] = Form.useForm();

  const { mutate: addUser, isLoading: addLoading, isError: addError } = useCreateUserMutation();
  const { mutate: editUser, isLoading: editLoading, isError: editError } = useEditUserMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const roleId = useNumericStringVault((state) => state.numericStringVault);

  const onFinish = (values: TUserChange) => {
    if (paramsForm) {
      editUser({
        ...values,
        id: paramsForm.id,
        phone: formatPhoneStringJoin(values.phone),
        role_id: paramsForm.role_id,
      });
      return;
    }
    addUser({
      ...values,
      phone: formatPhoneStringJoin(values.phone),
      role_id: Number(roleId),
    });
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue({ ...paramsForm, phone: paramsForm?.phone?.substring(4) });
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="User Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Ф.И.О"
          rules={[{ required: true, message: formMessage('Ф.И.О') }]}
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
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: !paramsForm, message: formMessage('Пароль') }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { AdminUsersForm };
