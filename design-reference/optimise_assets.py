from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parent.parent
originals=root/'design-reference'/'original-assets';originals.mkdir(exist_ok=True)
files=list((root/'public/assets/figma').glob('*.png'))
for p in files:
 im=Image.open(p);im.thumbnail((2400,2400),Image.Resampling.LANCZOS);im.save(p.with_suffix('.webp'),'WEBP',quality=94,method=6);p.rename(originals/p.name)
for p in (root/'src').rglob('*'):
 if p.suffix in ['.tsx','.css','.ts']:
  s=p.read_text();s=s.replace('.png','.webp');p.write_text(s)
print('Converted',len(files),'local raster assets to WebP; source files retained in design-reference/original-assets.')
