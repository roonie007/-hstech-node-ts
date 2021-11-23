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
  "name": "YOUR_PROJECT_NAME",
  "version": "1.0.0",
  "main": "src/main.ts",
  // Load eslint config
  "eslintConfig": {
    "extends": "./node_modules/@hstech/node-ts-dev/.eslintrc"
  },
  // load prettier config
  "prettier": "./node_modules/@hstech/node-ts-dev/.prettierrc.json",
  "scripts": {
    // Use the nodemon
    "serve": "nodemon --config ./node_modules/@hstech/node-ts-dev/nodemon"
  },
  "devDependencies": {
    "@hstech/node-ts-dev": "~1.0.0"
  }
}
```

### tsconfig.ts

```jsonc
//
{
  "extends": "@hstech/node-ts-dev"
}
```

## FAQ

### PNPM

If you are using **pnpm** don't forget to create a `.npmrc` file with the following configuration

```
public-hoist-pattern[]=eslint
public-hoist-pattern[]=jest
public-hoist-pattern[]=ts-node
public-hoist-pattern[]=nodemon
```

Otherwise your runtime won't see the needed executables to work properly [See More](https://pnpm.io/npmrc#public-hoist-pattern)

## License

MIT
