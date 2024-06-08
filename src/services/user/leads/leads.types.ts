import { TLeadStatusItem } from './statuses/lead-statuses.types';

export type TLeadItem = {
  id: number;
  telegraph_chat_id: number;
  first_name: string;
  last_name: string;
  phone: string;
  comment: string;
  unread_messages_count: number;
  lead_status: TLeadStatusItem;
  created_at: string;
  updated_at: string;
};
export type TLeadChange = {
  id?: number;
  first_name?: string;
  last_name?: string;
  phone?: string;
};
