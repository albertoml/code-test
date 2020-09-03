export const config = {
  environment: process.env.ENV || 'dev',
  server: {
    port: process.env.PORT || 4002
  },
  mongo: {
    url: process.env.DB_URL
  },
  auth: {
    tokenExpirationSeconds: Number(process.env.TOKEN_EXPIRATION_SECONDS) || 43200,
    issuer: process.env.TOKEN_ISSUER || 'http://auth.3ker.com',
    audience: process.env.TOKEN_AUDIENCE || 'http://aud.stag.3ker.com',
    clientId: process.env.CLIENT_ID,
    signingKid: process.env.SIGNING_KID
  }
};