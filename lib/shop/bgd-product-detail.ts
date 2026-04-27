/**
 * Full product pages — text aligned with public BGD English product pages.
 * @see https://www.flybgd.com/en/paragliders/adam-spot--paraglider-2021-2242-0.html
 * @see docs/bgd-manual-product-page.md — layout template & include/exclude rules
 */

import {
  bgdAdam2,
  bgdAdamSpot,
  bgdAnda,
  bgdBase3,
  bgdBreeze,
  bgdCure3,
  bgdDiva2,
  bgdDual3,
  bgdDualLite,
  bgdEcho2,
  bgdEpic2,
  bgdEpicFreestyle,
  bgdLynx2,
  bgdMagic2,
  bgdSeed,
} from '@/lib/shop/bgd-assets'

export type SpecRow =
  | { kind: 'quad'; label: string; s: string; m: string; ml: string; l: string }
  | { kind: 'penta'; label: string; xs: string; s: string; m: string; ml: string; l: string }
  /** Three size columns (e.g. tandem 38 / 41 / 43 m²); use with `heroTriple`. */
  | { kind: 'triple'; label: string; s: string; m: string; ml: string }
  | { kind: 'single'; label: string; value: string }

export type BgdProductDownload = {
  label: string
  /** Path under /public, e.g. /downloads/bgd/adam-spot/manual-v2.pdf */
  path: string
}

export type BgdProductDetail = {
  slug: string
  title: string
  subtitle: string
  /** BGD product-page strip above H1 (flybgd.com tagline). */
  heroTagline: string
  lede: string
  features: string[]
  officialUrl: string
  freeDemoUrl: string
  heroImageUrl: string
  galleryUrls?: readonly string[]
  /**
   * Small wing-plan thumbnails and colour names in a row (under Info on desktop).
   * Prefer this over legacy `colorwayImageUrl`.
   */
  colourOptions?: readonly { imageUrl: string; label: string }[]
  /** @deprecated Use `colourOptions` */
  colorwayImageUrl?: string
  /** Wing diagram (panel layout) — manufacturer CDN SVG or image. */
  internalDiagramUrl?: string
  /**
   * Flat area m² per size (as on BGD size table).
   * Set `xs` for XS column; omit `l` when the wing has no L size (e.g. Breeze: XS–ML only).
   */
  sizeM2: { xs?: string; s: string; m: string; ml: string; l?: string }
  sizes: { size: string; flatM2: string; weightRangeKg: string }[]
  /**
   * One-size models (e.g. tandem): hero Size table is a single column (as on BGD), not S–ML–L.
   * When set, `sizeM2` is still required for typing but should mirror the same flat m².
   */
  heroSizeSingle?: { columnLabel: string; flatM2: string }
  /**
   * Three numeric size columns (e.g. Dual 3: 38 / 41 / 43). Hero + Specs headers use these labels;
   * values come from `sizeM2.s`, `sizeM2.m`, `sizeM2.ml` (omit `l`).
   */
  heroTriple?: { labels: readonly [string, string, string] }
  infoHtml: string
  packageIncludes: string[]
  designerNotes: string
  targetHtml: string
  specRows: SpecRow[]
  techSections?: { title: string; body: string }[]
  materialRows: { label: string; value: string }[]
  downloads?: {
    global: BgdProductDownload[]
    perSize: { size: string; items: BgdProductDownload[] }[]
  }
}

const adamSpot: BgdProductDetail = {
  slug: 'adam-spot',
  title: 'Adam Spot',
  subtitle: 'EN/LTF-A',
  heroTagline: 'Choice of champions',
  lede: 'Easy, safe and controllable, the Adam Spot is our dedicated accuracy wing.',
  features: [
    'Excellent Controllability',
    'Exceptional Roll Stability',
    'BGD Feedback',
    'Impeccable Spiral Behaviour',
    'Predictable Deep Stall',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/adam-spot--paraglider-2021-2242-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdAdamSpot.hero,
  galleryUrls: bgdAdamSpot.gallery,
  colourOptions: [
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1728395731-3216.png?v=1728395737',
      label: 'Adam Spot',
    },
  ],
  sizeM2: { s: '22', m: '25', ml: '28', l: '30' },
  sizes: [
    { size: 'S', flatM2: '22.1', weightRangeKg: '55–75' },
    { size: 'M', flatM2: '25', weightRangeKg: '70–95' },
    { size: 'ML', flatM2: '27.6', weightRangeKg: '90–110' },
    { size: 'L', flatM2: '30.2', weightRangeKg: '105–130' },
  ],
  infoHtml: `
    <p>The Adam Spot is an EN / LTF-A wing, derived from the original Adam school wing. Its superb handling and great controllability make it ideal for accuracy flying, and the slow-speed behaviour is excellent. You can brake it to near the stall point, and it will descend as if in a parachutal stall. It is very controllable and easy to play around, going in and out of the parachutal zone with ease.</p>
    <p>The Adam Spot is the choice of accuracy champions, and always well represented in the top scores at competitions. Current Paragliding Accuracy World Champion Yang Chen says: &ldquo;The Adam is safe, stable, and with excellent handling. It is a master of all kinds of accuracy landing techniques – swoop landing, vertical landing, on-route landing etc, it helps in every way so that you can aim right on the target. This is my feeling and my comment on the Adam after over 30,000 take-offs and landings, flying more than a dozen of Adams&rdquo;.</p>
  `,
  targetHtml: `
    <p>The target is the target! The Adam Spot is our specialised accuracy wing, for competitive pilots to hit the spot, time after time. It is very safe and uber controllable. As flown by Accuracy World Champion Chen Yang, who was the inspiration behind it.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `The Adam Spot is the original Adam, with a new colourful suit but the same ease of use and safety. The original Adam’s brief was “safe enough for your children to fly” and it is indeed the wing Bruce's children learned to fly on. It launches really easily, flies responsively and has the highest safety rating available. It was the first of BGD’s wings to have mini ribs on the trailing edge. Normally, large-celled paragliders without mini-ribs have a lot of billow near the trailing edge and around the brake fold. When this billow is folded down with a brake input everything gets pulled out of shape. Mini-ribs reduce the billow around the brake fold creating more responsive brake input and a cleaner brake fold. Spot-landing pro’s use this to their advantage, to land straight onto the spot, every time.`,
  specRows: [
    { kind: 'quad', label: 'Linear scaling factor', s: '0.94', m: '1', ml: '1.05', l: '1.1' },
    { kind: 'quad', label: 'Projected area (m²)', s: '18.6', m: '21', ml: '23.2', l: '25.4' },
    { kind: 'quad', label: 'Flat area (m²)', s: '22.1', m: '25', ml: '27.6', l: '30.2' },
    { kind: 'quad', label: 'Glider weight (kg)', s: '4.3', m: '4.9', ml: '5.4', l: '5.9' },
    { kind: 'quad', label: 'Total line length (m)', s: '243', m: '275', ml: '303', l: '333' },
    { kind: 'quad', label: 'Height (m)', s: '6.3', m: '6.7', ml: '7', l: '7.8' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '34' },
    { kind: 'single', label: 'Flat aspect ratio', value: '4.5' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.2' },
    { kind: 'quad', label: 'Root chord (m)', s: '2.8', m: '3', ml: '3.1', l: '3.3' },
    { kind: 'quad', label: 'Flat span (m)', s: '10', m: '10.6', ml: '11.1', l: '11.7' },
    { kind: 'quad', label: 'Projected span (m)', s: '7.7', m: '8.2', ml: '8.6', l: '9.1' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '38' },
    { kind: 'single', label: 'Top speed (km/h)', value: '50' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '8' },
    { kind: 'quad', label: 'Certified weight range (kg)', s: '55-75', m: '70-95', ml: '90-110', l: '105-130' },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'A' },
  ],
  downloads: {
    global: [
      { label: 'Line Layout', path: '/downloads/bgd/adam-spot/line-layout.jpg' },
      { label: 'Manual v2', path: '/downloads/bgd/adam-spot/manual-v2.pdf' },
    ],
    perSize: [
      {
        size: 'S',
        items: [
          { label: 'S Certificate', path: '/downloads/bgd/adam-spot/s-certificate.pdf' },
          { label: 'S Flight test report', path: '/downloads/bgd/adam-spot/s-flight-test-report.pdf' },
          { label: 'S Line Lengths S', path: '/downloads/bgd/adam-spot/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'M Certificate', path: '/downloads/bgd/adam-spot/m-certificate.pdf' },
          { label: 'M Flight test report M', path: '/downloads/bgd/adam-spot/m-flight-test-report.pdf' },
          { label: 'M Line lengths', path: '/downloads/bgd/adam-spot/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'ML Certificate', path: '/downloads/bgd/adam-spot/ml-certificate.pdf' },
          { label: 'ML Line lengths ML', path: '/downloads/bgd/adam-spot/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'L Certificate', path: '/downloads/bgd/adam-spot/l-certificate.pdf' },
          { label: 'L Line lengths L', path: '/downloads/bgd/adam-spot/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Dominico D30 42g/m²' },
    { label: 'Bottom surface', value: 'Dominico D30 42g/m²' },
    { label: 'Internal structure', value: 'Dominico D30 hard finish 42g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,3 / 2,7mm' },
    { label: 'Risers', value: '20mm Kevlar / nylon webbing' },
    { label: 'Top lines', value: 'Liros DSL' },
    { label: 'Middle lines', value: 'Liros TSL' },
    { label: 'Lower lines', value: 'Liros TSL' },
    { label: 'Brakes', value: 'Liros TSL' },
  ],
}

const adam2: BgdProductDetail = {
  slug: 'adam-2',
  title: 'Adam 2',
  subtitle: 'EN/LTF-A',
  heroTagline: 'In the Beginning',
  lede: 'From first flights to cross country, set your spirit free',
  features: [
    'BGD Parasim Simulation Software',
    'Ergonomic Risers',
    'Excellent Stall Behaviour',
    'Progressive Stability',
    'School Friendly Durability',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/adam-2--paraglider-2021-2033-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdAdam2.hero,
  galleryUrls: bgdAdam2.gallery,
  colourOptions: [
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1686749075-1276.png',
      label: 'Amber',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1686671534-4895.png',
      label: 'Diamond',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1686671653-2828.png',
      label: 'Quartz',
    },
  ],
  sizeM2: { xs: '21', s: '23', m: '25', ml: '27', l: '29' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '50–65' },
    { size: 'S', flatM2: '23', weightRangeKg: '60–80' },
    { size: 'M', flatM2: '25', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '27', weightRangeKg: '88–108' },
    { size: 'L', flatM2: '29', weightRangeKg: '100–125' },
  ],
  infoHtml: `
    <p>Ready to spice up your free time and try something new? If you want to take to the skies and discover freedom in 3D, ADAM 2 is your new best friend. It will reassure and keep you safe from your first flights onwards. Maximum safety is top priority for this school glider. It&rsquo;s forgiving of piloting errors, and takes the stress out of learning to fly for students and instructors.</p>
    <p>Faced with a spaghetti mess of lines, working out what is what can be overwhelming at first. With the ADAM 2 we kept things simple and clear: 20mm risers are easy to manage, and they are coloured and labelled. The lines are all sheathed and coloured. Excellent launch behaviour makes ground-handling and getting airborne very easy, and excellent pitch, roll and yaw stability will make students feel at ease in their harness.</p>
    <p>The ADAM 2 has long brake travel and the brake pressure ramps up to a clear stall point. Students will not accidentally stall this glider. We&rsquo;ve thoroughly tested spiral behaviour and there is no tendency for it to lock in.</p>
    <p>We love beautiful, colourful wing designs, and those bright colours are a safety plus, too, so you are easily seen by other pilots. The new coloured undersurface makes it easy for instructors to identify their students from below. Three colours, Amber, Quartz and Diamond are very visible, different to each other and distinctive from above and below.</p>
  `,
  targetHtml: `
    <p>The ADAM 2 is our safe, easy-to-handle school and accuracy wing that excels not only in providing a nurturing environment for fledgling pilots to take their first steps into the air and develop soaring and thermalling skills without stress. Its durability and hard-wearing construction enable it to withstand hours of ground-handling practice and heavy use in schools, ensuring it will be there to support you as you discover your wings and confidently take to the skies.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `The ADAM has always been and remains a popular glider all around the world. It has taken the R&D team a long time to update this classic, because any replacement had to be better than the original without losing that much-loved character. The ADAM 2 is a whole new design, and it is even safer and more comfortable to fly. It is easier to launch and has longer brake travel so it’s safer at slow speeds and easy to land. Bruce’s son Tyr learned to fly on the original ADAM, and our benchmark for safety is still: “safe enough for your child to learn on”. The ADAM 2 has two more cells than the original, now 36. The aspect ratio is also a bit higher at 4.8 compared to the original’s 4.5. We decided to make it in five sizes, adding an XS to the range. We often get requests for smaller gliders for youngsters and lighter pilots, and the XS is certified from just 50kg all up. The ADAM 2 incorporates several key technologies: Our trademark Progressive Stability means the centre is the most resistant to deforming and the tips the least so there will be no nasty surprises in turbulent air. Chord Cut Billow technology is there too, reducing ballooning and eliminating wrinkles from the sail. The elliptical cell openings on the ADAM 2 keeps the bottom surface well tensioned. This gives it good inflation characteristics, and easy reinflation after a collapse. Durability is key for a school glider, so we’ve opted for high quality Dominico 30D, which proved itself on the original ADAM. Despite the materials being the same, new construction methods means it’s lighter than the original, at 4.1kg to 5.4kg across the range.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.96', s: '1', m: '1.04', ml: '1.08', l: '1.12' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.9', s: '19.7', m: '21.4', ml: '23.1', l: '24.8' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '21', s: '23', m: '25', ml: '27', l: '29' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '4.1', s: '4.4', m: '4.75', ml: '4.96', l: '5.4' },
    { kind: 'penta', label: 'Total line length (m)', xs: '212', s: '232', m: '252', ml: '272', l: '293' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '36' },
    { kind: 'single', label: 'Flat aspect ratio', value: '4.8' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.4' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.6', s: '2.7', m: '2.9', ml: '3', l: '3.1' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10', s: '10.5', m: '11', ml: '11.4', l: '11.8' },
    { kind: 'penta', label: 'Projected span (m)', xs: '7.9', s: '8.2', m: '8.6', ml: '8.9', l: '9.2' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '37' },
    { kind: 'single', label: 'Top speed (km/h)', value: '48' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '8.5' },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '50-65',
      s: '60-80',
      m: '75-95',
      ml: '88-108',
      l: '100-125',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'A' },
  ],
  downloads: {
    global: [
      { label: 'Line layout', path: '/downloads/bgd/adam-2/line-layout.jpg' },
      { label: 'Manual v3', path: '/downloads/bgd/adam-2/manual-v3.pdf' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/adam-2/xs-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/adam-2/xs-flight-test.pdf' },
          { label: 'DGAC', path: '/downloads/bgd/adam-2/xs-dgac.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/adam-2/s-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/adam-2/s-flight-test.pdf' },
          { label: 'DGAC', path: '/downloads/bgd/adam-2/s-dgac.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/adam-2/m-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/adam-2/m-flight-test.pdf' },
          { label: 'DGAC', path: '/downloads/bgd/adam-2/m-dgac.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/adam-2/ml-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/adam-2/ml-flight-test.pdf' },
          { label: 'DGAC', path: '/downloads/bgd/adam-2/ml-dgac.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/adam-2/l-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/adam-2/l-flight-test.pdf' },
          { label: 'DGAC', path: '/downloads/bgd/adam-2/l-dgac.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Dominico D30 42g/m²' },
    { label: 'Bottom surface', value: 'Porcher Eazyfly 40g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 40g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire' },
    { label: 'Risers', value: '12mm nylon black' },
    { label: 'Top lines', value: 'Liros PPSL' },
    { label: 'Middle lines', value: 'Liros PPSL' },
    { label: 'Lower lines', value: 'Liros PPSL' },
    { label: 'Brakes', value: 'Liros DSL' },
  ],
}

const anda: BgdProductDetail = {
  slug: 'anda',
  title: 'Anda',
  subtitle: 'EN/LTF-A',
  heroTagline: 'Take the Leap',
  lede: 'A super-light breath of fresh air, the ANDA is packable and versatile, for travel adventures, hike-and-fly and projects in high mountains',
  features: [
    'Remarkably Lightweight',
    'Surprisingly good glide',
    'Small packing volume',
    'Very easy launch',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/anda--paraglider-2021-1888-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdAnda.hero,
  galleryUrls: bgdAnda.gallery,
  colourOptions: [
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1725908862-8284.png',
      label: 'Helium',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1725908734-2628.png',
      label: 'Lithium',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1725908630-7638.png',
      label: 'Oxygen',
    },
  ],
  sizeM2: { xs: '21', s: '23', m: '25', ml: '27', l: '29' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '50–70' },
    { size: 'S', flatM2: '23', weightRangeKg: '65–80' },
    { size: 'M', flatM2: '25', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '27', weightRangeKg: '85–108' },
    { size: 'L', flatM2: '29', weightRangeKg: '100–125' },
  ],
  infoHtml: `
    <p>&lsquo;Anda&rsquo; means &lsquo;breathe&rsquo; or &lsquo;spirit&rsquo; in Icelandic. It&rsquo;s our lightweight, life-loving little soul, a companion spirit of hike-and-flyers, travellers and escapees of the nine-to-five. The Anda is light and compact enough to be carried in hand luggage, safe and comfortable so you can confidently unpack in new places and go exploring. It&rsquo;s for grabbing life by the horns, taking the leap and finding adventure where you can.</p>
    <p>The two smallest sizes come in under 3kg and the five sizes accommodate all-up weights from 50kg to 130kg.</p>
    <p>The ANDA has extended weight ranges. This means it can be flown at a higher wing loading than &ldquo;standard&rdquo;, useful if you want to carry extra equipment to camp in the mountains etc. It is EN/LTF A in the standard and extended weight ranges with the inherent safety this implies, but it will have slightly different flight characteristics:</p>
    <p>In the standard weight range you will have a good sink rate and thermalling ability, turns will be easy and predictable with the ability to float and turn flat in weak conditions.</p>
    <p>In the extended weight range the wing loading is higher so the glider will be faster and more dynamic. Handling will be more reactive and it will be hard to stay up in weak conditions. This is typically used for mountain descents or soaring in higher winds.</p>
  `,
  targetHtml: `
    <p>The Anda was developed as a lightweight EN-A wing that&rsquo;s beginner-friendly. It&rsquo;s a hike-and-fly wing that anyone can fly, and packable for travelling with. It has good performance and fun handling, so you can ride the early-morning thermals, soar the sunset cliffs or launch from a high mountain safe in the knowledge you have a good reach to the landing. It would be a good first wing for a careful new pilot who enjoys hiking, but as with all lightweight wings, it needs to be treated with care.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `It’s been quite a journey for the R&D team, exploring materials and techniques to make a wing that is light, easy and safe, with soaring and thermalling performance. All the materials were selected so the Anda has the best balance of light weight and usability; we kept it light, but a little extra weight was accepted if we felt it really improved handling or durability.

The sail is double-coated Porcher Skytex 27, with now-proven longevity. The unsheathed Kevlar lines are the latest Edelrid Pro Dry, whose new treatment makes them 60% more water repellent.

The Anda comes with softlinks as standard – they are strong and light and avoid the hard points in the link between pilot and wing. Maintaining flexible materials from the riser through to the lines and up to the wing simply makes sense. It is both lighter and more elegant. It’s not often you’ll need to undo the soft links, but we made a video to show how quick and easy it is if you need to.

The risers are easy-handling 12mm Kevlar with lightly-padded handles and our snap locks for the brakes. Snap locks have now become industry standard since BGD introduced them back in 2016. Like the Base 2 Lite, the speed bar attachments are Universal knots rather than Brummel hooks. They are universal so attach easily to either loops or fist knots or Brummel hooks and they don’t come undone when you don’t want them to.

The unsheathed Kevlar lines on all BGD gliders are now the new Edelrid Pro Dry 8001 lines. These have been specially treated to make them 60% more water repellant.

Launch on the Anda is outstanding in all conditions, from tailwind to strong wind. Our testers particularly commented how easily the Anda sits above your head on launch in light winds, and we’ve made sure it’s forgiving of over-zealous pulling on the A’s to make the launch super easy for beginners. The Anda’s slow stall speed and hard brake pressure as you approach stall are real safety assets. It would be difficult to accidentally spin or stall the Anda, but if you do manage to, it will fly again very quickly.

We are fans of stress-free packing, so we made a smaller compress bag just for the Anda. It means the glider is very easy to pack, and you always end up with a sleek and compact package that slides into your rucksack of choice.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.96', s: '1', m: '1.04', ml: '1.08', l: '1.12' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.7', s: '19.7', m: '21', ml: '24.5', l: '26.3' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '21', s: '23', m: '25', ml: '27', l: '29' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '2.78', s: '2.99', m: '3.14', ml: '3.36', l: '3.54' },
    { kind: 'penta', label: 'Total line length (m)', xs: '227', s: '233', m: '244', ml: '254', l: '263' },
    { kind: 'penta', label: 'Height (m)', xs: '6.7', s: '7', m: '7.1', ml: '7.5', l: '7.8' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '37' },
    { kind: 'single', label: 'Flat aspect ratio', value: '4.8' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.6' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.6', s: '2.7', m: '2.9', ml: '3', l: '3.1' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.1', s: '10.5', m: '10.9', ml: '11.4', l: '11.8' },
    { kind: 'penta', label: 'Projected span (m)', xs: '7.9', s: '8.2', m: '8.6', ml: '8.9', l: '9.2' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '38' },
    { kind: 'single', label: 'Top speed (km/h)', value: '50' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '9' },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '50-70',
      s: '65-80',
      m: '75-95',
      ml: '85-108',
      l: '100-125',
    },
    {
      kind: 'penta',
      label: 'Extended weight range (kg)',
      xs: '70-80',
      s: '80-90',
      m: '95-105',
      ml: '108-117',
      l: '125-130',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'A' },
  ],
  downloads: {
    global: [
      { label: 'Line layout', path: '/downloads/bgd/anda/line-layout.jpg' },
      { label: 'Brochure', path: '/downloads/bgd/anda/brochure.pdf' },
      { label: 'Manual V5', path: '/downloads/bgd/anda/manual-v5.pdf' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/anda/xs-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/anda/xs-flight-test.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/anda/xs-line-lengths.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/anda/s-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/anda/s-flight-test.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/anda/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'Flight test report', path: '/downloads/bgd/anda/m-flight-test.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/anda/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/anda/ml-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/anda/ml-flight-test.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/anda/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/anda/l-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/anda/l-flight-test.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/anda/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex, Classic II 27g/m², 32g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex Classic II 27g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 27g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Low-friction rings' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Brakes', value: 'PPSL, Edelrid Pro 8001U' },
  ],
}

const magic2: BgdProductDetail = {
  slug: 'magic-2',
  title: 'Magic 2',
  subtitle: 'EN/LTF-A',
  heroTagline: 'One Dream, One Soul',
  lede: 'A safe and fun wing that will keep new pilots in love with this amazing sport as they explore what it has to offer.',
  features: [
    'BGD Performance Project',
    'Chord Cut Billow (CCB)',
    'High taper planform',
    'Internal seams',
    'Progressive Stability',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/magic-2--paraglider-2021-2133-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdMagic2.hero,
  galleryUrls: bgdMagic2.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1709651254-7407.png', label: 'Aquarius' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1709651450-5965.png', label: 'Pisces' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1709651721-3075.png', label: 'Taurus' },
  ],
  sizeM2: { xs: '21', s: '23', m: '25', ml: '27', l: '29' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '50–70' },
    { size: 'S', flatM2: '23', weightRangeKg: '60–80' },
    { size: 'M', flatM2: '25', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '27', weightRangeKg: '88–108' },
    { size: 'L', flatM2: '29', weightRangeKg: '100–125' },
  ],
  infoHtml: `
    <p>One dream, one soul<br />One prize, one goal<br />&ndash; Queen, <em>A kind of Magic</em></p>
    <p>The MAGIC 2 is our high-performance EN-A paraglider. Full of sparkle and magic it has maximum fun-factor and excellent passive safety. It&rsquo;s super easy to launch and an absolute joy to thermal, with beautiful handling and the right amount of feedback.</p>
    <p>The choice of materials and the structural design ensures the glider is robust and durable, and can withstand the abuse of training, but without adding weight &ndash; the M size is just 4.8kg.</p>
    <p>There&rsquo;s a well-known saying in the paragliding world: &ldquo;The best pilot is the one having the most fun&rdquo;. Fly the MAGIC 2 &ndash; be the best pilot!</p>
  `,
  targetHtml: `
    <p>The MAGIC 2 is designed as a pilot&rsquo;s first wing; an easy, safe and forgiving glider for pilots progressing in their flying careers. It&rsquo;s positioned above the ADAM 2 school wing. It has EN-A safety and easy handling, with plenty of fun-factor and excellent performance. It will take pilots from their first soaring flights, learning to thermal, first XCs and onto more ambitious projects. Pilots will learn to love their MAGIC 2 as they appreciate its thermalling and XC potential, and won&rsquo;t grow out of it too fast.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `The brief for the R&D team was to produce a wing that is very safe, easy to fly and forgiving of errors. It must be fun and have performance for flying XC: a true ‘progression’ wing. We’re really happy that we’ve achieved this. The MAGIC 2 is a roll-stable glider with smooth, refined handling, and is an absolute joy to thermal.

It is super easy to launch, with no tendency to slow in the rise phase and forgiving of over-enthusiastic pulling of the A-risers.

The long brake travel combined with progressively increasing pressure as you near the stall point, means you won’t stall it unintentionally. It also has no tendency to get locked into a spiral and is generally very forgiving in roll.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.96', s: '1', m: '1.04', ml: '1.08', l: '1.12' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '18.2', s: '19.7', m: '21.3', ml: '23', l: '24.7' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '21', s: '23', m: '25', ml: '27', l: '29' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '4.2', s: '4.5', m: '4.8', ml: '5.1', l: '5.4' },
    { kind: 'penta', label: 'Total line length (m)', xs: '228', s: '247', m: '267', ml: '288', l: '310' },
    { kind: 'penta', label: 'Height (m)', xs: '6.2', s: '6.4', m: '6.7', ml: '6.9', l: '7.2' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '38' },
    { kind: 'single', label: 'Flat aspect ratio', value: '4.9' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.5' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.7', s: '2.8', m: '2.9', ml: '3', l: '3.1' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.2', s: '10.6', m: '11', ml: '11.5', l: '12' },
    { kind: 'penta', label: 'Projected span (m)', xs: '7.9', s: '8.3', m: '8.6', ml: '9', l: '9.3' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '37' },
    { kind: 'single', label: 'Top speed (km/h)', value: '50' },
    { kind: 'penta', label: 'Min sink (m/s)', xs: '0.9', s: '0.9', m: '0.9', ml: '1', l: '1' },
    { kind: 'penta', label: 'Best glide', xs: '9.1', s: '9.2', m: '9.3', ml: '9.4', l: '9.5' },
    {
      kind: 'penta',
      label: 'Ideal weight range (kg)',
      xs: '55-70',
      s: '68-80',
      m: '80-95',
      ml: '95-108',
      l: '108-125',
    },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '50-70',
      s: '60-80',
      m: '75-95',
      ml: '88-108',
      l: '100-125',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'A' },
  ],
  downloads: {
    global: [
      { label: 'Manual v1.01', path: '/downloads/bgd/magic-2/manual-v1.01.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/magic-2/line-layout.jpg' },
      { label: 'Brochure', path: '/downloads/bgd/magic-2/brochure.pdf' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/magic-2/xs-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/magic-2/xs-flight-test.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/magic-2/s-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/magic-2/s-flight-test.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/magic-2/m-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/magic-2/m-flight-test.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/magic-2/ml-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/magic-2/ml-flight-test.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/magic-2/l-certificate.pdf' },
          { label: 'Flight test', path: '/downloads/bgd/magic-2/l-flight-test.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex 38g/m²' },
    { label: 'Bottom surface', value: 'Porcher Eazyfly 40g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 40g/m²' },
    { label: 'Nose reinforcing', value: '2mm high modulus PA6.6 wire' },
    { label: 'Risers', value: '20mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Riley / Sprenger' },
    { label: 'Top lines', value: 'Liros PPSL / DSL, Liros DC' },
    { label: 'Middle lines', value: 'Liros PPSL / DSL' },
    { label: 'Lower lines', value: 'Liros PPSL / TSL' },
    { label: 'Brakes', value: 'Liros DSL' },
  ],
}

const epic2: BgdProductDetail = {
  slug: 'epic-2',
  title: 'Epic 2',
  subtitle: 'EN/LTF-B',
  heroTagline: 'La Dolce Vita',
  lede: 'The pleasure of flying, the beautiful life! The EPIC 2 has impeccable safety and fun handling. It’s the perfect partner for playing locally, exploring cross-country or starting out in freestyle.',
  features: [
    'B/C Speed Steering',
    'BGD Parasim Simulation Software',
    'Chord Cut Billow (CCB)',
    'Progressive Stability',
    'Single Shark Plastic',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/epic-2--paraglider-2021-1782-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdEpic2.hero,
  galleryUrls: bgdEpic2.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1649083742-8325.png', label: 'Ocean' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1649083833-9122.png', label: 'Dune' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1649083884-5117.png', label: 'Forest' },
  ],
  sizeM2: { xs: '21', s: '23', m: '25', ml: '27', l: '29' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '55–75' },
    { size: 'S', flatM2: '23', weightRangeKg: '65–85' },
    { size: 'M', flatM2: '25', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '27', weightRangeKg: '85–110' },
    { size: 'L', flatM2: '29', weightRangeKg: '100–125' },
  ],
  infoHtml: `
    <p>The EPIC 2 is very safe and reassuring, accessible to low-airtime pilots but with handling and performance that experienced pilots will love.</p>
    <p>We&rsquo;ve improved the launch behaviour &ndash; the wing comes up smoothly and easily without overshooting. In flight, it&rsquo;s slightly faster than its predecessor (+1km/h at trim, +3km/h top speed) and has improved glide. It&rsquo;s also a great climber, especially in weak lift.</p>
    <p>Long brake travel means you won&rsquo;t accidentally stall or spin, but it is precise on the brakes with direct, playful handling. The EPIC 2 is safe and reassuring in strong air, but does not hide the bumps. At BGD we think feedback is really important: the wing tells the pilot about the conditions, and the pilot can anticipate and avoid collapses.</p>
    <p>Like on the BASE 2, the new EPIC 2 risers have a B/C steering system for piloting the wing while pushing the bar and flying at speed.</p>
  `,
  targetHtml: `
    <p>A safe, fun wing that&rsquo;s a joy to fly. We&rsquo;ve improved the performance while maximising safety, and the EPIC 2 is a versatile wing. It&rsquo;s perfect for first cross-countries or a go-anywhere glider for weekend pilots. And, like the original Epic, it&rsquo;s a great tool for getting to grips with your first freestyle moves. The test team can confirm it&rsquo;s loads of fun for wingovers, SATs, heli&rsquo;s and the like.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `The EPIC has been a very successful Low B wing. It was important to us to keep the accessibility and handling it was known and loved for, while improving performance. It has great glide and climbing ability, and a bit more speed than the original.

While it might look quite similar at a glance, design-wise a lot has changed. It now has 45 cells and an aspect ratio of 5.2, both slightly higher than on the original EPIC. The internal supporting structure is more intricate, but despite all this the glider weighs the same, 4.9kg for the M. The riser set is new, and the lines are a mixture of unsheathed higher up, and sheathed at the bottom.

The Epic 2 has short rods in the leading edge and none in the trailing edge, so it is easy to pack. The single-piece leading edge plastics are made of different materials: stiffer purlin in the central section with softer, more flexible supports towards the tips. It’s a light, elegant and effective method for shaping the leading edge.

As on the BASE 2 and CURE 2, there is a double skin on the lower surface of the leading edge. The internal pressure of the wing pushes on this lower skin which helps pressure it to maintain a clean and stable leading edge.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.92', s: '0.96', m: '1', ml: '1.04', l: '1.08' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.7', s: '19.4', m: '21.1', ml: '22.8', l: '24.5' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '21', s: '23', m: '25', ml: '27', l: '29' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '4.4', s: '4.6', m: '4.9', ml: '5.1', l: '5.4' },
    { kind: 'penta', label: 'Total line length (m)', xs: '227', s: '233', m: '244', ml: '254', l: '263' },
    { kind: 'penta', label: 'Height (m)', xs: '6.4', s: '7', m: '7.1', ml: '7.3', l: '7.5' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '45' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5.2' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.8' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.5', s: '2.6', m: '2.7', ml: '2.8', l: '3' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.4', s: '10.9', m: '11.4', ml: '11.8', l: '12.3' },
    { kind: 'penta', label: 'Projected span (m)', xs: '8.2', s: '8.5', m: '8.9', ml: '9.3', l: '9.6' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '39' },
    { kind: 'single', label: 'Top speed (km/h)', value: '53' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '9.5' },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '55-75',
      s: '65-85',
      m: '75-95',
      ml: '85-110',
      l: '100-125',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [
      { label: 'Manual V7', path: '/downloads/bgd/epic-2/manual-v7.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/epic-2/line-layout.jpg' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/epic-2/xs-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-2/xs-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-2/xs-line-lengths.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/epic-2/s-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-2/s-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-2/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/epic-2/m-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-2/m-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-2/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/epic-2/ml-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-2/ml-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-2/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/epic-2/l-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-2/l-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-2/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex 38g/m²' },
    { label: 'Bottom surface', value: 'Porcher Eazyfly 40g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 40g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,3 / 2,7mm' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Allen' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid PPSL and TSL' },
    { label: 'Brakes', value: 'Liros DSL, PPSL' },
  ],
}

const epicFreestyle: BgdProductDetail = {
  slug: 'epic-freestyle',
  title: 'Epic Freestyle',
  subtitle: 'EN/LTF-B',
  heroTagline: 'The Spin Doctor',
  lede:
    'A fun and forgiving companion that will look after you when you start out in freestyle, and match your groove as you master all the moves and transitions',
  features: [
    'BGD Feedback',
    'Impeccable Spiral Behaviour',
    'Progressive Stability',
    'Versatile ACRO and XC',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/epic-freestyle--paraglider-2021-2001-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdEpicFreestyle.hero,
  galleryUrls: bgdEpicFreestyle.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1712755828-7049.png', label: 'Raspberry' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1712755663-0363.png', label: 'Blueberry' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1712755746-9095.png', label: 'Gooseberry' },
  ],
  sizeM2: { xs: '21', s: '23', m: '25', ml: '27', l: '29' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '50–65' },
    { size: 'S', flatM2: '23', weightRangeKg: '60–80' },
    { size: 'M', flatM2: '25', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '27', weightRangeKg: '90–110' },
    { size: 'L', flatM2: '29', weightRangeKg: '105–125' },
  ],
  infoHtml: `
    <p>Master your stalls, spins, SATs and Heli then move onto the transitions, like Spin to Heli, SAT to Heli. Dance, Misty and Mactwist your way around the sky and then easily thermal back up to do it all again. EPIC FREESTYLE can do the manoeuvres and the transitions but its real beauty, and the reason instructors love it so much, is that it&rsquo;s really forgiving. It will let you explore and master all these things, but will save your butt if you get the timing a bit wrong. It looks after you by behaving like any other EN-B if you get your timings wrong, and stops shooting before it goes too far.</p>
  `,
  targetHtml: `
    <p>The EPIC FREESTYLE is the wild child of the original Epic, much loved by acro and SIV instructors as the perfect wing to learn freestyle, acro manoeuvres and fly XC on. We brought it back with bells on. No shrinking violet, it&rsquo;s feisty in pink and is for all pilots looking for a safe, forgiving and energetic wing to cut their freestyle teeth on. It&rsquo;s your new best mate, egging you on to be as wild as you dare but keeping you out of sticky situations. It likes you to think it&rsquo;s a fearless devil, but inside it&rsquo;s still a safe, versatile, and friendly &ldquo;easy EN-B&rdquo;.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `Like the original, the EPIC FREESTYLE is a safe and easy wing, with the 5.0 aspect ratio a sweet spot of safety and performance. EPIC 2 or EPIC FREESTYLE – which to choose? Both are certified EN B. EPIC FREESTYLE: If your priority is to learn glider handling skills, SIV, freestyle and acro manoeuvres. Of course you can site-fly, thermal and go XC too. EPIC 2: is honed more for XC, tuned for performance with slightly more refined handling and rear-riser steering. If XC is your priority, this is your ride. You can do SIV and freestyle manoeuvres too. We always recommend you fly in the weight range. Some instructors recommend being slightly over the weight range if you have mastered all the SIV and acro basics to progress on to the more complex manoeuvres. Please speak to your instructor.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.96', s: '1', m: '1.04', ml: '1.08', l: '1.12' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.9', s: '19.6', m: '21.2', ml: '22.8', l: '24.5' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '21', s: '23', m: '25', ml: '27', l: '29' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '4.2', s: '4.6', m: '4.9', ml: '5.1', l: '5.4' },
    { kind: 'penta', label: 'Total line length (m)', xs: '210', s: '230', m: '250', ml: '268', l: '289' },
    { kind: 'penta', label: 'Height (m)', xs: '6.7', s: '7', m: '7.3', ml: '7.5', l: '7.8' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '42' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.6' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.6', s: '2.7', m: '2.8', ml: '2.9', l: '3' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.2', s: '10.7', m: '11.2', ml: '11.6', l: '12' },
    { kind: 'penta', label: 'Projected span (m)', xs: '8', s: '8.4', m: '8.8', ml: '9.07', l: '9.4' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '38' },
    { kind: 'single', label: 'Top speed (km/h)', value: '50' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '9' },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '50-65',
      s: '60-80',
      m: '75-95',
      ml: '90-110',
      l: '105-125',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [
      { label: 'Manual V3', path: '/downloads/bgd/epic-freestyle/manual-v3.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/epic-freestyle/line-layout.jpg' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'Flight test report', path: '/downloads/bgd/epic-freestyle/xs-flight-test.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-freestyle/xs-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-freestyle/xs-line-lengths.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'Flight test report', path: '/downloads/bgd/epic-freestyle/s-flight-test.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-freestyle/s-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-freestyle/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'Flight test report', path: '/downloads/bgd/epic-freestyle/m-flight-test.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-freestyle/m-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-freestyle/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'Flight test report', path: '/downloads/bgd/epic-freestyle/ml-flight-test.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-freestyle/ml-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-freestyle/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'Flight test report', path: '/downloads/bgd/epic-freestyle/l-flight-test.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/epic-freestyle/l-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/epic-freestyle/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex 38g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex 38g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 40g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,3 / 2,7mm' },
    { label: 'Risers', value: '13mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Harken' },
    { label: 'Top lines', value: 'Liros DC' },
    { label: 'Middle lines', value: 'Liros DSL – sheathed Dyneema' },
    { label: 'Lower lines', value: 'Liros TSL' },
    { label: 'Brakes', value: 'Liros DSL' },
  ],
}

const echo2: BgdProductDetail = {
  slug: 'echo-2',
  title: 'Echo 2',
  subtitle: 'EN/LTF-B',
  heroTagline: 'There and Back',
  lede: 'A mischievous mountain nymph, the ECHO 2 is full of fun. It’s a lightweight EPIC 2 with the same lust for life, and a lighter spirit.',
  features: [
    'BGD Parasim Simulation Software',
    'B/C Speed Steering',
    'BGD Feedback',
    'Low Weight and Pack size',
    'Multi-Plastics',
    'Progressive Stability',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/echo-2--paraglider-2021-1839-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdEcho2.hero,
  galleryUrls: bgdEcho2.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1662719156-0695.png', label: 'Coral' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1662719414-8251.png', label: 'Pine' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1662719285-0399.png', label: 'Sand' },
  ],
  sizeM2: { xs: '21', s: '23', m: '25', ml: '27', l: '29' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '55–75' },
    { size: 'S', flatM2: '23', weightRangeKg: '65–85' },
    { size: 'M', flatM2: '25', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '27', weightRangeKg: '85–110' },
    { size: 'L', flatM2: '29', weightRangeKg: '100–125' },
  ],
  infoHtml: `
    <p>The ECHO is back, our lightweight low-B is perfect for pilots who like their paragliding served all ways. Hike-and-fly? Tick. It&rsquo;s a kilo lighter than the EPIC 2, at 3.4kg in XS, and 4.4kg in L. It folds down nice and small with no fussy packing techniques required. Cross-country? Absolutely. It&rsquo;s still a safe and easy low-B, with great glide performance and more speed than the original ECHO. You can safely use the bar all the way, and it has a B/C-steering system so you can get in your groove on bar, steer with the rears and munch those miles. Vol-biv? Please do! The sheathed lines, easy-handling risers and careful cloth choices mean ECHO 2 won&rsquo;t wilt at the thought of a rocky launch. It&rsquo;s easy to clear the lines to lay out in the wild, and the launch is really easy. So take her into the mountains, ECHO 2 is at home there!</p>
    <p>The weights in the Specs table are with softlinks. The ECHO 2 is supplied as standard with maillons.</p>
  `,
  targetHtml: `
    <p>ECHO 2 is a multi-purpose superstar, a quiver of one! Whether you&rsquo;re a relative beginner or have 20 flying years under your belt, she&rsquo;s safe and accessible, with fun handling and good performance. We found a solution to the lightness/durability paradox with clever cloth combos that mean she&rsquo;s light but still durable, and easy to handle too. So whether you fly locally, hike, travel or vol-bivouac, the ECHO 2 is everything you need.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `With the ECHO 2 we wanted to make something nice and light, that is easy to fold and carry. At the same time, it had to be user-friendly, not too fragile and have really usable performance.

The ECHO 2 is made entirely from high quality and industry proven Porcher cloth, mostly in 27g/m2 weight for both surfaces. On the leading edge there is sturdy 38g/m2 cloth in the centre where it is needed for additional strength and to ensure longevity.

There are small rods in the leading edge, but none are very long, and there are no rods in the back of the sail so it’s easily foldable and can be packed small.

We opted for the same risers as are on the EPIC 2, because they are much easier to handle than Dyneema ‘rope’ style risers, and this wing is designed to be accessible to lower-airtime pilots. We also kept to sheathed lower lines for the same reason, especially for rocky or awkward launches. They are easier to see, so you can spot if they are caught around anything before you try to launch, and it means they can be colour coded so you can easily tell the lines apart.

We worked a LOT on perfecting the launch, and from the feedback we’re getting we reckon we got it right. The light sail comes up like a dream and settles over your head till you decide to go. No holding back or over-flying, and no hurtling forwards at high speed in strong winds. It’s easy and relaxing, just the way we like it!

While safety is always a priority with a low-B wing, the ECHO 2 included, we also wanted the ECHO 2 to have really usable performance. It is a bit faster than the original, and we’ve used a similar B/C steering system to that on the BASE 2, on the EPIC 2 and ECHO 2. You can safely explore the whole bar travel, and learn to correct your direction with the rear risers. There won’t be a lot of pitch-correction to manage with the ECHO 2, and rear-riser steering is a good method to get used to if you’re a newer pilot moving up through the glider levels. If you’d rather not use it yet, that’s fine. The way it’s designed it does not clutter the risers, and can be ignored until you’re ready.

Long brake travel helps avoid an accidental stall or spin, and the brakes are beautifully precise and direct. The handling is BGD through and through – playful and fun and the colours have crept onto the undersurface too for even more pzazz. (And as the pilot you get to see them too, bonus!)`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.92', s: '0.96', m: '1', ml: '1.04', l: '1.08' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.7', s: '19.6', m: '21', ml: '22.7', l: '24.5' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '21', s: '23', m: '25', ml: '27', l: '29' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '3.4', s: '3.6', m: '3.9', ml: '4.1', l: '4.4' },
    { kind: 'penta', label: 'Total line length (m)', xs: '227', s: '233', m: '244', ml: '254', l: '263' },
    { kind: 'penta', label: 'Height (m)', xs: '6.4', s: '7', m: '7.1', ml: '7.3', l: '7.5' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '45' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5.2' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.6' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.5', s: '2.6', m: '2.7', ml: '2.8', l: '3' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.4', s: '10.9', m: '11.4', ml: '11.8', l: '12.3' },
    { kind: 'penta', label: 'Projected span (m)', xs: '8.2', s: '8.5', m: '8.9', ml: '9.3', l: '9.6' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '39' },
    { kind: 'single', label: 'Top speed (km/h)', value: '53' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '9.5' },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '55-75',
      s: '65-85',
      m: '75-95',
      ml: '85-110',
      l: '100-125',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [
      { label: 'Manual V3', path: '/downloads/bgd/echo-2/manual-v3.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/echo-2/line-layout.jpg' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/echo-2/xs-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/echo-2/xs-certificate.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/echo-2/s-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/echo-2/s-certificate.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/echo-2/m-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/echo-2/m-certificate.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/echo-2/ml-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/echo-2/ml-certificate.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'Flight report', path: '/downloads/bgd/echo-2/l-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/echo-2/l-certificate.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex, Classic II 27g/m², 38g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex Classic II 27g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 32g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,3 / 2,7mm' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Allen' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid PPSL and TSL' },
    { label: 'Brakes', value: 'Liros DSL, PPSL' },
  ],
}

const base3: BgdProductDetail = {
  slug: 'base-3',
  title: 'Base 3',
  subtitle: 'EN/LTF-B',
  heroTagline: 'Top of the stack',
  lede:
    'A cross-country wing with top-of-B-class performance and low-B safety – hop on, clip in and sky out!',
  features: [
    '2.5-liner',
    'Reflex profile',
    'Tapered Wing',
    'Unsheathed aramid lines',
    'Winglets',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/base-3--paraglider-2021-2272-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdBase3.hero,
  galleryUrls: bgdBase3.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1728655973-7826.png', label: 'Flame' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1728656047-3001.png', label: 'Glacier' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1728656228-9745.png', label: 'Terra' },
  ],
  sizeM2: { xs: '21', s: '23', m: '24', ml: '26', l: '28' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '60–73' },
    { size: 'S', flatM2: '23', weightRangeKg: '73–84' },
    { size: 'M', flatM2: '24', weightRangeKg: '84–95' },
    { size: 'ML', flatM2: '26', weightRangeKg: '95–108' },
    { size: 'L', flatM2: '28', weightRangeKg: '108–125' },
  ],
  infoHtml: `
    <p>The BASE 3 is our sports-intermediate high-B. Our optimisation software allowed us to increase the performance without increasing the aspect ratio compared to its predecessor. The BASE 3 is born from the BGD Performance Quest project, whose first offspring was the DIVA 2. It clearly shares some family traits: the high arc, short lines, tapered shape and raked wingtips give it a very distinctive silhouette, as well as multiple performance and stability advantages.</p>
    <p>Like the LYNX 2, it is a 2.5-liner. The performance gains from the lower line consumption are enhanced by the lines being unsheathed micro-lines. The 2.5-line layout also gives a really nice two-liner feel with the rear-riser steering.</p>
    <p>The BASE 3 has excellent pitch stability and very low surge tendency, yet it remains a talkative glider, giving the pilot good feedback at all times. And something new for BGD &ndash; the BASE 3 has winglets. A safety feature, they help the glider exit from steep spiral dives.</p>
    <p>The BASE 3 is a real feel-good glider with excellent glide performance, the tool for pilots to break their personal XC bests while feeling safe and at ease.</p>
  `,
  targetHtml: `
    <p>The BASE 3 is for cross-country pilots who have started flying XC on a low-B and are looking for more performance to push their distances. It is stable but informative, and has some secret ninja skills: it&rsquo;s slow-speed handling make it a top-landing demon, and it&rsquo;s really easy to launch in strong winds because it is so pitch stable and does not surge forward. Performance-wise it is top of the EN-B class, but safety-wise it could be a low-B.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `Like the DIVA 2, the BASE 3 has a high arc and short lines. The high arc came about on the DIVA 2 primarily to improve the glide ratio, but we noticed this also resulted in extremely gentle collapse behaviour. Short lines reduce drag and also increase pitch stability, while leaving some roll for a fun and lively feel. It has a reflex profile. This design is often associated with paramotor wings, and it means the profile has a natural pitch-up tendency. With a reflex profile, a lot of lift is produced near the leading edge, creating a force that acts against collapses and improves both active and passive safety. It makes the glider very stable on full bar, and collapses are very easy to anticipate and stop. The tapered planform gives very good slow-speed characteristics, a slow stall speed and a wide margin for pilot error. The raked wingtips very effectively reduce drag. The C-riser steering allows very effective pitch control, and the neoprene ‘cradle’ which serves as a handle is comfortable to hold and easy to use. Unlike a bar-style handle, there are no bits sticking out that could catch in your lines. We have chosen to use cloths that are durable and hard wearing, for real-life abrasion-resistance. The unsheathed Aramid lines are Edelrid 8001U. They have a waterproof coating, and are very dimensionally stable so your glider will stay in trim.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.93', s: '0.96', m: '1', ml: '1.04', l: '1.08' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.7', s: '19.2', m: '20.6', ml: '22.2', l: '24' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '20.9', s: '22.7', m: '24.4', ml: '26.3', l: '28.4' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '4.7', s: '4.9', m: '5.3', ml: '5.5', l: '5.7' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/2/3' },
    { kind: 'single', label: 'Cells', value: '57' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5.7' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.5', s: '2.6', m: '2.7', ml: '2.8', l: '2.9' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.9', s: '11.4', m: '11.8', ml: '12.2', l: '12.7' },
    {
      kind: 'penta',
      label: 'Ideal weight range (kg)',
      xs: '60-73',
      s: '73-84',
      m: '84-95',
      ml: '95-108',
      l: '108-125',
    },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '55-75',
      s: '65-85',
      m: '75-95',
      ml: '88-108',
      l: '100-125',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [
      { label: 'Line plan', path: '/downloads/bgd/base-3/line-plan.jpg' },
      { label: 'Manual v6', path: '/downloads/bgd/base-3/manual-v6.pdf' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/base-3/xs-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/base-3/xs-flight-report.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/base-3/s-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/base-3/s-flight-report.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/base-3/m-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/base-3/m-flight-report.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/base-3/ml-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/base-3/ml-flight-report.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/base-3/l-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/base-3/l-flight-report.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex 38g/m²' },
    { label: 'Bottom surface', value: 'Porcher Eazyfly 40g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 40g/m²' },
    { label: 'Nose reinforcing', value: 'High modulus nylon rod 2mm, 1.5mm' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Riley / Sprenger' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Brakes', value: 'Liros DSL' },
  ],
}

const breeze: BgdProductDetail = {
  slug: 'breeze',
  title: 'Breeze',
  subtitle: 'EN/LTF-B',
  heroTagline: 'Ride the wind',
  lede:
    'Light and easy, like a gentle breeze. The BREEZE is a stress-free glider with top of B-class performance. Hike, fly, camp, repeat!',
  features: [
    '2.5-Liner',
    'B/C steering',
    'BGD Feedback',
    'Lightweight Durable Materials',
    'Reflex profile',
    'Sharp Taper',
    'Unsheathed aramid Lines',
    'Winglets',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/breeze--paraglider-2021-2352-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdBreeze.hero,
  galleryUrls: bgdBreeze.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1742431319-5447.png', label: 'Autumn' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1744299645-7338.png', label: 'Spring' },
  ],
  sizeM2: { xs: '21', s: '23', m: '24', ml: '26' },
  sizes: [
    { size: 'XS', flatM2: '21', weightRangeKg: '60–73' },
    { size: 'S', flatM2: '23', weightRangeKg: '73–84' },
    { size: 'M', flatM2: '24', weightRangeKg: '84–95' },
    { size: 'ML', flatM2: '26', weightRangeKg: '95–108' },
  ],
  infoHtml: `
    <p>Our lightweight sports-intermediate high-B, the BREEZE is a joy to fly. It&rsquo;s the light version of the BASE 3, born from the BGD Performance Project, optimised for performance without increasing aspect ratio. It offers fun, dynamic handling with great feedback and super climb ability in thermals. It is the perfect partner for vol-biv: light to carry with the performance to fly far, yet safe and easy to fly. The light sail rises easily to launch, and its super-safe stall behaviour makes it perfect for top-landing in the mountains. It is very reassuring in turbulent air, thanks to its excellent pitch stability and low surge tendency. The all-important pilot feedback is there, and the BREEZE has BGD&rsquo;s characteristic progressive stability: all our gliders have a very stable, solid centres with progressively softer tips; this means the tips warn about turbulence first, so the pilot can predict and avoid deflations and stay aware of the air.</p>
    <p>The BREEZE will make you feel good in the air, and ready to tackle your most ambitious objectives. It&rsquo;s a natural step up from a low-B like the ECHO 2 &ndash; you&rsquo;ll notice the performance gains, but won&rsquo;t be overwhelmed with extra workload. So what&rsquo;s stopping you? Get planning some vol-biv adventures, pack a BREEZE and ride the wind!</p>
  `,
  targetHtml: `
    <p>A lightweight EN-B, the BREEZE is a safe and performant glider for intermediate pilots with a love of hiking and adventure. It has all the design features, glide and stability advantages of the BASE 3, in a 25% lighter package, weighing just 3.3kg in the XS.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `Weighing 3.3kg to 3.9kg across the four sizes, the BREEZE is significantly lighter than the BASE 3. We used Porcher Skytex 27 cloth on both top and bottom surfaces, chosen for its light weight and proven longevity. 32g/m2 cloth on the leading edge adds durability in high-wear areas. It is a 2.5-liner design: 3 line levels in the centre, two at the tips. The advantages of this are reduced line drag compared to a 3-liner, further emphasised by the choice of unsheathed Edelrid Magix Pro Dry lines. It also has a really nice two-liner feel when using the B/C steering. The BREEZE has BGD Performance Project traits of a high arc, short lines, tapered shape and raked wingtips. Together these increase performance without compromising safety. It has the same excellent slow-speed behaviour as the BASE 3, which makes it a breeze (pun intended!) to top-land. The winglets ensure easy exit from a spiral dive.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.93', s: '0.96', m: '1', ml: '1.04', l: '' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '17.7', s: '19.2', m: '20.6', ml: '22.2', l: '' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '20.9', s: '22.7', m: '24.4', ml: '26.3', l: '' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '3.3', s: '3.6', m: '3.7', ml: '3.9', l: '' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/2/3' },
    { kind: 'single', label: 'Cells', value: '57' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5.7' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.5', s: '2.6', m: '2.7', ml: '2.8', l: '' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.9', s: '11.4', m: '11.8', ml: '12.2', l: '' },
    {
      kind: 'penta',
      label: 'Ideal weight range (kg)',
      xs: '60-73',
      s: '73-84',
      m: '84-95',
      ml: '95-108',
      l: '',
    },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '55-75',
      s: '65-85',
      m: '75-95',
      ml: '88-108',
      l: '',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [{ label: 'Manual V2', path: '/downloads/bgd/breeze/manual-v2.pdf' }],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/breeze/xs-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/breeze/xs-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/breeze/xs-line-lengths.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/breeze/s-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/breeze/s-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/breeze/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/breeze/m-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/breeze/m-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/breeze/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/breeze/ml-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/breeze/ml-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/breeze/ml-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex Classic II 27g/m²' },
    { label: 'Top Surface Leading Edge', value: 'Porcher Skytex 32g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex Classic II 27g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 27g/m²' },
    { label: 'Nose reinforcing', value: 'LSNR (linear stock nylon rod) yellow' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Brakes', value: 'Liros DSL' },
  ],
}

const lynx2: BgdProductDetail = {
  slug: 'lynx-2',
  title: 'Lynx 2',
  subtitle: 'EN C',
  heroTagline: 'Leave No Trace',
  lede:
    'Inspiring confidence in the strongest conditions, the LYNX 2 is a trusty companion that will keep you safe while you move swiftly through the wilds',
  features: [
    'High Performance 2.5 Liner',
    'BGD Parasim Simulation Software',
    'Easy-handling Risers',
    'Light/Durable Porcher cloths',
    'Short Plastic Rods',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/lynx-2--paraglider-2021-1953-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdLynx2.hero,
  galleryUrls: bgdLynx2.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1677602762-0342.png', label: 'Amazon' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1677602878-3162.png', label: 'Java' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1690285886-1251.png', label: 'Namibia' },
  ],
  sizeM2: { xs: '20', s: '21', m: '23', ml: '25', l: '27' },
  sizes: [
    { size: 'XS', flatM2: '20', weightRangeKg: '60–75' },
    { size: 'S', flatM2: '21', weightRangeKg: '70–85' },
    { size: 'M', flatM2: '23', weightRangeKg: '75–95' },
    { size: 'ML', flatM2: '25', weightRangeKg: '88–108' },
    { size: 'L', flatM2: '27', weightRangeKg: '100–120*' },
  ],
  infoHtml: `
    <p>The LYNX 2 is our lightweight EN-C wing. It has excellent cross-country performance with a high comfort factor for its class. It is made to inspire confidence in even the strongest flying conditions, and to keep you safe while you find your wild side in the mountains. We chose a 2.5-liner hybrid design for this wing for several reasons: a fully fledged two-liner would need more supporting rods in the sail, leading to a larger pack volume. We wanted the LYNX 2 to be easy to pack down super small for hiking and racing. The Lynx 2 is also much easier to &lsquo;mush&rsquo; in for a safe top-landing in a wild place, as the three-liner layout in the glider centre gives a large brake range and forgiving stall characteristics. It&rsquo;s also amazingly easy to launch.</p>
    <p class="text-xs text-slate/90 mt-3">* Size L: certified up to 125&nbsp;kg (see manufacturer weight range table).</p>
  `,
  targetHtml: `
    <p>The Lynx 2 is the perfect partner for cross-country pilots who travel light and free, and for those who move swiftly through their habitat, leaving no trace. It&rsquo;s perfect for hike-and-fly races in mountain environments, where its efficiency and performance come with excellent safety and relaxed handling, and ideal for the new serial-class competitions. It&rsquo;s competitive, and also accessible to pilots stepping up from B-class.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Concertina bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `At 3.2kg to 4.3kg across five sizes, the LYNX 2 is among the lightest wings in its category, but that does not mean durability has been sacrificed. We used 32g/m2 cloth in strategic places to reinforce the leading edge where it most needs it. We have also sacrificed a few grams in the risers, choosing easy-handling Kevlar-reinforced 12mm webbing rather than shoelace-style Dyneema. The LYNX 2 is more accessible and easier to fly than the CURE 2, with a slightly lower aspect ratio and cell count. Light, reactive and precise handling and its feeling of performance gives it a two-liner feel and similar performance, but it has the safety, light rear-riser steering, and handling characteristics of a three-liner. Tyr flew a pre-production LYNX 2 in Costa Rica, and said it’s really relaxing in strong, turbulent conditions. “You can do almost the whole flight on the rear-risers!”. An impressive brake range and good slow-speed behaviour mean the LYNX 2 is easy to top-land or sneak into small spaces. It’s one of the reasons we went for a 2.5-line hybrid design rather than a two-liner. The new-design risers have an updated speed system action and a light and effective rear-riser steering system. The LYNX 2 is impressively efficient on bar! The LYNX 2 uses our innovative Spiral Safety System. A rib without cross port vents just inboard from the stabi means that the tip cells lose pressure when the glider is in a deep spiral dive. This helps the glider exit automatically from the deepest spirals on its own without any pilot input.`,
  specRows: [
    { kind: 'penta', label: 'Linear scaling factor', xs: '0.92', s: '0.96', m: '1', ml: '1.04', l: '1.08' },
    { kind: 'penta', label: 'Projected area (m²)', xs: '16.5', s: '17.8', m: '19.5', ml: '21.2', l: '22.9' },
    { kind: 'penta', label: 'Flat area (m²)', xs: '19.5', s: '21', m: '23', ml: '25', l: '27' },
    { kind: 'penta', label: 'Glider weight (kg)', xs: '3.2', s: '3.4', m: '3.7', ml: '4', l: '4.3' },
    { kind: 'penta', label: 'Total line length (m)', xs: '209', s: '226', m: '247', ml: '268', l: '290' },
    { kind: 'penta', label: 'Height (m)', xs: '6.7', s: '7', m: '7.3', ml: '7.6', l: '7.9' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/3/3' },
    { kind: 'single', label: 'Cells', value: '65' },
    { kind: 'single', label: 'Flat aspect ratio', value: '6.2' },
    { kind: 'single', label: 'Projected aspect ratio', value: '4.6' },
    { kind: 'penta', label: 'Root chord (m)', xs: '2.2', s: '2.3', m: '2.4', ml: '2.5', l: '2.6' },
    { kind: 'penta', label: 'Flat span (m)', xs: '10.9', s: '11.3', m: '11.8', ml: '12.3', l: '12.8' },
    { kind: 'penta', label: 'Projected span (m)', xs: '8.7', s: '9', m: '9.5', ml: '9.9', l: '10.3' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '39' },
    { kind: 'single', label: 'Top speed (km/h)', value: '58' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '11' },
    {
      kind: 'penta',
      label: 'Certified weight range (kg)',
      xs: '60-75',
      s: '70-85',
      m: '75-95',
      ml: '88-108',
      l: '100-120*',
    },
    { kind: 'single', label: 'Certification (EN)', value: 'C' },
  ],
  downloads: {
    global: [
      { label: 'Manual V8', path: '/downloads/bgd/lynx-2/manual-v8.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/lynx-2/line-layout.jpg' },
    ],
    perSize: [
      {
        size: 'XS',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/lynx-2/xs-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/lynx-2/xs-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/lynx-2/xs-line-lengths.pdf' },
        ],
      },
      {
        size: 'S',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/lynx-2/s-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/lynx-2/s-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/lynx-2/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/lynx-2/m-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/lynx-2/m-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/lynx-2/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/lynx-2/ml-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/lynx-2/ml-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/lynx-2/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'EN certificate', path: '/downloads/bgd/lynx-2/l-certificate.pdf' },
          { label: 'Flight test report', path: '/downloads/bgd/lynx-2/l-flight-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/lynx-2/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex, Classic II 27g/m², 32g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex Classic II 27g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 27g/m²' },
    { label: 'Nose reinforcing', value: 'High tenacity nylon 2.0mm Black' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Brakes', value: 'PPSL, Edelrid Pro 8001U' },
  ],
}

const cure3: BgdProductDetail = {
  slug: 'cure-3',
  title: 'Cure 3',
  subtitle: 'EN C',
  heroTagline: 'The Miracle',
  lede:
    'Made for big XCs and serial-class racing, our high-performance EN-C two-liner is pure performance and a joy to fly!',
  features: ['2-liner', 'High Arc', 'Raked Wingtips', 'Reflex profile', 'Winglets'],
  officialUrl: 'https://www.flybgd.com/en/paragliders/cure-3--paraglider-2021-2348-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdCure3.hero,
  galleryUrls: bgdCure3.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1744992619-2330.png', label: 'Alkaline' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1744992759-3900.png', label: 'Enzyme' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1744996435-8117.png', label: 'Halogen' },
  ],
  sizeM2: { s: '21', m: '23', ml: '24', l: '26' },
  sizes: [
    { size: 'S', flatM2: '21', weightRangeKg: '73–84' },
    { size: 'M', flatM2: '23', weightRangeKg: '84–95' },
    { size: 'ML', flatM2: '24', weightRangeKg: '95–108' },
    { size: 'L', flatM2: '26', weightRangeKg: '108–119' },
  ],
  infoHtml: `
    <p>The CURE 3 is our cutting-edge, high-performance two-liner EN-C. A product of the BGD Performance project research, it shares family traits and a design philosophy with the DIVA 2, BASE 3 and BREEZE, which means top-of-class performance combined with excellent passive safety and feeling.</p>
    <p>It was designed to take on the best of the EN-C serial-class racing machines, so speed and glide are high priorities. What makes it stand out is that it does this, and has great handling. Small brake inputs have an immediate effect, and the CURE 3 has a really nice turn.</p>
    <p>It has a very fast top speed and excellent stability at speed, with that satisfying and reassuring &lsquo;tightening-up&rsquo; feeling when you push the bar. It&rsquo;s great for thermalling! It can make flat, efficient turns but also loves to be banked up, to dig into those ripper cores and climb out like a rocket.</p>
    <p>And boy, this wing can glide … Bruce described it as having a &lsquo;never-landing feeling&rsquo;. You know, when it&rsquo;s late in the day, the last rays of sun on the hills, you&rsquo;re soaring the ridges, sniffing out lift, but with the CURE 3 it&rsquo;s relaxing as you just don&rsquo;t feel like you&rsquo;ll go down.</p>
    <p class="text-sm text-slate/90 mt-2">Certified LTF D (collapse lines used).</p>
  `,
  targetHtml: `
    <p>The CURE 3 is our high-performance EN-C two-liner, made for big XCs and serial-class racing. It&rsquo;s the miracle cure for those who are hardest bitten by the flying bug!</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `The shape of the CURE 3 has been optimised for efficiency and to streamline performance, using our aerodynamics expertise and Parasim, our in-house simulation software.

It bears a strong resemblance to the DIVA 2 and the BASE 3, but each design is different, adapted to the specific line layout, aspect ratio etc. The CURE 3 has a high arc and short lines, and elegant swept-back and tapered, drag-reducing wingtips. The raked wingtips are particularly pronounced on the CURE 3.

The stabilo is integrated into the AR3 line, offering a line drag reduction because there are fewer lines. Big Ears are done using the AR3 lines. The winglets help the glider to recover automatically from even the steepest spiral dive.

The test team hammer the prototypes with repeated tests at different weights and harnesses, in the toughest conditions. Their job is to make sure it passes the certification of course, but it’s much more than this: they dial up the fun-factor and tighten up the handling, making sure it is an absolute joy to fly and ensuring safe and easy launch and landing behaviour.`,
  specRows: [
    { kind: 'quad', label: 'Linear scaling factor', s: '0.97', m: '1', ml: '1.04', l: '1.08' },
    { kind: 'quad', label: 'Projected area (m²)', s: '17.6', m: '18.9', ml: '20.5', l: '21.9' },
    { kind: 'quad', label: 'Flat area (m²)', s: '21', m: '22.5', ml: '24.4', l: '26.1' },
    { kind: 'quad', label: 'Glider weight (kg)', s: '4.8', m: '5.1', ml: '5.4', l: '5.7' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/3' },
    { kind: 'single', label: 'Cells', value: '70' },
    { kind: 'single', label: 'Flat aspect ratio', value: '6.7' },
    { kind: 'single', label: 'Projected aspect ratio', value: '5.1' },
    { kind: 'quad', label: 'Root chord (m)', s: '2.29', m: '2.37', ml: '2.46', l: '2.55' },
    {
      kind: 'quad',
      label: 'Ideal weight range (kg)',
      s: '73-84',
      m: '84-95',
      ml: '95-108',
      l: '108-119',
    },
    {
      kind: 'quad',
      label: 'Certified weight range (kg)',
      s: '65-85',
      m: '75-95',
      ml: '85-108',
      l: '95-119',
    },
    { kind: 'single', label: 'Certification (EN)', value: 'C' },
  ],
  downloads: {
    global: [
      { label: 'Line layout', path: '/downloads/bgd/cure-3/line-layout.jpg' },
      { label: 'Folding lines', path: '/downloads/bgd/cure-3/folding-lines.jpg' },
      { label: 'Manual V4', path: '/downloads/bgd/cure-3/manual-v4.pdf' },
    ],
    perSize: [
      {
        size: 'S',
        items: [
          { label: 'Test flight report', path: '/downloads/bgd/cure-3/s-test-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/cure-3/s-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/cure-3/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'Test flight report', path: '/downloads/bgd/cure-3/m-test-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/cure-3/m-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/cure-3/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'Test flight report', path: '/downloads/bgd/cure-3/ml-test-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/cure-3/ml-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/cure-3/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'Test flight report', path: '/downloads/bgd/cure-3/l-test-flight-report.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/cure-3/l-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/cure-3/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex 32g/m²' },
    { label: 'Top Surface Leading Edge', value: 'Porcher Skytex 38g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex 32g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 32g/m²' },
    { label: 'Nose reinforcing', value: 'LSNR (linear stock nylon rod) yellow' },
    { label: 'Risers', value: '12mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Riley / Sprenger' },
    { label: 'Top lines', value: 'Edelrid 8001U-50,70,90 (unsheathed Kevlar)' },
    { label: 'Middle lines', value: 'Edelrid 8001U-50,70,90,130 (unsheathed Kevlar)' },
    { label: 'Lower lines', value: 'Edelrid 8001U-130,190,280,340 (unsheathed Kevlar)' },
    { label: 'Brakes', value: 'Edelrid 9200U-30, 8001U-50, PPSL200 (unsheathed Dyneema)' },
  ],
}

const diva2: BgdProductDetail = {
  slug: 'diva-2',
  title: 'Diva 2',
  subtitle: 'EN D',
  heroTagline: 'Born to perform',
  lede:
    'Racy, bold and dressed to impress, the Diva 2 is a high-performance two-liner for XC and competitions.',
  features: [
    'Reflex profile',
    'Raked wingtips',
    'High Arc',
    'Short Lines',
    'Dedicated line design for size S',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/diva-2--paraglider-2021-2188-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdDiva2.hero,
  galleryUrls: bgdDiva2.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1736265579-5478.png', label: 'Emerald' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1736268324-1991.png', label: 'Sapphire' },
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1736268623-6276.png', label: 'Ruby' },
  ],
  sizeM2: { s: '21', m: '23', ml: '24', l: '26' },
  sizes: [
    { size: 'S', flatM2: '21', weightRangeKg: '80–90' },
    { size: 'M', flatM2: '23', weightRangeKg: '90–100' },
    { size: 'ML', flatM2: '24', weightRangeKg: '100–108' },
    { size: 'L', flatM2: '26', weightRangeKg: '108–120' },
  ],
  infoHtml: `
    <p>The Diva 2 is out to get what she wants, and she wants to win! We unashamedly admit we designed her to beat the best of the competition. That bar is way high and ever moving, and the Diva 2 has been a few years in development. She&rsquo;s a product of the BGD Performance Quest project, which has involved huge amounts of numerical analysis and exploration of new ideas from our young R&amp;D team. The computers have been smoking! Though the project and the quest for more performance will never end, we are confident the Diva 2 is ready to stand up against the competition and set a benchmark in her class.</p>
    <p>We have worked very hard to maximise the performance of the small size Diva 2. Through a dedicated load test and months of fine-tuning and trimming, with our R&amp;D team and also in numerous competitions, we made sure that our test pilot Tyr Goldsmith, who is only 60kg, would fly a very competitive glider, therefore reducing the differences between light and heavy pilots.</p>
    <p>The Diva 2 has fast, responsive handling, a high top speed, excellent glide and stability at all speeds. On bar, the B riser pressure is very light, a testament to the high stability and giving it its unique feeling &ndash; after a few hours, you will not want to go back! This effect has been achieved by maximising the amount of &lsquo;reflex&rsquo; in the shape of the aerofoil. It means you can be really confident to push full bar even in difficult situations.</p>
    <p>While the Diva 2 remains relatively easy to fly, she is designed for experienced pilots with the glider-handling skills to match a fast and high-performance wing.</p>
  `,
  targetHtml: `
    <p>An all-out 2-liner performance machine, the Diva 2 has winning DNA and EN-D safety. Made for competition pilots and big distance hunters, she&rsquo;s very fast and stable, with exceptional glide performance.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Riser bag',
    'Concertina bag',
    'Rucksack',
    'Repair cloth',
    'BGD gift',
  ],
  designerNotes: `The Diva 2 likes to be noticed in a crowd. Her fashion choice is bright and bold, and her silhouette stands out with her high arc and short lines. Short lines not only reduce parasitic drag, but give the pilot a really close, connected feel to the wing.

She’s fast and racy, with a full 20cm range on the accelerator. This incredible speed range has been made possible thanks to the unprecedented level of pitch stability as a result of the short-line design and reflex aerofoils.

You can rely on the Diva 2 to remain calm in a crisis. Her behaviour when taken outside of the normal flight envelope is exemplary. After asymmetric collapses, even accelerated, she only turns gently. Stalls are easily controllable and cravats rare. We’ve flown lots of spiral dives, and the Diva 2 recovers without input from even the deepest dives.

PILOT FEEDBACK

"The Diva 2 flies really well and gives a safe feeling. It has everything that a performance competition wing needs in competitions. I hope more pilots will give it a try and enjoy flying it like I do." – Junming Song, China

"It has a really stable full acceleration in the final glide with a guaranteed goal arrival altitude, I was able to overtake many CCC wings" – Chigwon Won, South Korea`,
  specRows: [
    { kind: 'quad', label: 'Linear scaling factor', s: '1', m: '1.04', ml: '1.06', l: '1.1' },
    { kind: 'quad', label: 'Projected area (m²)', s: '17.6', m: '18.9', ml: '19.7', l: '21.4' },
    { kind: 'quad', label: 'Flat area (m²)', s: '21', m: '22.5', ml: '23.5', l: '25.5' },
    { kind: 'quad', label: 'Glider weight (kg)', s: '5.2', m: '5.39', ml: '5.52', l: '5.84' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/3' },
    { kind: 'single', label: 'Cells', value: '86' },
    { kind: 'single', label: 'Flat aspect ratio', value: '7' },
    { kind: 'quad', label: 'Root chord (m)', s: '2.16', m: '2.23', ml: '2.28', l: '2.38' },
    { kind: 'quad', label: 'Flat span (m)', s: '12.1', m: '12.6', ml: '12.8', l: '13.4' },
    {
      kind: 'quad',
      label: 'Ideal weight range (kg)',
      s: '80-90',
      m: '90-100',
      ml: '100-108',
      l: '108-120',
    },
    {
      kind: 'quad',
      label: 'Certified weight range (kg)',
      s: '75-90',
      m: '80-100',
      ml: '88-108',
      l: '100-120',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'EN D' },
  ],
  downloads: {
    global: [
      { label: 'Brochure', path: '/downloads/bgd/diva-2/brochure.pdf' },
      { label: 'Manual V3', path: '/downloads/bgd/diva-2/manual-v3.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/diva-2/line-layout.jpg' },
    ],
    perSize: [
      {
        size: 'S',
        items: [
          { label: 'Test report', path: '/downloads/bgd/diva-2/s-test-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/diva-2/s-line-lengths.pdf' },
        ],
      },
      {
        size: 'M',
        items: [
          { label: 'Test report', path: '/downloads/bgd/diva-2/m-test-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/diva-2/m-line-lengths.pdf' },
        ],
      },
      {
        size: 'ML',
        items: [
          { label: 'Test report', path: '/downloads/bgd/diva-2/ml-test-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/diva-2/ml-line-lengths.pdf' },
        ],
      },
      {
        size: 'L',
        items: [
          { label: 'Test report', path: '/downloads/bgd/diva-2/l-test-report.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/diva-2/l-line-lengths.pdf' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex, Classic II 27g/m², 32g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex 27g/m² and 32g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 32g/m²' },
    { label: 'Nose reinforcing', value: '2mm black Perlon / 1.5mm white nylon line' },
    { label: 'Pulleys', value: 'Harken / Sprenger' },
    { label: 'Risers', value: '12mm nylon black' },
    { label: 'Top lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Middle lines', value: 'Edelrid Magix Pro Dry 8001U' },
    { label: 'Lower lines', value: 'Edelrid Magix Pro Dry 8001U' },
  ],
}

const seed: BgdProductDetail = {
  slug: 'seed',
  title: 'Seed',
  subtitle: 'Ground-handling',
  heroTagline: 'Grow your skills',
  lede: 'Great pilots were first great ground handlers. Learn to kite, grow your skills.',
  features: [
    'Chord Cut Billow (CCB)',
    'Snap Locks',
    'Strong shark nose',
    'Weight-optimised ribs',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/seed--paraglider-2021-992-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdSeed.hero,
  galleryUrls: bgdSeed.gallery,
  colourOptions: [
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1561057164-0570.png?v=1561057169',
      label: 'Inferno',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1561057222-9382.png?v=1561057226',
      label: 'Blaze',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1556087571-0397.png?v=1556087576',
      label: 'Forest',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1556087644-2853.png?v=1556087649',
      label: 'Tundra',
    },
  ],
  heroSizeSingle: { columnLabel: '14', flatM2: '14' },
  sizeM2: { s: '14', m: '14', ml: '14' },
  sizes: [{ size: '14', flatM2: '14', weightRangeKg: '30–120' }],
  infoHtml: `
    <p>The SEED is our affordable premier training paraglider, made for ground-handling only. The SEED was developed from the EN-B EPIC, and acts and feels like a full-size paraglider. It is made from durable 50g cloth and has three risers. It&rsquo;s a fun accessory for parawaiting at take-off, practicing kiting, or just goofing around like Spiderman.</p>
  `,
  targetHtml: `
    <p>Blown out? Grab a SEED and refine your skills! Ground-handling is never a waste of time, even for professionals. You can learn essential skills that directly relate to in the air flying. Deflations, stalls, brake pressure and active piloting can all be practiced while kiting the SEED safely on the ground.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Repair cloth',
    'BGD stickers',
    'Manual card',
  ],
  designerNotes: `I kept the design of the SEED as simple as possible, while incorporating the most essential and up-to-date designs features. A strong shark nose, CCB, 3D panel shaping on the lower surface and countless other features make the SEED feel like a normal paraglider. I always say, “good ground-handlers make good pilots” and the SEED was produced to teach the most essential skills in a glider small enough to manage even in strong winds.`,
  specRows: [
    { kind: 'single', label: 'Linear scaling factor', value: '0.78' },
    { kind: 'single', label: 'Projected area (m²)', value: '11.9' },
    { kind: 'single', label: 'Flat area (m²)', value: '14' },
    { kind: 'single', label: 'Glider weight (kg)', value: '2.7' },
    { kind: 'single', label: 'Total line length (m)', value: '194' },
    { kind: 'single', label: 'Height (m)', value: '5.3' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3' },
    { kind: 'single', label: 'Cells', value: '31' },
    { kind: 'single', label: 'Flat aspect ratio', value: '4.4' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.2' },
    { kind: 'single', label: 'Root chord (m)', value: '2.2' },
    { kind: 'single', label: 'Flat span (m)', value: '7.9' },
    { kind: 'single', label: 'Projected span (m)', value: '6.3' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '45' },
    { kind: 'single', label: 'Top speed (km/h)', value: '45' },
    { kind: 'single', label: 'Min sink (m/s)', value: '2' },
    { kind: 'single', label: 'Best glide', value: '5' },
    { kind: 'single', label: 'Certified weight range (kg)', value: '30-120' },
    { kind: 'single', label: 'Certification (EN/LTF)', value: '—' },
  ],
  downloads: {
    global: [
      {
        label: 'Planform for custom logos (.svg)',
        path: '/downloads/bgd/seed/planform-custom-logos.svg',
      },
    ],
    perSize: [
      {
        size: '14',
        items: [
          { label: 'Certificate', path: '/downloads/bgd/seed/certificate.pdf' },
          { label: 'Line layout', path: '/downloads/bgd/seed/line-layout.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/seed/line-lengths.xlsx' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Dominico D30 42g/m²' },
    { label: 'Bottom surface', value: 'Dominico D30 42g/m²' },
    { label: 'Internal structure', value: 'Dominico D30 hard finish 42g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,3 / 2,7mm' },
    { label: 'Risers', value: '13mm Kevlar / nylon webbing' },
    { label: 'Top lines', value: 'Liros DSL' },
    { label: 'Middle lines', value: 'Liros DSL – sheathed Dyneema' },
    { label: 'Lower lines', value: 'Edelrid – sheathed Kevlar 7343' },
    { label: 'Brakes', value: 'Liros DSL' },
  ],
}

const dual3: BgdProductDetail = {
  slug: 'dual-3',
  title: 'Dual 3',
  subtitle: 'EN/LTF-B',
  heroTagline: 'Thrill and chill',
  lede:
    'With effortless launching and a smooth, relaxed feel, the DUAL 3 performs in harmony with pilot and passenger',
  features: [
    'Three sizes',
    'Big Ears blocker',
    'Effortless launch',
    'New trimmers',
    'Smooth relaxed feel',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/dual-3--paraglider-2021-2515-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdDual3.hero,
  galleryUrls: bgdDual3.gallery,
  colourOptions: [
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1753110287-2696.png?v=1753110297',
      label: 'Cherry',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1753110353-7943.png?v=1753110364',
      label: 'Fern',
    },
    {
      imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1753110540-1308.png?v=1753110550',
      label: 'Lemon',
    },
  ],
  heroTriple: { labels: ['38', '41', '43'] },
  sizeM2: { s: '38', m: '41', ml: '43' },
  sizes: [
    { size: '38', flatM2: '38', weightRangeKg: '130–180' },
    { size: '41', flatM2: '41', weightRangeKg: '140–190' },
    { size: '43', flatM2: '43', weightRangeKg: '150–200' },
  ],
  infoHtml: `
    <p>A clean-sheet redesign of our popular tandem glider, the Dual 3 delivers next-level performance, precision, and fun. Built for professional pilots and passionate privateers alike, it climbs and glides like a solo wing, yet retains that signature BGD ease and comfort in the air. With sharper handling, enhanced speed range and a lightweight, streamlined construction, the Dual 3 brings more zing for the pilot and more zen for the passenger.</p>
    <p>It launches effortlessly, climbs in weak thermals, and handles with playful precision &ndash; this is a tandem that turns work into pleasure, and leisure into joy.</p>
    <p><strong>COLOURS</strong> The Dual 3 can be ordered with a coloured undersurface at no additional cost. Delivery time is extended by 5&ndash;8 weeks.</p>
  `,
  targetHtml: `
    <p>The Dual 3 is equally at home working all day on the hill or taking your favourite passenger for a sunset flight. Whether you&rsquo;re clocking up tandems or just flying for fun, the smooth handling and light feel make every flight a pleasure.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'Replacement Trimmers',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `This is not an upgrade – it's a brand-new wing. We started fresh with the DUAL 3, aiming to make a tandem that really feels like flying solo. The handling is crisp and direct. You can core thermals with ease, pull smooth wingovers, and even cobra launch if the mood takes you.

We worked a lot on the brake geometry – getting just the right amount of feedback and response so it’s intuitive and fun for the pilot while remaining super smooth and relaxing for the passenger. Thrill and chill!

We re-engineered the trimmers, too: they now have a full 16cm of direct travel (no more 2:1 ratio) and 25mm rollercam buckles with a neoprene cover. That means more usable speed, better handling in wind, and easy, fast adjustment.

By simplifying the construction we’ve made it lighter than the Dual 2 without compromising performance. The glide is better, the climb rate is impressive, and the overall experience is just... a joy.

This is our best tandem yet – a real pilot’s tandem that still pampers the passenger.`,
  specRows: [
    { kind: 'triple', label: 'Linear scaling factor', s: '0.97', m: '1', ml: '1.03' },
    { kind: 'triple', label: 'Projected area (m²)', s: '32', m: '34', ml: '37' },
    { kind: 'triple', label: 'Flat area (m²)', s: '38', m: '41', ml: '43' },
    { kind: 'triple', label: 'Glider weight (kg)', s: '7', m: '7.3', ml: '7.6' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/3/4/2' },
    { kind: 'single', label: 'Cells', value: '53' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5.45' },
    { kind: 'triple', label: 'Root chord (m)', s: '3.2', m: '3.3', ml: '3.4' },
    { kind: 'triple', label: 'Flat span (m)', s: '14.4', m: '14.8', ml: '15.3' },
    {
      kind: 'triple',
      label: 'Ideal weight range (kg)',
      s: '130-180',
      m: '140-190',
      ml: '150-200',
    },
    {
      kind: 'triple',
      label: 'Certified weight range (kg)',
      s: '110-200',
      m: '120-215',
      ml: '120-239',
    },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [
      { label: 'Line layout', path: '/downloads/bgd/dual-3/line-layout.jpg' },
      { label: 'Manual V7', path: '/downloads/bgd/dual-3/manual-v7.pdf' },
    ],
    perSize: [],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex 38g/m²' },
    { label: 'Bottom surface', value: 'MJ32 32g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 40g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,0 / 2,5mm' },
    { label: 'Risers', value: '20mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Riley' },
    { label: 'Top lines', value: 'Liros DC' },
    { label: 'Middle lines', value: 'Liros TSL' },
    { label: 'Lower lines', value: 'Liros TSL' },
  ],
}

const dualLite: BgdProductDetail = {
  slug: 'dual-lite',
  title: 'Dual Lite',
  subtitle: 'EN/LTF-B',
  heroTagline: 'Share the Adventure',
  lede:
    'Specifically designed for adventure teams we have optimised performance, weight, and safety making hike-and-fly, vol bivouac, and big XCs easier.',
  features: [
    'Chord Cut Billow (CCB)',
    'Elliptical Cell Openings',
    'Effortless Two-Step Launch',
    'Smooth relaxed feel',
  ],
  officialUrl: 'https://www.flybgd.com/en/paragliders/dual-lite--paraglider-2021-1024-0.html',
  freeDemoUrl: 'https://www.flybgd.com/en/paragliders/free-demo-92-0-0.html',
  heroImageUrl: bgdDualLite.hero,
  galleryUrls: bgdDualLite.gallery,
  colourOptions: [
    { imageUrl: 'https://cdn.flybgd.com/files/photo/mini/1728402056-0695.png', label: 'Tulip' },
  ],
  heroSizeSingle: { columnLabel: '40', flatM2: '40' },
  sizeM2: { s: '40', m: '40', ml: '40' },
  sizes: [{ size: '40', flatM2: '40', weightRangeKg: '120–220' }],
  infoHtml: `
    <p>Extra water, food or wine could make up for the almost 1.1kg of weight we have skimmed off the DUAL (without losing much durability). With a mix of carefully allocated 27, 34, and 40 gram cloth the EN-B certified DUAL LITE feels like its parent &ndash; power steering, loads of feedback, and efficient characteristics.</p>
  `,
  targetHtml: `
    <p>If you have a lightweight tent (for two), two -10 degree sleeping bags, a gas burner, a couple of reversible harnesses, a GPS tracker and two flexible jobs, the DUAL LITE is for you. The DUAL LITE is designed specifically for adventurous teams. Its performance, safety, and weight have been optimised for long vol-bivouac flights and hike-and-fly.</p>
  `,
  packageIncludes: [
    'Paraglider',
    'Compression strap',
    'Riser bag',
    'Inner bag',
    'Rucksack',
    'Repair cloth',
    'Replacement Trimmers',
    'BGD stickers',
    'BGD gift',
    'Manual card',
  ],
  designerNotes: `Just after Tyr was born I was trying to convince Arna that paragliders are as nice as hang gliders. I wanted to charm her into the sport with a lovely XC flight. We took off one sunny morning from Séderon, France and headed into the heart of the Vercors. It was a glorious flying day. We soared low and slow along cliffs and over grazing deer. We caressed the cumulus clouds with our wing tip. I wanted to show her that flying a slow aircraft could be really rewarding. She enjoyed it so much she was constantly attempting to back/front-seat-pilot the tandem. She soon realised it was best to just let go and enjoy the strong thermals. 80km and five hours later, slightly sore but glowing, we landed in La Chapelle-en-Vercors next to a perfect little restaurant where we had dinner. Arna now flies an EN-B Wasp and is a part owner of BGD. I think I convinced her.

I designed the DUAL LITE to help convince friends/partners/spouses that paragliding is a convenient, adventurous sport. Whether it is a simple hike-and-fly or a long vol-bivouac expedition the DUAL LITE delivers. Like the DUAL, the DUAL LITE is a wing that has a very clean leading edge (Cord Cut Billow) making the low cell count (50 cells) feasible thus reducing the weight, line consumption and complexity of the paraglider. I think the DUAL LITE really benefits from the DUAL's renowned light handling. Its launching characteristics even surprised me – the wing floats up with very little effort from the pilot.`,
  specRows: [
    { kind: 'single', label: 'Linear scaling factor', value: '1' },
    { kind: 'single', label: 'Projected area (m²)', value: '34.3' },
    { kind: 'single', label: 'Flat area (m²)', value: '40' },
    { kind: 'single', label: 'Glider weight (kg)', value: '6.4' },
    { kind: 'single', label: 'Total line length (m)', value: '450' },
    { kind: 'single', label: 'Height (m)', value: '9.4' },
    { kind: 'single', label: 'Number of main lines (A/B/C)', value: '3/4/3/2' },
    { kind: 'single', label: 'Cells', value: '52' },
    { kind: 'single', label: 'Flat aspect ratio', value: '5.3' },
    { kind: 'single', label: 'Projected aspect ratio', value: '3.9' },
    { kind: 'single', label: 'Root chord (m)', value: '3.5' },
    { kind: 'single', label: 'Flat span (m)', value: '15.6' },
    { kind: 'single', label: 'Projected span (m)', value: '11.5' },
    { kind: 'single', label: 'Trim speed (km/h)', value: '42' },
    { kind: 'single', label: 'Top speed (km/h)', value: '52' },
    { kind: 'single', label: 'Min sink (m/s)', value: '1' },
    { kind: 'single', label: 'Best glide', value: '9' },
    { kind: 'single', label: 'Certified weight range (kg)', value: '120-220' },
    { kind: 'single', label: 'Certification (EN/LTF)', value: 'B' },
  ],
  downloads: {
    global: [
      { label: 'Manual V1.4', path: '/downloads/bgd/dual-lite/manual-v1.4.pdf' },
      { label: 'Line layout', path: '/downloads/bgd/dual-lite/line-layout.jpg' },
    ],
    perSize: [
      {
        size: '40',
        items: [
          { label: 'LTF certificate', path: '/downloads/bgd/dual-lite/certificate.pdf' },
          { label: 'EN certificate', path: '/downloads/bgd/dual-lite/certificate.pdf' },
          { label: 'DGAC certificate', path: '/downloads/bgd/dual-lite/dgac-certificate.pdf' },
          { label: 'Line lengths', path: '/downloads/bgd/dual-lite/line-lengths.xlsx' },
        ],
      },
    ],
  },
  materialRows: [
    { label: 'Top surface', value: 'Porcher Skytex, Classic II 27g/m², 40g/m²' },
    { label: 'Bottom surface', value: 'Porcher Skytex Classic II 27g/m²' },
    { label: 'Internal structure', value: 'Porcher Skytex hard finish 32g/m²' },
    { label: 'Nose reinforcing', value: 'Plastic wire 2,0 / 2,5mm' },
    { label: 'Risers', value: '20mm Kevlar / nylon webbing' },
    { label: 'Pulleys', value: 'Riley' },
    { label: 'Top lines', value: 'Liros DC' },
    { label: 'Middle lines', value: 'Liros TSL' },
    { label: 'Lower lines', value: 'Liros TSL' },
    { label: 'Brakes', value: 'Liros DSL, PPSL' },
  ],
}

const bySlug: Record<string, BgdProductDetail> = {
  'adam-2': adam2,
  'adam-spot': adamSpot,
  anda,
  'base-3': base3,
  breeze,
  'cure-3': cure3,
  'diva-2': diva2,
  'dual-3': dual3,
  'dual-lite': dualLite,
  'echo-2': echo2,
  'epic-2': epic2,
  'epic-freestyle': epicFreestyle,
  'lynx-2': lynx2,
  'magic-2': magic2,
  seed,
}

export function getBgdProductDetail(slug: string): BgdProductDetail | undefined {
  return bySlug[slug]
}
