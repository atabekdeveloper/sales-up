import { Form, Input, Select } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { useCreateBotPaymentCardMutation, useGetBotPaymentCardTypesQuery } from 'src/services/user';
import { TBotPaymentCardChange } from 'src/services/user/bots/payment-cards/bot-payment-cards.types';
import { useFormStorageStore } from 'src/store';
import { formMessage, handleNumericInputKeyDown } from 'src/utils';

const BotPaymentCardsForm: React.FC = () => {
  const [form] = Form.useForm();

  const {
    mutate: addTicket,
    isLoading: addLoading,
    isError: addError,
  } = useCreateBotPaymentCardMutation();
  const { data: paymentCardTypes } = useGetBotPaymentCardTypesQuery();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TBotPaymentCardChange) => addTicket(values);

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading} isError={addError}>
      <Form
        name="Bot Payment Card Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="holder_name"
          label="Владелец"
          rules={[{ required: true, message: formMessage('Владелец') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="number"
          label="Номер"
          rules={[{ required: true, message: formMessage('Номер') }]}
        >
          <Input onKeyDown={handleNumericInputKeyDown} />
        </Form.Item>
        <Form.Item
          name="payment_card_type_id"
          label="Карта"
          rules={[{ required: true, message: formMessage('Карта') }]}
        >
          <Select
            options={paymentCardTypes?.data.map(({ id, name }) => ({ value: id, label: name }))}
          />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { BotPaymentCardsForm };
