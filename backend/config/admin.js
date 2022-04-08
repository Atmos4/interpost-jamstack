module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5bd9767e5b78476756fd79e8581215e7'),
  },
});
