function generateRandomString(length = 16) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

const randomState = generateRandomString();
localStorage.setItem('oauth_state', randomState); // Store it for later verification

export const generateLoginURL = () => {
  const CLIENT_ID = "yMSHBIADe0dj6H0d7stK5g";
  const TYPE = "code";
  const RANDOM_STRING = localStorage.getItem('oauth_state');
  const DURATION = "temporary";
  const SCOPE_STRING = "read";
  const URI = "http://localhost:5173/callback";

  const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`
  return URL;
};