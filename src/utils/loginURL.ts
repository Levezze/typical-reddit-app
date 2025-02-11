function generateRandomString(length = 16) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

export const generateLoginURL = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const TYPE = "code";
  const RANDOM_STRING = generateRandomString();
  const DURATION = "temporary";
  const SCOPE_STRING = "identity history read vote";
  const URI = import.meta.env.VITE_REDIRECT_URI;
  
  localStorage.setItem('oauth_state', RANDOM_STRING);
  
  const URL = `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`
  return URL;
};