export interface IBlog {
  id: string;
  title: string;
  slug: string;
  content: string;
  lang: string;
  parent_id: string;
  shares: number;
  views: number;
  created_at: string;
  updated_at: string;
}
