# npm-library-test

ref. https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

## このパッケージをローカルで使う人

1. Settings > Developer settings > Personal access tokensで `read:packages` 権限の personal access token (classic) を取得する
2. .zshrc などにトークンの値を環境変数 NPM_TOKEN として export する記述を追加し、.npmrc に読み込ませる

.zshrc の例

```
export NPM_TOKEN=<YOUR_GITHUB_PAT>
```

## このパッケージを GitHub Actions で使う場合

`actions/setup-node` のステップと `pnpm install` のステップで環境変数 `NPM_TOKEN` に `${{ secrets.GITHUB_TOKEN }}` を指定する
