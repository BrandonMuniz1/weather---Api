import { createRequire } from 'module';
import { extname } from 'path';
import { promises as fs } from 'fs';

/**
 * @param {string} definitionPath path to the swaggerDefinition
 */
export async function loadDefinition(definitionPath) {
  const loadModule = async () => {
    const esmodule = await import(definitionPath);
    return esmodule.default;
  };
  const loadCJS = () => {
    const require = createRequire(import.meta.url);
    return require(definitionPath);
  };
  const loadJson = async () => {
    const fileContents = await fs.readFile(definitionPath);
    return JSON.parse(fileContents);
  };


  const LOADERS = {
    '.js': loadModule,
    '.mjs': loadModule,
    '.cjs': loadCJS,
    '.json': loadJson,
  };

  const loader = LOADERS[extname(definitionPath)];

  if (loader === undefined) {
    throw new Error(
      `Definition file should be any of the following: ${Object.keys(
        LOADERS
      ).join(', ')}`
    );
  }

  const result = await loader();

  return result;
}