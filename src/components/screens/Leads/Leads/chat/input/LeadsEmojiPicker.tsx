import React from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

const LeadsEmojiPicker: React.FC<EmojiPickerProps> = ({ onChange }) => (
  <Picker
    emojiSize={18}
    theme="light"
    data={data}
    maxFrequentRows={1}
    onEmojiSelect={(emoji: any) => onChange(emoji.native)}
  />
);

export { LeadsEmojiPicker };
