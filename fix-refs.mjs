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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // replace bad specific names
  content = content.replace(/luxury_hero_\d+\.png/g, 'hero.webp');
  content = content.replace(/bridal_set_\d+\.png/g, 'bridal.webp');
  content = content.replace(/diamond_ring_\d+\.png/g, 'ring.webp');
  content = content.replace(/showroom_interior_\d+\.png/g, 'showroom.webp');
  content = content.replace(/craftsmanship_\d+\.png/g, 'craftsmanship.webp');
  
  // replace general png to webp for assets/images
  content = content.replace(/\/assets\/images\/([a-zA-Z0-9_\-]+)\.png/g, '/assets/images/$1.webp');

  fs.writeFileSync(file, content, 'utf8');
});
