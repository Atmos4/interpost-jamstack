module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        post: {
          field: "slug",
          references: "title",
        },
        category: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  // ...
});
