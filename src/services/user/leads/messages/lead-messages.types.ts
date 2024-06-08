export type TLeadMessageItem = {
  id: string;
  text: string;
  is_answer: boolean;
  file_url: string;
  owner_name: string;
  created_at: string;
  updated_at: string;
};
export type TLeadMessageChange = {
  id?: number;
  text: string;
  file: string;
};
