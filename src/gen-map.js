import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const main = async (dir) => {
  const files = await readdir(dir);
  const icons = await Promise.all(
    files
      .filter((file) => file.endsWith(".svg"))
      .map(async (file) => [file, await readFile(resolve(dir, file), "utf8")])
  );

  const json = icons.reduce((acc, [name, content]) => {
    acc[name.replace(/\.svg$/, "")] = content;
    return acc;
  }, {});
  return json;
};

try {
  const result = await main(process.argv[2]);
  console.log(JSON.stringify(result));
} catch (e) {
  console.error(e);
}
