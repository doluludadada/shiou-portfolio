# shiou-portfolio

Ethan Tsai's portfolio, live at https://shiou-portfolio.vercel.app.

- `/` is a VS Code-style page: each project is a Python file you open from the explorer, and each screenshot an image tab.
- `/portfolio`, `/projects` and `/zh/...` show the same work as cards, in English and Traditional Chinese.

## Run it

Needs Node and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
pnpm preview    # serve dist/
```

Vercel builds and deploys `main`.

## Where things are

| You want to change | Edit |
| --- | --- |
| The VS Code page's files, terminal and screenshots | `src/shared/i18n/playground.ts` |
| The VS Code page itself | `src/features/playground/VSCodePlayground.tsx` |
| Card text, English and Chinese | `src/shared/i18n/ui.ts` |
| Which projects the card pages list, their stack and links | `src/features/projects/config.ts` |
| The timeline | `src/features/timeline/config.ts` and the `timeline.*` keys in `ui.ts` |
| Images | `public/screenshots/`, `public/og.png` |

Stack: Astro 5, React 19, Tailwind CSS 4.
