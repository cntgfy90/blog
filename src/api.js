import axios from 'axios';
import Butter from 'buttercms';
const butter = Butter('279b16d7d590f5cf96218c04407a5760ccf53e2d');

export default {
  user: {
    login: async (credentials) => {
      try {
        const user = await axios.post('/auth/api', {credentials});
        return user;
      } catch(err) {
        return err;
      }
    }
  },
  articles: {
    fetch: async (page, page_size) => {
      try {
        const articles = await  butter.post.list({page, page_size});
        return articles;
      } catch(err) {
        return err;
      }
    }
  }
};
