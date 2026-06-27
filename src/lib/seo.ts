import { BUSINESS, SERVICES, SERVICE_AREA_CITIES, CITIES, TESTIMONIALS, IMAGES } from "./constants";

// Production domain — the owner is keeping choice1restoration.com, so canonical /
// sitemap URLs are already cutover-ready.
export const SITE_URL = "https://www.choice1restoration.com";

export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

// Pages are served with a trailing slash by Netlify's pretty-URLs, so canonical /
// breadcrumb / sitemap URLs must match to avoid redirect mismatches.
export const pageUrl = (path: string) =>
  abs(path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`);

const CITY_NAMES = SERVICE_AREA_CITIES.join(", ");
const REVIEW_COUNT = BUSINESS.rating.count > 0 ? BUSINESS.rating.count : TESTIMONIALS.length;

const AREA_SERVED = [
  {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    geoRadius: String(Math.round(BUSINESS.serviceRadiusMiles * 1609.34)),
  },
  ...SERVICE_AREA_CITIES.map((c) => ({ "@type": "City", name: `${c}, OH` })),
];

// Core RoofingContractor / LocalBusiness node, reused across pages.
export function localBusinessSchema() {
  const a = BUSINESS.address;
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "GeneralContractor", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: abs(IMAGES.logo),
    image: abs(IMAGES.heroHome),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.hoursSpec.weekdays.days,
        opens: BUSINESS.hoursSpec.weekdays.opens,
        closes: BUSINESS.hoursSpec.weekdays.closes,
      },
    ],
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram].filter(Boolean),
    foundingDate: String(BUSINESS.founded),
    slogan: BUSINESS.tagline,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
  };
  if (BUSINESS.googleBusinessProfile) {
    (node.sameAs as string[]).push(BUSINESS.googleBusinessProfile);
  }
  return node;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  };
}

function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function serviceSchema(name: string, description: string, path: string, areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: areaName ? `${name} in ${areaName}, OH` : name,
    description,
    url: pageUrl(path),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: areaName ? { "@type": "City", name: `${areaName}, OH` } : AREA_SERVED,
  };
}

function reviewNodes() {
  return TESTIMONIALS.map((t) => ({
    "@type": "Review",
    reviewBody: t.quote,
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  }));
}

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  jsonLd: object[];
};

const DEFAULT_OG = abs(IMAGES.heroHome);

// Resolve full SEO metadata for any route. Single source of truth for both the
// client <Seo> component and the build-time prerender script.
export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath !== "/" ? rawPath.replace(/\/$/, "") : "/";

  // /services/:slug
  if (path.startsWith("/services/")) {
    const slug = path.split("/")[2];
    const svc = SERVICES.find((s) => s.slug === slug);
    if (svc) {
      return {
        title: `${svc.title} in Fairlawn & Northeast Ohio | ${BUSINESS.name}`,
        description: `${svc.intro} Serving ${CITY_NAMES}. Call for a free inspection.`.slice(0, 300),
        canonical: pageUrl(path),
        ogImage: svc.image ? abs(svc.image) : DEFAULT_OG,
        jsonLd: [
          localBusinessSchema(),
          serviceSchema(svc.title, svc.intro, path),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: svc.navTitle, path },
          ]),
        ],
      };
    }
  }

  // /service-area/:city
  if (path.startsWith("/service-area/")) {
    const slug = path.split("/")[2];
    const city = CITIES.find((c) => c.slug === slug);
    if (city) {
      return {
        title: `Roofing & Siding in ${city.name}, OH | Choice One`,
        description: `Choice One Restoration provides expert roofing, siding, gutters & window installation in ${city.name}, ${city.county}. Free inspections. Call ${BUSINESS.phone}.`,
        canonical: pageUrl(path),
        ogImage: abs(IMAGES.roofing),
        jsonLd: [
          localBusinessSchema(),
          serviceSchema(
            "Roofing, Siding, Gutters & Windows",
            `Roofing, siding, gutters, and window installation and storm damage restoration in ${city.name}, ${city.county}.`,
            path,
            city.name,
          ),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Service Area", path: "/service-area" },
            { name: city.name, path },
          ]),
          faqSchema([
            {
              q: `Do you provide roofing and exterior services in ${city.name}, Ohio?`,
              a: `Yes. Choice One Restoration serves ${city.name} and the surrounding ${city.county} area with roofing, siding, gutters, window installation, and storm damage restoration.`,
            },
            {
              q: `How do I get a free inspection in ${city.name}?`,
              a: `Call ${BUSINESS.phone} or request a free inspection through our contact page. We'll inspect your home, document the scope, and provide an honest, no-pressure estimate, and handle your insurance claim if there's storm damage.`,
            },
          ]),
        ],
      };
    }
  }

  switch (path) {
    case "/service-area":
      return {
        title: `Service Area | Roofing & Siding Across Northeast Ohio`,
        description: `Choice One Restoration serves ${SERVICE_AREA_CITIES.slice(0, 6).join(", ")} and communities across Summit, Medina, Wayne & Stark counties. Free inspections.`,
        canonical: pageUrl("/service-area"),
        ogImage: DEFAULT_OG,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Service Area", path: "/service-area" },
          ]),
        ],
      };
    case "/":
      return {
        title: `${BUSINESS.name} | Roofing, Siding, Gutters & Windows in Northeast Ohio`,
        description: `${BUSINESS.blurb} Free inspections. Call ${BUSINESS.phone}.`.slice(0, 300),
        canonical: pageUrl("/"),
        ogImage: DEFAULT_OG,
        jsonLd: [
          { ...localBusinessSchema(), review: reviewNodes() },
          websiteSchema(),
        ],
      };
    case "/services":
      return {
        title: `Roofing, Siding, Gutters & Windows | ${BUSINESS.name}`,
        description: `Roofing, siding, gutters, windows, and storm damage restoration across Northeast Ohio, installed by expert Amish crews. Free inspections.`,
        canonical: pageUrl("/services"),
        ogImage: DEFAULT_OG,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ],
      };
    case "/team":
      return {
        title: `Our Team | Meet the Owners of ${BUSINESS.name}`,
        description: `Meet the team behind ${BUSINESS.name}, a local, family-owned roofing and exterior company serving Northeast Ohio for 15 years.`,
        canonical: pageUrl("/team"),
        ogImage: DEFAULT_OG,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Our Team", path: "/team" },
          ]),
        ],
      };
    case "/insurance-claims":
      return {
        title: `Storm Damage Insurance Claims Help | ${BUSINESS.name}`,
        description: `${BUSINESS.name} manages your storm and hail damage insurance claim end to end: inspection, documentation, and full restoration across Northeast Ohio.`,
        canonical: pageUrl("/insurance-claims"),
        ogImage: DEFAULT_OG,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Insurance Claims", path: "/insurance-claims" },
          ]),
          faqSchema([
            {
              q: "Do you work with insurance companies on roof claims?",
              a: `Yes. ${BUSINESS.name} documents the full scope of storm, wind, and hail damage and works directly with your insurance adjuster so your claim reflects what your home actually needs.`,
            },
            {
              q: "What if another company said my claim won't be approved?",
              a: "We're not afraid to fight for a fair claim. Our customers regularly tell us we got their roof approved when other companies said it couldn't be done. Schedule a free inspection and we'll take a look.",
            },
            {
              q: "How do I know if I have storm or hail damage?",
              a: "Damage isn't always visible from the ground. We offer free, no-obligation inspections. We'll get up there, photograph everything, and give you a clear report.",
            },
          ]),
        ],
      };
    case "/contact":
      return {
        title: `Contact & Free Inspection | ${BUSINESS.name}`,
        description: `Request a free inspection from ${BUSINESS.name}. Roofing, siding, gutters & windows in Fairlawn and across Northeast Ohio. Call ${BUSINESS.phone}.`,
        canonical: pageUrl("/contact"),
        ogImage: DEFAULT_OG,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ],
      };
    case "/privacy":
      return {
        title: `Privacy Policy | ${BUSINESS.name}`,
        description: `How ${BUSINESS.name} collects, uses, and protects your information.`,
        canonical: pageUrl("/privacy"),
        ogImage: DEFAULT_OG,
        jsonLd: [breadcrumb([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])],
      };
    case "/terms":
      return {
        title: `Terms of Service | ${BUSINESS.name}`,
        description: `The terms that govern your use of the ${BUSINESS.name} website.`,
        canonical: pageUrl("/terms"),
        ogImage: DEFAULT_OG,
        jsonLd: [breadcrumb([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }])],
      };
    case "/accessibility":
      return {
        title: `Accessibility Statement | ${BUSINESS.name}`,
        description: `${BUSINESS.name}'s commitment to making our website accessible to everyone.`,
        canonical: pageUrl("/accessibility"),
        ogImage: DEFAULT_OG,
        jsonLd: [breadcrumb([{ name: "Home", path: "/" }, { name: "Accessibility", path: "/accessibility" }])],
      };
    default:
      return {
        title: `Page Not Found | ${BUSINESS.name}`,
        description: `Sorry, we couldn't find that page. ${BUSINESS.name} provides roofing, siding, gutters, and windows across Northeast Ohio.`,
        canonical: pageUrl(path),
        ogImage: DEFAULT_OG,
        jsonLd: [localBusinessSchema()],
      };
  }
}

// Every path prerendered to static HTML + listed in the sitemap.
export const ALL_ROUTES: string[] = [
  "/",
  "/services",
  ...SERVICES.map((s) => `/services/${s.slug}`),
  "/team",
  "/insurance-claims",
  "/service-area",
  ...CITIES.map((c) => `/service-area/${c.slug}`),
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];
