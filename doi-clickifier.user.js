// ==UserScript==
// @name         DOI Linkifier for Scopus-like Publications
// @namespace    https://github.com/your-username/doi-linkifier-publications
// @version      1.4
// @description  Make DOI text clickable (https://doi.org/...) on publication pages.
// @match        https://www.scopus.com/pages/publications/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const doiRegex = /(10\.\d{4,9}\/[^\s"'<>{}\)\]]+)/i;

  function extractDOI(text) {
    if (!text) return null;
    let s = text.replace(/^\s*doi[:\s]*/i, '').trim();
    s = s.replace(/[.,;:)\]\}]+$/g, '').replace(/^[\(\[\{]+/g, '');
    const m = s.match(doiRegex);
    return m ? m[1] : null;
  }

  function replaceWithLink(span) {
    const text = span.textContent.trim();
    const doi = extractDOI(text);
    if (!doi) return;

    // already linked?
    if (span.closest('a[href*="doi.org"]')) return;

    const a = document.createElement('a');
    a.href = 'https://doi.org/' + doi;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = text;
    a.style.textDecoration = 'underline';
    a.style.color = 'inherit';
    a.dataset.doiLinked = 'true';

    span.replaceWith(a);
  }

  function scan(root = document) {
    const spans = root.querySelectorAll('[data-testid="publication-doi"]:not([data-doiLinked])');
    for (const span of spans) replaceWithLink(span);
  }

  // Run once, then watch for updates
  scan();

  const obs = new MutationObserver(muts => {
    for (const m of muts) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1) scan(node);
      }
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });
})();
