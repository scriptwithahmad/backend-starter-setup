#!/usr/bin/env node
import { setupBackend } from '../index.js';

const targetDir = process.argv[2] || process.cwd();
setupBackend(targetDir);


// #!/usr/bin/env node
// const setupBackend = require('../index');
// const targetDir = process.argv[2] || process.cwd();

// setupBackend(targetDir);

