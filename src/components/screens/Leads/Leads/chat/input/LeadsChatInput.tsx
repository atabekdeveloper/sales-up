/* eslint-disable object-curly-newline */
import { Avatar, Badge, Popover, Spin } from 'antd';
import React from 'react';
import arrow from 'src/assets/images/arrow.png';
import smile from 'src/assets/images/smile.png';
import upload from 'src/assets/images/upload.png';
import { useCreateLeadMessageMutation } from 'src/services/user';
import { useNumericStringVault, useToggleStore } from 'src/store';

import { LeadsEmojiPicker } from './LeadsEmojiPicker';

import s from './input.module.scss';

const LeadsChatInput: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [uploadFile, setUploadFile] = React.useState<string>('');

  const isChatModal = useToggleStore((state) => state.isChatModal);
  const id = useNumericStringVault((state) => state.numericStringVault);

  const { mutate: addMessage, isSuccess, isLoading } = useCreateLeadMessageMutation();

  const onFinish = (e: any) => {
    e.preventDefault();
    addMessage({ text: e.target[1].value, file: uploadFile, id: Number(id) });
  };
  const onChangeEmojiValue = (value: string) => setInputValue((v) => v + value);

  const onSendMessage = () => {
    addMessage({ text: inputValue, file: uploadFile, id: Number(id) });
  };

  const onChangeUpload = (e: any) => setUploadFile(e.target.files[0]);

  React.useEffect(() => {
    setInputValue('');
    setUploadFile('');
  }, [isChatModal, isSuccess]);
  return (
    <form name="Chat Form" onSubmit={onFinish} className={s.lead_form}>
      <Badge count={uploadFile ? 1 : 0}>
        <span className={s.upload_item}>
          <Avatar
            src={<img className={s.img} src={upload} alt="upload" />}
            size={32}
            shape="square"
          />
          <input onChange={onChangeUpload} accept=".jpg, .jpeg, .png" type="file" multiple />
        </span>
      </Badge>
      <span className={s.emoji_item}>
        <Popover content={<LeadsEmojiPicker onChange={onChangeEmojiValue} />} trigger="click">
          <Avatar src={<img className={s.img} src={smile} alt="smile" />} size={32} />
        </Popover>
      </span>
      <div className={s.lead__chat_input}>
        <span className={s.arrow_item}>
          {isLoading && <Spin />}
          {!isLoading && (
            <Avatar
              src={<img className={s.img} src={arrow} alt="arrow" />}
              size={32}
              onClick={onSendMessage}
            />
          )}
        </span>
        <input
          value={inputValue}
          name="chat"
          type="text"
          placeholder="Aa"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export { LeadsChatInput };
