export type TBotTicketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  course_title: string;
  course_id: number;
  created_at: string;
  updated_at: string;
};
export type TBotTicketChange = {
  id: number;
  name: string;
  price: number;
  course_id: number;
};
