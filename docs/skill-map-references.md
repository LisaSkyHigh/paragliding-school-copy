# Skill map — внешние источники (конкуренты и федерации)

Список **постоянных ссылок** для исследования копирайта и сравнения уровней. Обновляйте даты/URL при смене вёрстки на чужих сайтах.

## Конкуренты (визуал и тон рынка США)

| Название / бренд | URL |
| --- | --- |
| Eagle Paragliding (домен paragliding.com) | https://www.paragliding.com |
| Penguin Paragliding — P2 course | https://www.penguinparagliding.com/p2course.html |
| Red Tail Paragliding — P2 (Colorado) | https://redtailparagliding.com/colorado-paragliding-lessons-p2/ |
| Super Fly — магазин / Learn to fly | https://superflyinc.com/pages/paragliding-store (есть ссылки в меню на Paragliding Lessons) |

**Заметка:** обучающий контент и цены смотрите на **страницах Training / P2** у каждого сайта; `paragliding.com` ведёт на **Eagle Paragliding, Santa Barbara**.

## Федерации: официальные критерии по параплану

### USHPA (США) — единая национальная схема P0–P5

- **Параплан** — в документах: рейтинги **P0–P5** (в т.ч. Novice = **P2**).
- Обзор уровней и имён рейтингов: [Rating & Skills (USHPA)](http://www.ushpa.org/Public/PilotResources/ratings-and-skills.aspx)
- **Детальные количественные требования** (полёты, навыки, экзамены) задаются **SOP 12-02 — Pilot Proficiency System**; актуальную редакцию смотрите в материалах USHPA или у инструктора. Независимые школы публикуют выдержки, например [Air Addict P2 requirements](https://airaddict.com/p2-certification-requirements/) (как справка, не замена SOP).

**Важно:** **USPA** (United States *Parachute* Association) — **не** тот же орган, что **USHPA**. Для **парапланеризма/дельта** в США используйте **USHPA**.

### APPI + FAI IPPI (международная линия обучения)

- Главный сайт: [flyappi.org](https://flyappi.org/) → раздел **Education system** (уровни **APPI 1–5**; при признании NAC на лицензии может отображаться **FAI IPPI**).
- Примеры страниц с **квалификационными** требованиями:
  - [APPI 1 Discover](https://flyappi.org/education_system/appi_1_discover/)
  - [APPI 2 Explore](https://flyappi.org/education_system/appi_2_explore/)
  - [APPI 3 Pilot](https://flyappi.org/education_system/appi_3_pilot/)
  - [APPI 4 Progress](https://flyappi.org/education_system/appi_4_progress/)
  - [APPI 5 Advanced](https://flyappi.org/education_system/appi_5_advanced/)

## Документы в репозитории

- **Черновик страницы Skill map (Next):** откройте **`http://localhost:<порт>/skill-map`**, где **`<порт>`** тот же, что в терминале после `npm run dev` (часто `3000`, если занят — `3001`, `3002`…). Код: `app/skill-map/page.tsx`, копи: `lib/copy/skill-map.ts`, визуал: `components/skill-map/SkillMapJourney.tsx`.

**Если `/skill-map` даёт 404, а главная открывается:** на порту (например 3000) может висеть **старый** процесс Next без этой страницы, а актуальный dev запустился на **другом** порту — смотрите строку `Local: http://localhost:…` в терминале. Либо остановите все `next dev` и запустите снова из папки `paragliding-school-copy`.
- Таблицы уровней в формате **Word**: `docs/Skill_map_USHPA_APPI_таблицы.docx` (разделы 1–4 — USHPA/APPI; раздел 5 — пять уровней школы по инфографике; раздел 6 — сравнительная характеристика «уровень школы ↔ USHPA и APPI»). Пересборка: `scripts/generate-skill-map-docx.py`.

### Открыть `.docx` одним кликом (локальные ссылки)

В Cursor / VS Code нажмите **Cmd+Click** (macOS) или **Ctrl+Click** по ссылке — обычно файл откроется в Word / назначенном приложении. Если редактор блокирует `file://`, откройте этот файл из **панели файлов** проекта: `docs/Skill_map_USHPA_APPI_таблицы.docx`.

- [Skill_map_USHPA_APPI_таблицы.docx — в проекте](file:///Users/elizaveta/Desktop/%D0%98%D0%98%20%D0%90%D0%93%D0%95%D0%9D%D0%A2%D0%AB/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2/paragliding-school-copy/docs/Skill_map_USHPA_APPI_%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B.docx)

- [Skill_map_USHPA_APPI_таблицы.docx — копия в Downloads](file:///Users/elizaveta/Downloads/Skill_map_USHPA_APPI_%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B.docx)

**Важно:** путь к папке «Создатель сайтов» на диске должен совпадать с тем, что у вас в системе; если ссылка не открывается, проверьте, что файл существует по пути из проводника Cursor.
