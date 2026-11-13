# Agent rules for Titip

Read HANDOFF.md first. It holds status, code map and priorities.

1. Single file, no dependencies, no build step, no images. Keep `index.html` under ~80 KB.
2. Old-browser JavaScript only: no arrow functions, `let`/`const`, classes, template strings or spread (target Android 4.4-era browsers).
3. No outside network requests on phones.
4. Accessibility: native controls, labelled inputs, feedback by symbol + words + live region, focus moves to the new heading, works at 320 px, lesson content keeps its `lang` attribute.
5. Honesty: never claim learning gains. Keep TEST.md's checked / predicted / made-up categories separate. Every new number needs a source in RESEARCH.md, cited by ID (P3, N44). Made-up demo data stays labelled.
6. After any logic change, run `selfTest()` (browser console or Node). It must return `ok`. Then update TEST.md's Checked table with date and method.
7. Smallest working change wins. No new abstractions, frameworks, backend, accounts or analytics.
8. Ask before anything irreversible or public: push, deploy, publish.
9. Exception: Titip Go (`site/go/` and `go/server.js`) is the online companion. It may use the network, a small Node server and teacher class codes with a PIN. Never let the offline app (`index.html`) depend on it. Learners never need an account.
