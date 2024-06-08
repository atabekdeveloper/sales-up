import React from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';

import s from './input.module.scss';

const UiPhoneIMaskInput: React.FC<IMaskInputProps<any>> = (_props) => (
  <div className={s.phone}>
    <span>+998</span>
    <IMaskInput
      {...(_props as any)}
      mask="00 000 00 00"
      radix="."
      definitions={{
        '#': /[0-9]/,
      }}
    />
  </div>
);

export { UiPhoneIMaskInput };
