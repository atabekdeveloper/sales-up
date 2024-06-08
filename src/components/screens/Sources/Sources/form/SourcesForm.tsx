import { Form, Input, Select } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import {
  useCreateSourceMutation,
  useEditSourceMutation,
  useGetSourceCategoriesQuery,
} from 'src/services/user';
import { TSourceChange } from 'src/services/user/sources/sources.types';
import { useFormStorageStore } from 'src/store';
import { formMessage } from 'src/utils';

const SourcesForm: React.FC = () => {
  const [form] = Form.useForm();

  const { data: categories } = useGetSourceCategoriesQuery();
  const { mutate: addSource, isLoading: addLoading, isError: addError } = useCreateSourceMutation();
  const {
    mutate: editSource,
    isLoading: editLoading,
    isError: editError,
  } = useEditSourceMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TSourceChange) => {
    if (paramsForm) {
      editSource({ ...values, id: paramsForm.id });
      return;
    }
    addSource(values);
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({ ...paramsForm, source_category_id: paramsForm.source_category.id });
    }
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
      <Form
        name="Sources Form"
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
          name="source_category_id"
          label="Категория"
          rules={[{ required: true, message: formMessage('Категория') }]}
        >
          <Select options={categories?.data.map(({ id, name }) => ({ value: id, label: name }))} />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { SourcesForm };
