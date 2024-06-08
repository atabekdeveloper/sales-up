import { Form, Input, InputNumber } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalDrawer } from 'src/components/shareds';
import { useCreateSourceLinkMutation, useEditSourceLinkMutation } from 'src/services/user';
import { TSourceLinkChange } from 'src/services/user/sources/links/source-links.types';
import { useFormStorageStore } from 'src/store';
import { formatNum, formMessage, handleNumericInputKeyDown } from 'src/utils';

const LinksForm: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const {
    mutate: addLink,
    isLoading: addLoading,
    isError: addError,
  } = useCreateSourceLinkMutation();
  const {
    mutate: editLink,
    isLoading: editLoading,
    isError: editError,
  } = useEditSourceLinkMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TSourceLinkChange) => {
    if (paramsForm) {
      editLink({ ...values, id: paramsForm.id });
      return;
    }
    addLink({ ...values, id: Number(id) });
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Link Form"
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
      </Form>
    </GlobalDrawer>
  );
};

export { LinksForm };
