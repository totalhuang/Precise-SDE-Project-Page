# Precise project page images

Figures with prefix `precise_fig_*` are generated or copied from the repo `figures/` directory (see project root scripts under `figures/*.py`).

**Replace these placeholders** with LaTeX-exported crops when you have the final paper build:

- `precise_table_main_sd35m.png` — `sections/experiments.tex`, main SD3.5-M table
- `precise_table_head_to_head.png` — GenEval / PickScore head-to-head
- `precise_table_flux20.png` — FLUX.2 Klein table
- `precise_table_ablation_schedule_discretization.png` — schedule + discretization ablation

**Method cheatsheet image:** compile `misc/precise_cheatsheet.tex`, then export two PNGs for sharp display on HiDPI screens:

```bash
pdflatex -output-directory=misc misc/precise_cheatsheet.tex
pdftoppm -png -singlefile -r 288 misc/precise_cheatsheet.pdf static/images/precise_fig_cheatsheet
pdftoppm -png -singlefile -r 576 misc/precise_cheatsheet.pdf static/images/precise_fig_cheatsheet@2x
```

`index.html` uses `src` + `srcset` …`@2x.png 2x` so HiDPI screens load the sharper asset.

**Carousel / Bulma:** `static/js/index.js` passes `breakpoints: []` so the plugin never switches to multi-slide mode. The library default breakpoints (640px / 768px) set `slidesToShow` to 2 or 3, which makes `slide count ≤ slidesToShow`, hides prev/next and pagination, and prevents sliding — especially on common laptop widths.

**Social preview:** `precise_banner_og.png` (1200×630) — replace with a designed banner if desired.
