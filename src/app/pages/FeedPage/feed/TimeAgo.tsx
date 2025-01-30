import React from 'react'

interface TimeAgoProps {
  createdTime: number;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ createdTime }) => {
  const now = Math.floor(Date.now() / 1000);
  const timeDiff = now - createdTime;
  const hoursAgo = Math.round(timeDiff / 3600);

  return <span>{hoursAgo}</span>
}

export default TimeAgo;