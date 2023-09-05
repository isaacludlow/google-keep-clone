This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This project was a first attempt at using react/next.js, prisma, and sqlite.

## Tech Stack

- React/Next.js
- Tailwind
- Prisma
- SQLite

## Deployed on Railway

This app was originally deployed on Vercel. However, due to the serverless nature of Vercel's edge functions, SQLite will not work since there is no serve to host the file. The quick fix was to use Railway to deploy a docker container.
