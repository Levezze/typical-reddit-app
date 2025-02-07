export const moveBackground = (
  padding: number, 
  gap: number, 
  liWidth: number, 
  index: number
) => {
  const translateValue = padding + (index) * liWidth + (index * gap);
  console.log('translateValue',translateValue);
  document.documentElement.style.setProperty('--nav-translate-distance', `${translateValue}px`);
};

export const indexFromPage = (page: string) => {
  if (page === 'feed') return 0;
  if (page === 'subreddits') return 1;
  if (page === 'account') return 2;
  if (page === 'contact') return 3;
  return 0;
};