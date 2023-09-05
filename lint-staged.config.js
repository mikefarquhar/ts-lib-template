export default {
  "**/*.js": (files) => [
    `eslint --fix ${files.join(" ")}`,
    `prettier --write --ignore-unknown ${files.join(" ")}`,
  ],
  "**/*.ts": (files) => [
    `tsc -p ./tsconfig.json --noEmit`,
    `eslint --fix ${files.join(" ")}`,
    `prettier --write --ignore-unknown ${files.join(" ")}`,
  ],
  "**/!(*.js|*.ts)": (files) => [
    `prettier --write --ignore-unknown ${files.join(" ")}`,
  ],
};
