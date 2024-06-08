import { Form, Input } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalDrawer } from 'src/components/shareds';
import { useCreateLeadCommentMutation } from 'src/services/user';
import { TLeadCommentChange } from 'src/services/user/leads/comments/lead-comments.types';
import { formMessage } from 'src/utils';

const LeadCommentsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const {
    mutate: addLeadComment,
    isLoading: addLoading,
    isError: addError,
  } = useCreateLeadCommentMutation();

  const onFinish = (values: TLeadCommentChange) => addLeadComment({ ...values, id: Number(id) });

  return (
    <GlobalDrawer form={form} isLoading={addLoading} isError={addError}>
      <Form
        name="Lead Comment Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="text"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { LeadCommentsForm };
