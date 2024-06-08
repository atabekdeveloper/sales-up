import { TGetParamItem } from 'src/services/index.types';

export type TLeadCommentItem = {
  id: number;
  text: string;
  lead_id: number;
  created_by: TGetParamItem;
  created_at: string;
};
export type TLeadCommentChange = {
  id: number;
  text: string;
};
