import axios from 'axios';

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
  }
};
