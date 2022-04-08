module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  app: {
    keys: [env("APP_KEY_1"), env("APP_KEY_1")],
  },
});
