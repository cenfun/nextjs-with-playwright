import fs from 'fs';
const dir = '.v8-coverage';
// console.log(dir, fs.existsSync(dir))
if (fs.existsSync(dir)) {
    console.log('clean previous v8 coverage dir ...');
    fs.rmSync(dir, {
        recursive: true,
        force: true
    });
}
