import { promises as fs } from 'fs';
import { pathToFileURL } from 'url';
import { loadDefinition } from './utils.js';

import swaggerJsdoc from 'swagger-jsdoc';
//custom CLI for swaggerJSdoc because update changed swaggerjsdoc command
const args = process.argv.slice(2);

const definitionUrl = pathToFileURL(
  args.splice(
    args.findIndex((i) => i === '--definition'),
    2
  )[1] // Definition file is always only one.
);

// Because "Parsing error: Cannot use keyword 'await' outside an async function"
(async () => {

  const swaggerDefinition = await loadDefinition(definitionUrl.href);

  
  const apis = args;
  
  // Use the library
  const spec = await swaggerJsdoc({ swaggerDefinition, apis });

  // Save specification place and format
  await fs.writeFile('swagger.json', JSON.stringify(spec, null, 2));

  console.log('Specification has been created successfully!');
})();