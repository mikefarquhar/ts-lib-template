export default {
  "**/*.js": (files) => [
    `biome lint --apply ${files.join(" ")}`,
    `biome format --write ${files.join(" ")}`,
  ],
  "**/*.ts": (files) => [
    "tsc -p ./tsconfig.json --noEmit",
    `biome lint --apply ${files.join(" ")}`,
    `biome format --write ${files.join(" ")}`,
  ],
  "**/!(*.js|*.ts)": (files) => [`biome format --write ${files.join(" ")}`],
};
