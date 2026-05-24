const { renameSync, rmSync, existsSync } = require('fs');
const { spawn } = require('child_process');

let tempDir = null;

if (existsSync('.next')) {
  tempDir = `.next-old-${Date.now()}`;
  console.log(`Atomically renaming .next to ${tempDir} to avoid OneDrive lockouts...`);
  try {
    renameSync('.next', tempDir);
  } catch (err) {
    console.warn('Could not rename .next, falling back to direct clean:', err.message);
    try {
      rmSync('.next', { recursive: true, force: true });
    } catch (rmErr) {
      console.error('Direct clean failed:', rmErr.message);
    }
  }
}

console.log('Starting next dev...');
const nextDev = spawn('npx', ['next', 'dev'], { stdio: 'inherit', shell: true });
nextDev.on('close', (code) => {
  if (tempDir && existsSync(tempDir)) {
    console.log('Cleaning old build files after dev completion...');
    try {
      rmSync(tempDir, { recursive: true, force: true });
      console.log('Old build files cleaned successfully.');
    } catch (err) {
      console.warn('Could not clean old build files:', err.message);
    }
  }
  process.exit(code);
});
