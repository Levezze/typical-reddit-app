import { Subreddit } from "./api";

export interface SubredditsState {
  selected: Subreddit[];
  subredditsFull: boolean;
  firstLogin: boolean;
};
