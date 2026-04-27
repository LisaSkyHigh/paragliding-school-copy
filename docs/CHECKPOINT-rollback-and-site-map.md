# Контрольная точка: откат и карта сайта (paragliding-school-copy)

Дата ориентира: **2026-04-27**. Состояние после ручных страниц BGD (в т.ч. Dual Lite, Seed, Dual 3), доработок `ManualWingProductLayout` (`heroSizeSingle`, `heroTriple`, `triple` в спеках) и локальных файлов в `public/downloads/bgd/…`.

## Как откатиться к этому этапу

Все команды — из корня проекта `paragliding-school-copy`.

### 1. По тегу (рекомендуется)

Тег не двигается при новых коммитах — удобная «вечная» метка.

```bash
git fetch origin --tags
git checkout checkpoint/bgd-shop-2026-04-27
```

Чтобы **на основе точки начать новую ветку** (не ломая текущую `main`):

```bash
git checkout -b fix-from-checkpoint checkpoint/bgd-shop-2026-04-27
```

### 2. Жёстко вернуть текущую ветку к тому же коммиту, что и тег

Осторожно: **сотрёт незакоммиченные изменения** на этой ветке.

```bash
git reset --hard checkpoint/bgd-shop-2026-04-27
```

### 3. Посмотреть, что зафиксировано в теге

```bash
git show checkpoint/bgd-shop-2026-04-27 --stat
```

## Как сохранить на GitHub

**Репозиторий создан:** [https://github.com/LisaSkyHigh/paragliding-school-copy](https://github.com/LisaSkyHigh/paragliding-school-copy) (приватный). Локально уже настроен `origin`.

Первая отправка кода и тега:

```bash
cd paragliding-school-copy
git push -u origin main
git push origin checkpoint/bgd-shop-2026-04-27
# или: git push origin --tags
```

### GitHub Actions и OAuth

Файл workflow для Pages лежит в **`docs/github-actions-deploy-github-pages.yml`** (копия). В корне **нет** `.github/workflows/…`, потому что push с токеном без scope `workflow` GitHub отклоняет. Чтобы включить деплой через Actions: выполните `gh auth refresh -s workflow`, затем скопируйте YAML в `.github/workflows/deploy-github-pages.yml` и закоммитьте.

## Работа «на дубле» после контрольной точки

- **Вариант A:** новая ветка от `main` после пуша: `git checkout -b feature/…`.
- **Вариант B:** новая ветка прямо от тега, если нужно экспериментировать, не трогая `main`:  
  `git checkout -b experiment-from-milestone checkpoint/bgd-shop-2026-04-27`.

`main` на GitHub можно держать стабильной; весь новый код — в feature-ветках и merge через PR.

---

## Связи страниц и данных (магазин / крылья BGD)

### Маршруты магазина

| URL | Назначение |
|-----|------------|
| `/paragliding-shop` | Витрина магазина |
| `/paragliding-shop/paragliders` | Список парапланов |
| `/paragliding-shop/paragliders/[slug]` | Карточка модели (динамический сегмент) |
| `/paragliding-shop/harnesses`, `/rescue` | Другие разделы магазина |

### Откуда берётся контент страницы крыла

1. **`lib/shop/bgd-wings/catalog.ts`** — полный список моделей: `routeSlug` = сегмент URL (`dual-3`, `seed`, …) и путь на flybgd.com.
2. **`lib/shop/bgd-wings/get-wing-content.ts`** — логика выбора:
   - если для `slug` есть запись в **`getBgdProductDetail(slug)`** (`lib/shop/bgd-product-detail.ts`) → тип **`manual`**, рендер **`ManualWingProductLayout`**;
   - иначе → **`scraped`** из `lib/shop/bgd-wings/scraped-wings.json` или **`error`** (нет данных).
3. **`app/paragliding-shop/paragliders/[slug]/page.tsx`** — `generateStaticParams()` из **`allCatalogSlugs()`**; для каждого slug вызывается `getWingForPage`.

### Ручные страницы (manual)

Данные и ассеты:

- Тексты и таблицы: **`lib/shop/bgd-product-detail.ts`** (`bySlug`).
- Картинки CDN: **`lib/shop/bgd-assets.ts`**.
- Вёрстка: **`components/shop/ManualWingProductLayout.tsx`** (в т.ч. `heroSizeSingle`, `heroTriple`, таблица спек).
- Локальные файлы скачивания: **`public/downloads/bgd/<slug>/`**.

Шаблон и правила: **`docs/bgd-manual-product-page.md`**.

### Остальной сайт

Основные группы маршрутов лежат в **`app/`**: главная (`/`), Learn to fly, Become a pilot, Expeditions, Stories, Gear, About, Contact, Legal, Skill map (`/skill-map`), превью и т.д. Навигация между ними — через компоненты layout/header/footer и обычные `Link` на те же пути.

---

## Что не попадает в Git (и бэкап отдельно)

См. **`.gitignore`**: `node_modules`, `.next`, `.env`, ключи. Для воспроизводимости окружения достаточно `package-lock.json` / `pnpm-lock` и `npm install`; секреты храните в менеджере паролей или в зашифрованном бэкапе, не в репозитории.
