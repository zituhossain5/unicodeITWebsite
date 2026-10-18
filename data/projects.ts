export type ProjectShowcaseBlock = {
  title?: string;
  body?: string;
  images: readonly string[];
  layout?: "full" | "grid";
};

export type ProjectDetailListItem = string | { lead: string; body: string };

export type ProjectDetailBlock =
  | {
      type: "copy";
      title: string;
      paragraphs?: readonly string[];
      paragraphsTogether?: boolean;
      bulletsLabel?: string;
      bullets?: readonly ProjectDetailListItem[];
      closingParagraphs?: readonly string[];
      groups?: readonly {
        title: string;
        paragraphs?: readonly string[];
        bullets?: readonly ProjectDetailListItem[];
        closingParagraphs?: readonly string[];
      }[];
    }
  | {
      type: "image";
      image: string;
      alt: string;
      aspectRatio: string;
    }
  | {
      type: "imageStack";
      images: readonly {
        image: string;
        alt: string;
        aspectRatio: string;
      }[];
    }
  | {
      type: "imageSection";
      title: string;
      images: readonly {
        image: string;
        alt: string;
        aspectRatio: string;
      }[];
    };

export type Project = {
  slug: string;
  title: string;
  showOnHomepage?: boolean;
  sliderTitle?: string;
  detailTitle?: string;
  detailLayout?: "figma-longform";
  detailBlocks?: readonly ProjectDetailBlock[];
  industry: readonly string[];
  serviceCategory: readonly string[];
  servicesProvided: readonly string[];
  scopeOfWork: readonly string[];
  liveUrl: string;
  links?: readonly { label: string; url: string }[];
  summary: string;
  showInFeaturedSliders?: boolean;
  sliderImage?: string;
  heroImage: string;
  heroAspectRatio?: string;
  problems: string;
  solutions: readonly string[];
  showcase: readonly ProjectShowcaseBlock[];
  tags: readonly string[];
  category: string;
  region: string;
  year: string;
  listing: string;
  relatedImage: string;
  cover: string;
  gallery: readonly string[];
};

export type ProjectListing = Pick<
  Project,
  | "slug"
  | "title"
  | "listing"
  | "tags"
  | "category"
  | "region"
  | "showOnHomepage"
> & {
  externalUrl?: string;
  hasDetailsPage?: boolean;
};

export const EMLOCK_PROJECT_IMAGE =
  "/assets/projects/emlock/_mobileapp_project_main_img.png";

export const AL_QURAN_PROJECT_IMAGE = "/assets/projects/Quran_App.png";

export const DIRECTORIST_PROJECT_IMAGE =
  "/assets/projects/directorist-mobile-app-main.png";

export const DIRECTORIST_PLUGIN_PROJECT_IMAGE =
  "/assets/projects/Directorist Plugin Main.png";

export const HELPGENT_PROJECT_IMAGE = "/assets/projects/HelpGentMain.png";

export const FORMGENT_PROJECT_IMAGE = "/assets/projects/FormGentMain.png";

export const HRM_PROJECT_IMAGE =
  "/assets/projects/hrm/Sovware_HRM_Thumbnail 1.png";

export const TEMPLATIQ_PROJECT_IMAGE =
  "/assets/projects/templatiq/Templatiq Main Image.png";

export const ONELISTING_PROJECT_IMAGE =
  "/assets/projects/onelisting/OneListing main.png";

export const LEANIER_PROJECT_IMAGE = "/assets/projects/leanier/Leanier app.png";

export const REBORN_PACKAGING_PROJECT_IMAGE =
  "/assets/projects/reborn-packaging/Reborn packaging.png";

export const MEDITRUST_PROJECT_IMAGE = "/assets/projects/meditrust/heroImg.png";

export const UNI_MAIL_HUB_PROJECT_IMAGE =
  "/assets/projects/uni-mail-hub/Uni Mail Hub Main.png";

export const UNICRM_PROJECT_IMAGE = "/assets/projects/unicrm/UniCRM Main.png";

export const projects = [
  {
    slug: "reborn-packaging",
    title: "Reborn Packaging — UI/UX Design & Flutter App Development",
    detailLayout: "figma-longform",
    industry: ["Ecommerce"],
    serviceCategory: ["Mobile App Design", "Flutter Mobile App Development"],
    servicesProvided: [
      "UX Research",
      "UI/UX Design",
      "Flutter App Development",
      "Android & iOS Delivery",
      "Google Play & App Store Deployment",
    ],
    scopeOfWork: [
      "Research",
      "UX Strategy",
      "User Flow",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Design System",
      "Flutter Development",
      "Android & iOS Release Preparation",
      "Google Play Deployment",
      "App Store Deployment",
    ],
    liveUrl: "",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/app/reborn-packaging/id6814178306",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.rebornpackaging.reborn_packaging",
      },
    ],
    summary:
      "Reborn Packaging is a UK-based ecommerce business offering sustainable food packaging. Unicode IT designed its dedicated mobile shopping experience and developed the Flutter application for Android and iOS. The app is available on Google Play and the App Store.",
    showInFeaturedSliders: false,
    heroImage: REBORN_PACKAGING_PROJECT_IMAGE,
    heroAspectRatio: "916 / 639",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "Reborn Packaging is a UK-based ecommerce business providing sustainable and eco-friendly food packaging products for restaurants, cafés, takeaways, caterers, and other food-service businesses.",
          "The goal was to transform the existing Shopify ecommerce experience into a dedicated mobile shopping app that makes browsing, finding, and ordering packaging products faster and easier on mobile.",
          "Unicode IT designed the complete mobile experience, from user research, information architecture, and wireframes to the final UI design, reusable components, and production-ready screens. We then developed the application in Flutter for Android and iOS, prepared both versions for release, and uploaded them to Google Play and the App Store.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "The existing ecommerce experience needed a more focused mobile shopping experience for customers who frequently browse and purchase food packaging products. That experience also needed to become a downloadable Android and iOS application.",
        ],
        bulletsLabel: "Key problems identified during the UX process included:",
        bullets: [
          "A large and diverse product catalogue made product discovery difficult on smaller screens.",
          "Customers needed a faster way to browse packaging categories and find specific products.",
          "Product variations, sizes, specifications, and pricing needed to remain clear on mobile.",
          "The shopping journey needed to feel simple from product discovery through checkout.",
          "Returning customers needed easier access to their accounts, previous orders, and delivery information.",
          "The mobile experience needed to support both quick browsing and repeat purchasing.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Designing and delivering an ecommerce mobile app for a large packaging catalogue introduced several UX and cross-platform implementation challenges:",
        ],
        bullets: [
          "Structuring a wide range of packaging categories without making navigation overwhelming.",
          "Designing product pages that could clearly present images, variants, sizes, pricing, and product information.",
          "Creating intuitive search, filtering, and product discovery experiences.",
          "Translating an existing Shopify ecommerce workflow into a focused mobile experience.",
          "Designing cart and checkout interactions that remain simple while supporting ecommerce requirements.",
          "Maintaining consistency across a large number of screens, states, and reusable UI components.",
          "Translating the approved UI/UX into a Flutter application for both Android and iOS.",
          "Preparing both platform versions for release on Google Play and the App Store.",
        ],
      },
      {
        type: "image",
        image: "/assets/projects/reborn-packaging/Reborn packaging 5.png",
        alt: "Reborn Packaging mobile shopping screens",
        aspectRatio: "916 / 638",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "We designed and developed the mobile experience around clarity, product discovery, and a straightforward ecommerce journey, keeping the interface simple while supporting the complexity of the product catalogue.",
        ],
        bulletsLabel: "Key UX/UI and development solutions included:",
        bullets: [
          "Created a clear mobile information architecture for product categories and collections.",
          "Designed intuitive navigation to help customers quickly browse and discover packaging products.",
          "Developed structured product pages for images, product details, sizes, variants, pricing, and purchasing actions.",
          "Designed a streamlined search experience for faster product discovery.",
          "Created a simple cart experience for reviewing products and managing quantities.",
          "Designed the mobile shopping flow around the Shopify ecommerce checkout experience.",
          "Designed customer account, order history, profile, and delivery address management screens.",
          "Built a consistent UI system with reusable components to maintain visual and functional consistency across the app.",
          "Designed the complete experience from early wireframes through high-fidelity, production-ready UI.",
          "Implemented the approved UI/UX in Flutter for Android and iOS.",
          "Prepared and uploaded the Android and iOS versions to Google Play and the App Store.",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "The result is a modern ecommerce mobile app for Reborn Packaging that brings the company's Shopify shopping experience into a dedicated mobile environment.",
          "Customers can browse food packaging categories, search the catalogue, explore product options and pricing, manage their cart, complete checkout through Shopify, and manage their account and previous orders directly from the app.",
          "Unicode IT delivered the Flutter application for Android and iOS and uploaded both versions to Google Play and the App Store. The client actively uses the application, and end users can download it from both stores.",
        ],
      },
      {
        type: "imageStack",
        images: [
          {
            image: "/assets/projects/reborn-packaging/Reborn packaging 1 1.png",
            alt: "Reborn Packaging product discovery and shopping screens",
            aspectRatio: "916 / 658",
          },
          {
            image: "/assets/projects/reborn-packaging/Reborn packaging 2 1.png",
            alt: "Reborn Packaging product catalogue screens",
            aspectRatio: "916 / 658",
          },
          {
            image: "/assets/projects/reborn-packaging/Reborn packaging 3 1.png",
            alt: "Reborn Packaging cart and checkout screens",
            aspectRatio: "916 / 658",
          },
          {
            image: "/assets/projects/reborn-packaging/Reborn packaging 4 1.png",
            alt: "Reborn Packaging account and order screens",
            aspectRatio: "916 / 658",
          },
        ],
      },
    ],
    tags: ["UI/UX Design", "Flutter Development", "Android & iOS", "Ecommerce"],
    category: "Mobile App Development",
    region: "UK",
    year: "",
    listing: REBORN_PACKAGING_PROJECT_IMAGE,
    relatedImage: REBORN_PACKAGING_PROJECT_IMAGE,
    cover: REBORN_PACKAGING_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "emlock",
    title: "EmLock — EMI-Based Mobile App Development",
    sliderTitle: "EmLock",
    detailTitle:
      "EmLock — EMI-Based Mobile Application for Smart Installment Sales & Device Locking",
    detailLayout: "figma-longform",
    industry: ["Fintech", "Mobile Commerce", "SaaS"],
    serviceCategory: [
      "Mobile App Development",
      "UI/UX Design",
      "SaaS Product Development",
    ],
    servicesProvided: [
      "Market Research",
      "UI UX Design",
      "MVP App Development",
      "Android App Development",
    ],
    scopeOfWork: [
      "Product Discovery",
      "User Research",
      "UI UX Design",
      "Payment Tracking",
      "Mobile Locking System",
      "EMI Management",
      "Kotlin, Asp.Net, Firebase\nREST API, PostgreSQL, \nGoogle Maps API, \nAndroid Device Management APIs ",
    ],
    liveUrl: "",
    links: [],
    summary:
      "EmLock is a SaaS mobile application that helps shop owners sell mobile phones on EMI (installments) and secure collections through an automated device lock/unlock system. See how we designed and developed this app.",
    heroImage: EMLOCK_PROJECT_IMAGE,
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "EmLock is an EMI-based mobile application designed to help mobile retailers sell smartphones through flexible installment plans while reducing the risk of missed payments.",
          "The platform connects two key user groups mobile buyers and mobile shop owners. Buyers can discover nearby shops offering mobile phones on EMI, while shop owners can manage customers, installment plans, payments, and device access from a dedicated system.",
          "The core of EmLock is its Android mobile locking system, which allows authorized shop owners to restrict device access when an EMI payment remains overdue. Once the payment is completed, the device can be unlocked through the authorized process.",
          "From market research and product planning to UI/UX design and MVP Android development, we worked across the complete product lifecycle to turn the concept into a functional digital product and built the Android version natively using Kotlin.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "EMI-based mobile phone sales are a popular practice in the retail market, but they come with a major risk for shop owners: customers disappearing or going unreachable before completing their installment payments.",
          "The key problems we identified:",
        ],
        bullets: [
          "Shop owners had no way to track or control a device once a customer defaulted or delayed payment.",
          "Manual installment tracking was error-prone and time-consuming.",
          "There was no structured system for sending payment reminders or notifications to customers.",
          "Customers struggled to find trustworthy, verified EMI shops nearby.",
          "Without a secure, remotely controllable locking mechanism, the entire EMI business model carried a high risk of financial loss.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Across research, design, and development, we faced several key challenges:",
        ],
        groups: [
          {
            title: "Research Challenges",
            bullets: [
              "Understanding the EMI business model and local mobile retail industry behavior.",
              "Analyzing the needs of two distinct user personas, buyers and sellers at the same time.",
            ],
          },
          {
            title: "Design Challenges",
            bullets: [
              "Translating a complex installment management system into a simple, user-friendly interface.",
              "Designing separate dashboards for two different user types, ensuring a clear and intuitive experience for both.",
            ],
          },
          {
            title: "Development Challenges",
            bullets: [
              "Building a secure and reliable device lock/unlock system in Kotlin that couldn't be bypassed by end-users.",
              "Developing an automated lock-trigger system based on payment deadlines.",
              "Integrating real-time notifications so customers receive alerts before their installment due date.",
              "Making the location-based shop search feature accurate and reliable.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/emlock/_mobileapp_project_details_img.png",
        alt: "EmLock mobile application screens and installment management features",
        aspectRatio: "2000 / 1280",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "To address these challenges, we built a complete, secure, and user-friendly system that makes EMI-based mobile sales far more organized and risk-free:",
        ],
        bullets: [
          {
            lead: "Designed a dual-user architecture -",
            body: " separate dashboards and feature sets for End-users and Shop Owners, so each user gets exactly what they need.",
          },
          {
            lead: "Built a smart, location-based shop search feature -",
            body: " allowing customers to easily find verified EMI shops near them.",
          },
          {
            lead: "Created customizable EMI plans -",
            body: " shop owners can set installment amounts, durations, and terms based on their own business needs.",
          },
          {
            lead: "Integrated an automated payment reminder system -",
            body: " customers receive notifications before their installment due date.",
          },
          {
            lead: "Developed an automated device lock/unlock system as the app's core feature -",
            body: " the device automatically locks once a payment deadline (3/7 days) is missed, and unlocks automatically once the payment is made. Customers cannot bypass or unlock the device on their own; it can only be unlocked through the shop owner.",
          },
          {
            lead: "Added a full-payment app disable option -",
            body: " once all installments are paid off, the device becomes fully independent and usable without restriction.",
          },
          {
            lead: "Built a native Android app using Kotlin -",
            body: " ensuring reliable performance, stability, and security.",
          },
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Through our research, design, and development process, EmLock has become a fully functional MVP that makes EMI-based mobile phone sales safer, more organized, and more profitable for retailers.",
        ],
        bullets: [
          "Shop owners can now sell mobile phones on EMI with confidence, knowing the device will automatically lock if a payment is missed.",
          "Customers can easily find trustworthy EMI shops in their area and track their installment details.",
          "The automated reminder and lock/unlock system has significantly improved collection rates and reduced manual overhead for shop owners.",
        ],
        closingParagraphs: [
          "Overall, EmLock demonstrates how a simple, technology-driven solution can transform a traditional business model into something smarter, safer, and more scalable - and we're proud to have been part of this project from concept to launch.",
        ],
      },
    ],
    tags: [
      "Mobile Application",
      "App Development",
      "SaaS Development",
      "UI/UX Design",
    ],
    category: "Mobile Application",
    region: "",
    year: "2026",
    listing: EMLOCK_PROJECT_IMAGE,
    relatedImage: EMLOCK_PROJECT_IMAGE,
    cover: EMLOCK_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "al-quran",
    title: "AL Quran — Modern Quran Reading Mobile App",
    sliderTitle: "Al Quran",
    detailTitle:
      "Al Quran — UI/UX Design for a Modern Quran Reading Mobile Application",
    detailLayout: "figma-longform",
    industry: ["Education"],
    serviceCategory: ["UI/UX Design", "Mobile App Design"],
    servicesProvided: [
      "UX Research",
      "User Flow Planning",
      "Information Architecture",
      "Wireframing",
      "UI/UX Design",
      "Prototyping",
    ],
    scopeOfWork: [
      "Product Discovery",
      "UX Research",
      "Wireframing",
      "High-Fidelity UI Design",
      "Design System",
    ],
    liveUrl: "",
    links: [],
    summary:
      "A complete UI/UX design case study of Al Quran, a full-featured Quran mobile app with multi-translation reading, reciter playback, bookmarks, and topic exploration. Now live on App Store & Google Play.",
    heroImage: AL_QURAN_PROJECT_IMAGE,
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "AL Quran is a full-featured Quran mobile application designed to bring Quran reading, listening, translation, and learning together in one clear and intuitive digital experience.",
          "We designed the product from scratch, starting with UX research and user flow planning and continuing through information architecture, wireframing, interaction design, and final high-fidelity UI.",
          "The experience was carefully structured around the needs of Quran readers, with features such as Surah and Juz navigation, multi-translation support (Bengali & English), verse-by-verse reading, audio recitation, reciter selection, Ayat repeat and delay controls, bookmarks, and topic exploration.",
          "The final design focuses on clarity, accessibility, ease of navigation, and a respectful visual experience appropriate for a Quran-focused application.",
          "The application is currently live on both the App Store and Google Play Store.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Quran applications often contain a large number of reading, translation, audio, and learning features. When these features are not organized properly, users can struggle to find what they need or become overwhelmed by complex navigation.",
          "The goal was to create a Quran app experience that keeps powerful functionality accessible while maintaining a calm, focused, and intuitive reading experience.",
        ],
        paragraphsTogether: true,
        bulletsLabel: "The key problems we identified:",
        bullets: [
          "Users need a simple way to navigate between Surahs and Juz.",
          "Reading Quran alongside translations requires a clear and distraction-free interface.",
          "Multiple translation options can make the reading experience complex if not structured properly.",
          "Users need easy access to audio recitation without interrupting their reading flow.",
          "Reciter, playback, repeat, and delay settings require intuitive controls.",
          "Users need a convenient way to save and return to important Ayats.",
          "Topic-based exploration requires a clear information structure.",
          "A Quran application needs to balance functionality with a respectful and focused visual experience.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Designing a complete Quran mobile application required careful consideration of both UX complexity and the nature of the content.",
        ],
        groups: [
          {
            title: "Research & UX Challenges",
            bullets: [
              "Understanding different Quran reading, listening, and learning behaviors.",
              "Identifying the most important actions for regular and occasional users.",
              "Structuring a large amount of Quranic content without making navigation overwhelming.",
              "Designing separate but connected experiences for reading, listening, translation, bookmarking, and topic exploration.",
              "Creating an information architecture that could accommodate a wide range of Quran-related features.",
            ],
          },
          {
            title: "Design Challenges:",
            bullets: [
              "Designing a highly readable Quran reading interface across mobile screen sizes.",
              "Presenting Arabic Quran text, translations, and supporting information with clear visual hierarchy.",
              "Making Surah and Juz navigation fast and intuitive.",
              "Designing audio controls that remain accessible without distracting from reading.",
              "Creating simple interaction patterns for Ayat repeat, playback delay, and reciter selection.",
              "Maintaining a calm and spiritually respectful visual language throughout the application.",
              "Balancing modern mobile UI patterns with the traditional nature and importance of Quranic content.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/Quran_App1.png",
        alt: "Al Quran mobile application dark reading experience",
        aspectRatio: "1500 / 901",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "To address these challenges, we designed a complete, thoughtful UI/UX system that puts the reading and listening experience first:",
        ],
        bullets: [
          {
            lead: "Designed an intuitive Surah & Juz navigation system:",
            body: " Allowing users to quickly jump between chapters, sections, and bookmarked verses without friction.",
          },
          {
            lead: "Built a clean multi-translation reading layout: ",
            body: "Bengali and English translations are presented alongside Arabic text in a way that stays readable and uncluttered.",
          },
          {
            lead: "Created a dedicated reciter selection and playback experience:",
            body: " users can easily choose their preferred reciter and adjust playback settings on the fly.",
          },
          {
            lead: "Designed ayat repeat & delay controls:",
            body: " Making it easy for users to repeat specific verses or set delays for memorization and practice.",
          },
          {
            lead: "Implemented a simple, accessible bookmarking system:",
            body: " So users can save their place and return to it instantly.",
          },
          {
            lead: "Added topic exploration:",
            body: " Helping users discover verses and chapters based on themes and subjects relevant to their needs.",
          },
          {
            lead: "Followed a research-driven, accessibility-first design approach",
            body: ": with careful attention to typography, spacing, and contrast for comfortable long-form reading.",
          },
          "Maintained a calm, minimal, and spiritually respectful visual language throughout the app, from onboarding to the reading screen.",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Through in-depth research, structured wireframing, and a carefully crafted high-fidelity UI, Al Quran has become a complete, feature-rich Quran application that offers a smooth and meaningful user experience.",
        ],
        bullets: [
          "Users can now navigate, read, and listen to the Quran effortlessly, with all core features accessible in just a few taps.",
          "The multi-translation reading experience makes the app accessible to a wider audience, including both Bengali and English readers.",
          "The app is now live on both the App Store and Google Play Store, delivering a polished, real-world product used by everyday readers.",
        ],
        closingParagraphs: [
          "Overall, Al Quran stands as a strong example of how thoughtful, research-backed UI/UX design can turn a feature-heavy religious app into a calm, intuitive, and genuinely useful experience and we're proud to have led this design journey from the very first sketch to the final live product.",
        ],
      },
      {
        type: "imageStack",
        images: [
          {
            image: "/assets/projects/Quran_App2.png",
            alt: "Al Quran reading, translation, bookmark, and topic screens",
            aspectRatio: "2000 / 1500",
          },
          {
            image: "/assets/projects/Quran Mobile App 3.png",
            alt: "Al Quran reciter, playback, translation, and navigation screens",
            aspectRatio: "2000 / 1500",
          },
          {
            image: "/assets/projects/Quran_App 4.png",
            alt: "Al Quran tafsir, bookmarks, topic, and settings screens",
            aspectRatio: "2000 / 1500",
          },
          {
            image: "/assets/projects/Quran_App 5.png",
            alt: "Al Quran search, appearance, sharing, and app menu screens",
            aspectRatio: "2000 / 1500",
          },
        ],
      },
    ],
    tags: [
      "Mobile App Development",
      "Cross-Platform App",
      "API Integration",
      "Mobile Application",
    ],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: AL_QURAN_PROJECT_IMAGE,
    relatedImage: AL_QURAN_PROJECT_IMAGE,
    cover: AL_QURAN_PROJECT_IMAGE,
    gallery: [
      "/assets/projects/Quran_App1.png",
      "/assets/projects/Quran_App2.png",
      "/assets/projects/Quran Mobile App 3.png",
      "/assets/projects/Quran_App 4.png",
      "/assets/projects/Quran_App 5.png",
    ],
  },
  {
    slug: "directorist",
    title: "Directorist — Directory & Listing Mobile App",
    sliderTitle: "Directorist",
    detailTitle:
      "Directorist — Complete WordPress Directory Plugin UI/UX Design",
    detailLayout: "figma-longform",
    industry: ["Business Directory", "Local Services", "WordPress Ecosystem"],
    serviceCategory: ["UI/UX Design", "Product Design", "Mobile App Design"],
    servicesProvided: [
      "UX Research",
      "User Flow Planning",
      "Information Architecture",
      "Wireframing",
      "UI/UX Design",
      "Prototyping",
    ],
    scopeOfWork: [
      "Product Discovery",
      "UX Research",
      "Wireframing",
      "High-Fidelity UI Design",
      "Design System",
    ],
    liveUrl: "",
    links: [],
    summary:
      "A complete UI/UX design case study of the Directorist Mobile App the official mobile companion for the popular WordPress directory & listing plugin. Now live on Google Play & App Store.",
    heroImage: "/assets/projects/Directorist App Details Image 1.png",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "Directorist is one of the most popular WordPress plugins in the Directory & Listing category, widely used to build business directory and listing websites. The Directorist Mobile App is the official mobile extension of this plugin, designed to help users easily discover, explore, and interact with local businesses and services directly from their phones.",
          "We handled the complete UI/UX design of the mobile app from the very first idea to the final, live version. This included the entire user journey: onboarding, search, listing details, filters, user profiles, reviews, and dashboard interactions. Our process covered user research, flow mapping, wireframing, prototyping, and high-fidelity UI design, resulting in a clean, scalable, and user-friendly mobile interface.",
          "The app is currently live on both Google Play Store and Apple App Store.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Directory and listing platforms often deal with large volumes of data businesses, categories, locations, and reviews which can easily overwhelm users if the mobile experience isn't carefully structured. Directorist needed a mobile app that could bring the same power of its WordPress plugin into a simple, intuitive mobile interface.",
          "The key problems we identified:",
        ],
        bullets: [
          "No dedicated mobile experience existed for Directorist users to browse and manage listings on the go.",
          "Searching and filtering through a large number of business listings could easily become slow and confusing without a well-structured UI.",
          "Listing details (business info, location, contact, reviews) needed to be presented clearly without overwhelming the user.",
          "Both regular users (searching for services) and business owners (managing listings) needed distinct, purpose-built experiences within the same app.",
          "The mobile app needed to reflect the flexibility and feature depth of the Directorist WordPress plugin, without feeling cluttered or overly complex.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Across research, design, and the overall product journey, we faced several key challenges:",
        ],
        groups: [
          {
            title: "Research & UX Challenges",
            bullets: [
              "Understanding the existing Directorist WordPress plugin's feature set and translating its flexibility into a mobile-first experience.",
              "Studying the needs of two different user types, everyday users searching for services, and business owners managing their listings.",
            ],
          },
          {
            title: "Design Challenges:",
            bullets: [
              "Structuring a large volume of categories, listings, and filters into a simple, easy-to-navigate mobile interface.",
              "Designing a search and filter system that stays fast and intuitive even with a large number of listings and categories.",
              "Creating a listing details screen that balances business information, images, location, and reviews without feeling cluttered.",
              "Designing a dashboard experience that lets business owners manage their listings, view insights, and interact with users smoothly.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/Directorist App Details Image 2.png",
        alt: "Directorist mobile app onboarding and directory interface designs",
        aspectRatio: "2000 / 1435",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "To address these challenges, we designed a complete, scalable UI/UX system focused on clarity, speed, and ease of use:",
        ],
        bullets: [
          {
            lead: "Designed a smooth onboarding flow:",
            body: " Helping new users quickly understand the app's core value and get started with minimal friction.",
          },
          {
            lead: "Built an intuitive search and filter system:",
            body: " Allowing users to quickly find relevant businesses and services by category, location, and other filters.",
          },
          {
            lead: "Created a clean, information-rich listing details screen: ",
            body: "Presenting business information, images, location, contact details, and reviews in a clear, organized layout.",
          },
          {
            lead: "Designed a dedicated user profile and dashboard experience:",
            body: " Giving both regular users and business owners a personalized space to manage their activity and listings.",
          },
          {
            lead: "Implemented a structured review and rating system:",
            body: " Making it easy for users to read and leave feedback on businesses.",
          },
          {
            lead: "Followed a scalable design system approach:",
            body: " Ensuring the UI could support new features and listing categories as the platform grows.",
          },
          {
            lead: "Focused on mobile-first usability and clarity:",
            body: " Keeping every screen simple, consistent, and easy to navigate, even with large amounts of data.",
          },
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Through structured research, detailed wireframing, and a carefully crafted high-fidelity UI, the Directorist Mobile App has become a complete, scalable mobile experience that brings the power of the Directorist WordPress plugin to mobile users.",
        ],
        bullets: [
          "Users can now search, explore, and interact with local business listings effortlessly, right from their phones.",
          "Business owners have a clear, dedicated dashboard to manage their listings and engage with customers.",
          "The app is now live on both Google Play Store and Apple App Store, serving as the official mobile companion to one of the most popular directory & listing plugins in the WordPress ecosystem.",
        ],
        closingParagraphs: [
          "Overall, the Directorist Mobile App reflects how thoughtful, research-driven UI/UX design can turn a feature-rich platform into a simple, scalable, and genuinely useful mobile product and we're proud to have led this design journey from the very first sketch to the final live app.",
        ],
      },
      {
        type: "imageStack",
        images: [
          {
            image: "/assets/projects/Directorist App Details Image 3.png",
            alt: "Directorist mobile app onboarding and account screens",
            aspectRatio: "1860 / 1395",
          },
          {
            image: "/assets/projects/Directorist App Details Image 4.png",
            alt: "Directorist mobile app discovery and listing screens",
            aspectRatio: "1860 / 1395",
          },
          {
            image: "/assets/projects/Directorist App Details Image 5.png",
            alt: "Directorist mobile app business detail screens",
            aspectRatio: "1860 / 1395",
          },
          {
            image: "/assets/projects/Directorist App Details Image 6.png",
            alt: "Directorist mobile app category and location screens",
            aspectRatio: "1860 / 1395",
          },
          {
            image: "/assets/projects/Directorist App Details Image 7.png",
            alt: "Directorist mobile app dashboard and profile screens",
            aspectRatio: "1860 / 1395",
          },
          {
            image: "/assets/projects/Directorist App Details Image 8.png",
            alt: "Directorist mobile app listing management screens",
            aspectRatio: "1860 / 1395",
          },
          {
            image: "/assets/projects/Directorist App Details Image 9.png",
            alt: "Directorist mobile app forms and settings screens",
            aspectRatio: "1860 / 1395",
          },
        ],
      },
    ],
    tags: [
      "Mobile App Development",
      "Cross-Platform App",
      "API Integration",
      "Marketplace App",
    ],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: DIRECTORIST_PROJECT_IMAGE,
    relatedImage: DIRECTORIST_PROJECT_IMAGE,
    cover: DIRECTORIST_PROJECT_IMAGE,
    gallery: [
      "/assets/projects/Directorist App Details Image 1.png",
      "/assets/projects/Directorist App Details Image 2.png",
      "/assets/projects/Directorist App Details Image 3.png",
      "/assets/projects/Directorist App Details Image 4.png",
      "/assets/projects/Directorist App Details Image 5.png",
      "/assets/projects/Directorist App Details Image 6.png",
      "/assets/projects/Directorist App Details Image 7.png",
      "/assets/projects/Directorist App Details Image 8.png",
      "/assets/projects/Directorist App Details Image 9.png",
    ],
  },
  {
    slug: "directorist-plugin",
    title: "Directorist — Complete WordPress Directory Plugin UI/UX Design",
    sliderTitle: "Directorist Plugin",
    detailLayout: "figma-longform",
    industry: ["Business Directory", "WordPress", "SaaS"],
    serviceCategory: ["UI/UX Design", "Product Design"],
    servicesProvided: [
      "UX Research",
      "User Flow Planning",
      "Information Architecture",
      "Wireframing",
      "UI/UX Design",
    ],
    scopeOfWork: [
      "Core Plugin UI/UX Design",
      "Plugin Frontend",
      "Directory Builder",
      "13+ Directory Themes",
      "38+ Extensions",
      "Admin & Frontend Experiences",
    ],
    liveUrl: "",
    links: [],
    summary:
      "A complete UI/UX design case study of Directorist — the #1 WordPress business directory plugin with 20,000+ active users, 14+ themes, and 30+ extensions.",
    heroImage: DIRECTORIST_PLUGIN_PROJECT_IMAGE,
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "Directorist is one of the most popular and highest-rated WordPress plugins in the Directory & Listing category, trusted by over 20,000 active businesses worldwide. It lets anyone build and monetize a business directory, classifieds site, job board, real estate portal, or niche listing platform, all without writing a single line of code.",
          "We designed the entire product, end-to-end. This included the plugin's frontend user experience (listing submission, search, filters, single listing pages, and the user dashboard), the WordPress admin panel (settings, listing management, orders, and configuration screens), the plugin licensing and activation flow, the setup wizard that walks new users through their first directory, the Directory (Theme) Builder used to visually construct listing pages and search forms, and the complete UI for 13+ directory themes and 38+ premium extensions. Every screen, flow, and component across the entire Directorist ecosystem was designed by our team.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Directorist had grown from a simple directory plugin into a large, feature-rich platform and that growth had outpaced its original design foundation. As new extensions, themes, and features were added over the years, the product needed a design system that could scale without becoming inconsistent or overwhelming for users.",
          "The key problems we identified:",
        ],
        bullets: [
          "With 30+ extensions and multiple themes, the product lacked a unified design language, making the experience feel fragmented across different parts of the plugin.",
          "The admin panel needed to handle a huge range of settings and configuration options without overwhelming non-technical WordPress users.",
          'New users often struggled to go from "plugin installed" to "directory live," with no guided setup experience.',
          "Building a directory page visually (choosing widgets, layouts, and search fields) required a flexible builder interface that didn't yet exist in an intuitive form.",
          "Licensing, activation, and update flows needed to feel simple and trustworthy, since this is often a user's first interaction with the paid product.",
          "Each of the 13+ directory themes needed a distinct visual identity while still feeling like part of the same trusted Directorist product family.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Across research, design, and the overall product journey, we faced several key challenges:",
        ],
        groups: [
          {
            title: "Research & UX Challenges",
            bullets: [
              "Understanding the needs of two very different WordPress user types: non-technical site owners who just want a working directory, and developers/agencies who need deep customization.",
              "Studying 30+ existing extensions and themes to identify shared patterns and opportunities for a consistent design system.",
              "Analyzing competitor directory plugins to identify where Directorist could differentiate through simplicity and usability.",
            ],
          },
          {
            title: "Design Challenges:",
            bullets: [
              "Creating a scalable design system that could support dozens of extensions and themes without fragmenting the user experience.",
              "Designing a drag-and-drop Directory Builder that felt powerful for advanced users, yet approachable for complete beginners.",
              "Structuring a dense WordPress admin panel settings, listings, orders, pricing plans, users into a clear, navigable interface.",
              "Designing 13+ distinct directory themes (job boards, real estate, restaurants, classifieds, and more) that each feel purpose-built for their niche.",
              "Balancing flexibility (unlimited custom fields, layouts, and directory types) with a UI that doesn't overwhelm first-time users.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/Directorist Builder 1.png",
        alt: "Directorist Builder interface overview",
        aspectRatio: "2000 / 1502",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "To address these challenges, we designed a complete, scalable UI/UX system across every part of the Directorist product:",
        ],
        bullets: [
          {
            lead: "Built a unified design system:",
            body: " Consistent components, spacing, typography, and interaction patterns applied across the plugin frontend, admin panel, builder, and all extensions, so the entire product feels like one cohesive experience.",
          },
          {
            lead: "Designed an intuitive Setup Wizard: ",
            body: "guiding new users step-by-step from plugin activation to a live, functioning directory, dramatically reducing time-to-launch.",
          },
          {
            lead: "Created the Directory Builder interface: ",
            body: "A visual, drag-and-drop builder that lets users construct listing pages, search forms, and layouts without touching code, designed to feel powerful yet simple.",
          },
          {
            lead: "Redesigned the WordPress admin panel: ",
            body: "Organizing settings, listings, orders, and configuration options into clear, logically grouped sections with improved navigation and search.",
          },
          {
            lead: "Designed a clean, trustworthy licensing and activation flow:",
            body: " Making plugin activation, updates, and account management simple and frustration-free.",
          },
          {
            lead: "Delivered UI for 13+ directory themes:",
            body: " Each with its own distinct visual identity (jobs, hotels, restaurants, real estate, classifieds, and more) while maintaining shared design DNA across the Directorist product family.",
          },
          {
            lead: "Designed UI for 38+ premium extensions:",
            body: " Including booking, pricing plans, claim listings, business hours, live chat, advanced search, and payment integrations, ensuring each extension feels like a natural part of the core product.",
          },
          {
            lead: "Prioritized accessibility and usability for non-technical users: ",
            body: "Since most Directorist customers manage their directory without any coding experience.",
          },
          "Maintained close collaboration with development throughout the product lifecycle - ensuring designs were fully implementable within WordPress's technical ecosystem and adaptable across frequent product releases.",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Through structured research, a scalable design system, and detailed UI work across every corner of the product, Directorist has become one of the most complete and highest-rated WordPress directory plugins on the market.",
        ],
        bullets: [
          "The plugin now serves 20,000+ active businesses worldwide, with a strong 4.6-star average rating and hundreds of five-star reviews consistently praising its clean, intuitive interface.",
          "The redesigned Directory Builder have made it significantly easier for non-technical users to launch a fully functioning directory in a single day.",
          "With a unified design system now powering 13+ themes and 38+ extensions, Directorist can continue scaling its feature set without sacrificing consistency or usability.",
        ],
        closingParagraphs: [
          "Overall, this project reflects how thoughtful, systemized UI/UX design can transform a growing, feature-heavy product into a cohesive, scalable, and genuinely enjoyable experience and we're proud to have designed the Directorist ecosystem across every layer, from the setup wizard to the admin panel to the themes and extensions that power thousands of live directory websites today.",
        ],
      },
      {
        type: "imageSection",
        title: "Directorist Builder",
        images: [
          {
            image: "/assets/projects/Directorist Builder 2.png",
            alt: "Directorist Builder layout editing interface",
            aspectRatio: "1272 / 1560",
          },
          {
            image: "/assets/projects/Directorist Builder 3.png",
            alt: "Directorist Builder page configuration screens",
            aspectRatio: "2452 / 2388",
          },
          {
            image: "/assets/projects/Directorist Builder 4.png",
            alt: "Directorist Builder component and preview screens",
            aspectRatio: "2452 / 2263",
          },
          {
            image: "/assets/projects/Directorist Builder 5.png",
            alt: "Directorist Builder additional interface states",
            aspectRatio: "2452 / 2263",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Directorist Setup Wizard",
        images: [
          {
            image: "/assets/projects/Directorist Setup wizard 1.png",
            alt: "Directorist setup wizard flow",
            aspectRatio: "2452 / 1814",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Directorist Product Management",
        images: [
          {
            image: "/assets/projects/Directorist Licencing 1.png",
            alt: "Directorist product management and licensing interface",
            aspectRatio: "1272 / 3123",
          },
          {
            image: "/assets/projects/Directorist Licencing 2.png",
            alt: "Directorist product management extension screens",
            aspectRatio: "2452 / 1746",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Directorist Theme Setup Wizard",
        images: [
          {
            image: "/assets/projects/Directorist Theme Setup wizard 1.png",
            alt: "Directorist theme setup wizard interface",
            aspectRatio: "2452 / 2134",
          },
          {
            image: "/assets/projects/Directorist Theme Setup wizard 2.png",
            alt: "Directorist theme setup wizard template screens",
            aspectRatio: "2452 / 2070",
          },
        ],
      },
    ],
    tags: ["UI/UX Design", "Product Design", "SaaS", "UX Research"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: DIRECTORIST_PLUGIN_PROJECT_IMAGE,
    relatedImage: DIRECTORIST_PLUGIN_PROJECT_IMAGE,
    cover: DIRECTORIST_PLUGIN_PROJECT_IMAGE,
    gallery: [
      "/assets/projects/Directorist Builder 1.png",
      "/assets/projects/Directorist Builder 2.png",
      "/assets/projects/Directorist Builder 3.png",
      "/assets/projects/Directorist Builder 4.png",
      "/assets/projects/Directorist Builder 5.png",
      "/assets/projects/Directorist Setup wizard 1.png",
      "/assets/projects/Directorist Licencing 1.png",
      "/assets/projects/Directorist Licencing 2.png",
      "/assets/projects/Directorist Theme Setup wizard 1.png",
      "/assets/projects/Directorist Theme Setup wizard 2.png",
    ],
  },
  {
    slug: "helpgent",
    title:
      "HelpGent – Conversational Form Builder & Async Video Messaging Plugin",
    sliderTitle: "HelpGent",
    detailTitle:
      "HelpGent – UI/UX Design for a Conversational Form Builder & Async Video Messaging Plugin",
    detailLayout: "figma-longform",
    industry: ["Communication Forms", "WordPress", "SaaS"],
    serviceCategory: ["UI/UX Design"],
    servicesProvided: [
      "UX Research",
      "User Flow Planning",
      "Information Architecture",
      "Wireframing",
      "UI/UX Design",
    ],
    scopeOfWork: [
      "Core Plugin UI/UX Design",
      "Plugin Frontend Design",
      "Admin Panel Design",
      "Conversational Form Builder",
      "Form Elements & Settings",
      "Complete Live-Chat",
    ],
    liveUrl: "",
    links: [],
    summary:
      "A complete UI/UX design case study of HelpGent a WordPress conversational form builder plugin with video, voice, text, and screen recording, built to replace static forms and live chat.",
    heroImage: HELPGENT_PROJECT_IMAGE,
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "HelpGent is a powerful conversational, multi-step form builder plugin for WordPress that transforms traditional static forms into engaging, interactive Video Funnels. Instead of collecting a name, an email, and a short message, HelpGent lets visitors respond through video messaging, voice messaging, text messaging, and screen recording making every interaction feel more human and dynamic, without anyone needing to be online at the same time.",
          "We designed the entire plugin from the ground up starting with market research and product strategy, through wireframing and prototyping, all the way to the final high-fidelity UI. This covered the complete plugin experience: the frontend conversational form and chat/messaging experience, the WordPress admin panel, the drag-and-drop conversational form builder, the global settings panel, 10+ form creation elements and their individual settings, and the complete live-chat/form bubble widget that visitors interact with on the frontend. The plugin is currently live on WordPress.org.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Static contact forms and traditional live-chat widgets each solve part of the communication problem, but both leave real gaps for businesses trying to understand and engage their visitors.",
          "The key problems we identified:",
        ],
        bullets: [
          "Traditional contact forms collect only a name, an email, and a short text message with no real context about the visitor's intent, urgency, or fit.",
          "Live chat widgets require someone to be online at all times, making them impractical for solo consultants, small teams, or businesses spanning multiple time zones.",
          "Neither static forms nor live chat allow visitors to explain complex issues (like a bug or a product question) in a natural, expressive way everything is reduced to typed text.",
          "Floating chat widgets often feel intrusive, block page content, and still require real-time availability to be useful.",
          "There was no single WordPress plugin that combined multi-step conversational forms, async video/voice messaging, and screen recording into one clean, easy-to-use tool.",
          "As a form builder targeting non-technical WordPress users, the product needed to feel as simple as a typical form plugin, while still supporting a genuinely new and more complex interaction model (recording, playback, conversation threads).",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Across research, design, and the overall product journey, we faced several key challenges:",
        ],
        groups: [
          {
            title: "Research & Strategy Challenges:",
            bullets: [
              'Validating a fundamentally new interaction model replacing "fill and submit" with an ongoing, asynchronous conversation in a market dominated by familiar static form builders.',
              "Understanding two distinct audiences: the WordPress site owner building the form, and the anonymous visitor answering it (often without a WordPress account).",
              "Studying live chat tools, traditional contact forms, and floating widgets to define exactly where HelpGent needed to be simpler, faster, or more capable.",
            ],
          },
          {
            title: "Design Challenges:",
            bullets: [
              "Designing a drag-and-drop conversational form builder that could handle 10+ form elements (text, video recording, voice recording, file upload, date/time pickers, GDPR consent, Google Maps, reCAPTCHA, and more) each with its own configurable settings without becoming overwhelming.",
              "Creating an intuitive step-by-step, screen-per-question form experience that feels like a real conversation rather than a traditional multi-page form.",
              "Designing a fully functional live-chat / form bubble widget for the frontend covering the floating trigger, the conversation thread, media playback (video, voice, screen recordings), and reply composition all inside a compact, non-intrusive widget.",
              "Building a conditional logic system UI that lets non-technical users visually branch a form based on previous answers, without needing to understand complex logic trees.",
              "Designing the admin inbox and dashboard to clearly display incoming responses across multiple media types (video, voice, text, screen recordings) in one unified, scannable interface.",
              "Structuring the global settings panel general settings, integrations (Google Drive, Bunny Storage, Directorist), notifications, and branding in a way that stays approachable for beginners yet flexible for advanced users.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/HelpGent1.png",
        alt: "HelpGent conversational form builder overview",
        aspectRatio: "2000 / 1393",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "We approached HelpGent as a complete conversational communication platform for WordPress, focusing on making complex functionality simple, intuitive, and scalable.",
        ],
        groups: [
          {
            title: "Conversational Form Builder",
            bullets: [
              "Designed the complete drag-and-drop form builder experience.",
              "Created multi-step form flows with intuitive navigation and configuration.",
              "Designed reusable builder patterns for scalability.",
            ],
          },
          {
            title: "Form Elements & Settings",
            bullets: [
              "Designed 10+ interactive form elements and their individual settings.",
              "Covered text, file upload, video, voice, screen recording, date/time, validation, maps, consent, and other input types.",
              "Created flexible configuration patterns for different form requirements.",
            ],
          },
          {
            title: "Video, Voice & Screen Recording",
            bullets: [
              "Designed complete recording and media-response experiences.",
              "Created interfaces for video, voice, and screen recording, including recording, preview, playback, and response states.",
            ],
          },
          {
            title: "Conversational Messaging & Live Chat",
            bullets: [
              "Designed the complete conversation experience for text, video, and voice communication.",
              "Created inbox, message threads, media interactions, and follow-up workflows.",
              "Connected form submissions with ongoing conversations.",
            ],
          },
          {
            title: "Frontend & Admin Experience",
            bullets: [
              "Designed the complete WordPress admin panel and frontend user experience.",
              "Covered forms, responses, conversations, contacts, dashboards, and form bubble interactions.",
              "Created a structured settings system for product and form-level configurations.",
            ],
          },
          {
            title: "Scalable Design System",
            bullets: [
              "Established reusable UI patterns across the entire plugin.",
              "Designed consistent components for forms, builders, settings, conversations, media, notifications, and system states.",
              "Created a scalable foundation for future features and extensions.",
            ],
          },
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "We designed HelpGent as a complete WordPress conversational communication product, taking the experience from initial market research and product strategy through UX architecture, wireframing, prototyping, and final high-fidelity UI design.",
          "Our work covered the complete product ecosystem, including:",
        ],
        bullets: [
          "Complete WordPress plugin frontend.",
          "Admin panel and dashboard.",
          "Drag-and-drop conversational form builder.",
          "10+ form elements and their configuration experiences.",
          "Multi-step form workflows.",
          "Conditional logic.",
          "Video messaging.",
          "Voice messaging.",
          "Screen recording.",
          "Text-based conversations.",
          "Live-chat and conversation experience.",
          "Form bubble.",
          "Frontend user dashboard.",
          "Form and product settings.",
          "Media and communication workflows.",
          "Supporting UI patterns and design system.",
        ],
        closingParagraphs: [
          "Overall, HelpGent demonstrates how thoughtful, research-driven UI/UX design can turn a fundamentally new interaction model asynchronous, multi-format conversation into a product that feels simple, approachable, and genuinely useful from the very first form. As Lead Product Designer, I'm proud to have shaped this product from initial strategy through to its final, live version.",
        ],
      },
      {
        type: "imageSection",
        title: "All Forms Table",
        images: [
          {
            image: "/assets/projects/HelpGent_Allformstable1.png",
            alt: "HelpGent all forms table interface",
            aspectRatio: "2452 / 1847",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Form Builder Elements",
        images: [
          {
            image: "/assets/projects/HelpGent_Builder-Elements1.png",
            alt: "HelpGent form builder elements interface",
            aspectRatio: "2143 / 4096",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Live-chat Element",
        images: [
          {
            image: "/assets/projects/HelpGent_Live-chat1.png",
            alt: "HelpGent live-chat element interface",
            aspectRatio: "1611 / 4096",
          },
          {
            image: "/assets/projects/HelpGent_Live-chat2.png",
            alt: "HelpGent live-chat conversation states",
            aspectRatio: "1619 / 4096",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Form Sharing",
        images: [
          {
            image: "/assets/projects/HelpGent_Share1.png",
            alt: "HelpGent form sharing interface",
            aspectRatio: "2452 / 1883",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Admin Conversation",
        images: [
          {
            image: "/assets/projects/HelpGent_conversation1.png",
            alt: "HelpGent admin conversation interface",
            aspectRatio: "1476 / 4096",
          },
        ],
      },
    ],
    tags: ["WordPress Plugin Development", "PHP", "JavaScript", "SaaS Plugin"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: HELPGENT_PROJECT_IMAGE,
    relatedImage: HELPGENT_PROJECT_IMAGE,
    cover: HELPGENT_PROJECT_IMAGE,
    gallery: [
      "/assets/projects/HelpGent1.png",
      "/assets/projects/HelpGent_Allformstable1.png",
      "/assets/projects/HelpGent_Builder-Elements1.png",
      "/assets/projects/HelpGent_Live-chat1.png",
      "/assets/projects/HelpGent_Live-chat2.png",
      "/assets/projects/HelpGent_Share1.png",
      "/assets/projects/HelpGent_conversation1.png",
    ],
  },
  {
    slug: "formgent",
    title: "FormGent – AI-Powered WordPress Form Builder Plugin",
    sliderTitle: "FormGent",
    detailTitle:
      "FormGent – UI/UX Design for an AI-Powered WordPress Form Builder Plugin",
    detailLayout: "figma-longform",
    showInFeaturedSliders: false,
    industry: ["Forms & Data Collection", "WordPress", "SaaS"],
    serviceCategory: ["UI/UX Design", "Product Design"],
    servicesProvided: [
      "Product Strategy",
      "UX Research",
      "User Flow Planning",
      "Information Architecture",
      "Wireframing",
      "UI/UX Design",
    ],
    scopeOfWork: [
      "Core Plugin UI/UX Design",
      "Plugin Frontend Design",
      "Admin Panel Design",
      "AI Form Creation",
      "Multi-step & Classical Form Builder",
      "Form Elements & Settings",
      "Conditional Logic",
    ],
    liveUrl: "",
    links: [],
    summary:
      "A complete UI/UX design case study of FormGent, an AI-powered WordPress form builder plugin supporting both Multi-Step (Conversational) and Classical forms, with 20+ elements, conditional logic, and full admin experience.",
    heroImage: FORMGENT_PROJECT_IMAGE,
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "FormGent is an AI-powered, native WordPress form builder plugin designed to make form creation fast, flexible, and genuinely enjoyable without needing a separate platform outside WordPress. It supports two core ways of building forms: a Multi-Step Form (also called a Conversational Form), where every element or question appears on its own screen for a guided, chat-like experience, and a Classical Form, where all elements and questions sit together on a single page in the traditional format.",
          "We designed the entire plugin, end-to-end. This covered the plugin's frontend experience, the WordPress admin panel, the Form Creation flow and Form Table, AI-powered form creation, the Multi-Step Form Builder, the Classical Form Builder, the Form Settings panel, Conditional Logic, Form Appearance customization, Form Results/response management, and the complete set of 20+ form elements and their individual configurations. Every screen and interaction across FormGent was designed by our team.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Most WordPress form builders force users to choose between simplicity and power either an overly basic plugin that can't handle real business needs, or a bloated tool with a steep learning curve. Users also increasingly expect AI assistance to speed up repetitive setup work, which most existing form plugins don't offer at all.",
          "The key problems we identified:",
        ],
        bullets: [
          "Existing form plugins typically support only one form format classical, single-page forms leaving no easy way to build higher-converting, conversational multi-step experiences in the same tool.",
          "Building a form from scratch (fields, logic, payments, notifications) is time-consuming, especially for non-technical WordPress users.",
          "Managing 20+ different form elements, each with its own settings, can quickly become overwhelming without a clear, organized interface.",
          "Conditional logic showing or hiding fields based on previous answers is often buried in complex, technical configuration screens.",
          "Reviewing form responses, tracking analytics, and managing submissions is frequently an afterthought in most form builders, with weak or cluttered results views.",
          "Site owners want a form builder that feels native to WordPress using the block editor they already know rather than a separate, disconnected admin experience.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Across research, design, and the overall product journey, we faced several key challenges:",
        ],
        groups: [
          {
            title: "Research & Strategy Challenges:",
            bullets: [
              "Understanding the full range of use cases FormGent needed to support contact forms, payment forms, surveys, quizzes, job applications, bookings, and more and designing a system flexible enough for all of them.",
              "Studying existing WordPress form builders to identify exactly where FormGent could be simpler, faster, or more capable, especially around AI-assisted creation.",
            ],
          },
          {
            title: "UI/UX Design Challenges:",
            bullets: [
              "Designing two distinct form-building experiences the Multi-Step/Conversational Form Builder (one question per screen) and the Classical Form Builder (all fields on one page) while keeping both intuitive and visually consistent within the same builder interface.",
              "Structuring 20+ form elements (Name, Email, File Upload, Payment, Rating, Repeater, Date & Time Picker, GDPR Compliance, and more) into an organized, searchable element library, each with its own configuration panel.",
              "Designing an approachable AI Form Creation flow letting users describe a form in plain language and instantly get a fully built, editable form.",
              "Creating a clear, visual Conditional Logic builder that lets non-technical users define show/hide rules without needing to understand complex logic trees.",
              "Designing a comprehensive Form Settings panel covering general settings, notifications, confirmations, payments, and integrations, without overwhelming first-time users.",
              "Building an intuitive Form Appearance/styling system, giving users control over colors, layout, and branding without touching CSS.",
              "Designing a clear Form Results/response area including entry tables, single-entry views, exports, analytics summaries, and status tracking that stays readable even with high response volumes.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/FormGentCover.png",
        alt: "FormGent form builder product cover",
        aspectRatio: "973 / 731",
      },
      {
        type: "copy",
        title: "Our Solutions",
        paragraphs: [
          "We approached FormGent as a complete form-building ecosystem for WordPress, focusing on speed, flexibility, and clarity across every part of the product.",
        ],
        groups: [
          {
            title: "Research & Product Strategy",
            bullets: [
              "Conducted market and UX research around modern WordPress form builders.",
              "Defined core user journeys from form creation to submission management.",
              "Structured the product architecture around different form-building needs.",
              "Established scalable patterns for future features and integrations.",
            ],
          },
          {
            title: "AI-Powered Form Creation",
            bullets: [
              "AI-assisted form creation flow.",
              "Clear prompt-based interaction.",
              "Generated form preview and editing experience.",
              "Smooth transition from AI generation to manual customization.",
            ],
          },
          {
            title: "Classic & Multi-Step Form Builders",
            bullets: [
              {
                lead: "Classic Form Builder: ",
                body: "All form fields presented within a single-page structure.",
              },
              {
                lead: "Multi-Step / Conversational Form Builder:",
                body: " Questions and sections presented progressively through multiple steps.",
              },
            ],
            closingParagraphs: [
              "The builder experience includes page breaks, welcome/end screens, navigation controls, and customizable form interactions.",
            ],
          },
          {
            title: "Form Elements & Configuration",
            paragraphs: [
              "We designed 20+ form elements and their individual configuration experiences.",
            ],
            bullets: [
              "Text and contact fields.",
              "Choice and selection fields.",
              "File upload.",
              "Date & time.",
              "Rating and range slider.",
              "Address and Google Maps.",
              "CAPTCHA and GDPR consent.",
              "Repeater and advanced inputs.",
              "Payment-related elements.",
              "Login and registration elements.",
            ],
            closingParagraphs: [
              "Each element was given a consistent configuration pattern while allowing its unique settings and behavior.",
            ],
          },
          {
            title: "Conditional Logic",
            bullets: [
              "Intuitive condition-building interface.",
              "Rule and value selection.",
              "Show/hide behavior.",
              "Multiple condition support.",
              "Clear relationship between conditions and form fields.",
            ],
            closingParagraphs: [
              "This allows forms to dynamically adapt based on user responses instead of showing every field to every visitor.",
            ],
          },
          {
            title: "Form Settings & Appearance",
            bullets: [
              "General form settings.",
              "Submission and confirmation behavior.",
              "Notification settings.",
              "Form appearance and styling.",
              "Layout and field configuration.",
              "Custom behavior and advanced settings.",
            ],
          },
          {
            title: "Form Results & Analytics",
            paragraphs: [
              "We designed the complete response-management experience to help users understand and manage submitted data.",
            ],
            bullets: [
              "Forms dashboard and form table.",
              "Submission/entry management.",
              "Individual response views.",
              "Response status and actions.",
              "Data export and management.",
              "Form analytics and performance summaries.",
            ],
          },
          {
            title: "Scalable Product Design System",
            paragraphs: [
              "We established reusable UI patterns across the entire plugin to maintain consistency between the builder, settings, dashboard, and frontend.",
            ],
          },
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "We designed FormGent as a complete AI-powered WordPress form builder, taking the product from initial market research and product strategy through UX architecture, wireframing, prototyping, and final high-fidelity UI design.",
          "Our work covered the complete product ecosystem, including:",
        ],
        bullets: [
          "WordPress plugin frontend.",
          "Admin panel and forms dashboard.",
          "Form creation and forms table.",
          "AI-powered form creation.",
          "Classic Form Builder.",
          "Multi-Step / Conversational Form Builder.",
          "Form settings and appearance.",
          "Conditional Logic.",
          "Form Results and response management.",
          "Analytics and reporting experiences.",
          "20+ form elements and their configurations.",
          "Supporting UI patterns and scalable design system.",
        ],
        closingParagraphs: [
          "Overall, FormGent shows how a well-structured, research-driven design system can turn a feature-dense form builder into something that feels simple, fast, and genuinely native to WordPress and we're proud to have designed this product across every screen, from AI-assisted creation to the final results dashboard.",
        ],
      },
      {
        type: "imageSection",
        title: "Creating Form",
        images: [
          {
            image: "/assets/projects/FormGent_CreatingForm.png",
            alt: "FormGent creating form interface",
            aspectRatio: "2476 / 1894",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Multi-step Form Builder",
        images: [
          {
            image: "/assets/projects/FormGent_Conversational_Form_Builder.png",
            alt: "FormGent multi-step conversational form builder",
            aspectRatio: "2790 / 2887",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Classical Form Builder",
        images: [
          {
            image: "/assets/projects/FormGent_Classical_Form_Builder.png",
            alt: "FormGent classical form builder",
            aspectRatio: "2352 / 4096",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Conditional Logic",
        images: [
          {
            image: "/assets/projects/FormGent_Conditional_Logic.png",
            alt: "FormGent conditional logic builder",
            aspectRatio: "2790 / 3698",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Form Settings Panel",
        images: [
          {
            image: "/assets/projects/FormGent_Form_Settings_Panel.png",
            alt: "FormGent form settings panel",
            aspectRatio: "2397 / 4096",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Form Appearance",
        images: [
          {
            image: "/assets/projects/FormGent_Appearance.png",
            alt: "FormGent form appearance settings",
            aspectRatio: "2790 / 3265",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Form Results",
        images: [
          {
            image: "/assets/projects/FormGent_Form_Results.png",
            alt: "FormGent form results and analytics",
            aspectRatio: "2225 / 4096",
          },
        ],
      },
    ],
    tags: ["WordPress Plugin Development", "PHP", "JavaScript", "Form Builder"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: FORMGENT_PROJECT_IMAGE,
    relatedImage: FORMGENT_PROJECT_IMAGE,
    cover: FORMGENT_PROJECT_IMAGE,
    gallery: [
      "/assets/projects/FormGentCover.png",
      "/assets/projects/FormGent_CreatingForm.png",
      "/assets/projects/FormGent_Conversational_Form_Builder.png",
      "/assets/projects/FormGent_Classical_Form_Builder.png",
      "/assets/projects/FormGent_Conditional_Logic.png",
      "/assets/projects/FormGent_Form_Settings_Panel.png",
      "/assets/projects/FormGent_Appearance.png",
      "/assets/projects/FormGent_Form_Results.png",
    ],
  },
  {
    slug: "hrm",
    title:
      "HRM — UI/UX Design for an Internal Team & Workforce Management Platform",
    detailLayout: "figma-longform",
    industry: ["SaaS", "Human Resource Management"],
    serviceCategory: ["SaaS Product Design"],
    servicesProvided: [],
    scopeOfWork: [
      "Product Research",
      "UX Strategy",
      "Information Architecture",
      "User Flow",
      "Wireframing",
      "UI/UX Design",
      "Design System",
    ],
    liveUrl: "",
    links: [],
    summary:
      "HRM is a complete internal workforce management platform built for SovWare, an IT agency, to manage everything from daily attendance and project tracking to leave requests, performance evaluation, and payroll - all in one system.",
    showInFeaturedSliders: false,
    heroImage: HRM_PROJECT_IMAGE,
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "HRM is a complete internal workforce management platform built for SovWare, an IT agency, to manage everything from daily attendance and project tracking to leave requests, performance evaluation, and payroll - all in one system.",
          "We designed the full product from scratch across three role-based areas - General Members, Team Leads, and Admin, each with its own dashboard and permissions, so every user sees only what's relevant to their role.",
          "The final design focuses on making daily operational work (checking in, tracking tasks, requesting leave) effortless for employees, while giving leads and admins the oversight tools needed to manage a growing team.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Managing a growing remote and in-office team across attendance, projects, leave, and payroll had outgrown spreadsheets and scattered tools.",
        ],
        bullets: [
          "Attendance, leave, and performance data lived in separate, disconnected sheets",
          "Team leads had no simple way to review team productivity or give structured feedback",
          "Leave requests and approvals were handled manually, with no clear tracking",
          "Admins lacked one place to manage departments, schedules, payroll, and reports together",
          "There was no consistent way to measure performance across skills like time management, work quality, or teamwork",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Designing one system for three very different user roles meant balancing simplicity for daily users with depth for admins managing the whole organization.",
        ],
        bullets: [
          "Structuring three distinct role-based areas (Member, Team Lead, Admin) without duplicating effort in design",
          "Designing a clear attendance and screenshot-activity flow that feels transparent, not invasive",
          "Turning a long, multi-criteria performance evaluation into a form that's quick to fill out",
          "Visualizing team-wide data (attendance %, productivity, activity) in a way that's scannable at a glance",
          "Bringing leave management, payroll, and accounting into one consistent design language",
        ],
      },
      {
        type: "image",
        image: "/assets/projects/hrm/HRM solution.png",
        alt: "HRM attendance dashboard displayed on a tablet",
        aspectRatio: "1600 / 1115",
      },
      {
        type: "copy",
        title: "Solutions",
        paragraphs: [
          "To solve these problems, We designed a role-based system where each area surfaces only what that user needs to act on.",
        ],
        bullets: [
          {
            lead: "General Member dashboard:",
            body: " Simple check-in/out, task tracking, leave application, and a personal attendance summary.",
          },
          {
            lead: "Team Lead area:",
            body: ' A "My Team" view showing hours, productivity, and activity per member, plus a structured performance-evaluation form with clear rating scales.',
          },
          {
            lead: "Admin control center:",
            body: " Centralized management for departments, work schedules, leave approvals, payroll, and accounting, backed by reports for performance and meetings.",
          },
          {
            lead: "Screenshot Activity module:",
            body: " Time-blocked activity logs with thumbnails, giving visibility without being intrusive.",
          },
          {
            lead: "Consistent card-and-table design system:",
            body: " Used across attendance, projects, payments, and reports so the whole platform feels like one product, not stitched-together modules.",
          },
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Through structured, role-based design, SovWare now has one internal platform that brings attendance, project tracking, leave, performance, and payroll together in a single system.",
        ],
        bullets: [
          "Employees can check in, track tasks, and apply for leave without leaving one dashboard",
          "Team leads can review team performance and submit structured feedback in minutes",
          "Admins manage departments, schedules, payroll, and company-wide reports from one place",
          "The platform replaced multiple spreadsheets and manual processes with one connected system",
        ],
        closingParagraphs: [
          "Overall, this project shows how a role-based UI/UX approach can turn a scattered set of internal processes into one clear, scalable workforce management platform  built around how each team actually works day to day.",
        ],
      },
      {
        type: "imageSection",
        title: "General Member Dashboard",
        images: [
          {
            image: "/assets/projects/hrm/HRM_General Member 1 3.png",
            alt: "HRM General Member dashboard screenshot 1",
            aspectRatio: "1464 / 1901",
          },
          {
            image: "/assets/projects/hrm/HRM_General Member 2 3.png",
            alt: "HRM General Member dashboard screenshot 2",
            aspectRatio: "1600 / 2225",
          },
          {
            image: "/assets/projects/hrm/HRM_General Member 3 1.png",
            alt: "HRM General Member dashboard screenshot 3",
            aspectRatio: "1708 / 2320",
          },
          {
            image: "/assets/projects/hrm/HRM_General Member 4 1.png",
            alt: "HRM General Member dashboard screenshot 4",
            aspectRatio: "1600 / 2837",
          },
          {
            image: "/assets/projects/hrm/HRM_General Member 5 1.png",
            alt: "HRM General Member dashboard screenshot 5",
            aspectRatio: "1600 / 2137",
          },
          {
            image: "/assets/projects/hrm/HRM_General Member 6 1.png",
            alt: "HRM General Member dashboard screenshot 6",
            aspectRatio: "1600 / 2041",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Team Lead Area",
        images: [
          {
            image: "/assets/projects/hrm/HRM_Team Leads Area 1 1.png",
            alt: "HRM Team Lead area screenshot 1",
            aspectRatio: "1600 / 3098",
          },
          {
            image: "/assets/projects/hrm/HRM_Team Leads Area 2 1.png",
            alt: "HRM Team Lead area screenshot 2",
            aspectRatio: "1600 / 3791",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Admin Control Center",
        images: [
          {
            image: "/assets/projects/hrm/HRM_Admin Area 1 2.png",
            alt: "HRM Admin Control Center screenshot 1",
            aspectRatio: "1600 / 3113",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 2 2.png",
            alt: "HRM Admin Control Center screenshot 2",
            aspectRatio: "1600 / 2908",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 3 2.png",
            alt: "HRM Admin Control Center screenshot 3",
            aspectRatio: "1500 / 2344",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 4 1.png",
            alt: "HRM Admin Control Center screenshot 4",
            aspectRatio: "1600 / 2182",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 5 1.png",
            alt: "HRM Admin Control Center screenshot 5",
            aspectRatio: "1400 / 2384",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 6 1.png",
            alt: "HRM Admin Control Center screenshot 6",
            aspectRatio: "1600 / 2772",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 7 1.png",
            alt: "HRM Admin Control Center screenshot 7",
            aspectRatio: "1500 / 2144",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 8 1.png",
            alt: "HRM Admin Control Center screenshot 8",
            aspectRatio: "1500 / 2336",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 9 1.png",
            alt: "HRM Admin Control Center screenshot 9",
            aspectRatio: "1500 / 2184",
          },
          {
            image: "/assets/projects/hrm/HRM_Admin Area 10 1.png",
            alt: "HRM Admin Control Center screenshot 10",
            aspectRatio: "1500 / 1396",
          },
        ],
      },
    ],
    tags: ["UI/UX Design", "SaaS Design", "Product Design", "Dashboard Design"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: HRM_PROJECT_IMAGE,
    relatedImage: HRM_PROJECT_IMAGE,
    cover: HRM_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "templatiq",
    title:
      "Templatiq —  UI/UX Design for a Template Library Marketplace Plugin",
    detailLayout: "figma-longform",
    industry: ["WordPress"],
    serviceCategory: ["SaaS Product Design"],
    servicesProvided: [],
    scopeOfWork: [
      "Product Research",
      "UX Strategy",
      "Information Architecture",
      "User Flow",
      "Wireframing",
      "UI/UX Design",
      "Design System",
    ],
    liveUrl: "",
    links: [],
    summary:
      "Templatiq is a WordPress template library plugin designed to simplify and accelerate website creation. It provides ready-made templates for popular page builders, including Elementor, Bricks, and Gutenberg, helping users build business websites, directories, portfolios, and ecommerce experiences more efficiently.",
    showInFeaturedSliders: false,
    heroImage: TEMPLATIQ_PROJECT_IMAGE,
    heroAspectRatio: "4 / 3",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "Templatiq is a WordPress template library plugin designed to simplify and accelerate website creation. It provides ready-made templates for popular page builders, including Elementor, Bricks, and Gutenberg, helping users build business websites, directories, portfolios, and ecommerce experiences more efficiently.",
          "The platform supports template browsing, drag-and-drop customization, full-site imports, Directorist-specific templates, and free and premium design packs.",
          "We designed the product experience from research and UX planning through wireframing and final UI design, focusing on a clean, scalable interface that makes discovering, selecting, and importing website templates effortless.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Building a website from scratch can be time-consuming, especially when users need to find suitable layouts, configure multiple pages, and maintain visual consistency.",
        ],
        bullets: [
          "Creating website layouts from scratch requires significant time and effort.",
          "Finding suitable templates across different website builders can be difficult.",
          "Users need a straightforward way to discover templates for different website types.",
          "Importing templates and integrating them into existing WordPress websites can feel complicated.",
          "Managing complete website layouts and individual design components requires a more organized workflow.",
          "Users need clarity when exploring free and premium template options.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Designing a template marketplace plugin required balancing a large content library with a simple, intuitive user experience.",
        ],
        bullets: [
          "Organizing templates across multiple page builders and website categories.",
          "Designing a browsing experience that makes relevant templates easy to discover.",
          "Presenting template previews and details without overwhelming users.",
          "Simplifying the workflow from template discovery to import and customization.",
          "Supporting different use cases, including business websites, directories, portfolios, and ecommerce stores.",
          "Creating consistent interface patterns that could scale as the template library expanded.",
          "Making the experience accessible to both beginners and experienced WordPress users.",
        ],
      },
      {
        type: "copy",
        title: "Solutions",
        paragraphs: [
          "We designed Templatiq around a discovery-first user experience, helping users find the right template and move into website building with fewer steps.",
        ],
        bullets: [
          {
            lead: "Organized Template Library:",
            body: " Structured templates by website type, category, and supported page builder for easier discovery.",
          },
          {
            lead: "Intuitive Browsing Experience:",
            body: " Designed a clean interface that helps users explore available templates and identify suitable options quickly.",
          },
          {
            lead: "Clear Template Previews:",
            body: " Established a visual browsing experience that helps users evaluate templates before importing them.",
          },
          {
            lead: "Simplified Import Workflow:",
            body: " Focused on making template selection and importing more straightforward.",
          },
          {
            lead: "Page Builder Compatibility:",
            body: " Organized the experience around Elementor, Bricks, and Gutenberg to help users find relevant resources.",
          },
          {
            lead: "Full-Site & Individual Templates:",
            body: " Supported workflows for users who need complete website layouts as well as individual page designs.",
          },
          {
            lead: "Scalable UI Components:",
            body: " Created reusable design patterns to maintain consistency across categories, template cards, and interface elements.",
          },
          {
            lead: "Consistent Visual Design:",
            body: " Developed a clean, functional interface that keeps the focus on templates and the website-building workflow.",
          },
        ],
        closingParagraphs: [
          "The overall design goal was to reduce friction at every stage from finding the right template to getting started with website creation.",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "The final result is a WordPress template library plugin designed to make website creation faster, simpler, and more accessible.",
        ],
      },
      {
        type: "imageStack",
        images: [
          {
            image: "/assets/projects/templatiq/Templatiq Final result 1.png",
            alt: "Templatiq final result screen 1",
            aspectRatio: "916 / 2601",
          },
          {
            image: "/assets/projects/templatiq/Templatiq Final result 2.png",
            alt: "Templatiq final result screen 2",
            aspectRatio: "916 / 2200",
          },
          {
            image: "/assets/projects/templatiq/Templatiq Final result 3.png",
            alt: "Templatiq final result screen 3",
            aspectRatio: "916 / 1710",
          },
          {
            image: "/assets/projects/templatiq/Templatiq Final result 4.png",
            alt: "Templatiq final result screen 4",
            aspectRatio: "916 / 2494",
          },
          {
            image: "/assets/projects/templatiq/Templatiq Final result 5.png",
            alt: "Templatiq final result screen 5",
            aspectRatio: "916 / 1690",
          },
          {
            image: "/assets/projects/templatiq/Templatiq Final result 6.png",
            alt: "Templatiq final result screen 6",
            aspectRatio: "916 / 2224",
          },
          {
            image: "/assets/projects/templatiq/Templatiq Final result 7.png",
            alt: "Templatiq final result screen 7",
            aspectRatio: "916 / 2224",
          },
        ],
      },
    ],
    tags: ["WordPress", "SaaS Product Design", "UI/UX Design", "Design System"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: TEMPLATIQ_PROJECT_IMAGE,
    relatedImage: TEMPLATIQ_PROJECT_IMAGE,
    cover: TEMPLATIQ_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "onelisting",
    title: "OneListing — UI/UX Design for a WordPress Directory Website",
    detailLayout: "figma-longform",
    industry: ["Business Directory"],
    serviceCategory: ["Website Design"],
    servicesProvided: [],
    scopeOfWork: [
      "Product Research",
      "UX Strategy",
      "Information Architecture",
      "User Flow",
      "Wireframing",
      "UI/UX Design",
    ],
    liveUrl: "",
    links: [],
    summary:
      "OneListing is a premium WordPress theme built on the Directorist plugin, designed to help businesses launch directory and listing websites for restaurants, real estate, cars, hotels, and more.",
    showInFeaturedSliders: false,
    heroImage: ONELISTING_PROJECT_IMAGE,
    heroAspectRatio: "916 / 639",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "OneListing is a premium WordPress theme built on the Directorist plugin, designed to help businesses launch directory and listing websites for restaurants, real estate, cars, hotels, and more.",
          "We designed the complete experience from scratch, covering both sides of a directory: the visitor-facing website (home, listings, map view, single listing, pricing) and the listing owner’s workspace (multi-step add listing flow and frontend dashboard).",
          "The final design focuses on fast discovery for visitors, a simple submission and management flow for owners, and a flexible system that adapts to any directory niche.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Directory websites often struggle to serve two very different audiences at once: people searching for places, and owners who want to list and manage them.",
        ],
        bullets: [
          "Search and filtering felt overwhelming on listing-heavy pages",
          "Listing cards and single pages didn’t build enough trust for visitors to take action",
          "Adding a listing was long and confusing, which led owners to drop off",
          "Owners had no single place to manage listings, packages, earnings, and orders",
          "Most directory themes looked generic and couldn’t adapt to different niches",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "Designing a theme meant creating one system flexible enough for many directory types, without losing clarity or personality.",
        ],
        bullets: [
          "Designing a home page that works equally well for restaurants, cars, real estate, and travel",
          "Balancing advanced search filters with a clean, scannable listings layout",
          "Combining grid and map views without overwhelming users",
          "Breaking a long listing submission form into a clear, low-effort flow",
          "Presenting packages, earnings, bookings, and payouts clearly inside the owner dashboard",
        ],
      },
      {
        type: "copy",
        title: "Solutions",
        paragraphs: [
          "To solve these problems, we designed a flexible, discovery-first system that serves visitors and listing owners equally well.",
        ],
        bullets: [
          "Category-led home page with a tabbed search bar, trending categories, featured listings, and curated content, so visitors start exploring right away",
          "Listings with grid and map views with a filter sidebar for price, rating, radius, tags, and features",
          "Trust-focused single listing page with a photo gallery, business hours, amenities, reviews, FAQs, and a clear owner contact section",
          "Pricing and package selection that clearly compares plans before an owner submits a listing",
          "9-step add listing flow with a progress sidebar and Save & Next controls, which turns a long form into small, manageable steps",
          "Owner dashboard covering listings, packages, wallet and payouts, bookmarks, order history, announcements, and notifications",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Through research-led design and a flexible component system, OneListing is now a complete directory theme that works for both visitors and listing owners.",
        ],
        bullets: [
          "Visitors can search, filter, compare, and book listings in a few clicks",
          "Owners can create a listing step by step and manage everything from one dashboard",
          "The theme adapts easily to restaurants, real estate, cars, hotels, and other directory niches",
          "The design supports monetization through paid listings, featured listings, and subscription packages",
        ],
        closingParagraphs: [
          "Overall, OneListing shows how thoughtful UI/UX design can turn a complex, multi-sided directory platform into a clear, flexible, and conversion-friendly experience for everyone using it.",
        ],
      },
      {
        type: "imageSection",
        title: "Home Page",
        images: [
          {
            image: "/assets/projects/onelisting/OneListing homepage.png",
            alt: "OneListing home page design",
            aspectRatio: "916 / 1105",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Listings Pages",
        images: [
          {
            image: "/assets/projects/onelisting/OneListing listing pages.png",
            alt: "OneListing listing pages design",
            aspectRatio: "916 / 1866",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Add Listing Form",
        images: [
          {
            image: "/assets/projects/onelisting/OneListing listing form.png",
            alt: "OneListing add listing form, first screen",
            aspectRatio: "916 / 1636",
          },
          {
            image: "/assets/projects/onelisting/OneListing listing form 2.png",
            alt: "OneListing add listing form, second screen",
            aspectRatio: "916 / 1011",
          },
        ],
      },
      {
        type: "imageSection",
        title: "Listings Management Dashboard",
        images: [
          {
            image: "/assets/projects/onelisting/One Listing_Dashboard.png",
            alt: "OneListing listings management dashboard",
            aspectRatio: "916 / 2156",
          },
        ],
      },
    ],
    tags: ["UI/UX Design", "WordPress", "Business Directory", "Website Design"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: ONELISTING_PROJECT_IMAGE,
    relatedImage: ONELISTING_PROJECT_IMAGE,
    cover: ONELISTING_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "meditrust",
    title:
      "MediTrust — Custom Ecommerce Development for a Multivendor Medical Equipment Marketplace",
    detailLayout: "figma-longform",
    industry: ["Healthcare", "Ecommerce", "Medical Equipment Marketplace"],
    serviceCategory: [
      "WordPress Development",
      "WooCommerce Development",
      "Multivendor Marketplace Development",
    ],
    servicesProvided: [],
    scopeOfWork: [
      "WordPress Development",
      "WooCommerce Integration",
      "Dokan Customization",
      "Custom Vendor Dashboard",
      "Product Specification System",
      "Product Inquiry System",
      "Vendor Store Customization",
      "Medical Directory Development",
    ],
    liveUrl: "https://meditrustintbd.com/",
    summary:
      "MediTrust International is a Bangladesh-based multivendor medical equipment marketplace designed to connect medical suppliers with hospitals, clinics, healthcare institutes, and individual buyers.",
    showInFeaturedSliders: false,
    heroImage: MEDITRUST_PROJECT_IMAGE,
    heroAspectRatio: "916 / 639",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "MediTrust International is a Bangladesh-based multivendor medical equipment marketplace designed to connect medical suppliers with hospitals, clinics, healthcare institutes, and individual buyers.",
          "Our role went far beyond installing WordPress, WooCommerce, and Dokan. We developed and customized the platform around MediTrust’s specific business requirements, extending the standard marketplace functionality with custom vendor profiles, storefront information, customer account experiences, medical product specifications, inquiry workflows, directory features, and vendor dashboard functionality.",
          "The result is a purpose-built medical ecommerce platform where suppliers can manage their businesses and products while buyers can discover equipment, evaluate supplier information, submit inquiries, and access useful healthcare resources from one system.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "A standard WooCommerce and Dokan installation could not support many of the workflows required for a medical equipment marketplace.",
        ],
        bullets: [
          "Standard WooCommerce product fields were not sufficient for detailed medical equipment specifications.",
          "Dokan’s default vendor profile and store interface did not provide all the supplier information required by MediTrust.",
          "High-value medical equipment often requires an inquiry or quotation process instead of normal direct checkout.",
          "Vendor and customer account experiences needed additional custom information and functionality.",
          "Suppliers needed more structured storefronts to present their company and medical products professionally.",
          "Medical buyers needed access to product details such as brand, origin, warranty, availability, and technical specifications.",
          "The platform needed additional healthcare directories and information beyond normal ecommerce functionality.",
          "Vendor workflows had to remain manageable without giving suppliers access to the WordPress admin area.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        groups: [
          {
            title: "Marketplace & Vendor Challenges",
            bullets: [
              "Extending the Dokan vendor dashboard with custom functionality and frontend interfaces",
              "Building custom vendor profile and shop-detail fields around MediTrust’s business requirements",
              "Maintaining a consistent vendor experience across account, product, profile, and store-management screens",
              "Supporting supplier-specific information without exposing WordPress backend complexity",
            ],
          },
          {
            title: "Product Development Challenges",
            bullets: [
              "Creating custom medical equipment specification fields beyond standard WooCommerce attributes",
              "Presenting technical product information consistently across many equipment categories",
              "Supporting products where pricing may be unavailable or quotation-based",
              "Building a custom product inquiry workflow appropriate for medical equipment purchasing",
            ],
          },
          {
            title: "Customer & Directory Challenges",
            bullets: [
              "Extending the normal customer profile with project-specific functionality",
              "Building healthcare directory features outside the standard WooCommerce product system",
              "Structuring supplier, healthcare institute, ambulance, blood-bank, and related directory information",
              "Keeping complex marketplace and directory functionality usable across desktop and mobile",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/meditrust/bodyImg.png",
        alt: "MediTrust medical product details and marketplace catalog screens",
        aspectRatio: "916 / 639",
      },
      {
        type: "copy",
        title: "Our Solutions",
        bullets: [
          {
            lead: "Custom Vendor Profile System:",
            body: " Extended vendor profiles with MediTrust-specific supplier information and frontend presentation.",
          },
          {
            lead: "Custom Vendor Store Details:",
            body: " Built additional storefront information and layouts so medical suppliers can present their businesses professionally within the marketplace.",
          },
          {
            lead: "Customized Dokan Dashboard:",
            body: " Extended and customized the vendor dashboard to support the workflows required by MediTrust while keeping vendors inside a controlled frontend environment.",
          },
          {
            lead: "Custom Customer Profile:",
            body: " Developed additional customer-profile functionality instead of relying only on the default WooCommerce account experience.",
          },
          {
            lead: "Custom Medical Product Specifications:",
            body: " Added structured product specification functionality for medical equipment attributes, brand information, origin, warranty, availability, and other product-specific data.",
          },
          {
            lead: "Custom Product Inquiry System:",
            body: " Built the inquiry functionality with custom code to support quotation-based and high-value medical equipment purchases without depending on an additional inquiry plugin.",
          },
          {
            lead: "WooCommerce Marketplace Integration:",
            body: " Integrated product catalog, categories, vendor products, customer accounts, and ecommerce workflows into a unified system.",
          },
          {
            lead: "Dokan Multivendor Integration:",
            body: " Used Dokan for the core marketplace infrastructure while extending its limitations through project-specific custom development.",
          },
          {
            lead: "Healthcare Directory Development:",
            body: " Developed directory functionality for suppliers, healthcare institutes, ambulance services, blood banks, and other useful listings.",
          },
          {
            lead: "Custom Frontend Components:",
            body: " Built project-specific frontend interfaces, forms, navigation, profile sections, product information layouts, and dashboard components.",
          },
          {
            lead: "Responsive Development:",
            body: " Optimized marketplace, vendor dashboard, profiles, product pages, directories, and account interfaces for desktop, tablet, and mobile.",
          },
        ],
      },
      {
        type: "copy",
        title: "Technology & Development Approach",
        paragraphs: ["The platform was developed primarily using:"],
        bullets: [
          "WordPress",
          "WooCommerce",
          "Dokan Multivendor",
          "PHP",
          "WordPress hooks and filters",
          "Custom WordPress functionality",
          "Custom frontend JavaScript",
          "HTML/CSS",
          "Custom dashboard and profile interfaces",
        ],
        closingParagraphs: [
          "Instead of solving every requirement with another plugin, we kept the core stack focused and implemented project-specific functionality through custom development where the standard WordPress, WooCommerce, or Dokan features were insufficient.",
          "This approach gave MediTrust greater control over its workflows and reduced dependence on unrelated third-party plugin functionality.",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "MediTrust International now operates as a customized medical equipment marketplace rather than a standard WooCommerce store.",
        ],
        bulletsLabel: "The completed platform provides:",
        bullets: [
          "A multivendor marketplace where medical suppliers can manage and showcase their products",
          "Customized vendor profiles and storefront information",
          "A tailored vendor dashboard for supplier operations",
          "Structured medical equipment specifications",
          "Custom product inquiry functionality for quotation-based purchases",
          "Extended customer account functionality",
          "Healthcare and supplier directory features",
          "Responsive marketplace and dashboard interfaces",
          "A WordPress-based system that the MediTrust team can manage and expand as the platform grows",
        ],
        closingParagraphs: [
          "By combining WooCommerce and Dokan with substantial custom WordPress development, we were able to create a platform aligned with MediTrust’s actual business processes instead of forcing those processes into the limitations of an off-the-shelf marketplace setup.",
          "The project demonstrates how WordPress and WooCommerce can be extended through custom development to support a specialized, scalable multivendor marketplace for the healthcare industry.",
        ],
      },
    ],
    tags: [
      "WordPress Development",
      "WooCommerce Development",
      "Multivendor Marketplace",
      "Healthcare",
    ],
    category: "WordPress Development",
    region: "",
    year: "",
    listing: MEDITRUST_PROJECT_IMAGE,
    relatedImage: MEDITRUST_PROJECT_IMAGE,
    cover: MEDITRUST_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "uni-mail-hub",
    title: "Uni Mail Hub — Centralized Transactional Email Infrastructure & Management Platform",
    detailLayout: "figma-longform",
    industry: ["SaaS", "Email Infrastructure", "Developer Tools"],
    serviceCategory: [],
    servicesProvided: [
      "System Architecture",
      "Backend Development",
      "API Development",
      "Email Infrastructure Integration",
      "Admin Dashboard Development",
      "Queue & Worker Architecture",
      "Database Design",
      "Security & Access Control",
      "Docker Deployment",
      "Production Monitoring",
    ],
    scopeOfWork: [
      "Product Architecture",
      "Centralized Mail API",
      "Managed Mailboxes",
      "Project API Keys",
      "Outgoing Mail Queue",
      "Background Workers",
      "SMTP Delivery",
      "Delivery Status Tracking",
      "PostgreSQL Data Layer",
      "Redis Queue/Cache",
      "Production Deployment",
      "Multi-Project Integration",
    ],
    liveUrl: "https://mailhub.unicodeit.com/",
    summary:
      "Uni Mail Hub is a centralized email infrastructure platform built to manage transactional and application-generated email across multiple Unicode IT products from one controlled system.",
    showInFeaturedSliders: false,
    heroImage: UNI_MAIL_HUB_PROJECT_IMAGE,
    heroAspectRatio: "973 / 678",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "Uni Mail Hub is a centralized email infrastructure platform built to manage transactional and application-generated email across multiple Unicode IT products from one controlled system.",
          "Before Uni Mail Hub, individual applications could require their own SMTP configuration, credentials, mailbox logic, delivery handling, and debugging process. This created duplicated configuration, inconsistent behavior, and additional maintenance across projects.",
          "We built Uni Mail Hub as a dedicated internal mail platform where applications communicate with a centralized API using project-specific credentials and managed mailbox identities. The hub handles message acceptance, queueing, background processing, SMTP delivery, status tracking, and operational visibility independently from the source application.",
          "This allows websites, SaaS platforms, CRMs, contact forms, and other Unicode IT products to send email through one reusable and maintainable infrastructure instead of implementing mail delivery separately in every project.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Managing email independently across multiple software projects created several technical and operational problems:",
        ],
        bullets: [
          "Every application required separate SMTP configuration and credential management.",
          "Mail-delivery logic was duplicated across different projects and technology stacks.",
          "SMTP credentials could become tightly coupled to application code or deployment environments.",
          "Troubleshooting failed or delayed messages required checking individual applications separately.",
          "Different applications handled retries, failures, and delivery status inconsistently.",
          "Changing an email provider or mailbox configuration could require updating multiple applications.",
          "There was no single operational view of outgoing mail across Unicode IT products.",
          "Production applications needed a secure way to send email without exposing SMTP credentials to the frontend.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        groups: [
          {
            title: "Architecture & Integration Challenges",
            bullets: [
              "Designing one mail service that could safely support multiple independent applications",
              "Providing project-level API authentication while keeping SMTP credentials centralized",
              "Supporting different managed mailboxes without duplicating infrastructure",
              "Creating a simple integration contract that could be reused by WordPress, Next.js, SaaS products, CRM systems, and other applications",
            ],
          },
          {
            title: "Delivery & Reliability Challenges",
            bullets: [
              "Separating HTTP request handling from slower SMTP delivery",
              "Preventing mail delivery from blocking the source application",
              "Managing queued, processing, successful, and failed delivery states",
              "Handling temporary SMTP failures and operational errors predictably",
              "Ensuring queued messages remained trackable throughout the delivery lifecycle",
            ],
          },
          {
            title: "Security & Operations Challenges",
            bullets: [
              "Keeping private API keys and SMTP credentials server-side",
              "Restricting project access to authorized mailboxes and APIs",
              "Validating production configuration before deployment",
              "Maintaining reliable PostgreSQL and Redis connectivity",
              "Deploying API, web, worker, database, and Redis services consistently",
              "Making production updates without interrupting other applications using the mail service",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/uni-mail-hub/Uni Mail Hub body image.png",
        alt: "Uni Mail Hub webmail inbox and message view",
        aspectRatio: "973 / 678",
      },
      {
        type: "copy",
        title: "Our Solutions",
        bullets: [
          { lead: "Centralized Mail API:", body: " Built a reusable server-side API that applications can call instead of connecting directly to SMTP infrastructure." },
          { lead: "Project-Based Authentication:", body: " Applications authenticate using private project API keys, allowing mail access to be controlled independently for each integration." },
          { lead: "Managed Mailboxes:", body: " Centralized mailbox configuration so applications reference approved mailbox identities instead of storing mail-server credentials themselves." },
          { lead: "Queue-Based Delivery:", body: " Incoming email requests are accepted and queued for asynchronous processing, preventing SMTP delivery time from slowing down the source application." },
          { lead: "Background Worker Architecture:", body: " Dedicated workers process outgoing email separately from the web/API layer, improving reliability and operational isolation." },
          { lead: "Delivery State Tracking:", body: " Added clear delivery lifecycle states so messages can be monitored from acceptance through processing and SMTP delivery." },
          { lead: "PostgreSQL Persistence:", body: " Used PostgreSQL to maintain durable application, mailbox, message, configuration, and delivery-related records." },
          { lead: "Redis Integration:", body: " Used Redis for fast queue/runtime coordination required by background processing and asynchronous workloads." },
          { lead: "Secure Server-Side Integration:", body: " API credentials and mailbox identifiers remain in server-side environment variables and are never exposed to browser clients." },
          { lead: "Origin & Integration Controls:", body: " Production integrations can restrict where requests originate and keep application-specific configuration isolated." },
          { lead: "Production Validation:", body: " Added deployment checks for configuration, secrets, database connectivity, Redis connectivity, migration state, and infrastructure requirements before production changes are applied." },
          { lead: "Dockerized Infrastructure:", body: " Containerized the web/API, worker, PostgreSQL, and Redis services so the platform can be deployed and operated consistently on the VPS." },
          { lead: "Reusable Integration Model:", body: " Other Unicode IT products can integrate with the same mail infrastructure using a small set of environment variables rather than implementing a separate email system." },
        ],
      },
      {
        type: "copy",
        title: "Technology Stack",
        bullets: [
          "Node.js / JavaScript",
          "TypeScript",
          "NestJS API",
          "Next.js web application",
          "Prisma",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "Docker / Docker Compose",
          "SMTP email infrastructure",
          "REST/API-based integrations",
          "Background worker/queue processing",
        ],
      },
      {
        type: "copy",
        title: "Technology & Development Approach",
        paragraphs: [
          "Uni Mail Hub was designed as infrastructure rather than a feature tied to one application.",
          "The core architecture separates:",
        ],
        bullets: [
          "application/API requests",
          "persistent data",
          "asynchronous mail processing",
          "SMTP delivery",
          "operational management",
        ],
        groups: [
          {
            title: "Applications integrate using configuration similar to:",
            bullets: [
              "Mail Hub URL",
              "private project API key",
              "managed mailbox ID",
            ],
            closingParagraphs: [
              "This architecture keeps email credentials and delivery logic inside Uni Mail Hub while client applications only need to submit validated mail requests.",
              "The system uses PostgreSQL for durable data, Redis for asynchronous processing/runtime coordination, dedicated background workers for mail delivery, and Docker Compose for production deployment.",
              "This makes the service easier to maintain, monitor, secure, and reuse as the number of Unicode IT applications grows.",
            ],
          },
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "Uni Mail Hub now provides Unicode IT with a centralized and reusable email infrastructure for its software products.",
        ],
        bulletsLabel: "The completed system provides:",
        bullets: [
          "One mail-delivery platform shared across multiple applications",
          "Project-specific API authentication",
          "Centrally managed mailboxes",
          "Server-side protection of mail credentials",
          "Asynchronous queue-based email processing",
          "Dedicated background workers",
          "Persistent delivery records and status tracking",
          "PostgreSQL-backed data management",
          "Redis-powered processing infrastructure",
          "Dockerized production deployment",
          "Consistent integration across websites, SaaS platforms, CRM systems, and internal applications",
        ],
        closingParagraphs: [
          "Applications such as the Unicode IT website can now submit contact-form email through Uni Mail Hub using an API key and mailbox ID while the hub handles the actual delivery lifecycle independently.",
          "The result is less duplicated mail code, simpler application configuration, improved operational visibility, and a scalable foundation for centralized transactional email across Unicode IT products.",
        ],
      },
    ],
    tags: ["Email Infrastructure", "Full-Stack Development", "Backend Engineering", "DevOps"],
    category: "Full-Stack Development",
    region: "",
    year: "",
    listing: UNI_MAIL_HUB_PROJECT_IMAGE,
    relatedImage: UNI_MAIL_HUB_PROJECT_IMAGE,
    cover: UNI_MAIL_HUB_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "unicrm",
    title: "UniCRM — SaaS CRM, Lead Management & Business Automation Platform",
    detailLayout: "figma-longform",
    industry: ["SaaS", "CRM", "Sales Automation", "Business Operations"],
    serviceCategory: [
      "SaaS Product Development",
      "Full-Stack Web Application Development",
      "CRM Development",
      "Business Automation",
    ],
    servicesProvided: [
      "Product Architecture",
      "SaaS Development",
      "Backend Development",
      "API Development",
      "CRM Workflow Development",
      "Lead Management",
      "Customer Management",
      "Pipeline Development",
      "Automation Development",
      "Web-to-Lead Integration",
      "Dashboard Development",
      "Background Worker Architecture",
      "Database Design",
      "Object Storage",
      "Security & Access Control",
      "Production Deployment",
    ],
    scopeOfWork: [
      "CRM Architecture",
      "Lead Capture",
      "Contact Management",
      "Customer Management",
      "Sales Pipeline",
      "Lead Lifecycle",
      "Activity Tracking",
      "Follow-Up Management",
      "Web-to-Lead API",
      "Business Automation",
      "Workflow Automation",
      "Background Jobs",
      "Secure Inbound Integrations",
      "PostgreSQL Data Layer",
      "Redis Runtime/Queue Layer",
      "MinIO Object Storage",
      "Docker Deployment",
      "Production Operations",
      "External Product Integrations",
    ],
    liveUrl: "https://crm.unicodeit.com/",
    summary:
      "UniCRM is a SaaS customer relationship management and business automation platform built to help companies manage leads, customers, sales activity, follow-ups, and operational workflows from one centralized system.",
    showInFeaturedSliders: false,
    heroImage: UNICRM_PROJECT_IMAGE,
    heroAspectRatio: "973 / 678",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "UniCRM is a SaaS customer relationship management and business automation platform built to help companies manage leads, customers, sales activity, follow-ups, and operational workflows from one centralized system.",
          "The product was designed for businesses across different industries rather than for one specific organization. Teams can use UniCRM to capture incoming opportunities, organize customer information, manage sales pipelines, track activities, automate repetitive CRM tasks, and connect external websites or applications through secure integrations.",
          "A major goal was to make the CRM flexible enough to support different lead sources and business processes while keeping the user experience structured and manageable.",
          "UniCRM also provides a secure Web-to-Lead integration model. External websites and applications can submit qualified lead information directly into the CRM through authenticated server-side requests. Unicode IT's own website is one example of this integration, but the same architecture can be reused by other businesses and applications.",
          "The result is a standalone SaaS CRM platform that combines lead management, customer relationship workflows, integrations, and automation in one extensible system.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Many growing businesses manage leads and customer relationships using a mixture of spreadsheets, inboxes, contact forms, messaging tools, and disconnected applications.",
          "This creates several operational problems:",
        ],
        bullets: [
          "Leads from different websites and campaigns remain scattered across multiple systems.",
          "Sales teams lack a single source of truth for customer and opportunity information.",
          "Manual lead entry wastes time and increases the chance of missing or duplicating information.",
          "Follow-up activity can become inconsistent between team members.",
          "Sales pipelines are difficult to understand when status is maintained manually.",
          "Repetitive CRM tasks consume time that could be automated.",
          "Different businesses need different workflows rather than one rigid CRM process.",
          "External websites need a secure way to send lead information directly into the CRM.",
          "Integrations must keep private CRM credentials away from frontend/browser code.",
          "Background tasks, automation, uploaded files, and CRM data require reliable production infrastructure.",
          "As usage grows, the application must remain maintainable and extensible rather than becoming a collection of disconnected features.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        groups: [
          {
            title: "SaaS & Product Architecture Challenges",
            bullets: [
              "Designing the CRM as a reusable SaaS product rather than a company-specific internal tool.",
              "Creating CRM structures that can support different industries and business workflows.",
              "Keeping lead, customer, activity, and pipeline information consistent across the application.",
              "Designing features that remain understandable as the amount of CRM data grows.",
              "Building the application so additional modules and integrations can be introduced later without rewriting the core system.",
            ],
          },
          {
            title: "CRM Workflow Challenges",
            bullets: [
              "Structuring the complete lead lifecycle from acquisition to follow-up and sales progression.",
              "Giving teams a clear view of lead status and next actions.",
              "Maintaining activity history and relevant context around customer records.",
              "Supporting different lead sources while keeping data normalized.",
              "Reducing repetitive manual work through automation without making workflows difficult to understand.",
            ],
          },
          {
            title: "Automation Challenges",
            bullets: [
              "Building automation into the CRM instead of treating it as a separate external tool.",
              "Running automation/background work independently from normal web requests.",
              "Ensuring automation does not block the primary application experience.",
              "Making automated workflows reliable and maintainable in production.",
              "Supporting future expansion of automation triggers/actions without tightly coupling them to individual pages.",
            ],
          },
          {
            title: "Integration Challenges",
            bullets: [
              "Building a reusable Web-to-Lead API for external websites and products.",
              "Authenticating inbound requests securely.",
              "Preventing integration secrets from being exposed to browsers.",
              "Keeping external applications loosely coupled to UniCRM internals.",
              "Preserving lead source/context when information enters the CRM.",
              "Designing an integration model that can be reused by different companies and websites.",
            ],
          },
          {
            title: "Infrastructure Challenges",
            bullets: [
              "Separating web, API, and background-worker responsibilities.",
              "Maintaining durable CRM records in PostgreSQL.",
              "Supporting fast runtime/background operations through Redis.",
              "Managing uploaded files/assets outside the relational database through MinIO.",
              "Deploying multiple services consistently using containers.",
              "Updating the SaaS platform without disrupting active integrations or background work.",
            ],
          },
        ],
      },
      {
        type: "image",
        image: "/assets/projects/unicrm/UniCRM Body img.png",
        alt: "UniCRM lead management table and pipeline overview",
        aspectRatio: "973 / 678",
      },
      {
        type: "copy",
        title: "Our Solutions",
        groups: [
          {
            title: "Centralized CRM Platform",
            paragraphs: ["Built one system where businesses can manage leads, customers, opportunities, activities, and sales-related information instead of depending on disconnected tools."],
          },
          {
            title: "Structured Lead Management",
            paragraphs: ["Created a clear lead-management workflow that keeps incoming opportunities organized and makes their status easier for teams to understand."],
          },
          {
            title: "Sales Pipeline Management",
            paragraphs: ["Developed pipeline-oriented CRM workflows so businesses can track opportunities as they move through their sales process."],
          },
          {
            title: "Customer & Contact Management",
            paragraphs: ["Centralized important customer and contact information so teams can maintain the context required for ongoing relationships and follow-ups."],
          },
          {
            title: "Activity & Follow-Up Tracking",
            paragraphs: ["Connected activities and follow-up information to CRM records, helping teams maintain a clearer history of interactions and required actions."],
          },
          {
            title: "CRM Automation",
            paragraphs: [
              "Added automation capabilities for repetitive CRM and business workflows.",
              "Automation/background tasks are processed independently from normal page requests so they do not unnecessarily block user interactions.",
              "Verified automation includes lead creation and stage-change triggers, task and follow-up creation, owner assignment, notifications, email, and webhook actions.",
            ],
          },
          {
            title: "Secure Web-to-Lead API",
            paragraphs: ["Built a dedicated inbound endpoint that allows external websites and applications to create leads directly in UniCRM."],
          },
          {
            title: "Server-Side Integration Security",
            paragraphs: ["External integrations use private server-side credentials rather than exposing CRM secrets in browser code."],
          },
          {
            title: "Reusable Integration Architecture",
            paragraphs: ["Designed integrations so different websites/products can connect to UniCRM using a standardized API model instead of project-specific CRM code."],
          },
          {
            title: "Background Worker Architecture",
            paragraphs: ["Used dedicated worker processes for automation and other tasks that should execute independently from normal web/API requests."],
          },
          {
            title: "PostgreSQL Data Layer",
            paragraphs: ["Used PostgreSQL as the persistent relational data layer for CRM and business records."],
          },
          {
            title: "Redis Runtime & Queue Infrastructure",
            paragraphs: ["Used Redis for fast operational coordination and asynchronous/background-processing requirements."],
          },
          {
            title: "MinIO Object Storage",
            paragraphs: ["Integrated MinIO-compatible object storage for application files/assets that should remain separate from relational CRM records."],
          },
          {
            title: "Dockerized Production Infrastructure",
            paragraphs: ["Deployed UniCRM as isolated web, API, worker, PostgreSQL, and Redis services, with object storage configured separately."],
          },
          {
            title: "SaaS-Ready Architecture",
            paragraphs: ["Built UniCRM so the platform can continue evolving with additional CRM modules, integrations, automation workflows, and business features rather than remaining limited to a single organization's processes."],
          },
        ],
      },
      {
        type: "copy",
        title: "Technology Stack",
        bullets: [
          "Node.js / TypeScript",
          "Next.js / React web application",
          "NestJS API and worker",
          "Prisma / PostgreSQL",
          "Redis / BullMQ",
          "MinIO-compatible object storage",
          "Docker / Docker Compose",
          "REST APIs and secure server-to-server integrations",
        ],
      },
      {
        type: "copy",
        title: "Technology & Development Approach",
        paragraphs: [
          "UniCRM was developed as a standalone SaaS business platform.",
          "Its architecture separates major responsibilities into independent layers/services:",
        ],
        bullets: [
          "user-facing web application",
          "backend/API layer",
          "CRM/business logic",
          "automation/background worker",
          "relational data storage",
          "runtime/queue infrastructure",
          "object/file storage",
          "external integration endpoints",
        ],
        closingParagraphs: [
          "PostgreSQL provides durable relational storage for CRM data.",
          "Redis supports runtime and asynchronous/background workloads.",
          "MinIO provides object storage independently from the primary relational database.",
          "Dedicated workers execute automation and background tasks separately from normal API requests.",
          "External applications connect through secured REST/API integrations.",
          "The Web-to-Lead implementation allows websites to submit lead information directly to UniCRM using a private server-side secret.",
          "This architecture allows the CRM to remain independent from the external websites that use it while providing a standardized way for additional products and businesses to integrate in the future.",
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "UniCRM has evolved into a reusable SaaS CRM and business automation platform rather than a CRM built for a single organization.",
        ],
        bulletsLabel: "The completed system provides:",
        bullets: [
          "centralized lead management",
          "customer and contact management",
          "structured sales workflows",
          "pipeline-based opportunity tracking",
          "activity and follow-up management",
          "CRM/business automation",
          "direct Web-to-Lead integration",
          "secure server-to-server integrations",
          "API-based connectivity with external applications",
          "background worker processing",
          "PostgreSQL-backed CRM data",
          "Redis-powered runtime/background infrastructure",
          "MinIO-backed object storage",
          "Dockerized production deployment",
          "an extensible foundation for additional CRM features and integrations",
        ],
        closingParagraphs: [
          "Businesses can use UniCRM as their central system for managing incoming opportunities and customer relationships while connecting their own websites and applications to the same CRM infrastructure.",
          "For Unicode IT, the company's website is one real production integration: contact-form data can be delivered directly to UniCRM through the secured Web-to-Lead API. The same model can be used by other businesses adopting the SaaS platform.",
          "The result is less repetitive manual data entry, clearer sales operations, more consistent follow-up, greater workflow automation, and a scalable technical foundation that can support businesses across multiple industries.",
        ],
      },
    ],
    tags: ["SaaS CRM", "Lead Management", "Business Automation", "Full-Stack Development"],
    category: "SaaS Product Development",
    region: "",
    year: "",
    listing: UNICRM_PROJECT_IMAGE,
    relatedImage: UNICRM_PROJECT_IMAGE,
    cover: UNICRM_PROJECT_IMAGE,
    gallery: [],
  },
  {
    slug: "leanier",
    title: "Leanier — UI/UX Design for a Lean-Thinking Productivity App",
    showOnHomepage: false,
    detailLayout: "figma-longform",
    industry: ["Productivity"],
    serviceCategory: ["Mobile App Design"],
    servicesProvided: [],
    scopeOfWork: [
      "Product Research",
      "UX Strategy",
      "User Flow",
      "Wireframing",
      "UI Design",
    ],
    liveUrl: "",
    links: [],
    summary:
      "Leanier is a behaviour-change and productivity app built around Lean Thinking, behavioural insight, and AI. Instead of encouraging users to add more tasks, reminders, and routines, Leanier helps them understand what creates friction in everyday life and find a better way forward.",
    showInFeaturedSliders: false,
    heroImage: LEANIER_PROJECT_IMAGE,
    heroAspectRatio: "916 / 638",
    problems: "",
    solutions: [],
    showcase: [],
    detailBlocks: [
      {
        type: "copy",
        title: "About the Project",
        paragraphs: [
          "Leanier is a behaviour-change and productivity app built around Lean Thinking, behavioural insight, and AI. Instead of encouraging users to add more tasks, reminders, and routines, Leanier helps them understand what creates friction in everyday life and find a better way forward.",
          "We designed the complete mobile app experience from scratch from UX research and product discovery to user flows, wireframes, high-fidelity UI, and the final design system.",
          "The design focuses on making a complex behavioural framework feel simple, calm, and actionable, helping users understand their patterns, take small meaningful actions, and continuously improve their everyday systems.",
        ],
      },
      {
        type: "copy",
        title: "Problems",
        paragraphs: [
          "Many productivity apps focus on tracking tasks, maintaining streaks, and reminding users to do more. Leanier takes a different approach by looking at the system behind behaviour rather than simply tracking the behaviour itself.",
          "Key problems the product aims to address:",
        ],
        bullets: [
          "Users feel overwhelmed by too many tasks, reminders, and decisions.",
          "Traditional productivity tools often focus on what users should do, rather than why things get stuck.",
          "Generic task lists can add more mental clutter instead of reducing it.",
          "Users need a simpler way to identify friction in their everyday routines.",
          "Different areas of life such as home, health, focus, energy, and time are interconnected.",
          "Productivity tools often encourage consistency and streaks without adapting to real-life changes.",
        ],
      },
      {
        type: "copy",
        title: "Challenges",
        paragraphs: [
          "The biggest challenge was translating Lean Thinking and behavioural improvement principles into a simple mobile product experience.",
        ],
        bullets: [
          "Turning an abstract behavioural framework into an intuitive onboarding experience.",
          "Helping users identify personal friction without making the process feel like a long questionnaire.",
          "Designing an experience that feels supportive rather than prescriptive or judgmental.",
          "Presenting multiple areas of everyday life without creating dashboard complexity.",
          "Balancing behavioural insights and data with a calm, low-cognitive-load interface.",
          "Designing a product that can learn and adapt as users interact with it over time.",
          "Creating a scalable design system for future AI-powered coaching and behavioural features.",
        ],
      },
      {
        type: "image",
        image: "/assets/projects/leanier/Leanier app body.png",
        alt: "Leanier daily task dashboard on a phone",
        aspectRatio: "916 / 638",
      },
      {
        type: "copy",
        title: "Solutions",
        paragraphs: ["Key design solutions included:"],
        bullets: [
          "Friction-first onboarding — a short, honest set of questions that identifies each user's real starting point, not a generic setup flow",
          "Daily Task Tray — a short, prioritised list of next moves instead of an endless task log",
          'AI Coach nudges — contextual suggestions (like "try a smaller step") that reduce friction in the moment, not just remind',
          "60-second reflection flow — a lightweight daily check-in that feeds the system's learning loop",
          "Connected score dashboard — Focus, Home, Health, and Planet scores shown together, reflecting how life areas affect each other",
          'Consistent green gradient design system — calm, organic visuals that reinforce the "lean, not more effort" brand feeling',
        ],
      },
      {
        type: "copy",
        title: "The Final Result",
        paragraphs: [
          "The final result is a complete mobile UI/UX experience for Leanier, transforming a complex concept around Lean Thinking and behaviour change into a simple, approachable digital product.",
        ],
      },
      {
        type: "imageStack",
        images: [
          {
            image: "/assets/projects/leanier/Leanier 1 1.png",
            alt: "Leanier mobile app screens, first set",
            aspectRatio: "916 / 658",
          },
          {
            image: "/assets/projects/leanier/Leanier 2 1.png",
            alt: "Leanier mobile app screens, second set",
            aspectRatio: "916 / 658",
          },
          {
            image: "/assets/projects/leanier/Leanier 3 1.png",
            alt: "Leanier mobile app screens, third set",
            aspectRatio: "916 / 658",
          },
        ],
      },
    ],
    tags: ["UI/UX Design", "Mobile App Design", "Productivity", "AI"],
    category: "UI/UX Design",
    region: "",
    year: "",
    listing: LEANIER_PROJECT_IMAGE,
    relatedImage: LEANIER_PROJECT_IMAGE,
    cover: LEANIER_PROJECT_IMAGE,
    gallery: [],
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export const leadfexProject = {
  slug: "leadfex",
  title: "LeadFex — B2B Lead Generation Web Development",
  listing: "/images/work/Leadfex.png",
  tags: [
    "WordPress Development",
    "Responsive Web Development",
    "Lead Generation Website",
    "SEO Optimization",
  ],
  category: "Website Design",
  region: "",
  externalUrl: "https://leadfex.com/",
  hasDetailsPage: false,
} as const satisfies ProjectListing;

const portfolioFirstTen = [
  "reborn-packaging",
  "emlock",
  "unicrm",
  "uni-mail-hub",
  "meditrust",
  "leadfex",
  "helpgent",
  "formgent",
  "directorist",
  "al-quran",
] as const;

const portfolioRank = new Map<string, number>(
  portfolioFirstTen.map((slug, index) => [slug, index]),
);

export const workListingProjects: readonly ProjectListing[] = [
  ...projects,
  leadfexProject,
].sort(
  (left, right) =>
    (portfolioRank.get(left.slug) ?? portfolioFirstTen.length) -
    (portfolioRank.get(right.slug) ?? portfolioFirstTen.length),
);

export const homepageListingProjects = workListingProjects.filter(
  (project) => project.showOnHomepage !== false,
).slice(0, 10);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
