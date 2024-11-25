---
title: "Better TypeScript Errors with VSCode Extension"
blogSlug: "2024-12-01-better-typescript-errors-with-vscode-extension"
publishDate: "22 Dec 2024"
heroImage: "/blog-imgs/2024-12-01-better-typescript-errors-with-vscode-extension.jpg"
ogImage: "/blog-imgs/2024-12-01-better-typescript-errors-with-vscode-extension.jpg"
description: "Make TypeScript errors prettier and human-readable in VSCode."
featured: true
tags:
  - typescript
  - vscode
  - developerTools

draft: true
---

## Pretty TypeScript Errors

<https://marketplace.cursorapi.com/items?itemName=yoavbls.pretty-ts-errors>

> Make TypeScript errors prettier and human-readable in VSCode.

TypeScript errors become messier as the complexity of types increases. At some point, TypeScript will throw on you a shitty heap of parentheses and "...".
This extension will help you understand what's going on. For example, in this relatively simple error:

<img src="https://github.com/yoavbls/pretty-ts-errors/raw/HEAD/assets/this.png" width="340.438px" />&nbsp; &nbsp; <img src="https://github.com/yoavbls/pretty-ts-errors/raw/HEAD/assets/instead-of-that.png" width="350px" />

## Watch this YouTuber (Theo)

<a href="https://www.youtube.com/watch?v=9RM2aErJs-s" target="_blank">
 <img src="https://raw.githubusercontent.com/yoavbls/pretty-ts-errors/assets/assets/mentions/theo-video.png" alt="Watch theo's video" width="600" />
</a>

## Why isn't it trivial

1. TypeScript errors contain types that are not valid in TypeScript.
   Yes, these types include things like `... more ...`, `{ ... }`, etc in an inconsistent manner. Some are also cutting in the middle because they're too long.
2. Types can't be syntax highlighted in code blocks because the part of `type X = ...` is missing, so I needed to create a new TextMate grammar, a superset of TypeScript grammar called `type`.
3. VSCode markdown blocks all styling options, so I had to find hacks to style the error messages. e.g., there isn't an inlined code block on VSCode markdown, so I used a code block inside a codicon icon, which is the only thing that can be inlined. That's why it can't be copied. but it isn't a problem because you can still hover on the error and copy things from the original error pane.
   <img src="./assets/errors-hover.png" width="600" />
