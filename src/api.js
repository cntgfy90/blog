import axios from 'axios';
import Butter from 'buttercms';
const butter = Butter('279b16d7d590f5cf96218c04407a5760ccf53e2d');

export default {
  user: {
    login: (credentials) =>
      axios.post('/api/auth', {credentials}).then(res => res.data.user),
    signup: (user) =>
      axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: (token) =>
      axios.post('/api/auth/confirmation', { token }).then(res => res.data.user),
    resetPasswordRequest: (email) =>
      axios.post('/api/auth/reset_password_request', { email }),
    validateToken: (token) =>
      axios.post('/api/auth/validate_token', { token }),
    resetPassword: (data) =>
      axios.post('/api/auth/reset_password', { data })
  },
  articles: {
    fetch: async (page, page_size) => {
      try {
        const articles = await butter.post.list({page, page_size});
        return articles;
      } catch(err) {
        return err;
      }
    }
  }
};
