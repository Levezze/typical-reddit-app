import { Subreddit } from '../../../types/api'

type Props = {
  subreddit: Subreddit;
}

export const SubredditUnit = (props: Props) => {
  const subreddit = props.subreddit;

  return (
    <li>
      <img src={subreddit.icon_img} />
      <h3>
        {subreddit.name}
      </h3>
      <p>
        Subscribers: {subreddit.subscribers}
      </p>
      <p>
        Description: {subreddit.description}
      </p>
    </li>
  )
};