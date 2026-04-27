/**
 * Skill Map — путь пилота (5 уровней школы) + сопоставление USHPA / FAI IPPI / APPI.
 * База: сводная таблица в docs (Word) и school infographic.
 */
export const skillMapCopy = {
  meta: {
    title: 'Skill map — your path as a pilot',
    description:
      'Five stages at our school, from your first day to acro and cross-country, with how each stage lines up with USHPA ratings and FAI IPPI / APPI.',
  },
  /** История пути: общий рассказ (RU, затем EN в интерфейсе) */
  story: {
    ru: [
      'Путь пилота — это не один прыжок, а последовательность этапов: сначала база и сдача экзаменов линейки APPI, затем накопление «нала» в динамике и на склоне, курс внештаток и SIV, выход в маршрут и, наконец, акро и длительные перелёты. Каждая ступень опирается на предыдущую.',
      'Параллельно в мире существуют «официальные» шкалы. В США USHPA ведёт рейтинги P0–P5 и спецнавыки (например ridge soaring, cross-country). Международно, через APPI и соглашения с национальными федерациями, на лицензии может фигурировать FAI IPPI 1–5 — ориентир, понятный на зарубежных площадках. Ниже: наше описание уровня и, при наведении или нажатии, как к нему ближе всего лежат USHPA и IPPI/APPI (не замена SOP — проверяйте актуальные критерии).',
    ],
    en: [
      "A pilot’s growth isn’t one leap—it’s a sequence: start with foundation and APPI exams, build airtime in dynamic lift and on mountain launches, add SIV and recovery skills, go cross-country, and finally blend acro with solid XC experience. Each step stands on the last.",
      'In parallel, formal scales exist. In the U.S., USHPA issues P0–P5 ratings and special skills (e.g. ridge soaring, cross-country). Internationally, through APPI and NAC agreements, your licence may show FAI IPPI 1–5—a useful shorthand at sites abroad. Below: our school’s stage, and (hover or tap) the closest USHPA and IPPI / APPI alignments. These are maps, not a substitute for current SOP or school sign-offs.',
    ],
  },
  /** Подсказка для U.S. / англ. читателей: как читать схему */
  howToRead: {
    titleEn: 'How to read this map',
    bodyEn:
      'We use an “ascent” layout: Level 1 (beginning) sits at the bottom; you move up toward Level 5 (advanced acro + XC depth). That matches common English idioms—climb the ladder, level up, build from the ground up—and the usual skill pyramid (wide base, narrow top). If you prefer a top-down list, the numbers still run 1 → 5.',
    titleRu: 'Как читать схему',
    bodyRu:
      'Вёрстка «лестница вверх»: 1 уровень (старт) внизу, 5 наверху — как путь в гору. Так привычнее англоязычной аудитории (level up, climb). Нумерация по-прежнему 1…5 сверху вниз, если смотреть списком.',
  },
  levels: [
    {
      n: 1,
      schoolTitleRu: 'С нуля',
      schoolTitleEn: 'From zero',
      schoolBodyRu: 'Базовый курс + экзамен APPI.',
      schoolBodyEn: 'Core training + APPI exams.',
      federationRu: {
        ushpa:
          'Траектория к P0 (тандем/риски) → P1 Beginner (прямой полёт) → P2 Novice: ground school, обычно ≥35 залог. полётов, ≥7 лётных дней, экзамен — детали в SOP 12-02.',
       ippiAppi:
          'APPI 1 Discover → 2 Explore → 3 Pilot (≥30 high flights, экзамены). На лицензии при соглашениях NAC: FAI IPPI 1–3 по мере прохождения этапов.',
      },
      federationEn: {
        ushpa:
          'Path toward P0 (tandem/risks) → P1 Beginner (straight-line flight) → P2 Novice: ground school, typically ≥35 logged flights, ≥7 flying days, written exam—see SOP 12-02 for the full list.',
        ippiAppi:
          'APPI 1 Discover → 2 Explore → 3 Pilot (incl. ≥30 high flights, exams). With NAC recognition: FAI IPPI 1–3 as you complete each step.',
      },
    },
    {
      n: 2,
      schoolTitleRu: 'Налёт',
      schoolTitleEn: 'Airtime',
      schoolBodyRu:
        'Парение в динамике, горные старты, toplanding, точность посадки.',
      schoolBodyEn:
        'Ridge/dynamic flying, mountain launches, top landings, landing precision.',
      federationRu: {
        ushpa:
          'P2–P3: манёвры, посадка, дисциплина в лимитах Novice; P3 — выбор площадки и погоды. Спецнавык RS (ridge soaring). Top landing и точность — в задачах P2–P3.',
        ippiAppi:
          'APPI 3 включает сертификат Dynamic или Thermalling. APPI 4 требует оба + 50 полётов / 30 ч на 3 площадках.',
      },
      federationEn: {
        ushpa:
          'P2–P3: maneuvers, landings, flying within Novice limits; P3 is site/weather judgment. RS (ridge soaring) is a USHPA special skill. Top landings and precision are part of P2–P3 task lists.',
        ippiAppi:
          'APPI 3 needs Dynamic or Thermalling (one). APPI 4 requires both plus 50 flights / 30 h on 3 sites.',
      },
    },
    {
      n: 3,
      schoolTitleRu: 'Курс по безопасности',
      schoolTitleEn: 'Safety (SIV)',
      schoolBodyRu:
        'SIV 1–2, внештатные ситуации, малые и большие углы атаки, спирали.',
      schoolBodyEn:
        'SIV 1–2, unusual attitudes, low and high angles of attack, spirals.',
      federationRu: {
        ushpa:
          'Отдельного рейтинга SIV в P0–P5 нет; обучение у инструктора по SOP. Рядом по зрелости — P3–P4; TUR (turbulence) как спецнавык.',
        ippiAppi:
          'SIV — отдельные курсы/сертификаты в APPI; Advanced SIV формально в пути к APPI 5.',
      },
      federationEn: {
        ushpa:
          'There is no standalone SIV rating in P0–P5; SIV is instructor-led per SOP. Close in maturity to P3–P4; TUR (turbulence) is a special skill.',
        ippiAppi:
          'SIV is its own course stack in APPI; Advanced SIV is part of the path to APPI 5.',
      },
    },
    {
      n: 4,
      schoolTitleRu: 'Маршрутные полёты',
      schoolTitleEn: 'Cross-country',
      schoolBodyRu: 'Первые парения, мини-маршруты, маршрутные полёты 100 км+.',
      schoolBodyEn: 'First thermaling, mini XC, XC flights 100 km+.',
      federationRu: {
        ushpa:
          'P3–P4 + спецнавык XC (отдельно от номера P; выдаёт Rating Official).',
        ippiAppi:
          'Сертификат XC; накопление опыта APPI 4–5 (часы, площадки, для 5-го: 200 полётов, 100 ч, 10 площадок + advanced SIV + XC).',
      },
      federationEn: {
        ushpa:
          'P3–P4 plus the XC special skill (separate from the P number; issued by a Rating Official).',
        ippiAppi:
          'XC certification; experience toward APPI 4–5 (for 5: 200 flights, 100 h, 10 sites, plus advanced SIV + XC).',
      },
    },
    {
      n: 5,
      schoolTitleRu: 'ACRO + маршрут',
      schoolTitleEn: 'Acro + XC',
      schoolBodyRu:
        'Акробатика от базы до топовых манёвров; мини-маршруты и 100+ км — в фирменной схеме тоже на этой ступени.',
      schoolBodyEn:
        'Acro from basics to high-end maneuvers; your infographic also lists mini-XC and 100+ km on this top tier.',
      federationRu: {
        ushpa:
          'P4–P5: широкий спектр условий, менторство, P5 — долгий послужной список, Bronze Safe Pilot. Акро — углублённое обучение, не «отдельная буква P» в краткой таблице. XC см. уровень 4.',
        ippiAppi:
          'Freestyle / acro треки в APPI. APPI 5 Advanced = 200/100/10, advanced SIV + XC, две подписи инструктора. Верх схемы школы = APPI 5-уровень компетенции + acro-модули.',
      },
      federationEn: {
        ushpa:
          'P4–P5: wide conditions, leadership; P5 = long track record, Bronze Safe Pilot. Acro is advanced training, not a separate “P” in the short list. XC as in level 4.',
        ippiAppi:
          'Freestyle & acro tracks in APPI. APPI 5 Advanced = 200/100/10, advanced SIV + XC, two APPI Instructor sign-offs. Your top school tier aligns with APPI 5-level scope + acro modules.',
      },
    },
  ],
} as const
