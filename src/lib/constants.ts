// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for business data, services, service-area cities,
// team, and testimonials for Choice One Restoration.
//
// Content sourced from the owner (Bill Bishop) + their live site
// choice1restoration.com. Items marked TODO await owner confirmation.
// ─────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Choice One Restoration",
  legalName: "Choice One Restoration, LP",
  shortName: "Choice One",
  tagline: "Quality Roofing Solutions for Your Home and Business.",
  founded: 2010,
  yearsExperience: "15+",
  blurb:
    "Choice One Restoration is your local, family-owned team for roofing, siding, gutters, and windows across Northeast Ohio. With expert Amish installers and 15 years of craftsmanship, we treat every home like our own, and we'll handle your insurance claim from start to finish.",
  phone: "(330) 688-7663",
  phoneSpoken: "(330) 688-ROOF",
  phoneE164: "+13306887663", // for tel:/sms: links
  email: "bbishop@choice1restoration.com",
  // Pre-filled message for the mobile "Text Us" button.
  smsMessage: "Hi Choice One Restoration! I'd like to schedule my free inspection.",
  serviceRadiusMiles: 35,
  address: {
    street: "171 Court Dr, Suite 102",
    city: "Fairlawn",
    state: "OH",
    county: "Summit County",
    zip: "44333",
  },
  // Aggregate Google rating (Google Business Profile). count = 0 means the exact
  // total is unconfirmed, so the UI shows "on Google" instead of a fabricated number.
  rating: { value: 4.9, count: 0 }, // TODO confirm exact review count with owner
  // TODO: confirm business hours with owner (placeholder below).
  hours: [
    { day: "Monday", value: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", value: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", value: "8:00 AM - 5:00 PM" },
    { day: "Thursday", value: "8:00 AM - 5:00 PM" },
    { day: "Friday", value: "8:00 AM - 5:00 PM" },
    { day: "Saturday", value: "By Appointment" },
    { day: "Sunday", value: "Closed" },
  ],
  hoursSpec: {
    weekdays: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
  },
  social: {
    facebook: "https://www.facebook.com/choiceonerestorationoh",
    instagram: "https://www.instagram.com/choiceonerestorationoh",
  },
  googleBusinessProfile: "", // TODO: add GBP share link
  geo: { lat: 41.1289, lng: -81.609 }, // Fairlawn, OH (HQ)
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Our Team", href: "/team" },
  { label: "Insurance Claims", href: "/insurance-claims" },
  { label: "Contact", href: "/contact" },
] as const;

export const IMAGES = {
  logo: "/images/choice-one-logo.png",
  // Real Choice One project photos (owner-provided 2026-05-26).
  heroHome: "/images/hero-home.jpg", // crew + branded Choice One trailer
  roofing: "/images/roofing.jpg", // aerial of finished residential roof
  siding: "/images/siding-real.jpg", // navy board-and-batten siding home
  gutters: "/images/gutters-real.jpg", // seamless gutter + downspout close-up
  windows: "/images/windows-real.jpg", // window-lined stone-facade home
  stormDamage: "/images/storm-damage.jpg", // active roof tear-off
  insurance: "/images/insurance.jpg", // multi-unit roofing project
  commercialRoof: "/images/commercial-roof.jpg",
  homeLuxury: "/images/home-luxury.jpg", // finished luxury home (Contact hero)
  teamCrew: "/images/team-crew.jpg", // two team members on a roof
} as const;

// What we tell homeowners about how a project runs, start to finish.
export const PROCESS = [
  {
    title: "Free Inspection",
    body: "We climb up, take a close look, photograph everything, and give you an honest assessment. No cost, no pressure.",
  },
  {
    title: "We Handle the Insurance",
    body: "Storm or hail damage? We document the full scope and work directly with your insurance company so your claim is done right.",
  },
  {
    title: "Expert Amish Installation",
    body: "Our skilled Amish crews install your roof, siding, gutters, or windows with the kind of craftsmanship that's getting harder to find.",
  },
  {
    title: "Clean, Guaranteed Finish",
    body: "We protect your property, sweep for every stray nail, and back our work with a written workmanship warranty.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  short: string;
  image: string;
  intro: string;
  bullets: string[];
  body: string[];
};

// Brochure service set — the owner's core offering. Each renders a /services/:slug page.
export const SERVICES: Service[] = [
  {
    slug: "roofing",
    title: "Roofing",
    navTitle: "Roofing",
    short:
      "Roof replacement, repair, and storm restoration built to handle whatever Ohio weather throws at it.",
    image: IMAGES.roofing,
    intro:
      "Your roof is the first line of defense for everything beneath it. From full replacements to targeted repairs and storm restoration, our expert Amish crews install roofs built to last, and we'll work with your insurance every step of the way.",
    bullets: [
      "Full roof replacement & tear-off",
      "Repairs, maintenance & roof coatings",
      "Emergency storm, wind & hail repair",
      "Skylight installation & soffit/fascia",
    ],
    body: [
      "A roof is a system, not just shingles. We start with a thorough inspection, then build back with quality underlayment, proper ventilation, flashing, and shingles installed to manufacturer spec, so you get the full warranty and a roof that holds up for decades.",
      "Whether it's a few missing shingles, a leak, or full storm damage, we'll give you an honest recommendation and stand behind the work with our written workmanship guarantee.",
    ],
  },
  {
    slug: "siding",
    title: "Siding",
    navTitle: "Siding",
    short:
      "Vinyl and insulated siding that seals your home against the weather and transforms its curb appeal.",
    image: IMAGES.siding,
    intro:
      "New siding is the fastest way to transform a home's appearance while sealing it against moisture and energy loss. We install vinyl, insulated, and fiber-cement systems with proper house wrap and flashing, done by craftsmen who care about the details.",
    bullets: [
      "Vinyl & insulated vinyl siding",
      "Fiber-cement siding systems",
      "House wrap & moisture management",
      "Trim, soffit & fascia",
    ],
    body: [
      "Siding does more than look good. It's your home's weather barrier. We install the underlying moisture management correctly so your walls stay dry, then finish with siding and trim that elevate the whole exterior.",
      "Damaged from a storm or fallen tree? We handle the insurance side too, so getting your home back to beautiful is one less thing to worry about.",
    ],
  },
  {
    slug: "gutters",
    title: "Gutters",
    navTitle: "Gutters",
    short:
      "Seamless gutters and guards that move water away from your roof, siding, and foundation.",
    image: IMAGES.gutters,
    intro:
      "Gutters protect your roof, siding, and foundation by channeling water away from the house. We install seamless aluminum gutters and clog-resistant guard systems sized for Ohio's heavy rain and snowmelt.",
    bullets: [
      "Seamless aluminum gutters",
      "Gutter guard / leaf-protection systems",
      "Downspouts & proper drainage",
      "Repair, re-pitching & cleaning",
    ],
    body: [
      "We size and pitch every run so water flows where it should, then add guards to keep leaves and debris out, so your gutters keep working without constant cleaning.",
      "Properly working gutters are one of the most important, and most overlooked, ways to protect your home from water damage.",
    ],
  },
  {
    slug: "windows",
    title: "Windows",
    navTitle: "Windows",
    short:
      "Energy-efficient replacement windows that cut drafts, lower bills, and modernize your home.",
    image: IMAGES.windows,
    intro:
      "Old windows leak air and money. We install energy-efficient replacement windows, properly measured, flashed, and sealed, to improve comfort, reduce noise, and lower your heating and cooling costs.",
    bullets: [
      "Double- & triple-pane energy-efficient units",
      "Vinyl & composite frames",
      "Proper flashing & air sealing",
      "Full-frame & insert replacement",
    ],
    body: [
      "A window is only as good as its installation. We measure each opening, set the unit level and square, and air-seal and flash it so you get the full efficiency the glass is rated for.",
      "New windows are one of the highest-return upgrades you can make: better comfort, lower bills, and a fresh new look inside and out.",
    ],
  },
  {
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration",
    navTitle: "Storm Damage",
    short:
      "Insurance-claim-ready storm, wind, hail, and fire damage inspection and full exterior restoration.",
    image: IMAGES.stormDamage,
    intro:
      "When a storm hits, you need a contractor who can document the damage, work with your insurance, and restore your exterior fast. We provide thorough inspections, clear reports, and complete storm restoration, start to finish.",
    bullets: [
      "Free storm, wind & hail inspections",
      "Insurance claim documentation & management",
      "Emergency tarping & leak mitigation",
      "Full roof, siding & gutter restoration",
    ],
    body: [
      "Storm damage isn't always obvious from the ground. We perform a detailed inspection, photograph and document every issue, and provide a clear report you and your insurer can act on.",
      "We're not afraid to fight for a fair claim. Our customers regularly tell us we got their roof approved when other companies said it couldn't be done. From emergency tarping to full restoration, we manage the project end to end.",
    ],
  },
];

export type City = {
  slug: string;
  name: string;
  county: string;
  intro: string;
  nearby: string[];
};

// Per-city local landing pages targeting "roofing / siding / gutters <city> OH".
// Covers Choice One's Northeast Ohio footprint (Summit, Medina, Wayne & Stark).
export const CITIES: City[] = [
  {
    slug: "fairlawn",
    name: "Fairlawn",
    county: "Summit County",
    intro:
      "Fairlawn is home base for Choice One Restoration. Our office is right here on Court Drive. We're proud to take care of our neighbors with expert roofing, siding, gutter, and window work, and we're never more than a few minutes away.",
    nearby: ["Akron", "Copley", "Bath", "Montrose"],
  },
  {
    slug: "akron",
    name: "Akron",
    county: "Summit County",
    intro:
      "From the historic homes in Highland Square to the newer builds out west, we install and repair roofing, siding, gutters, and windows all over Akron, and we know exactly what Ohio weather does to a home here.",
    nearby: ["Fairlawn", "Barberton", "Cuyahoga Falls", "Copley"],
  },
  {
    slug: "barberton",
    name: "Barberton",
    county: "Summit County",
    intro:
      "We're proud to take care of our Magic City neighbors with roof replacements, siding, gutters, windows, and full storm damage restoration. Quality work from a team that treats your home like our own.",
    nearby: ["Norton", "Akron", "Wadsworth", "Clinton"],
  },
  {
    slug: "copley",
    name: "Copley",
    county: "Summit County",
    intro:
      "Copley homeowners count on us for roofing, siding, and replacement windows that look great and stand up to Northeast Ohio's freeze-thaw winters. We're right next door in Fairlawn and happy to take a look anytime.",
    nearby: ["Fairlawn", "Akron", "Norton", "Montrose"],
  },
  {
    slug: "norton",
    name: "Norton",
    county: "Summit County",
    intro:
      "From roof replacements to new siding and seamless gutters, we help Norton homeowners protect and refresh their homes with expert Amish craftsmanship and honest, no-pressure pricing.",
    nearby: ["Barberton", "Wadsworth", "Copley", "Clinton"],
  },
  {
    slug: "stow",
    name: "Stow",
    county: "Summit County",
    intro:
      "Stow homeowners trust us for roofing, siding, and window projects that look great and hold up for the long haul, and we'll handle the insurance company for you if there's storm damage.",
    nearby: ["Cuyahoga Falls", "Hudson", "Munroe Falls", "Tallmadge"],
  },
  {
    slug: "hudson",
    name: "Hudson",
    county: "Summit County",
    intro:
      "From Hudson's historic district to its newer subdivisions, we deliver roofing, siding, gutter, and window work that respects the character of your home and protects it for decades.",
    nearby: ["Stow", "Twinsburg", "Aurora", "Cuyahoga Falls"],
  },
  {
    slug: "new-franklin",
    name: "New Franklin",
    county: "Summit County",
    intro:
      "We keep New Franklin and Portage Lakes homes protected with durable roofing, siding, and gutter systems built to handle lakeside weather and Ohio winters alike.",
    nearby: ["Clinton", "Barberton", "Green", "Akron"],
  },
  {
    slug: "clinton",
    name: "Clinton",
    county: "Summit County",
    intro:
      "Clinton and the surrounding Portage Lakes area homeowners trust us for roofing, siding, and windows built for everything Ohio weather throws at them.",
    nearby: ["Barberton", "New Franklin", "Norton", "Wadsworth"],
  },
  {
    slug: "wadsworth",
    name: "Wadsworth",
    county: "Medina County",
    intro:
      "We're a familiar face in Wadsworth, handling roofing, siding, gutters, and windows for homeowners across town. Quality work from a local, family-owned team you can count on.",
    nearby: ["Barberton", "Rittman", "Medina", "Norton"],
  },
  {
    slug: "medina",
    name: "Medina",
    county: "Medina County",
    intro:
      "From the historic homes around Medina Square to the newer developments off Route 18, we provide roofing, siding, gutter, and window work that fits the character of every home.",
    nearby: ["Wadsworth", "Brunswick", "Seville", "Lodi"],
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    county: "Medina County",
    intro:
      "Brunswick homeowners count on us for roof replacements, new siding, energy-efficient windows, and seamless gutters, installed right the first time and backed by our written workmanship warranty.",
    nearby: ["Medina", "Strongsville", "Hinckley", "Valley City"],
  },
  {
    slug: "seville",
    name: "Seville",
    county: "Medina County",
    intro:
      "We bring expert roofing, siding, and gutter work to Seville and the surrounding Medina County communities. Friendly service, fair pricing, and craftsmanship you can trust.",
    nearby: ["Medina", "Lodi", "Wadsworth", "Rittman"],
  },
  {
    slug: "lodi",
    name: "Lodi",
    county: "Medina County",
    intro:
      "Lodi homeowners trust us for honest, high-quality roofing, siding, and replacement windows. Close-to-home service backed by our workmanship guarantee.",
    nearby: ["Seville", "Medina", "Creston", "Burbank"],
  },
  {
    slug: "rittman",
    name: "Rittman",
    county: "Wayne County",
    intro:
      "From roof replacements to new siding and gutters, we help Rittman homeowners protect their homes with skilled Amish installation and straightforward, no-pressure pricing.",
    nearby: ["Wadsworth", "Sterling", "Creston", "Doylestown"],
  },
  {
    slug: "doylestown",
    name: "Doylestown",
    county: "Wayne County",
    intro:
      "We're glad to bring dependable roofing, siding, gutter, and window work to Doylestown and the surrounding Wayne County area. Quality materials installed the right way.",
    nearby: ["Rittman", "Barberton", "Sterling", "Marshallville"],
  },
  {
    slug: "sterling",
    name: "Sterling",
    county: "Wayne County",
    intro:
      "Sterling homeowners count on us for roofing, siding, and exterior work that holds up to rural Ohio weather. Friendly, straightforward, and built to last.",
    nearby: ["Rittman", "Creston", "Doylestown", "Smithville"],
  },
  {
    slug: "creston",
    name: "Creston",
    county: "Wayne County",
    intro:
      "We help Creston homeowners with roof replacements, new siding, seamless gutters, and energy-efficient windows. Expert craftsmanship close to home.",
    nearby: ["Sterling", "Burbank", "Lodi", "Smithville"],
  },
  {
    slug: "burbank",
    name: "Burbank",
    county: "Wayne County",
    intro:
      "From roofing to siding and gutters, we bring dependable, high-quality exterior work to Burbank and the surrounding Wayne County communities.",
    nearby: ["Creston", "Lodi", "West Salem", "Sterling"],
  },
  {
    slug: "canal-fulton",
    name: "Canal Fulton",
    county: "Stark County",
    intro:
      "From the historic canal-town homes to the newer neighborhoods, we give Canal Fulton homeowners roofing, siding, gutter, and window work that's built to last.",
    nearby: ["Clinton", "Massillon", "North Canton", "New Franklin"],
  },
  {
    slug: "wooster",
    name: "Wooster",
    county: "Wayne County",
    intro:
      "Wooster homeowners trust us for premium roofing, siding, gutters, and windows. Clean installs, fair pricing, and Amish craftsmanship that stands the test of time.",
    nearby: ["Orrville", "Smithville", "Dalton", "Creston"],
  },
  {
    slug: "orrville",
    name: "Orrville",
    county: "Wayne County",
    intro:
      "We help Orrville homeowners protect and refresh their homes with expert roofing, siding, gutter, and window work, and we'll handle your insurance claim from start to finish.",
    nearby: ["Wooster", "Dalton", "Marshallville", "Smithville"],
  },
  {
    slug: "dalton",
    name: "Dalton",
    county: "Wayne County",
    intro:
      "From roof replacements to new siding and gutters, we bring skilled Amish craftsmanship and honest pricing to Dalton and the surrounding area.",
    nearby: ["Orrville", "Wooster", "Smithville", "Marshallville"],
  },
  {
    slug: "smithville",
    name: "Smithville",
    county: "Wayne County",
    intro:
      "Smithville homeowners count on us for roofing, siding, and replacement windows installed the right way and backed by our workmanship guarantee.",
    nearby: ["Wooster", "Dalton", "Sterling", "Orrville"],
  },
  {
    slug: "marshallville",
    name: "Marshallville",
    county: "Wayne County",
    intro:
      "We're proud to serve Marshallville with dependable roofing, siding, gutter, and window work. Quality materials, clean job sites, and craftsmanship we stand behind.",
    nearby: ["Orrville", "Doylestown", "Dalton", "Rittman"],
  },
];

// Simple name list (kept for areaServed schema + quick lists).
export const SERVICE_AREA_CITIES = CITIES.map((c) => c.name);

// Insurance carriers Choice One regularly works with on claims (owner-provided).
export const INSURERS = [
  "State Farm", "USAA", "Farmers", "American Family", "Safeco", "Farm Bureau",
  "Travelers", "Progressive", "Mercury", "Liberty Mutual", "CSI", "Hartford",
  "National General", "AAA", "Allstate", "Nationwide", "Universal Insurance",
  "Auto Owners", "Amica", "Geico",
] as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

// Leadership team. TODO: add headshots + bios/additional staff from owner.
export const TEAM: TeamMember[] = [
  {
    name: "Bill Bishop",
    role: "Owner & Chief of Operations",
    photo: "/images/bill.jpg",
    bio: "Bill leads Choice One Restoration day to day and is hands-on with customers from the first inspection through the final walkthrough. Homeowners consistently praise how he guides them through the insurance process and fights to get their claims approved.",
  },
  {
    name: "Gene Lepke",
    role: "Owner & Production Manager",
    photo: "/images/gene.jpg",
    bio: "Gene oversees production and the expert Amish installation crews, making sure every roof, siding, gutter, and window project is done right, on schedule, and to the standard our name is built on.",
  },
];

export type Testimonial = { quote: string; name: string; service: string };

// Real Google reviews (Google Business Profile, 4.9★). Lightly trimmed for
// length; names as published. Do not fabricate.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Another excellent job by Choice One Restoration! They replaced our roof a few years ago and we were so happy we contacted them again for siding damage from a fallen tree. They took care of everything, from dealing with the insurance company to helping us choose siding type and color. The crew worked quickly and meticulously and we're thrilled with the results!",
    name: "Jennifer Kulp",
    service: "Roofing & Siding",
  },
  {
    quote:
      "When other companies told us there was no way the insurance company would pay for our roof, Choice One wasn't afraid to try, and they got it approved. Saved us thousands! Bill guided us through the whole process with ease. The crew did an amazing job, were careful not to damage anything, and cleaned up after. I'd recommend them to anyone looking for a new roof!",
    name: "Mark Roder",
    service: "Roofing & Insurance Claim",
  },
  {
    quote:
      "Thrilled with the work Choice One provided in a time of uncertainty. This was my first home that needed a replacement roof. Thomas walked me through the insurance claim and every step, and Fred's knowledge of up-to-date roofing codes gave me confidence my home was in good hands. The installers even had a mobile trash collector on site to catch debris. Would highly recommend to any homeowner!",
    name: "Patrick Bugaj",
    service: "Roof Replacement",
  },
  {
    quote:
      "Choice One Restoration did a fantastic job on my roof. I would recommend this company to anyone. Fred was very knowledgeable and responsive whenever I had questions with my claim and helped a lot with my homeowners insurance.",
    name: "Chris Roberts",
    service: "Roofing",
  },
  {
    quote:
      "Fred and team did a great job on my roof replacement. The on-site crew did an exceptional job keeping the site clean, free of nails and debris, and just did a great job with the roof.",
    name: "James Davis",
    service: "Roof Replacement",
  },
  {
    quote:
      "We'd like to thank Jason Durst and Choice One Restoration for a job well done. We appreciate how quickly and efficiently Jason handled all the preparation. The crew not only did an excellent job, but left everything clean and in perfect order when they were done. We highly recommend them.",
    name: "Bob Sargent",
    service: "Roofing",
  },
  {
    quote:
      "Reasonable price and Bill & Fred were great to work with! They explained all the steps along the way and were extremely helpful with everything regarding the insurance. Give them a call, you won't be sorry!",
    name: "Tracey Mazany",
    service: "Roofing & Insurance Claim",
  },
];
