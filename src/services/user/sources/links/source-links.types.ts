export type TSourceLinkItem = {
  id: number;
  title: string;
  url: string;
  price: number;
  qr_code: string;
  created_at: string;
  updated_at: string;
};
export type TSourceLinkChange = {
  id?: number;
  title: string;
  price: number;
};
