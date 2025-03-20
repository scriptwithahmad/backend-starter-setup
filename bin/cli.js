#!/usr/bin/env node
const setupBackend = require('../index');
const targetDir = process.argv[2] || process.cwd();

setupBackend(targetDir);