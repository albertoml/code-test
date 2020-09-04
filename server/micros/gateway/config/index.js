export const config = {
  environment: process.env.ENV || 'dev',
  sleep: process.env.SLEEP_LENGTH,
  server: {
    port: process.env.PORT || 4000
  },
  micros: {
    auth: process.env.AUTH_MICRO,
    ad: process.env.AD_MICRO
  }
};

