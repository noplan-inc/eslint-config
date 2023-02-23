# eslint-config-typescript

## install

.npmrcを追加する。(Github Packagesからインストールするため)
```
@iemong:registry="https://npm.pkg.github.com"
//npm.pkg.github.com/:_authToken=gh...
```

### npm
``` 
npm install @iemong/eslint-config-typescript
```

### yarn
```
yarn add @iemong/eslint-config-typescript
```

### pnpm
```
pnpm add @iemong/eslint-config-typescript
```

## How to use

insert this config to extends in `.eslintrc` or `.eslintrc.json` or `.eslintrc.js`

```
{
  "extends": [
    /* some extends */
    "@iemong/eslint-config-typescript"
  ]
}

```
