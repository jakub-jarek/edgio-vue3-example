# Deploy Vue 3 example to Edgio

A demo deployment of Vue 3 app to Edgio.

## Demo

https://edgio-docs-edgio-vue3-example-default.edgio-limelight.link

## Try It Now

[![Deploy with Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/edgio-docs/edgio-vue3-example)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/edgio-docs/edgio-vue3-example.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm install
```

### Run the Vue 3 app locally on Edgio

Run the Vue 3 app with the command:

```bash
npm run edgio:dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Edgio

You can do a production build of your app and test it locally using:

```bash
npm run edgio:build && npm run edgio:production
```

Setting --production runs your app exactly as it will be uploaded to the Edgio cloud using serverless-offline.

## Deploying to Edgio

Deploying requires an account on Edgio. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Edgio by running the following in the root folder of your project:

```bash
npm run edgio:deploy
```

See [deploying](https://docs.edg.io/guides/deploying) for more information.
