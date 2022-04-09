function getStrapiUrl() {
  return import.meta.env.STRAPI_URL ?? process.env.STRAPI_URL;
}

export default getStrapiUrl;
