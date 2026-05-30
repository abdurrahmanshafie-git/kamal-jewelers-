import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
const usedImages = new Set();

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match single or double quotes
  let matches = content.match(/assets\/images\/([a-zA-Z0-9_\-]+)\.webp/g);
  if (matches) {
    matches.forEach(m => {
      usedImages.add(path.basename(m));
    });
  }
});

console.log("Used Images:");
console.log(Array.from(usedImages).sort());

const imgDir = path.join(process.cwd(), 'src', 'assets', 'images');
const allImages = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp'));

console.log("\nAll Images:");
console.log(allImages.sort());

const unused = allImages.filter(img => !usedImages.has(img));
console.log("\nUnused Images:");
console.log(unused.sort());

unused.forEach(img => {
    fs.unlinkSync(path.join(imgDir, img));
    console.log(`Deleted ${img}`);
});
