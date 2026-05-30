from pathlib import Path
import re

root = Path('src')
path_mapping = {
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
}

changed_files = []
for path in sorted(root.rglob('*.tsx')):
    text = path.read_text(encoding='utf-8')
    original = text
    vars_used = set()
    for src, var in path_mapping.items():
        if f'"{src}"' in text or f"'{src}'" in text:
            text = text.replace(f'"{src}"', var)
            text = text.replace(f"'{src}'", var)
            vars_used.add(var)
    if text != original:
        import_path = './imageAssets' if path.parent == root else '../imageAssets'
        if vars_used:
            if re.search(rf"from ['\"]{re.escape(import_path)}['\"]", text) is None:
                lines = text.splitlines()
                last_import = -1
                for i, line in enumerate(lines):
                    if line.startswith('import '):
                        last_import = i
                import_line = f"import {{ {', '.join(sorted(vars_used))} }} from '{import_path}';"
                insert_index = last_import + 1
                if insert_index < len(lines):
                    lines.insert(insert_index, import_line)
                else:
                    lines.append(import_line)
                text = '\n'.join(lines)
            else:
                pattern = re.compile(rf"import\s*\{{([^}}]*)\}}\s*from\s*['\"]{re.escape(import_path)}['\"];?")
                def repl(match):
                    existing = [x.strip() for x in match.group(1).split(',') if x.strip()]
                    combined = sorted(set(existing + list(vars_used)))
                    return f"import {{ {', '.join(combined)} }} from '{import_path}';"
                text = pattern.sub(repl, text)
        path.write_text(text, encoding='utf-8')
        changed_files.append(str(path))

print('Changed files:')
for f in changed_files:
    print(f)
