import React from 'react';

import { BotPaymentCardsForm } from './form/BotPaymentCardsForm';
import { BotPaymentCardsTable } from './table/BotPaymentCardsTable';

const BotPaymentCards: React.FC = () => (
  <>
    <BotPaymentCardsForm />
    <BotPaymentCardsTable />
  </>
);

export default BotPaymentCards;
