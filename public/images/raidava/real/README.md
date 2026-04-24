# RAIDAVA Documentary Photography

Real farm photographs replace SVG hero cards per domain as the farm comes online.

## Directory structure

One folder per research domain (must match `DOMAIN_FOLDER_MAP` in svg_hero.py):
- `teren/` — land-system posts (regenerative_agriculture + self_sustaining_systems)
- `animale/` — animal husbandry (animal_husbandry_autonomous)
- `plante/` — perennial crops and food forests (perennial_plants_food)
- `bucatarie/` — fermentation and preservation (fermentation_preservation)

`romanian_regulations` domain is intentionally absent — uses SVG permanently.

## Selection rule

For a post with slug `S` and domain_key `D`, if `real/{folder}/` contains photos:
  photos = sorted alphabetically (JPG, JPEG, PNG)
  index = hash(f"{S}|{D}").digest()[2] % len(photos)
  selected = photos[index]

Selection is deterministic — same slug always gets same photo, until the
filename set changes. Adding or removing photos shifts assignments for some
posts; this is acceptable (forward-only, not backfilling past posts).

## Naming

Descriptive filenames (they appear in alt text and image SEO):
- Good: `gat-golas-morning-pasture.jpg`, `chinese-dike-pond-april.jpg`
- Bad: `IMG_0423.jpg`, `photo1.jpg`
