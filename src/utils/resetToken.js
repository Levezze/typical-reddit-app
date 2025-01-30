const resetToken = () => {
  console.log('Token reset')
  localStorage.removeItem('token');
  localStorage.removeItem('token_expiry');
  localStorage.removeItem('selected_subreddits');
};

resetToken();