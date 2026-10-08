const female =
  "https://louiserosephotography.com/wp-content/uploads/2025/03/headshots-for-a-therapist-in-london-11.jpg";

const male =
  "https://louiserosephotography.com/wp-content/uploads/2025/03/headshots-for-a-therapist-in-london-11.jpg";

const emma =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLfS1Vcb0kFNDXxr2SlJJDcQ0Pbuqtg3AaBPe4jK5jN7qnUfDZuoY97XdHGpx2UpVpX39UzFFy_MNYKcTPlNK6f5qNRrBhp42UpbSLabFHpL6lOHuLwmOqruFONOK9m1jd_d0S4Phw=w408-h612-k-no";

export const commons = {
  seo: {
    title: "Inner Calm Counseling | A softer place to begin",
    description:
      "Compassionate individual therapy for adults navigating anxiety, stress, relationships, life transitions, and feeling overwhelmed.",
  },

  theme: {
    primary: "#315B52",
    primaryDark: "#21443C",
    accent: "#C47F62",
    // soft: "#EEF5F1",
    // cream: "#FBF6EF",
  },

  navigation: [
    { label: "How I help", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "FAQs", href: "#faq" },
  ],

  hours: [
    ["Monday", "9:00 AM – 6:00 PM"],
    ["Tuesday", "9:00 AM – 6:00 PM"],
    ["Wednesday", "9:00 AM – 6:00 PM"],
    ["Thursday", "10:00 AM – 7:00 PM"],
    ["Friday", "9:00 AM – 2:00 PM"],
  ],
  social: {
    instagram: "#",
    facebook: "#",
  },

  hero: {
    eyebrow: "Therapy for adults in ",
    title: "You don't have to carry everything by yourself.",
    description:
      "A calm, supportive space to slow down, make sense of what you're carrying, and find a way forward that feels like your own.",
    primaryCta: "Schedule a consultation",
    secondaryText: "See, how therapy can helps",
    image: "/images/mainPeace.png",
  },

  welcome: {
    eyebrow: "A place to exhale",
    title:
      "Therapy can be a place where you don't have to have the right words.",
    paragraph:
      "Maybe you've been holding it together for everyone else. Maybe you're tired of overthinking every decision, replaying conversations, or feeling like you should be able to handle things better.",
    note: "No pressure. No judgment. Just a private space to be honest.",
  },

  services: {
    eyebrow: "How I can help",
    title: "Support for the things that can quietly take over your life.",
    description:
      "Therapy is tailored to you rather than forcing your experience into a checklist.",
    items: [
      {
        title: "Anxiety & overthinking",
        text: "Build a better relationship with worry, racing thoughts, perfectionism, and the feeling that your mind never quite switches off.",
        icon: "01",
      },
      {
        title: "Life transitions",
        text: "Navigate changes in relationships, work, identity, family, relocation, or the version of life you thought you would have.",
        icon: "02",
      },
      {
        title: "Relationships & boundaries",
        text: "Understand patterns, communicate more clearly, and create boundaries without losing yourself in the process.",
        icon: "03",
      },
      {
        title: "Stress & burnout",
        text: "Make space for what your body and mind have been trying to tell you before exhaustion becomes your normal.",
        icon: "04",
      },
      {
        title: "Self-worth",
        text: "Work through harsh self-talk, people-pleasing, comparison, and the pressure to constantly prove that you're enough.",
        icon: "05",
      },
      {
        title: "Major life decisions",
        text: "Slow down the noise around difficult choices so you can hear your own values, needs, and instincts more clearly.",
        icon: "06",
      },
    ],
  },
  therapist: {
    eyebrow: "Meet your therapist",

    title: "Licensed Professional Counselor",

    intro:
      "I believe therapy works best when you feel respected, understood, and never rushed into being someone you're not.",

    paragraphs: [
      "I know how painful it can feel when relationships become distant, anxiety takes over, or life feels emotionally overwhelming.",

      // "My work is deeply rooted in helping people feel understood, emotionally safe, and no longer alone in what they're carrying.",

      "This isn't just professional for me — it's something I care deeply about.",
    ],

    credentials: [
      "Licensed Professional Counselor",
      "M.A. in Clinical Mental Health Counseling",
      "Trauma-informed & person-centered practice",
      "10+ years supporting adults",
    ],
  },
  approach: {
    eyebrow: "The approach",
    title: "Warm, practical, and grounded in your real life.",
    description:
      "You won't be given a script for how to feel. Sessions are collaborative, thoughtful, and shaped around what is actually happening outside the therapy room.",
    cards: [
      {
        title: "Listen first",
        text: "We start with your experience, your language, and what matters to you.",
      },
      {
        title: "Understand patterns",
        text: "Together, we look beneath the immediate problem to understand what keeps repeating.",
      },
      {
        title: "Make room for change",
        text: "You leave with insight, practical tools, or simply a little more space to breathe.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Starting therapy",
    title: "The first step can be small.",
    steps: [
      {
        number: "01",
        title: "Reach out",
        text: "Send a short message or schedule a consultation. You don't need to explain your whole story.",
      },
      {
        number: "02",
        title: "Talk it through",
        text: "We'll talk about what's bringing you in, what you're looking for, and whether working together feels like a good fit.",
      },
      {
        number: "03",
        title: "Begin at your pace",
        text: "If we decide to work together, we'll choose a rhythm that feels sustainable and useful for you.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Kind words",
    title: "What clients say about the experience.",
    disclaimer:
      "Shared with permission. Details may be adjusted to protect privacy.",
    items: [
      {
        quote:
          "For the first time in a long time, I felt like I could say what I was actually thinking without needing to make it sound okay first.",
        name: "Andrew, Garfield",
      },
      {
        quote:
          "The sessions feel calm but never vague. I leave understanding something about myself that I couldn't quite see before.",
        name: "James, Wesly",
      },
      {
        quote:
          "I came in thinking I needed someone to tell me what to do. Instead, I learned how to trust my own decisions again.",
        name: "Peggy, Carter",
      },
    ],
  },

  fees: {
    eyebrow: "Sessions & fees",
    title: "Clear information before you decide.",
    description:
      "You should never have to guess what therapy will cost or what happens after you reach out.",
    session: {
      name: "Individual therapy",
      duration: "50-minute session",
      price: "$160",
      detail: "per session",
    },
    notes: [
      "Telehealth available for clients located in Texas.",
      "Limited reduced-fee spaces may be available.",
      "Superbills are available for clients using out-of-network benefits.",
      "Payment is collected at the time of service.",
    ],
  },

  faqs: {
    eyebrow: "Questions",
    title: "A few things you may be wondering.",
    items: [
      {
        question:
          "Do I need to know exactly what is wrong before reaching out?",
        answer:
          "Not at all. You can simply describe what has been feeling difficult lately. The consultation is a place to figure out together what support might make sense.",
      },
      {
        question: "Do you offer online therapy?",
        answer:
          "Yes. Secure telehealth sessions are available for eligible clients located in Texas.",
      },
      {
        question: "How long are sessions?",
        answer:
          "Standard individual sessions are 50 minutes. We can discuss whether a different format makes sense for your circumstances.",
      },
      {
        question: "Do you take insurance?",
        answer:
          "Inner Calm Counseling is an out-of-network practice. A superbill can be provided if your plan offers out-of-network reimbursement. You can contact your insurer directly to ask about your benefits.",
      },
      {
        question: "What happens during the consultation?",
        answer:
          "We'll talk about what brought you here, what you're hoping for, and practical details such as availability and fees. It's also a chance for you to ask questions and decide whether the fit feels right.",
      },
      {
        question: "What if I don't feel ready to start therapy?",
        answer:
          "That's okay. Reaching out doesn't commit you to ongoing therapy. You can use the consultation simply to learn more and decide what feels right.",
      },
    ],
  },

  contactSection: {
    eyebrow: "Take the next small step",
    title: "You can start with just a hello.",
    description:
      "Tell me a little about what is bringing you to therapy. You don't need to write the perfect message.",
    reassurance:
      "Your message is private and there is no obligation to schedule.",
    form: {
      fields: [
        {
          name: "name",
          label: "Your name",
          type: "text",
          placeholder: "Jane Smith",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        {
          name: "phone",
          label: "Phone (optional)",
          type: "tel",
          placeholder: "(555) 555-5555",
        },
        {
          name: "message",
          label: "What would you like support with?",
          type: "textarea",
          placeholder: "A few words is enough...",
        },
      ],
      button: "Send a message",
    },
  },
};

export const businesses = {
  "inner-calm-counseling": {
    slug: "inner-calm-counseling",

    brand: {
      name: "Inner Calm Counseling",
      shortName: "Inner Calm",
      tagline: "A softer place to begin.",
    },

    contact: {
      phone: "(512) 555-0148",
      email: "hello@innercalmcounseling.com",
      city: "Austin, Texas",
      address: "Austin, TX",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Dr. Maya Bennett, LPC",
      image: female,
      cta: {
        text: "Read more about Dr. Maya Bennett",
        href: "#contact",
      },
    },
  },
  "mindful-counseling-denver": {
    slug: "mindful-counseling-denver",

    brand: {
      name: "Mindful Counseling, EMDR",
      shortName: "Mindful Counseling",
      tagline: "Trauma-informed therapy for thoughtful women & couples.",
    },

    contact: {
      phone: "+1.720-515-7344",
      email: "emma@mindfulcounselingdenver.com",
      city: "Denver, Colorado",
      address: "Denver, Colorado",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Emma Kobil, LPC",
      image: emma,
      cta: {
        text: "Learn more about Emma Kobil",
        href: "#contact",
      },
    },
  },
  "zoetic-counseling": {
    slug: "zoetic-counseling",

    brand: {
      name: "Zoetic Counseling",
      shortName: "Zoetic",
      tagline: "Thriving relationships through personal growth.",
    },

    contact: {
      phone: "928-853-8781",
      email: "becky@zoeticcounseling.com",
      city: "Denver, Colorado",
      address: "2406 W. 32nd Ave. Suite A Denver, CO 80211",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Becky Natenberg, MA, LPC, EMDR",
      image: "/images/Becky.png",
      cta: {
        text: "Learn more about Becky Natenberg",
        href: "#contact",
      },
    },
  },
  "dr-david-shanley": {
    slug: "dr-david-shanley",

    brand: {
      name: "David Shanley PsyD, LLC",
      shortName: "David Shanley",
      tagline: "Specializing in anxiety and OCD.",
    },

    contact: {
      phone: "720-515-1637",
      email: "Drshanley@drdavidshanley.com",
      city: "Denver, Colorado",
      address: "1776 S. Jackson Street, Suite 723, Denver, CO 80210",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Dr. David Shanley, PsyD",
      image:
        "https://lh3.googleusercontent.com/grass-cs/AABkmLfqDzu70OsWBZPBB4GbJI_WO9lmkAJfTNQWYWA6o8BQ_K8AxLpMjkgVyJLK_swbtdedy4h6bJDxW02FbLsOjqxfdLVwQe6PMyLjW5BDDt58HE6ialtd1Ffbx7VSy8f4H9UCngw5=w408-h611-k-no",
      cta: {
        text: "Learn more about Dr. David Shanley",
        href: "#contact",
      },
    },
  },
  "sit-with-ambie": {
    slug: "sit-with-ambie",

    brand: {
      name: "Sit With Ambie Psychotherapy PLLC",
      shortName: "Sit With Ambie",
      tagline: "Trauma therapy for authentic belonging and self-sovereignty.",
    },

    contact: {
      phone: "(720) 737-9634",
      email: "amber@sitwithambie.com",
      city: "Denver, Colorado",
      address: "3955 E Exposition Ave Ste 320, Denver, CO 80209",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Amber Christine",
      image:
        "https://images.squarespace-cdn.com/content/v1/6603010c796b840577ef9127/3b8c586b-d205-4aeb-8e2c-a0d97d522f0b/tempImagejXBfbl.jpg?format=2500w",
      cta: {
        text: "Learn more about Amber Christine",
        href: "#contact",
      },
    },
  },
  "unstuck-therapy": {
    slug: "unstuck-therapy",

    brand: {
      name: "Unstuck Therapy",
      shortName: "Unstuck",
      tagline: "Helping you move forward with clarity and confidence.",
    },

    contact: {
      phone: "(303) 860-2716",
      email: "",
      city: "Denver, Colorado",
      address: "190 E 9th Ave #350b, Denver, CO 80203",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Dr. Linda Baker, PsyD",
      image:
        "https://unstucktherapy.com/wp-content/uploads/2025/04/UNSTUCK-34.webp",
      cta: {
        text: "Learn more about Dr. Linda Baker",
        href: "#contact",
      },
    },
  },
  "tenet-therapy": {
    slug: "tenet-therapy",

    brand: {
      name: "Tenet Therapy",
      shortName: "Tenet",
      tagline: "Therapy for relationships, identity, and connection.",
    },

    contact: {
      phone: "832-409-4634",
      email: "ty@tenettherapy.com",
      city: "Houston, Texas",
      address: "1502 Sawyer St., Suite 237, Houston, TX 77007",
      bookingUrl: "https://tenettherapy.janeapp.com/",
    },

    therapist: {
      name: "Ty Neely, M.S., LPC, CST, NCC",
      image:
        "https://d2t6o06vr3cm40.cloudfront.net/2026/06/22/21/17/01/d724c048-aaa3-43a0-8346-eac838646dab/Headshot%202025.jpg",
      cta: {
        text: "Learn more about Ty Neely",
        href: "#contact",
      },
    },
  },
  "better-therapy": {
    slug: "better-therapy",

    brand: {
      name: "Better Therapy",
      shortName: "Better Therapy",
      tagline: "Individual and couples therapy in Houston.",
    },

    contact: {
      phone: "832-542-6244",
      email: "info@bettertherapy.com",
      city: "Houston, Texas",
      address: "3400 Bissonnet St #270, Houston, TX 77005",
      bookingUrl: "https://bettertherapy.com/",
    },

    therapist: {
      name: "Dr. Rune Moelbak, PhD",
      image:
        "https://bettertherapy.com/wp-content/uploads/2024/01/Dr-Rune-Moelbak-2013-21.jpg",
      cta: {
        text: "Learn more about Dr. Rune Moelbak",
        href: "#contact",
      },
    },
  },
  "blossom-behavioral-health": {
    slug: "blossom-behavioral-health",

    brand: {
      name: "Blossom Behavioral Health",
      shortName: "Blossom",
      tagline: "Compassionate counseling for individuals and families.",
    },

    contact: {
      phone: "832-799-8587",
      email: "rarmstronglpc@gmail.com",
      city: "Houston, Texas",
      address: "Houston, Texas, United States",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Renee Armstrong, LPC-S, NCC",
      image:
        "https://img1.wsimg.com/isteam/ip/d1224603-0ab7-4a2e-a643-caa913214ada/d6f180aa9fe78a627cc56482959654d9/:/rs=w:400,cg:true,m",
      cta: {
        text: "Learn more about Renee Armstrong",
        href: "#contact",
      },
    },
  },
  "tommie-burrell-counseling": {
    slug: "tommie-burrell-counseling",

    brand: {
      name: "Tommie D. Burrell, LCSW Counseling PLLC",
      shortName: "Tommie Burrell",
      tagline: "Healing, truth, and meaning through therapy.",
    },

    contact: {
      phone: "346-594-8632",
      email: "tommie@tburrellcounseling.com",
      city: "Houston, Texas",
      address: "Houston, Texas",
      bookingUrl: "https://www.tburrellcounseling.com/request-and-appointment",
    },

    therapist: {
      name: "Tommie D. Burrell, LCSW",
      image:
        "https://static.wixstatic.com/media/b4f16a_fbad5db50fbb46649afca8e9d642e44f~mv2.jpg/v1/crop/x_205,y_0,w_1579,h_2044/fill/w_446,h_578,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/D5BF0AC1-3896-4945-A30D-B5A889694B32.jpg",
      cta: {
        text: "Learn more about Tommie D. Burrell",
        href: "#contact",
      },
    },
  },
  "christy-neher-counseling": {
    slug: "christy-neher-counseling",

    brand: {
      name: "Christy Neher Professional Counseling",
      shortName: "Christy Neher",
      tagline:
        "Professional counseling, EMDR, and support for life's challenges.",
    },

    contact: {
      phone: "214-699-7762",
      email: "christyneher@sbcglobal.net",
      city: "Dallas, Texas",
      address: "10233 E. Northwest Hwy #428, Dallas, TX 75238",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Christy Neher, MA, MS, LPC-S",
      image:
        "https://www.christyneherlpc.com/s/cc_images/cache_4206294600.jpg?t=1532811456",
      cta: {
        text: "Learn more about Christy Neher",
        href: "#contact",
      },
    },
  },

  // batch 2 ---

  "alice-bertoldo": {
    slug: "alice-bertoldo",

    brand: {
      name: "Alice Bertoldo Psychotherapy",
      shortName: "Alice Bertoldo",
      tagline:
        "Psychotherapy supporting self-understanding, emotional wellbeing, and personal growth.",
    },

    contact: {
      phone: "123-234-6789",
      email: "alice-bertoldo@sbcglobal.net",
      city: "Amsterdam, Netherlands",
      address: "Damrak 68 N, 5th floor, 1012 ML Amsterdam",
      bookingUrl: "https://www.alicebertoldo.com/how-to-start",
    },

    therapist: {
      name: "Alice Bertoldo, MSc, MA",
      title:
        "Organisational Psychologist, Psychodrama Regisseur, Psychosomatic and Jungian Analytical Psychotherapist",
      image:
        "https://primary.jwwb.nl/public/w/f/b/temp-nfzlotbffhazllvtxoop/alice-14-high.jpg?enable-io=true&crop=0.9767%3A1%2Coffset-y7&width=532",
      cta: {
        text: "Learn more about Alice Bertoldo",
        href: "https://www.alicebertoldo.com/about-me",
      },
    },
  },
  "international-wellbeing-psych": {
    slug: "international-wellbeing-psych",

    brand: {
      name: "The International Wellbeing Psychologist",
      shortName: "International Wellbeing",
      tagline:
        "English-speaking psychological therapy for expats and internationals in Amsterdam.",
    },

    contact: {
      phone: "123-234-6789",
      email: "internationalwellbeingpsych@gmail.com",
      city: "Amsterdam, Netherlands",
      address: "Rhijnvis Feithstraat 1, 1054 TT Amsterdam, Netherlands",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Sophie Patrick",
      title: "Expat Psychologist & Therapist",
      image:
        "https://static.wixstatic.com/media/07b899_ce631d04e43f4d728a270ae87f778739~mv2.jpg/v1/crop/x_0,y_293,w_2000,h_1442/fill/w_430,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07b899_ce631d04e43f4d728a270ae87f778739~mv2.jpg", // Add the therapist's photo URL after inspecting the site
      cta: {
        text: "Learn more about Sophie Patrick",
        href: "https://www.internationalwellbeingpsych.nl/about",
      },
    },
  },
  "goldberg-recovery": {
    slug: "goldberg-recovery",

    brand: {
      name: "Goldberg Recovery Counseling",
      shortName: "Maya Goldberg",
      tagline:
        "Private, culturally attuned online therapy and counseling for individuals and couples.",
    },

    contact: {
      phone: "123456789",
      email: "maya@goldberg-recovery.online",
      city: "Amsterdam, Netherlands",
      address: "Amsterdam, The Netherlands",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Maya Goldberg, MPhil, MA",
      title: "Psychologist",
      image:
        "https://static.wixstatic.com/media/e5e13d_9fca33b271d844918fa7a29bd94a8f91~mv2.jpg/v1/crop/x_297,y_349,w_1271,h_719/fill/w_195,h_110,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4-up%20on%205-16-26%20at%2022_edited.jpg",
      cta: {
        text: "Learn more about Maya Goldberg",
        href: "https://www.goldberg-recovery.online/info",
      },
    },
  },
  "telma-kremer": {
    slug: "telma-kremer",

    brand: {
      name: "Telma Kremer Psychotherapy",
      shortName: "Telma Kremer",
      tagline:
        "Individual and couples counselling, mentoring, and clinical supervision.",
    },

    contact: {
      phone: "+31 6 2388 9833",
      email: "drtelmakremer@gmail.com",
      city: "Amsterdam, Netherlands",
      address: "Tweede Oosterparkstraat 154.S, 1092 BR, Amsterdam",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Dr. Telma Kremer",
      title: "Clinical Psychologist",
      image:
        "https://static.wixstatic.com/media/b6f6f7_6d588c9e0dc247028ad5fccb3bfefbc2~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b6f6f7_6d588c9e0dc247028ad5fccb3bfefbc2~mv2.jpeg",
      cta: {
        text: "Learn more about Telma Kremer",
        href: "https://www.telmakremer.com/about-me",
      },
    },
  },
  "within-and-beyond": {
    slug: "within-and-beyond",

    brand: {
      name: "Within & Beyond",
      shortName: "Within & Beyond",
      tagline:
        "Integrative therapies and coaching for emotional wellbeing, self-discovery, and personal growth.",
    },

    contact: {
      phone: "+31 6 86 05 29 77",
      email: "contact@withinandbeyond.nl",
      city: "Amsterdam, Netherlands",
      address: "Amsterdam, The Netherlands",
      bookingUrl: "https://www.withinandbeyond.amsterdam/",
    },

    therapist: {
      name: "Dr. Fabiana da Silva Alves",
      title: "Psychologist & Therapeutic Coach",
      image:
        "https://static.wixstatic.com/media/17901a_239dcf1054094e9fa2fe2c449ad0d249~mv2.jpg/v1/fill/w_496,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AMS%20Fab.jpg", // Add the direct profile image URL
      cta: {
        text: "Learn more about Fabiana",
        href: "https://www.withinandbeyond.amsterdam/",
      },
    },
  },
  "elaine-macha-counseling": {
    slug: "elaine-macha-counseling",

    brand: {
      name: "Elaine Macha Counselling",
      shortName: "Elaine Macha",
      tagline:
        "English-speaking counselling and psychotherapy for adults, young people, and expats.",
    },

    contact: {
      phone: "+31 6 27181979",
      email: "coelaine18@gmail.com",
      city: "Amsterdam, Netherlands",
      address: "Oudezijds Voorburgwal 91, Amsterdam",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Elaine Macha",
      title: "Psychosocial Therapist & Counsellor",
      image:
        "https://static.wixstatic.com/media/75477f_7bed128ccab548c9811efadb6daff0e5~mv2.jpg/v1/fill/w_161,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ELAINE%20WEB%20READY_1_edited.jpg", // Add the direct therapist image URL
      cta: {
        text: "Learn more about Elaine Macha",
        href: "https://www.elainemachacounseling.nl/more-about-me",
      },
    },
  },
  "amal-wartalska-counselling": {
    slug: "amal-wartalska-counselling",

    brand: {
      name: "Amal Wartalska Counselling",
      shortName: "Amal Wartalska",
      tagline:
        "Integrative counselling, psychotherapy, and EMDR support for trauma and life's challenges.",
    },

    contact: {
      phone: "07811059993",
      email: "amal.wartalska@example.com",
      city: "Bristol, UK",
      address: "Bristol, BS16, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Amal Wartalska, MBACP (Accred)",
      title: "Integrative Counsellor, Psychotherapist & EMDR Practitioner",
      image:
        "https://www.amalwartalskacounselling.com/uploads/4/0/7/5/40757593/dk0a9724_1_orig.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Amal Wartalska",
        href: "https://www.amalwartalskacounselling.com/about-me.html",
      },
    },
  },
  "littlemoor-therapy-practice": {
    slug: "littlemoor-therapy-practice",

    brand: {
      name: "Littlemoor Therapy Practice",
      shortName: "Littlemoor Therapy",
      tagline:
        "Confidential cognitive behavioural therapy to support better mental health and wellbeing.",
    },

    contact: {
      phone: "07801 261568",
      email: "rebecca@littlemoortherapypractice.co.uk",
      city: "Queensbury, Bradford, UK",
      address: "Prospect House, Queensbury, Bradford, BD13 1AD",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Rebecca",
      title: "Cognitive Behavioural Therapist (CBT)",
      image:
        "https://static.wixstatic.com/media/24f70f_d2e916c4604940d6a01152a6aec30014~mv2.jpg/v1/fill/w_953,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/24f70f_d2e916c4604940d6a01152a6aec30014~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Rebecca",
        href: "https://www.littlemoortherapypractice.co.uk/",
      },
    },
  },
  "charlie-j-counselling": {
    slug: "charlie-j-counselling",

    brand: {
      name: "Charlie J Counselling & Outdoor Therapy",
      shortName: "Julia Tiplady",
      tagline:
        "Compassionate counselling, trauma therapy, EMDR, and outdoor therapy to support healing and personal growth.",
    },

    contact: {
      phone: "07842 553 127",
      email: "juliacjc@pm.me",
      city: "Otley, UK",
      address: "Otley, West Yorkshire, United Kingdom",
      bookingUrl: "https://www.juliacjc.com/contact",
    },

    therapist: {
      name: "Julia Tiplady",
      title: "Founder & Counsellor",
      image:
        "https://static.wixstatic.com/media/f3341c_bd3aa4167c4042fb8174bbc258e8717ef000.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f3341c_bd3aa4167c4042fb8174bbc258e8717ef000.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Julia Tiplady",
        href: "https://www.juliacjc.com/about",
      },
    },
  },
  "the-trusted-therapist": {
    slug: "the-trusted-therapist",

    brand: {
      name: "The Trusted Therapist",
      shortName: "The Trusted Therapist",
      tagline:
        "Compassionate, person-centred counselling for adults, children, and young people.",
    },

    contact: {
      phone: "07966 198025",
      email: "info@thetrustedtherapist.co.uk",
      city: "Bingley, UK",
      address:
        "Bingley Counselling Centre, Rear of 118 Main Street, Bingley, BD16 2JH",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Brian Padden, MA",
      title: "Person-Centred Counsellor",
      image:
        "https://static.wixstatic.com/media/1a5dcc_d102077f76d442599801a85e0d85880d~mv2.jpg/v1/fill/w_162,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Brian%20Padden.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Brian Padden",
        href: "https://www.thetrustedtherapist.co.uk/",
      },
    },
  },
  "marisa-walker-finch-counselling": {
    slug: "marisa-walker-finch-counselling",

    brand: {
      name: "Marisa Walker-Finch Counselling",
      shortName: "Marisa Walker-Finch",
      tagline:
        "Personalised counselling, EMDR therapy, and support to help you move forward.",
    },

    contact: {
      phone: "07538 798025",
      email: "marisa@smilesintandem.com",
      city: "Huddersfield, West Yorkshire, UK",
      address: "Smiles in Tandem, 626 Wakefield Road, Huddersfield, HD5 8PZ",
      bookingUrl: "https://www.walker-finchcounselling.co.uk/contact",
    },

    therapist: {
      name: "Marisa Walker-Finch",
      title: "Senior Accredited Counsellor & EMDR Therapist",
      image:
        "https://static.wixstatic.com/media/bdc287_1bbd30afcbea4db2b816baf9cc302b20~mv2.jpg/v1/crop/x_396,y_483,w_1663,h_2496/fill/w_539,h_809,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3C3A6407_(2)HR.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Marisa",
        href: "https://www.walker-finchcounselling.co.uk/about",
      },
    },
  },
  "jen-miles-therapy": {
    slug: "jen-miles-therapy",

    brand: {
      name: "Jen Miles Therapy",
      shortName: "Jen Miles",
      tagline:
        "Person-centred counselling to help you navigate life's challenges with greater confidence and self-understanding.",
    },

    contact: {
      phone: "123456789",
      email: "jmilestherapy@gmail.com",
      city: "United Kingdom",
      address: "",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Jen Miles",
      title: "NCPS Accredited Counsellor",
      image:
        "https://static.wixstatic.com/media/c8c9d0_63bba8db195440c8a4492675be8767b7~mv2.avif/v1/fill/w_672,h_508,al_c,q_80,enc_avif,quality_auto/c8c9d0_63bba8db195440c8a4492675be8767b7~mv2.avif",
      cta: {
        text: "Learn more about Jen Miles",
        href: "https://www.jenmilestherapy.co.uk/",
      },
    },
  },
  "locus-amoenus-therapies": {
    slug: "locus-amoenus-therapies",

    brand: {
      name: "Locus Amoenus Therapies",
      shortName: "Locus Amoenus",
      tagline:
        "A supportive space for personal growth, emotional wellbeing, and healing.",
    },

    contact: {
      phone: "123456789",
      email: "locus.amoenus@example.com",
      city: "United Kingdom",
      address: "",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Locus Amoenus Therapies",
      title: "Therapist",
      image:
        "https://static.wixstatic.com/media/debe79_33f02b3c49364786a30e4b13b7607c2e~mv2.jpg/v1/fill/w_388,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/debe79_33f02b3c49364786a30e4b13b7607c2e~mv2.jpg",
      cta: {
        text: "Learn more about the therapist",
        href: "https://www.locusamoenustherapies.com/",
      },
    },
  },
  "holistic-transformative-therapy": {
    slug: "holistic-transformative-therapy",

    brand: {
      name: "Holistic Transformative Therapy",
      shortName: "Holistic Transformative Therapy",
      tagline:
        "Trauma-informed psychotherapy and hypnotherapy for emotional healing, self-worth, and healthier relationships.",
    },

    contact: {
      phone: "07849 580021",
      email: "hello@holistictransformativetherapy.com",
      city: "Leeds, West Yorkshire, UK",
      address: "31 Park Square West, Leeds, LS1 2PF",
      bookingUrl:
        "https://www.holistictransformativetherapy.com/service-page/free-clarity-call-15-min",
    },

    therapist: {
      name: "Dorota",
      title: "Integrative Psychotherapist & Clinical Hypnotherapist",
      image:
        "https://static.wixstatic.com/media/9ad50f_d5848a4ee44e410c9b3f7fa79fe1b809~mv2.png/v1/crop/x_0,y_111,w_818,h_1157/fill/w_579,h_821,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dorota%20HTT2_edited_edited_edited.png", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Dorota",
        href: "https://www.holistictransformativetherapy.com/about-me",
      },
    },
  },
  "karen-de-souza": {
    slug: "karen-de-souza",

    brand: {
      name: "Karen De Souza Somatic Therapy",
      shortName: "Karen De Souza",
      tagline:
        "Somatic therapy integrating breath, body, voice, and connection to support healing and self-discovery.",
    },

    contact: {
      phone: "07538237147",
      email: "info@karendesouza.co.uk",
      city: "London, UK",
      address: "The Practice Rooms, 57 Ship Street, Brighton, BN1 1AF",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Karen De Souza",
      title:
        "Somatic Therapist, Social Worker & Compassionate Inquiry Practitioner",
      image:
        "https://static.wixstatic.com/media/d79f9f_25fe50f3e7ef42f9956b841da055cd45~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d79f9f_25fe50f3e7ef42f9956b841da055cd45~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Karen De Souza",
        href: "https://www.karendesouza.co.uk/about-me",
      },
    },
  },
  "mindbody-therapy-service": {
    slug: "mindbody-therapy-service",

    brand: {
      name: "MindBody Therapy Service",
      shortName: "MindBody Therapy",
      tagline:
        "Evidence-based therapy supporting emotional wellbeing, trauma recovery, and the connection between mind and body.",
    },

    contact: {
      phone: "07400050868",
      email: "info@mindbodytherapyservice.com",
      city: "Brighton & Hove, UK",
      address: "Suite 15, Curtis House, Third Avenue, Hove, BN3 2PD",
      bookingUrl: "https://www.mindbodytherapyservice.com/",
    },

    therapist: {
      name: "Sian Lamey",
      title:
        "Clinical Director, BABCP Accredited CBT Therapist & Occupational Therapist",
      image:
        "https://static.wixstatic.com/media/8a2ae7_9d1152bd23e64af1a81ca556b22caae5~mv2.jpg/v1/fill/w_575,h_1001,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a2ae7_9d1152bd23e64af1a81ca556b22caae5~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Sian Lamey",
        href: "https://www.mindbodytherapyservice.com/sian-lamey-emdr-for-ptsd-and-trauma-cbt-for-anxiety-in-brighton-and-hove",
      },
    },
  },
  "sunrise-healing": {
    slug: "sunrise-healing",

    brand: {
      name: "Sunrise Healing",
      shortName: "Sunrise Healing",
      tagline:
        "IFS psychotherapy, Reiki, and holistic support for emotional wellbeing and personal growth.",
    },

    contact: {
      phone: "07399 250750",
      email: "carlysunrisehealing@gmail.com",
      city: "Brighton",
      address: "3 Church Place, Brighton, BN2 5JN",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Carly Steadman",
      title: "Psychotherapist & Reiki Practitioner",
      image:
        "https://static.wixstatic.com/media/7a3b97_a78add811fe648ce8e82185f706de366~mv2.jpg/v1/crop/x_0,y_45,w_2478,h_3285/fill/w_480,h_676,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Headshot%20(2)_JPG.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Carly Steadman",
        href: "https://www.sunrisehealing.co.uk/about-me",
      },
    },
  },
  "sandra-wilson-clinical-hypnotherapy": {
    slug: "sandra-wilson-clinical-hypnotherapy",

    brand: {
      name: "Sandra Wilson Clinical Hypnotherapy",
      shortName: "Sandra Wilson",
      tagline:
        "Clinical hypnotherapy and psychotherapy supporting women with anxiety, trauma, confidence, and life's challenges.",
    },

    contact: {
      phone: "07734328834",
      email: "sewhypnotherapy@gmail.com",
      city: "Bristol, UK",
      address: "Bristol, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Sandra Wilson, BSc (Hons), HPD, DSFH",
      title: "Clinical Hypnotherapist & Psychotherapist",
      image:
        "https://static.wixstatic.com/media/efa10c_36f19b3e2c6f46e1a84ca3be3a99c2c7~mv2.jpg/v1/fill/w_915,h_634,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/efa10c_36f19b3e2c6f46e1a84ca3be3a99c2c7~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Sandra Wilson",
        href: "https://www.sandrawilsonclinicalhypnotherapy.org/about-me",
      },
    },
  },

  // Batch 3

  "crissy-scott": {
    slug: "crissy-scott",

    brand: {
      name: "Dr. Crystyn Scott",
      shortName: "Crissy Scott",
      tagline:
        "Counselling psychology, CBT, and EMDR support for emotional wellbeing and personal growth.",
    },

    contact: {
      phone: "07539280341",
      email: "crissyscott@protonmail.com",
      city: "Bristol",
      address:
        "The Arches Therapy Rooms, 198 Cheltenham Road, Montpellier, Bristol BS6 5QZ",
      bookingUrl: "https://afterlight.janeapp.co.uk",
    },

    therapist: {
      name: "Dr. Crystyn Scott",
      title: "Counselling Psychologist & CBT Psychotherapist",
      image: "https://crissyscott.co.uk/images/3.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Dr. Crystyn Scott",
        href: "https://crissyscott.co.uk/dr-crissy-scott-psychologist-bristol",
      },
    },
  },
  "soft-focus-therapy": {
    slug: "soft-focus-therapy",

    brand: {
      name: "Soft Focus Therapy",
      shortName: "Soft Focus",
      tagline:
        "Trauma-informed psychotherapy and EMDR support to help you feel safer, calmer, and more at home in yourself.",
    },

    contact: {
      phone: "+44 744 879 00 24",
      email: "Sebastien@gmail.com", // No email address publicly listed
      city: "Bristol",
      address: "Bristol, UK",
      bookingUrl:
        "https://www.softfocustherapy.com/service-page/free-15-min-intro-call",
    },

    therapist: {
      name: "Sebastien Black",
      title: "NCPS Accredited Psychotherapist & EMDR Specialist",
      image:
        "https://static.wixstatic.com/media/345fcc_99d5ccd65d6c4a939f1ce9a6a2ee07e0~mv2.jpg/v1/fill/w_953,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/345fcc_99d5ccd65d6c4a939f1ce9a6a2ee07e0~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Sebastien Black",
        href: "https://www.softfocustherapy.com/",
      },
    },
  },
  "path-to-inner-wellness": {
    slug: "path-to-inner-wellness",

    brand: {
      name: "Path to Inner Wellness",
      shortName: "Inner Wellness",
      tagline:
        "Support for anxiety, OCD, and emotional wellbeing to help you move towards a calmer, more confident life.",
    },

    contact: {
      phone: "07301087963",
      email: "chrismason@gmail.com", // Placeholder; unverified
      city: "Bristol",
      address: "Bristol, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Chris Mason",
      title: "Therapist (MCThA)",
      image:
        "https://static.wixstatic.com/media/7db286_d4db2fadabea4755857c52e384369e1d~mv2.jpg/v1/fill/w_273,h_285,al_c,q_80,enc_avif,quality_auto/Homepage%20profile.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Chris Mason",
        href: "https://www.pathtoinnerwellness.com/",
      },
    },
  },
  "key-to-you-counselling": {
    slug: "key-to-you-counselling",

    brand: {
      name: "Key to You Counselling",
      shortName: "Key to You",
      tagline:
        "Warm, integrative counselling to help you navigate anxiety, build confidence, set healthy boundaries, and reconnect with yourself.",
    },

    contact: {
      phone: "07564186271",
      email: "keytoyoucounselling@gmail.com",
      city: "Bristol",
      address: "Stoke Gifford, North Bristol, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Katrina Young",
      title: "Integrative Counsellor",
      image:
        "https://static.wixstatic.com/media/e319a2_c343f2baec8f42be8accf159ebd2b185~mv2.jpg/v1/crop/x_0,y_171,w_4896,h_5707/fill/w_388,h_439,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG20230215175854.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Katrina Young",
        href: "https://www.keytoyoucounselling.co.uk/",
      },
    },
  },
  "renata-psychotherapy": {
    slug: "renata-psychotherapy",

    brand: {
      name: "Renata Psychotherapy",
      shortName: "Renata Psychotherapy",
      tagline:
        "CBT, EMDR, and trauma-informed psychotherapy to support adults with anxiety, depression, and trauma.",
    },

    contact: {
      phone: "1234567890", // Placeholder; no public phone confirmed
      email: "renata.konigsman@gmail.com",
      city: "Bristol",
      address:
        "Bristol Talking Therapy Rooms, 3 Redcliffe Parade East, Redcliffe, Bristol BS1 6SW, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Renata Königsman",
      title: "Psychotherapist, CBT Therapist & EMDR Therapist",
      image:
        "https://static.wixstatic.com/media/6e6ad3_6839b8c2b46b40dea7084a99f8f54a6d~mv2.jpeg/v1/fill/w_394,h_601,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Renata%20Profile%20Photo.jpeg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Renata Königsman",
        href: "https://www.renata-psychotherapy.com/about",
      },
    },
  },
  "harmony-mind-care": {
    slug: "harmony-mind-care",

    brand: {
      name: "Harmony Mind Care",
      shortName: "Harmony Mind Care",
      tagline:
        "Psychotherapy, music therapy, and holistic support for emotional wellbeing, personal growth, and mental health.",
    },

    contact: {
      phone: "07548344019",
      email: "stef.gallini@gmail.com",
      city: "Bristol",
      address: "Muller Avenue, Bristol, BS7 9HX, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Stephen Gallini",
      title: "Psychotherapist & HCPC-Registered Music Therapist",
      image:
        "https://static.wixstatic.com/media/8d719b_2223b571ad63433698f194967b696df3~mv2.jpeg/v1/crop/x_0,y_34,w_761,h_956/fill/w_265,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202023-12-20%20at%2001_04_37.jpeg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Stephen Gallini",
        href: "https://www.harmonymindcare.com/",
      },
    },
  },
  "freedom-with-therapy": {
    slug: "freedom-with-therapy",

    brand: {
      name: "Freedom With Therapy",
      shortName: "Freedom With Therapy",
      tagline:
        "Compassionate counselling, psychotherapy, and hypnotherapy to help you navigate anxiety, burnout, past experiences, and life transitions.",
    },

    contact: {
      phone: "1234567890", // Placeholder; verify before publishing
      email: "kirstenm.therapy@gmail.com",
      city: "Bristol",
      address: "Bristol BS7, United Kingdom",
      bookingUrl: "https://www.freedomwiththerapy.com/book-a-consultation",
    },

    therapist: {
      name: "Kirsten Malcolm",
      title: "Counsellor, Psychotherapist & Clinical Hypnotherapist",
      image:
        "https://static.wixstatic.com/media/710353_47770dc66b8b4a0e8fa18fb1ea01e91c~mv2.jpg/v1/fill/w_720,h_584,al_c,q_85,enc_avif,quality_auto/710353_47770dc66b8b4a0e8fa18fb1ea01e91c~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Kirsten Malcolm",
        href: "https://www.freedomwiththerapy.com/",
      },
    },
  },
  "stephanie-lawrence-psychotherapy": {
    slug: "stephanie-lawrence-psychotherapy",

    brand: {
      name: "Stephanie Lawrence Psychotherapy",
      shortName: "Stephanie Lawrence",
      tagline:
        "Integrative psychotherapy offering a safe, supportive space to explore emotional difficulties, relationships, and life challenges.",
    },

    contact: {
      phone: "07833 621 480",
      email: "stephanie.lawrence@mac.com",
      city: "Bristol",
      address:
        "Saville Court, 11 Saville Place, Clifton, Bristol BS8 4EJ, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Stephanie Lawrence",
      title: "UKCP-Registered Integrative Psychotherapist",
      image: female, // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Stephanie Lawrence",
        href: "http://www.stephanielawrencepsychotherapy.co.uk/about.html",
      },
    },
  },
  "soul-trainer": {
    slug: "soul-trainer",

    brand: {
      name: "Soul Trainer",
      shortName: "Soul Therapy",
      tagline:
        "Holistic psychotherapy, hypnotherapy, and eating disorder support for children, young people, and adults.",
    },

    contact: {
      phone: "+447813167676",
      email: "soultherapybms@gmail.com",
      city: "Bishop Sutton, Bristol",
      address: "Bishop Sutton, near Bristol, United Kingdom",
      bookingUrl: "https://www.soul-trainer.co.uk/contact",
    },

    therapist: {
      name: "Jackie Harding",
      title:
        "Psychotherapist, Clinical Hypnotherapist & Eating Disorder Specialist",
      image:
        "https://static.wixstatic.com/media/10fcde_de83562ef5e045bba6ecc350b105ccd2~mv2.jpg/v1/crop/x_796,y_0,w_1407,h_2000/fill/w_323,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CR6A8226_edited.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Jackie Harding",
        href: "https://www.soul-trainer.co.uk/about",
      },
    },
  },
  "liber8-your-life": {
    slug: "liber8-your-life",

    brand: {
      name: "Liber8yourlife",
      shortName: "Liber8yourlife",
      tagline:
        "Hypnotherapy and holistic wellbeing support to help you manage stress, build confidence, and make positive changes in your life.",
    },

    contact: {
      phone: "07968 724322",
      email: "farnooshkm@liber8yourlife.com",
      city: "Cambridge",
      address: "Cambridge, United Kingdom",
      bookingUrl: "#contact",
    },

    therapist: {
      name: "Farnoosh Kovily",
      title: "Clinical Hypnotherapist & Holistic Therapist",
      image:
        "https://static.wixstatic.com/media/90a441_c6635ae3ab54494b875d0cc5ad355293~mv2.jpg/v1/fill/w_249,h_228,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_c6635ae3ab54494b875d0cc5ad355293~mv2.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about Farnoosh Kovily",
        href: "https://www.liber8yourlife.com/",
      },
    },
  },
  "reiki-healing-space": {
    slug: "reiki-healing-space",

    brand: {
      name: "Reiki Healing Space",
      shortName: "Reiki Healing Space",
      tagline:
        "Gentle Reiki healing to help you relax, release stress, and find a calmer, more balanced sense of wellbeing.",
    },

    contact: {
      phone: "07830 315992",
      email: "info@reikihealingspace.co.uk",
      city: "Cambridge",
      address: "Trumpington, Cambridge, United Kingdom",
      bookingUrl: "https://www.reikihealingspace.co.uk/",
    },

    therapist: {
      name: "June",
      title: "Qualified Reiki Master",
      image:
        "https://static.wixstatic.com/media/96283d_9766d028f36149c1867e7cef7f25cd73~mv2.jpg/v1/fill/w_277,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Reiki%20Healing%20Space%20-%20JS%20Photo.jpg", // Add the direct therapist photo URL
      cta: {
        text: "Learn more about June",
        href: "https://www.reikihealingspace.co.uk/about",
      },
    },
  },

  // Bacth 4

"denitsa-radeva-petrova": {
  slug: "denitsa-radeva-petrova",

  brand: {
    name: "Denitsa Radeva-Petrova Therapy",
    shortName: "Denitsa Therapy",
    tagline:
      "Integrative psychotherapy and counselling psychology supporting emotional wellbeing, self-understanding, relationships, and personal growth.",
  },

  contact: {
    phone: "+44 75 886 92891",
    email: "denitsaradevapetrova@gmail.com",
    city: "Canterbury",
    address:
      "Lombard House Health, Wellbeing and Business Centre, Canterbury, Kent, United Kingdom",
    bookingUrl: "#contact",
  },

  therapist: {
    name: "Dr Denitsa Radeva-Petrova",
    title: "Counselling Psychologist & Integrative Psychotherapist",
    image: "https://static.wixstatic.com/media/fd5f86_66565452c46d4edcace22606c94e6e17~mv2.jpg/v1/crop/x_0,y_160,w_1052,h_1162/fill/w_297,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/542759507_24652324954456726_1047874375047217769_n%20(1)_edited_edited.jpg", // Add the direct therapist photo URL
    cta: {
      text: "Learn more about Dr Denitsa Radeva-Petrova",
      href: "https://www.denitsarpetrova-therapy.com/",
    },
  },
},
"project-you-counselling": {
  slug: "project-you-counselling",

  brand: {
    name: "ProjectYou Counselling",
    shortName: "ProjectYou",
    tagline:
      "Pluralistic counselling, hypnotherapy, and postnatal support tailored to you.",
  },

  contact: {
    phone: "07709490130",
    email: "ella@projectyoucounselling.co.uk",
    city: "Chelmsford",
    address: "Chelmsford, Essex, United Kingdom",
    bookingUrl: "#contact",
  },

  therapist: {
    name: "Ella",
    title: "Psychotherapist, Counsellor & Hypnotherapist",
    image:
      "https://static.wixstatic.com/media/64990e_22a47a5db23043bd95210714e13d2a84~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20190709_210835_188.jpg",
    cta: {
      text: "Learn more about Ella",
      href: "https://www.projectyoucounselling.co.uk/about-me",
    },
  },
},
"daylily-therapy": {
  slug: "daylily-therapy",

  brand: {
    name: "Daylily Therapy",
    shortName: "Daylily Therapy",
    tagline:
      "Person-centred counselling offering a calm, supportive space to explore your feelings and wellbeing.",
  },

  contact: {
    phone: "07935454703",
    email: "claire@daylilytherapy.co.uk", // Unverified placeholder
    city: "United Kingdom",
    address: "United Kingdom",
    bookingUrl: "#contact",
  },

  therapist: {
    name: "Claire",
    title: "Qualified Person-Centred Counsellor",
    image: "https://static.wixstatic.com/media/9238ea_d6ac4c3dc79b4700992dad7258b3e66c~mv2.jpeg/v1/fill/w_189,h_251,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0785.jpeg", // Add the direct therapist photo URL
    cta: {
      text: "Learn more about Claire",
      href: "https://www.daylilytherapy.co.uk/about-me",
    },
  },
},
"voice-counselling": {
  slug: "voice-counselling",

  brand: {
    name: "Voice Counselling",
    shortName: "Voice Counselling",
    tagline:
      "Integrative counselling and psychotherapy providing a safe, welcoming space to work through anxiety, depression, stress, and self-esteem challenges.",
  },

  contact: {
    phone: "07704303661",
    email: "kerryselvage@gmail.com", // Placeholder; unverified
    city: "Bristol",
    address: "Bristol, United Kingdom",
    bookingUrl: "#contact",
  },

  therapist: {
    name: "Kerry Selvage",
    title: "Counsellor & Psychotherapist",
    image: "https://static.wixstatic.com/media/35af72_916606159a9b46868ed33efab07f771c~mv2.jpg/v1/crop/x_0,y_0,w_2840,h_2767/fill/w_208,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/website%20photo_edited.jpg", // Add the direct therapist photo URL
    cta: {
      text: "Learn more about Kerry Selvage",
      href: "https://www.voicecounselling.co.uk/",
    },
  },
},
"aspire-counselling": {
  slug: "aspire-counselling",

  brand: {
    name: "Aspire Counselling",
    shortName: "Aspire Counselling",
    tagline:
      "Person-centred counselling for adults, couples, and young people in a safe and supportive environment.",
  },

  contact: {
    phone: "07800843054",
    email: "audreysandilands@gmail.com", // Placeholder; unverified
    city: "Malpas",
    address: "Malpas, Cheshire, United Kingdom",
    bookingUrl: "#contact",
  },

  therapist: {
    name: "Audrey Sandilands",
    title: "Qualified Person-Centred Counsellor",
    image: "https://static.wixstatic.com/media/a498ed_f880f4bdd82e49459f22533027391b96~mv2.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250909_195155_edited.jpg", // Add the direct therapist photo URL
    cta: {
      text: "Learn more about Audrey Sandilands",
      href: "https://www.aspire-counselling.com/",
    },
  },
},
"naomi-bateren-therapy": {
  slug: "naomi-bateren-therapy",

  brand: {
    name: "Naomi Bateren Therapy",
    shortName: "Naomi Bateren Therapy",
    tagline:
      "Warm, human psychotherapy and EMDR support for individuals, couples, and families.",
  },

  contact: {
    phone: "07864821243",
    email: "hello@naomibaterentherapy.com",
    city: "Liverpool",
    address:
      "The Changing Rooms, Sudley Estate and Fields, Liverpool L18 8BX, United Kingdom",
    bookingUrl: "#contact",
  },

  therapist: {
    name: "Naomi Bateren",
    title: "Registered Psychotherapist, Dramatherapist & EMDR Therapist",
    image: "", // Add the direct therapist photo URL
    cta: {
      text: "Learn more about Naomi Bateren",
      href: "https://www.naomibaterentherapy.com/about-me",
    },
  },
},
};
