# [Interpost](https://www.interpost.fr) v2

This is my attempt at migrating a pure PHP blog into a JAMStack monorepo, using Strapi as CMS and Astro as SSG. It was a lot of fun to do.

Stack:

- [Strapi](https://strapi.io/) (CMS)
- [Astro](https://astro.build/) (SSG)
- [Pico](https://picocss.com/) (CSS)
- [GraphQL](https://graphql.org/) (API)

_If you feel lost at some point, the docs are very readable imo_.

## How to build

This repository uses `yarn workspaces` for easy setup.

- Clone the repo
- Run `yarn` anyywhere (yarn workspaces magic 🎉).
- Run `yarn dev`, or `yarn dev:backend` and `yarn dev:frontend` in two terminals.

The backend can then be accessed at http://localhost:1337 and the frontend at http://localhost:3000. Have fun!

## Disclaimers

Astro is very new and still in beta, so there is a lot of improvements about things that aren't supported yet, things that I did wrong and things that I don't know.

Besides, a lot of improvement can be done regarding typings. Adding GraphQL typings for example would be a reasonable thing to do for scalability, right now things are a bit wack 😅

## Recommanded VSCode plugins

- Astro official plugin
- Svelte official plugin
