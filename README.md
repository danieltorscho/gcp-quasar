# GCP Quasar (gcp-quasar)

Google Cloud Platform Quasar SSR with Firebase

## Setup the project

### 1. Initialize firebase hosting
After having installed all Firebase dependencies on your machine (firebase-tool), call the following command to initialize a firebase project:
```bash
firebase init hosting
```

### 2. Connect firebase with your github repo
If your project is not already using a git, initialize a git repository with `git init`, add all file changes `git add .` and commit everything `git commit`. Then initialize a github repo with firebase command:

```bash
firebase init hosting:github
```

It will asks you for setting up the project, use all by default.


## Development environment

If you have no `.env` file at the moment, create a new copy of `.env` file from `.env.example` and fill it out afterwards:
```bash
cp .env.example .env
```
Then edit the `.env` file with correct values.

### To setup and run on your local machine, execute following commands:

```bash
yarn install
yarn dev:ssr
yarn build:ssr
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
