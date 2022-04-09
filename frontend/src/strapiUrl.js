function getStrapiUrl() {
  return import.meta.env.STRAPI_URL ?? process.env.PROD_STRAPI_URL;
}

export default getStrapiUrl;
