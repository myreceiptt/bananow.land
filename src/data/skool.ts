export const skoolHero = {
  eyebrow: "Skool Now",
  title: "SKOOL NOW",
  description:
    "BANANOW's home for learning programs, sports communities, and real-world growth.",
  tagline: "Learn. Move. Grow. Together.",
  primaryCta: {
    label: "Explore Programs",
    href: "#skool-programs",
  },
  secondaryCta: {
    label: "Explore Layers",
    href: "#skool-paths",
  },
  image: "/images/hero/hero.svg",
  imageAlt: "BANANOW Land learning and community illustration",
} as const;

export const skoolPaths = [
  {
    title: "Participants / Packages",
    summary:
      "B2C program packages for people who want to join learning, sports, creative, or community-based programs.",
    details: [
      "Program access by package or session format",
      "Learning, movement, and community participation",
      "Availability may vary by location and partner",
    ],
    cta: "Join a Program",
    href: "#skool-programs",
  },
  {
    title: "Partners",
    summary:
      "B2B collaboration with trainers, coaches, mentors, schools, venues, communities, and program operators.",
    details: [
      "Program delivery, coaching, and venue support",
      "Learning content and community activation",
      "Commercial terms by direct agreement",
    ],
    cta: "Become a Partner",
    href: "#embassy",
  },
  {
    title: "Sponsors / Investors",
    summary:
      "Commercial partnership discussions for sponsorship placement, activation packages, and program growth.",
    details: [
      "Program-level or Skool Now-level discussion",
      "Capital structure and revenue sharing by agreement",
      "Subject to review, availability, and negotiated terms",
    ],
    cta: "Sponsor or Invest",
    href: "#embassy",
  },
] as const;

export const skoolPrograms = [
  {
    title: "Skate Skool Now",
    status: "Coming First",
    description:
      "A skateboarding-based learning program focused on balance, confidence, movement, community, and real-world growth.",
    highlights: [
      "Movement-based learning",
      "Community and confidence",
      "Safety guidance may apply",
    ],
    cta: "Ask About Skate Skool",
    href: "#embassy",
    image: "/images/features/playing.svg",
    imageAlt: "BANANOW playing illustration for Skate Skool Now",
  },
  {
    title: "Basket Skool Now",
    status: "Coming Soon",
    description:
      "A future basketball learning path for teamwork, movement, confidence, and community connection.",
    highlights: [
      "Skills and teamwork direction",
      "Community session planning",
      "Details subject to availability",
    ],
    cta: "Get Notified",
    href: "#embassy",
    image: "/images/features/learning.svg",
    imageAlt: "BANANOW learning illustration for Basket Skool Now",
  },
  {
    title: "Futsal Skool Now",
    status: "Coming Soon",
    description:
      "A future futsal learning path for practical drills, play culture, teamwork, and real-world growth.",
    highlights: [
      "Play-based learning direction",
      "Partner and venue planning",
      "Details subject to availability",
    ],
    cta: "Get Notified",
    href: "#embassy",
    image: "/images/features/working.svg",
    imageAlt: "BANANOW working illustration for Futsal Skool Now",
  },
] as const;

export const skoolHowItWorks = [
  {
    title: "Choose a Program",
    description:
      "Pick a program direction, session format, or location that fits the way you want to grow.",
  },
  {
    title: "Join & Learn",
    description:
      "Join sessions, learn new skills, and grow with coaches, mentors, partners, and community.",
  },
  {
    title: "Track Progress",
    description:
      "Share progress, notice milestones, and keep building confidence through real practice.",
  },
  {
    title: "Connect & Share",
    description:
      "Build friendships, exchange lessons, share wins, and keep moving with the community.",
  },
  {
    title: "Make an Impact",
    description:
      "Turn learning into confidence, practical skills, and real-world impact in daily life.",
  },
] as const;

export const skoolPartners = {
  title: "Skool Now Partners",
  description:
    "Skool Now is preparing its first partner circle. Partner slots are opening soon for people and organizations who can help programs grow responsibly.",
  categories: ["Coaches", "Venues", "Communities", "Schools", "Brands", "Sponsors"],
  cta: {
    label: "Become a Partner",
    href: "#embassy",
  },
} as const;

export const skoolFaq = [
  {
    question: "Who can join Skool Now programs?",
    response:
      "Skool Now is being prepared for kids, teens, young adults, and community members, depending on each program, location, partner, and session format.",
  },
  {
    question: "Can parents or guardians participate?",
    response:
      "Yes. For programs involving kids or young participants, guardian consent, supervision, and safety rules may apply.",
  },
  {
    question: "Where are programs held?",
    response:
      "Program locations may vary by partner, venue, city, and session format. Confirmed locations will be shared through official BANANOW channels.",
  },
  {
    question: "What should I bring to a session?",
    response:
      "Requirements may vary by program. Participants should follow safety guidance from the program organizer, coach, mentor, or venue.",
  },
  {
    question: "How can I become a coach or partner?",
    response:
      "Use the Embassy contact form and tell us your role, location, experience, and the type of program support you want to discuss.",
  },
  {
    question: "How can brands, sponsors, or investors get involved?",
    response:
      "Brands, sponsors, and investors can contact BANANOW through the Embassy. Commercial partnership, sponsorship, and investment discussions are reviewed case by case and confirmed only by agreement.",
  },
  {
    question: "Are scholarships or support options available?",
    response:
      "Support options may be explored by program, partner, and location. Availability, terms, and responsibilities are confirmed through official communication.",
  },
] as const;
