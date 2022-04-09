function getStrapiUrl() {
  // Silly workaround
  return import.meta.env.STRAPI_URL ?? process.env.STRAPI_URL;
}

export default getStrapiUrl;
