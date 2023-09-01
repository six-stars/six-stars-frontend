import { defineStore } from 'pinia';
import { api, base, axios } from 'src/boot/axios';
import jwtDecode from 'jwt-decode';

export const useUserStore = defineStore('user', {
  state: () => ({
    user_type: null,
    first_name: null,
    last_name: null,
    email: null,
    token: null,
    user_id: null,
    phone_number: null
  }),
  // persist: true, // Note that we are using a persisted state here
  getters: {
    getUser_type: (state) => state.user_type,
    getFirst_name: (state) => state.first_name,
    getLast_name: (state) => state.last_name,
    getEmail: (state) => state.email,
    getToken: (state) => state.token,
    getUserId: (state) => state.user_id,
    getPhoneNumber: (state) => state.phone_number
  },
  actions: {
    async getSanctumCookie() {
      try {
        await api.get('sanctum/csrf-cookie')
      } catch (error) {
        if (error) throw error
      }
    },

    async login(email, password) {
      try {
        // return await axios.post('/users/login/', { email, password })
        return await api.post('/users/login/', { email, password })
      } catch (error) {
        if (error) throw error
      }
    },

    async fetchUser() {
      try {
        return await api.get('api/user')
      } catch (error) {
        if (error) throw error
      }
    },

    setUser(payload) {
      if(payload.user_type) this.user_type = payload.user_type;
      if(payload.first_name) this.first_name = payload.first_name;
      if(payload.last_name) this.last_name = payload.last_name;
      if(payload.email) this.email = payload.email;
      if(payload.token) this.token = payload.token;
      if(payload.user_id) this.user_id = payload.user_id;
      if (payload.phone_number) this.phone_number = payload.phone_number;
    },

    clearUser(){
      this.user_type = null,
      this.first_name = null,
      this.last_name = null,
      this.email = null,
      this.token = null,
      this.user_id = null,
      this.phone_number = null
    },

    checkToken() {
      // if (!this.token) {
        // const decodedToken = JSON.parse(atob(this.token.split('.')[1]));
        // const expirationTime = decodedToken.exp * 1000;
        // return Date.now() > expirationTime;
      const decodedToken = jwtDecode(this.token);
      const expirationTime = decodedToken.exp * 1000;
      return Date.now() > expirationTime;
        // this.logout()
      // }
    },

    logout() {
      // Clear token and redirect to login page
      // router.push('/')
      this.token = null,
      this.user_type = null,
      this.first_name = null,
      this.last_name = null,
      this.email = null,
      this.token = null,
      this.user_id = null,
      this.phone_number = null
      // clearUser()
    },
  },
  persist: true,
});
// function isTokenExpired(token) {
//   const decodedToken = JSON.parse(atob(token.split('.')[1]));
//   const expirationTime = decodedToken.exp * 1000;
//   return Date.now() > expirationTime;
// }
