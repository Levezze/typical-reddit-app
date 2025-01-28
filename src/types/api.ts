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
};

// export interface PostsResponseData {
//   data: {
//     children: Array<{
//       data: {
//         author: string;
//         title: string;
//         permalink: string;
//         subreddit: string;
//         ups: number;
//         thumbnail?: string | undefined;
//         is_video: boolean;
//         media?: {
//           reddit_video?: {
//             fallback_url: string;
//             height: number;
//             width: number;
//           }
//         } | null,
//         preview?: {
//           images?: Array<{
//             source?: {
//               url?: string;
//             }
//           }>
//         } | null,
//         id: string;
//       }
//     }>
//   }
// };

export interface Post {
  author: string;
  title: string;
  permalink: string;
  subreddit: string;
  ups: number;
  thumbnail: string | undefined;
  is_video: boolean;
  media?: {
    reddit_video?: {
      fallback_url: string;
      height: number;
      width: number;
    }
  } | null;
  preview?: {
    images?: Array<{
      source?: {
        url?: string;
      }
    }>
  } | null;
  id: string;
  created_utc: number;
};

export interface PostsResponseData {
  data: {
    children: Array<{
      data: Post;
    }>;
  };
}

export interface Feed {
  limit: number;
  sort: string;
  feedResults: Post[];
  feedColumns: number;
  showMedia: boolean;
};
