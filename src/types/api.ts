export interface ResponseData {
  data: {
    children: Array<{
      data: {
        display_name: string;
        title: string;
        subscribers?: number | undefined;
        public_description?: string;
        icon_img?: string | undefined;
        id: string;
      }
    }>
  }
};

export interface Subreddit {
  name: string;
  title: string;
  subscribers: number;
  description: string;
  icon_img: string | undefined;
  id: string;
};

export interface Search {
  searchValue: string;
  subredditsResults: Subreddit[];
  showPopular: boolean;
}
