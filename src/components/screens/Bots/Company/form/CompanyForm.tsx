/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { UiPhoneIMaskInput } from 'src/components/ui';
import { useCreateCompanyMutation, useEditCompanyMutation } from 'src/services/user';
import { TCompanyChange } from 'src/services/user/bots/company/company.types';
import { useFormStorageStore, useYandexMapStore } from 'src/store';
import { formatPhoneStringJoin, formMessage } from 'src/utils';

import { CompanyMapFormItem } from './CompanyMapFormItem';

const CompanyForm: React.FC = () => {
  const [form] = Form.useForm();

  const {
    mutate: addCompany,
    isLoading: addLoading,
    isError: addError,
  } = useCreateCompanyMutation();
  const {
    mutate: editCompany,
    isLoading: editLoading,
    isError: editError,
  } = useEditCompanyMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const location = useYandexMapStore((state) => state.location);
  const setMapLocation = useYandexMapStore((state) => state.setMapLocation);

  const onFinish = (values: TCompanyChange) => {
    if (paramsForm) {
      editCompany({
        ...values,
        phone: formatPhoneStringJoin(values.phone),
        token: paramsForm.token,
        latitude: location[0],
        longitude: location[1],
      });
      return;
    }
    addCompany({
      ...values,
      phone: formatPhoneStringJoin(values.phone),
      latitude: location[0],
      longitude: location[1],
    });
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({ ...paramsForm, phone: paramsForm?.phone?.substring(4) });
      if (paramsForm?.latitude) setMapLocation([paramsForm.latitude, paramsForm.longitude]);
    }
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Company Form"
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
          name="token"
          label="Токен"
          rules={[{ required: true, message: formMessage('Токен') }]}
        >
          <Input.TextArea autoSize disabled={!!paramsForm} />
        </Form.Item>
        <Form.Item
          name="about_us"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: formMessage('Телефон') }]}
        >
          <UiPhoneIMaskInput />
        </Form.Item>
        <Form.Item
          name="telegram_channel"
          label="Телеграм канал"
          rules={[{ required: true, message: formMessage('Телеграм канал') }]}
        >
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item label="Адрес">
          <CompanyMapFormItem />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { CompanyForm };
