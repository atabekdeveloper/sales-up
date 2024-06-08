import { TGetParamItem } from 'src/services/index.types';

import { TBotCourseItem } from '../bots/courses/bot-courses.types';
import { TBotTicketItem } from '../bots/tickets/bot-tickets.types';
import { TLeadItem } from '../leads/leads.types';

export type TOrderItem = {
  id: number;
  uuid: string;
  course: TBotCourseItem;
  lead: TLeadItem;
  order_status: TGetParamItem;
  tickets: TBotTicketItem[];
  is_paid: boolean;
  paid_by: TGetParamItem;
  is_confirmed: boolean;
  confirmed_by: TGetParamItem;
  amount: number;
  created_at: string;
  updated_at: string;
};
export type TOrderChange = {
  id?: number;
  order_status_id?: number;
  is_paid?: boolean;
  is_confirmed?: boolean;
};
export type TOrderParams = {
  phone?: string;
  uuid?: string;
  is_confirmed?: boolean | null;
  order_status_id?: number;
  is_paid?: boolean | null;
};
