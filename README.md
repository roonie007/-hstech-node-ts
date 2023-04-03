# @hstech/node-ts-dev

**FORKED FROM `https://github.com/jsynowiec/node-typescript-boilerplate`**

This packages aims to hold all needed **development dependencies** files and packages for a Typescript/NodeJS based project

## Usage

### Install

**YARN**

```bash
yarn add --dev @hstech/node-ts-dev
```

**PNPM**

```bash
pnpm install -D @hstech/node-ts-dev
```

**NPM**

```bash
npm install -D @hstech/node-ts-dev
```

### Package.json

You package.json should look like this

```jsonc
{
  // Load eslint config
  "eslintConfig": {
    "extends": "./node_modules/@hstech/node-ts-dev/.eslintrc"
  },

  // load prettier config
  "prettier": "./node_modules/@hstech/node-ts-dev/.prettierrc.json",

  // Use nodemon
  "scripts": {
    "dev": "nodemon --config ./node_modules/@hstech/node-ts-dev/nodemon.json"
  },

  // Or just run a file
  "scripts": {
    "dev": "ts-node --transpile-only -r tsconfig-paths/register -- ./src/main.ts"
  },

  // @hstech/node-ts-dev MUST BE installed as a dev dependency
  "devDependencies": {
    "@hstech/node-ts-dev": "^1.0.0"
  }
}
```

### tsconfig.json

Create a `tsconfig.json` file in your project root and it should have at least this configuration

```jsonc
{
  "extends": "@hstech/node-ts-dev",
  "include": ["src/**/*", "__tests__/**/*"],
  "exclude": ["node_modules"]
}
```

## FAQ

### PNPM

If you are using **pnpm** don't forget to create a `.npmrc` file with the following configuration

```
public-hoist-pattern[]=eslint
public-hoist-pattern[]=eslint-plugin*
public-hoist-pattern[]=@typescript-eslint*
public-hoist-pattern[]=jest
public-hoist-pattern[]=ts-node
public-hoist-pattern[]=nodemon
public-hoist-pattern[]=@types/*
public-hoist-pattern[]=tslib
```

Otherwise your runtime won't see the needed executables to work properly [See More](https://pnpm.io/npmrc#public-hoist-pattern)

## License

MIT
