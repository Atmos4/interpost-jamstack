# [Interpost](https://www.interpost.fr) v2 with Strapi and Astro 🚀

JAMStack monorepo, using Strapi as CMS and Astro as SSG.

Tech stack:

- [Strapi](https://strapi.io/) (CMS)
- [Astro](https://astro.build/) (SSG)
- [Pico](https://picocss.com/) (CSS)
- [GraphQL](https://graphql.org/) (API)

## Run the project locally

You need to setup a `.env` file in the `backend` directory. You can take inspiration from `.env.example`.

- Install `yarn`: `npm install --global yarn`

Then either from the root directory:

- `yarn setup` to install all dependencies
- `yarn dev` to start everything

Or in both `backend` and `frontend` directories

- `yarn install`
- `yarn dev`

You also need to setup a `.env` file in the `backend` directory. You can take inspiration from `.env.example`.

The backend can then be accessed at http://localhost:1337 and the frontend at http://localhost:3000. Have fun!
