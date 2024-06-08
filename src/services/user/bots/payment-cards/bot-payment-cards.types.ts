export type TBotPaymentCardItem = {
  id: number;
  name: string;
  number: bigint;
  holder_name: string;
  payment_card_type_id: number;
  payment_card_type_name: string;
  created_at: string;
  updated_at: string;
};
export type TBotPaymentCardChange = {
  name: string;
  number: bigint;
  holder_name: string;
  payment_card_type_id: number;
};
