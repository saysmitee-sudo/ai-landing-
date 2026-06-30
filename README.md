# Flassy Studio

Одностраничный fashion-tech лендинг студии ИИ-персонажей и визуального
контента для брендов.

## Запуск

```bash
pnpm install
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Локальный dev-сервер запускается через Turbopack. Это убирает нестабильный
Webpack dev runtime в Next.js 15, который может показывать overlay
`__webpack_modules__[moduleId] is not a function` после hot reload.

Для проверки с iPhone используйте:

```bash
pnpm dev:lan
```

Затем откройте на iPhone адрес из строки `Network`, например
`http://10.1.30.149:3000`. iPhone и Mac должны быть в одной Wi-Fi сети.

## Проверка

```bash
pnpm typecheck
pnpm build
```

Контент секций находится в `data/site-content.ts`. Контакты, домен для SEO и
Telegram-ссылку перед публикацией нужно заменить на реальные.
