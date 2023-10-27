export const API = {
  mainPage: {
    getBooks: process.env.NEXT_PUBLIC_DOMAIN + "/api/books",
  },
  auth: {
    registration: process.env.NEXT_PUBLIC_DOMAIN + "/api/user/registration",
    login: process.env.NEXT_PUBLIC_DOMAIN + "/api/user/login",
  },
};
