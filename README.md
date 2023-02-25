# eslint-config
This is a monorepo repository for packages of eslint configurations.

## install

add `.npmrc` in your projects (For install from Github Packages)
```
@iemong:registry="https://npm.pkg.github.com"
//npm.pkg.github.com/:_authToken=gh...
```

### eslint-config-typescript

`eslint-config-typescript` is a config for TypeScript projects.

#### npm
``` 
npm install @iemong/eslint-config-typescript
```

#### yarn
```
yarn add @iemong/eslint-config-typescript
```

#### pnpm
```
pnpm add @iemong/eslint-config-typescript
```

### eslint-config-next

`eslint-config-next` is a config for Next.js + TypeScript projects. This config includes `eslint-config-typescript`. So use this config only when setup Next.js projects.

#### npm
``` 
npm install @iemong/eslint-config-next
```

#### yarn
```
yarn add @iemong/eslint-config-next
```

#### pnpm
```
pnpm add @iemong/eslint-config-next
```

## How to use

insert this config to extends in `.eslintrc` or `.eslintrc.json` or `.eslintrc.js`

### TypeScript Project
```
{
  "extends": [
    /* some extends */
    "@iemong/eslint-config-typescript"
  ]
}

```

### Next.js Project
```
{
  "extends": [
    /* some extends */
    "@iemong/eslint-config-next"
  ]
}

```
