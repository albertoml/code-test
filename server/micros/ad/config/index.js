export const config = {
  environment: process.env.ENV || 'dev',
  server: {
    port: process.env.PORT || 4001
  },
  mongo: {
    url: process.env.DB_URL
  },
  auth: {
    url: process.env.AUTH_URL
  }
};