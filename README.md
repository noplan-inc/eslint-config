# eslint-config
This is a monorepo repository for packages of eslint configurations.

## install

add `.npmrc` in your projects (For install from Github Packages)
```
@noplan-inc:registry="https://npm.pkg.github.com"
//npm.pkg.github.com/:_authToken=gh...
```

### eslint-config-typescript

`eslint-config-typescript` is a config for TypeScript projects.

#### npm
``` 
npm install @noplan-inc/eslint-config-typescript
```

#### yarn
```
yarn add @noplan-inc/eslint-config-typescript
```

#### pnpm
```
pnpm add @noplan-inc/eslint-config-typescript
```

### eslint-config-next

`eslint-config-next` is a config for Next.js + TypeScript projects. This config includes `eslint-config-typescript`. So use this config only when setup Next.js projects.

#### npm
``` 
npm install @noplan-inc/eslint-config-next
```

#### yarn
```
yarn add @noplan-inc/eslint-config-next
```

#### pnpm
```
pnpm add @noplan-inc/eslint-config-next
```

## How to use

insert the installed config to extends in `.eslintrc` or `.eslintrc.json` or `.eslintrc.js` and set parserOptinos.project for typescript-eslint.

### TypeScript Project
```
{
  parserOptions: {
    /* some parser options */
    project: './tsconfig.json',
  },
  extends: [
    /* some extends */
    "@noplan-inc/eslint-config-typescript"
  ]
}

```

### Next.js Project
```
{
  parserOptions: {
    /* some parser options */
    project: './tsconfig.json',
  },
  extends: [
    /* some extends */
    "@noplan-inc/eslint-config-next"
  ]
}

```

## customize

1. edit `packages/**/index.js` to custom eslint config. 
2. run `pnpm changeset` (create a changeset)
3. run `pnpm changeset version` (update package versions)
4. push changes to main branch.
5. run GitHub Workflow to publish their npm package as GitHub Packages
