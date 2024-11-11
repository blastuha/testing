import { login, logout } from "./methods/auth";

export default {
  plugins: ['~/plugins/auth.js'],
  strategies: {
    local: {
      token: {
        property: 'data.token',
        global: true,
        required: true,
        type: 'Bearer',
        maxAge: 86400 * 365
      },
      endpoints: {
        login: { url: login, method: 'post' },
        logout: { url: logout, method: 'delete' },
        user: false
      }
    }
  }
};
