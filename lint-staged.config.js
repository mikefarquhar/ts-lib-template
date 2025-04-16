export default {
  "**/*.js": (files) => [
    `biome check --write --no-errors-on-unmatched ${files.join(" ")}`,
  ],
  "**/*.ts": (files) => [
    "tsc -p ./tsconfig.json --noEmit",
    `biome check --write --no-errors-on-unmatched ${files.join(" ")}`,
  ],
  "**/!(*.js|*.ts)": (files) => [
    `biome check --write --no-errors-on-unmatched --files-ignore-unknown true ${files.join(" ")}`,
  ],
};
