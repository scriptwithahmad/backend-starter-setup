import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function setupBackend(targetDir, databaseType) {
  try {
    // Database type mapping
    const dbFolderMap = {
      'SQL': 'sql',
      'NoSQL (MongoDB)': 'nosql'
    };
    const dbFolderName = dbFolderMap[databaseType];
    
    if (!dbFolderName) {
      throw new Error(`Unsupported database type: ${databaseType}`);
    }

    // Paths to templates
    const sharedTemplates = path.join(__dirname, 'templates/shared');
    const dbSpecificTemplates = path.join(__dirname, 'templates', dbFolderName);

    // Verify templates exist
    if (!fs.existsSync(sharedTemplates) || !fs.existsSync(dbSpecificTemplates)) {
      throw new Error('Template folders not found');
    }

    // Copy shared files first
    fs.cpSync(sharedTemplates, targetDir, { recursive: true });

    // Then copy database-specific files (will overwrite any duplicates)
    fs.cpSync(dbSpecificTemplates, targetDir, { recursive: true, overwrite: true });
    
    console.log(`✅ Successfully created ${databaseType} project with all files at ${targetDir}`);
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}