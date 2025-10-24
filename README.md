# DOI Linkifier for Publication Pages

A lightweight Tampermonkey userscript that automatically converts plain DOI text (e.g.
`DOI: 10.1016/j.agrformet.2025.110868`) into real clickable links
(`https://doi.org/10.1016/j.agrformet.2025.110868`) on publication listing or detail pages.

This script is designed for use on **publication pages under `https://www.scopus.com/pages/publications/*`**,
but it does **not** use any Scopus trademarks or internal APIs — it only modifies visible DOI text.

---

## ✨ Features

* Detects plain-text DOIs in dynamically rendered publication pages
* Converts them into working clickable `https://doi.org/...` links
* Works even as the page updates (React/Ajax-friendly)
* Lightweight and privacy-friendly (no network requests or analytics)

---

## 🧩 Installation

1. Install [Tampermonkey](https://tampermonkey.net/) or a compatible userscript manager.
2. [Create a new script](https://tampermonkey.net/faq.php?ext=dhdg#Q102).
3. Copy and paste the contents of [`doi-clickifier.user.js`](doi-clickifier.user.js).
4. Save and enable the script.
5. Visit a publication page like:

   ```
   https://www.scopus.com/pages/publications/
   https://www.scopus.com/pages/publications/105017660800?origin=resultslist
   ```

   You’ll see DOIs become clickable.

---

## 🛠 Example

Before:

```html
<span data-testid="publication-doi">DOI: 10.1016/j.agrformet.2025.110868</span>
```

After:

```html
<a href="https://doi.org/10.1016/j.agrformet.2025.110868" target="_blank" rel="noopener noreferrer">
  DOI: 10.1016/j.agrformet.2025.110868
</a>
```

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## ⚠️ Disclaimer

This script is **not affiliated with or endorsed by Scopus or Elsevier**.
It is an independent open-source project intended solely to improve user accessibility
for DOI links on publicly viewable publication pages.
