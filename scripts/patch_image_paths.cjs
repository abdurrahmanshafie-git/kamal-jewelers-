const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'src');
const pathMapping = {
  '/src/assets/images/hero.webp': 'hero',
  '/src/assets/images/bridal.webp': 'bridal',
  '/src/assets/images/ring.webp': 'ring',
  '/src/assets/images/showroom.webp': 'showroom',
  '/src/assets/images/craftsmanship.webp': 'craftsmanship',
  '/src/assets/images/logo.webp': 'logo',
  '/src/assets/images/watermark.webp': 'watermark',
  '/src/assets/images/wedding_bands.webp': 'weddingBands',
  '/src/assets/images/gemstone.webp': 'gemstone',
  '/src/assets/images/gold_smelt.webp': 'goldSmelt',
  '/src/assets/images/showroom_lounge.webp': 'showroomLounge',
  '/src/assets/images/showroom_display.webp': 'showroomDisplay',
  '/src/assets/images/bridal_portrait_1.webp': 'bridalPortrait1',
  '/src/assets/images/bridal_portrait_2.webp': 'bridalPortrait2',
  '/src/assets/images/jawrah-logo.svg': 'jawrahLogo',
  '/src/assets/images/jawrah-logo.webp': 'jawrahLogo',
};

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.tsx')) {
      patchFile(fullPath);
    }
  }
}

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const varsUsed = new Set();
  Object.entries(pathMapping).forEach(([src, variable]) => {
    const doubleQuoted = `"${src}"`;
    const singleQuoted = `'${src}'`;
    if (content.includes(doubleQuoted) || content.includes(singleQuoted)) {
      content = content.split(doubleQuoted).join(variable);
      content = content.split(singleQuoted).join(variable);
      varsUsed.add(variable);
    }
  });
  if (content !== original) {
    const importPath = path.dirname(filePath) === root ? './imageAssets' : '../imageAssets';
    const importRegex = new RegExp(`import\\s*\\{([^}]*)\\}\\s*from\\s*['\"]${importPath}['\"];?`);
    const match = content.match(importRegex);
    if (match) {
      const existing = match[1].split(',').map(x => x.trim()).filter(Boolean);
      const combined = Array.from(new Set([...existing, ...varsUsed])).sort();
      content = content.replace(importRegex, `import { ${combined.join(', ')} } from '${importPath}';`);
    } else {
      const importStatement = `import { ${Array.from(varsUsed).sort().join(', ')} } from '${importPath}';`;
      const lines = content.split('\n');
      let insertIndex = lines.findIndex(line => !line.startsWith('import '));
      if (insertIndex === -1) insertIndex = lines.length;
      lines.splice(insertIndex, 0, importStatement);
      content = lines.join('\n');
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched', filePath);
  }
}

walk(root);
