import Link from "next/link";
import { calLink, liveTeam, liveWorks, whatsappLink } from "@/lib/live-data";
import { ContactHeroSection, ContactHeroTransition } from "./LiveContactHero";
import { Benefits, PARTNER_LOGOS, PricingSection } from "./LiveHome";
import {
  ContactCardAction,
  FAQ,
  Kicker,
  LiveButton,
  LiveTitle,
  ScaleCTA,
  Testimonials,
} from "./LiveShared";
import { LiveFeaturedWorks } from "./LiveFeaturedWorks";
import { LiveAllWorks } from "./LiveAllWorks";
import { AboutMotion } from "./AboutMotion";

export function WorksPageLive() {
  const workCards = liveWorks.map((work) => ({
    ...work,
    image: work.listing,
  }));

  return (
    <main>
      <section className="live-worksHero" data-section="works-hero">
        <img
          className="live-worksHeroGlow"
          src="/assets/live/brand-cyan/21Nxe9BjOK1MSyJrrYQgCDts.png"
          alt=""
        />
        <img
          className="live-worksHeroRuler"
          src="/assets/live/7xWbAyTQN909Y3iX0Cq9QfWxA.png"
          alt=""
        />
        <div className="live-worksHeroInner">
          <Kicker>Featured Works</Kicker>
          <h1>Latest Works</h1>
          <LiveFeaturedWorks />
        </div>
      </section>
      <div className="fix-introWaveRow live-worksTransition" aria-hidden="true">
        <div className="fix-introWaveViewport">
          <div
            className="fix-introWaveTrack"
            data-motion-loop="works-hero-ruler"
          >
            <img
              className="fix-introWaveImage"
              src="/assets/live/sCElb0ycSJhVjPjM7nlsRGVqM.png"
              alt=""
            />
            <img
              className="fix-introWaveImage"
              src="/assets/live/sCElb0ycSJhVjPjM7nlsRGVqM.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <LiveAllWorks workCards={workCards} />
      {/* <Testimonials /> */}
      <FAQ />
      <ScaleCTA />
    </main>
  );
}

export function PricingPageLive() {
  const showPricingTestimonials = false;

  return (
    <main className="live-pricingPage">
      <div className="live-innerTop">
        <PricingSection route />
      </div>
      <Benefits route />
      {showPricingTestimonials && <Testimonials />}
      <FAQ />
      <ScaleCTA />
    </main>
  );
}

export function AboutPageLive() {
  const story = [
    "We started Unicode IT with a simple belief: technology should help businesses grow, scale, and compete more effectively.",
    "Today, digital product development often involves disconnected design, development, automation, and collaboration workflows that slow projects down.",
    "Our team has faced these challenges across different industries, from managing complex systems to maintaining performance, usability, and scalability.",
    "Thatâ€™s why Unicode IT was built as a digital product and software development partner, helping businesses create custom software, web and mobile apps, SaaS platforms, and AI-powered solutions with clarity, speed, and long-term value.",
  ];

  const thinkerCopy = [
    "At Unicode IT, we donâ€™t build digital products just to look impressive. We focus on clarity, usability, performance, and measurable business value. Every software, web, mobile, and UI/UX project is designed with purpose, scalability, and the end user in mind.",
    "We believe great digital experiences should simplify complex problems, not create new ones. From custom software development to mobile apps and AI-powered solutions, our goal is to make every interaction intuitive, efficient, and aligned with real business objectives.",
    "Too many digital products suffer from rushed development, inconsistent design, technical limitations, and systems that fail to scale. Weâ€™ve seen how unclear planning and disconnected workflows lead to costly revisions. Thatâ€™s why Unicode IT takes a more structured, strategic approach.",
    "We build complete digital systems, not just individual screens or features. Through thoughtful UI/UX design, scalable development, reliable technology, and structured workflows, we create digital products that can evolve with your business and support long-term growth.",
  ];

  return (
    <main className="live-aboutPage" data-about-page>
      <AboutMotion />
      <section className="live-aboutHero" data-section="about-hero">
        <img
          className="live-aboutHeroTexture"
          src="/assets/live/brand-cyan/21Nxe9BjOK1MSyJrrYQgCDts.png"
          alt=""
        />
        <img
          className="live-aboutHeroGrid"
          src="/assets/live/UkL67OWi34bxCle9SIy5O0k.png"
          alt=""
        />
        <img
          className={`live-aboutHeroRing live-aboutHeroRingOuter`}
          data-about-ring="outer"
          src="/assets/live/tVKi9znZzAgYARCqBqyTiRbm6s.png"
          alt=""
        />
        <img
          className={`live-aboutHeroRing live-aboutHeroRingInner`}
          data-about-ring="inner"
          src="/assets/live/98fwY6uljy91CPrSnYxoCPGbecA.png"
          alt=""
        />
        <div className="live-aboutHeroCopy" data-about-hero-copy>
          <Kicker>About Us</Kicker>
          <h1>Custom Software Development for Scalable Business Growth</h1>
          {/* <p>
            Unicode IT combines strategy, UI/UX design, web and mobile app
            development, and AI automation
            <br />
            to build scalable digital products that help businesses grow and
            perform better.
          </p> */}
          <div className="live-aboutHeroButton">
            <LiveButton />
          </div>
        </div>
      </section>
      <section
        className="live-foundingStorySection"
        aria-label="Founding Story"
      >
        <img
          className="live-aboutTeamImage"
          src="/assets/live/LjQl1b57p9r3QXIa0Tc9QhvrNvg.png"
          alt="Aexo team collaborating"
        />
        <img
          className="live-aboutHeroLowerGlow"
          src="/assets/live/brand-cyan/0pGuw8Zol1JkB8FhgdSyeOVr3M.png"
          alt=""
        />
        <div className="live-foundingCards">
          <article className="live-foundingIntro" data-about-founding="left">
            <img
              className="live-foundingSurface"
              src="/assets/live/rmcWL8GkgexGAHZBAvLWh0NFl0.png"
              alt=""
            />
            <img
              className="live-foundingGlow"
              src="/assets/live/brand-cyan/0X1CXp4xj8kowNCpRbYuUIVkaDQ.png"
              alt=""
            />
            <div className="live-foundingContent">
              <Kicker>Founding Story</Kicker>
              <h2>
                There Had
                <br />
                to Be Better
              </h2>
              <p>
                We started Unicode IT to simplify digital product development,
                helping businesses build scalable software, web, and mobile
                experiences with clarity, speed, and measurable impact.
              </p>
              <div className="live-foundingActions">
                <LiveButton href="#" centered>
                  Talk to founder
                </LiveButton>
                <LiveButton href="/contact" dark>
                  Contact Us
                </LiveButton>
              </div>
            </div>
          </article>
          <article className="live-founderCopy" data-about-founding="right">
            <img
              className="live-founderSurface"
              src="/assets/live/72zcO37jki94dL2YM2h4linrFsU.png"
              alt=""
            />
            <div className="live-founderParagraphs">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="live-storyLogo">
              <img src="/assets/live/founding_logo_bg.png" alt="" />
              <img src="/assets/logo/logo_white.png" alt="Unicode IT" />
            </div>
          </article>
        </div>
        <div className="fix-introWaveRow live-foundingStrip" aria-hidden="true">
          <div className="fix-introWaveViewport">
            <div
              className="fix-introWaveTrack"
              data-motion-loop="about-founding-ruler"
            >
              <img
                className="fix-introWaveImage"
                src="/assets/live/sCElb0ycSJhVjPjM7nlsRGVqM.png"
                alt=""
              />
              <img
                className="fix-introWaveImage"
                src="/assets/live/sCElb0ycSJhVjPjM7nlsRGVqM.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="live-thinkersSection" data-section="about-us">
        <article className="live-thinkers" data-about-thinkers>
          <img
            className="live-thinkersSurface"
            src="/assets/live/gqQ3ffbzGqkzpuGyqYCz2zTVOYg.png"
            alt=""
          />
          <ThinkerPencil className="live-thinkerPen" />
          <ThinkerBolt className="live-thinkerBolt" />
          <div
            className={`live-thinkerPhoto live-thinkerPhotoLeft`}
            data-about-thinker-photo="left"
          >
            <img
              src="/assets/live/nII0o2cWuRfQlkk7QhjEB6e0WrI.png"
              alt="Aexo founder sketching"
            />
            <img src="/assets/live/cHTZgik4Vy1CilWOawNxAXSJXw.png" alt="" />
          </div>
          <div
            className={`live-thinkerPhoto live-thinkerPhotoRight`}
            data-about-thinker-photo="right"
          >
            <img
              src="/assets/live/2HBGAvA1eqd8eyuMbOj1WmF9Ieg.png"
              alt="Aexo founder"
            />
            <img src="/assets/live/cHTZgik4Vy1CilWOawNxAXSJXw.png" alt="" />
          </div>
          <div className="live-thinkerCopy">
            <h3>We Are Thinkers.</h3>
            {thinkerCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <footer>
            <span>
              <FounderSignature kind="alex" />
              <b>Alex Sameni</b>
              <small>Cofounder</small>
            </span>
            <span>
              <FounderSignature kind="paul" />
              <b>Paul Johnson</b>
              <small>Cofounder</small>
            </span>
          </footer>
        </article>
      </section>
      <section className="live-team" data-section="team">
        <div className="live-aboutSectionTitle">
          <Kicker>Our Team</Kicker>
          <h2>Meet the team</h2>
        </div>
        <img
          className="live-teamEdgeLeft"
          src="/assets/live/hOcxLOBuq3DkW8A7q8Fx5TUUx4.png"
          alt=""
        />
        <img
          className="live-teamEdgeRight"
          src="/assets/live/BJm2GW3Zo7nTkMbVzP4GWj2Cs8.png"
          alt=""
        />
        <div className="live-teamGrid">
          {liveTeam.map((member, index) => (
            <article key={member.name} data-team-card>
              <img
                className="live-teamCardSurface"
                src="/assets/live/brand-cyan/4Lsc1onyNrhirkTEeDjiaifcy8k.png"
                alt=""
              />
              <img
                className="live-teamPortrait"
                data-about-team-portrait
                src={member.portrait}
                alt={member.name}
              />
              <img
                className="live-teamCardAbstract"
                src="/assets/live/brand-cyan/msMyC8COjFVKGxc0WC6uCnA5HvM.png"
                alt=""
              />
              <span className="live-teamNumber">0{index + 1}</span>
              <div className="live-teamCardInfo">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className="live-teamCardHover">
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
                <nav aria-label={`${member.name} social links`}>
                  <a
                    href={member.links.instagram}
                    aria-label={`${member.name} on Instagram`}
                  >
                    <TeamSocialIcon kind="instagram" />
                  </a>
                  <a href={member.links.x} aria-label={`${member.name} on X`}>
                    <TeamSocialIcon kind="x" />
                  </a>
                  <a
                    href={member.links.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <TeamSocialIcon kind="linkedin" />
                  </a>
                </nav>
              </div>
              <TeamCorners />
            </article>
          ))}
        </div>
        <img
          className="live-teamRuler"
          src="/assets/live/lkhewGNVqRf0UlvtVg98YPI6PA.png"
          alt=""
        />
      </section>
      <section className="live-culture" data-section="culture">
        <div className="live-aboutSectionTitle">
          <Kicker>Our Culture</Kicker>
          <h2>
            Culture That
            <br />
            Powers Innovation
          </h2>
        </div>
        <p>
          We foster a culture of collaboration, continuous learning, and
          building
          <br />
          meaningful digital experiences together.
        </p>
        <div className="live-cultureFrame" data-about-culture>
          <div className="live-cultureTop">
            <img
              data-about-culture-image
              src="/assets/live/tWEAuMI8nKc0wm0pRbAPKhFkvi4.png"
              alt="Aexo team collaborating"
            />
            <img
              data-about-culture-image
              src="/assets/live/NZLTg6gctUDOFNiCAEEsCI3zc.png"
              alt="Aexo team workshop"
            />
          </div>
          <div className="live-cultureBottom">
            <img
              data-about-culture-image
              src="/assets/live/mkfHUgFo94AwKDmyecI3oi8qL4.png"
              alt="Aexo team member"
            />
            <img
              data-about-culture-image
              src="/assets/live/iWAnKgUMx096YZYHEqFtKKneCU.png"
              alt="Aexo collaboration"
            />
            <img
              data-about-culture-image
              src="/assets/live/1ck7wq9MT9Jwwcjx5nKkTSc2F6k.png"
              alt="Aexo studio culture"
            />
          </div>
        </div>
        <div className="fix-introWaveRow live-cultureStrip" aria-hidden="true">
          <div className="fix-introWaveViewport">
            <div
              className="fix-introWaveTrack"
              data-about-culture-ruler
              data-motion-loop="about-culture-ruler"
            >
              <img
                className="fix-introWaveImage"
                src="/assets/live/sCElb0ycSJhVjPjM7nlsRGVqM.png"
                alt=""
              />
              <img
                className="fix-introWaveImage"
                src="/assets/live/sCElb0ycSJhVjPjM7nlsRGVqM.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="live-cultureGlow"
          data-about-culture-glow
          src="/assets/live/brand-cyan/J0CdaWzjawhE575G8LIv7rzAI.png"
          alt=""
        />
      </section>
      <ScaleCTA />
    </main>
  );
}

function TeamCorners() {
  return (
    <span className="live-teamCorners" aria-hidden="true">
      <img
        src="/assets/live/brand-cyan/zag0M0ZRgmKY1g5oJINOd7cU9M.png"
        alt=""
      />
      <img
        src="/assets/live/brand-cyan/mWpB1JPTzT646RdWNnGkg3s8RtY.png"
        alt=""
      />
      <img
        src="/assets/live/brand-cyan/Dzm0rpPvMdVPACdbFrIPWScMIfo.png"
        alt=""
      />
      <img src="/assets/live/brand-cyan/OAWptzoRWd2jPgU6OTKWx0YH0.png" alt="" />
    </span>
  );
}

function TeamSocialIcon({ kind }: { kind: "instagram" | "x" | "linkedin" }) {
  if (kind === "instagram")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4.5" />
        <circle cx="12" cy="12" r="3.75" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </svg>
    );
  if (kind === "x")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 3.75H9l10.5 16.5H15L4.5 3.75Z" />
        <path d="m10.7 13.45-6.2 6.8M19.5 3.75l-6.2 6.8" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx=".75" />
      <path d="M8.25 10.5v6M11.25 10.5v6m0-3.375a2.625 2.625 0 0 1 5.25 0V16.5" />
      <circle cx="8.25" cy="7.875" r="1.125" fill="currentColor" />
    </svg>
  );
}

function ThinkerPencil({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 130 100" aria-hidden="true">
      <path
        d="M27.78 69.344 29.625 48.621 76.294 5.421c4.299 0 8.846 1.583 12.967 4.134 3.593 2.225 6.862 5.187 9.36 8.479l-28.414 58.095-21.213 6.969-21.214 6.969Z"
        fill="rgb(var(--brand-rgb) / 0.5)"
        stroke="var(--brand)"
        strokeWidth="3.76"
      />
      <path
        d="m28.702 69.344 1.845-20.723 46.669-43.2c4.299 0 8.846 1.583 12.967 4.134 3.593 2.225 6.862 5.187 9.36 8.479M30.547 48.621c5.855-.45 12.486 1.198 18.699 4.26m-20.544 16.463-.922 20.723 21.214-6.969 21.213-6.969 32.927-48.831c-.688-3.158-2.296-6.341-4.513-9.264M49.246 52.881c5.179 2.553 10.069 6.088 13.978 10.212 3.723 3.926 6.556 8.385 7.905 13.036m-42.427-6.785s6.122 1.091 11.253 4.569 9.038 9.185 9.038 9.185m14.231-20.005 36.319-45.059M49.246 52.881 90.183 9.555"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ThinkerBolt({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 130 100" aria-hidden="true">
      <path
        d="m39.435 64.89 11.452-30.891h40.196l-7.901 16.99h19.656l-42.066 47.01L75.74 64.89Z"
        fill="rgb(var(--brand-rgb) / 0.5)"
        stroke="var(--brand)"
        strokeWidth="3.35"
      />
      <path
        d="m39.435 64.89 11.452-30.891h40.196l-7.901 16.99h19.656l-42.066 47.01L75.74 64.89Z"
        fill="none"
        stroke="#fff"
        strokeWidth="2.14"
      />
    </svg>
  );
}

function FounderSignature({ kind }: { kind: "alex" | "paul" }) {
  return kind === "alex" ? (
    <svg
      className="live-founderSignature"
      viewBox="0 0 241 40"
      aria-hidden="true"
    >
      <path
        transform="translate(20)"
        d="M3 31c11-6 16-28 21-26 4 2-4 25 1 25 5 0 8-16 12-15 4 2-2 17 2 17 5 0 9-13 13-13 4 1-2 13 3 13 7 0 16-10 27-12"
      />
    </svg>
  ) : (
    <svg
      className="live-founderSignature"
      viewBox="0 0 241 40"
      aria-hidden="true"
    >
      <path
        transform="translate(20)"
        d="M4 31C11 16 14 3 21 5c6 3-4 26 2 27 6 0 9-18 14-17 5 2-2 17 3 17 5 0 9-14 14-13 5 1-1 13 4 13 7 0 12-9 22-11"
      />
    </svg>
  );
}

export function ContactPageLive() {
  const cards = [
    {
      title: "Email Us",
      copy: "Reach out anytime and weâ€™ll respond within one business day",
      label: "contact@unicodeit.com",
      href: "mailto:contact@unicodeit.com",
      action: "email",
    },
    {
      title: "Chat With Us",
      copy: "Message our team on WhatsApp for quick support, project inquiries, or general questions.",
      label: "Chat on WhatsApp",
      href: whatsappLink,
      action: "whatsapp",
    },
  ] as const;
  return (
    <main>
      <ContactHeroSection />
      <ContactHeroTransition />
      <section className="live-contactCards" data-section="contact-cards">
        <div className="live-contactCardsRail">
          {cards.map(({ title, copy, label, href, action }, index) => (
            <article key={title} data-route-reveal>
              <img
                className="live-contactCardSurface"
                src="/assets/live/fef9iiIL7mjFJgl72caJ8dxLWM.png"
                alt=""
              />
              <ContactCardIcon index={index} />
              <div className="live-contactCardCopy">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              {action === "whatsapp" ? (
                <LiveButton
                  href={href}
                  dark
                  className="live-contactWhatsappAction"
                >
                  <img
                    className="fix-heroWhatsappIcon"
                    src="/assets/live/whatsapp.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </LiveButton>
              ) : (
                <ContactCardAction href={href}>{label}</ContactCardAction>
              )}
            </article>
          ))}
        </div>
        <div className="live-contactTrust">
          <p>Trusted by tech teams worldwide</p>
          <img
            className="live-contactTrustLeft"
            src="/assets/live/pH0mzsn2HXkP91FHE5USKatyWM.png"
            alt=""
          />
          <img
            className="live-contactTrustRight"
            src="/assets/live/Wy4CjWAaW8xVdcXD4CSIpfHnI8.png"
            alt=""
          />
          <div className="live-contactLogoViewport">
            <div
              className="live-contactLogoTrack"
              data-motion-loop="contact-logos"
            >
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
                <span key={`${logo.name}-${index}`}>
                  <img src={logo.src} alt={`${logo.name} logo`} />
                </span>
              ))}
            </div>
            <img
              className="live-contactLogoFadeLeft"
              src="/assets/live/WWJt5Jcw9cOllf8DqcwKpTfLkjw.png"
              alt=""
            />
            <img
              className="live-contactLogoFadeRight"
              src="/assets/live/89noeY0irov7wdrgYvecfSlLDI.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      <FAQ />
      {/* <ScaleCTA /> */}
    </main>
  );
}

function ContactCardIcon({ index }: { index: number }) {
  if (index === 0)
    return (
      <svg
        className="live-contactCardIcon"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M15 23.75H8.75M25 22.5V3.75H30M36.25 27.5V18.125C36.25 15.9701 35.394 13.9035 33.8702 12.3798C32.3465 10.856 30.2799 10 28.125 10H11.875C14.0299 10 16.0965 10.856 17.6202 12.3798C19.144 13.9035 20 15.9701 20 18.125V28.75H35C35.3315 28.75 35.6495 28.6183 35.8839 28.3839C36.1183 28.1495 36.25 27.8315 36.25 27.5ZM20 35V28.75H5C4.66848 28.75 4.35054 28.6183 4.11612 28.3839C3.8817 28.1495 3.75 27.8315 3.75 27.5V18.125C3.75 15.9701 4.60602 13.9035 6.12976 12.3798C7.65349 10.856 9.72012 10 11.875 10"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (index === 1)
    return (
      <svg
        className="live-contactCardIcon"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M25.6859 22.7095C25.8591 22.5943 26.0582 22.5241 26.2652 22.5053C26.4723 22.4864 26.6808 22.5196 26.8719 22.6016L34.2406 25.9032C34.489 26.0094 34.6962 26.1931 34.8314 26.4268C34.9666 26.6606 35.0225 26.9319 34.9906 27.2001C34.7479 29.0142 33.8545 30.6785 32.4767 31.8833C31.0988 33.0881 29.3303 33.7515 27.5 33.7501C21.8642 33.7501 16.4591 31.5113 12.474 27.5261C8.48884 23.541 6.25 18.1359 6.25 12.5001C6.2486 10.6698 6.912 8.90126 8.11682 7.52342C9.32163 6.14558 10.9859 5.25222 12.8 5.00946C13.0682 4.9776 13.3395 5.03345 13.5732 5.16865C13.807 5.30385 13.9907 5.51113 14.0969 5.75946L17.3984 13.1345C17.4796 13.3239 17.5126 13.5304 17.4946 13.7357C17.4766 13.941 17.4081 14.1386 17.2953 14.311L13.9563 18.2813C13.8378 18.4601 13.7678 18.6665 13.753 18.8804C13.7382 19.0943 13.7792 19.3083 13.8719 19.5016C15.1641 22.147 17.8984 24.8485 20.5516 26.1282C20.7459 26.2205 20.961 26.2606 21.1755 26.2444C21.3901 26.2282 21.5967 26.1564 21.775 26.036L25.6859 22.7095Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg
      className="live-contactCardIcon"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 21.25C22.7614 21.25 25 19.0114 25 16.25C25 13.4886 22.7614 11.25 20 11.25C17.2386 11.25 15 13.4886 15 16.25C15 19.0114 17.2386 21.25 20 21.25ZM32.5 16.25C32.5 27.5 20 36.25 20 36.25C20 36.25 7.5 27.5 7.5 16.25C7.5 12.9348 8.81696 9.75537 11.1612 7.41117C13.5054 5.06696 16.6848 3.75 20 3.75C23.3152 3.75 26.4946 5.06696 28.8388 7.41117C31.183 9.75537 32.5 12.9348 32.5 16.25Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PolicySection = { title: string; html: string; headingBreak?: boolean };

const privacySections: PolicySection[] = [
  {
    title: "Information We Collect",
    html: `<p>Unicode IT collects personal information and usage data only as needed to provide our software development and digital services.</p>\n<p>This may include name, email address, phone or WhatsApp number, company name, job role, contact/project inquiry information, project files and requirements, feedback and communications, browser/device information, IP address, referral data, usage data, and communication records.</p>`,
  },
  {
    title: "How Unicode IT Uses Your Information",
    headingBreak: true,
    html: `<p>Unicode IT uses the collected information for these purposes:</p>\n<ol>\n  <li>respond to inquiries and provide quotes/proposals</li>\n  <li>deliver custom software, web, mobile, UI/UX, AI and automation services</li>\n  <li>communicate about projects and support</li>\n  <li>improve the website, services, and workflows</li>\n  <li>monitor performance and security</li>\n  <li>prevent misuse or fraud</li>\n  <li>maintain business, legal, and accounting records</li>\n</ol>`,
  },
  {
    title: "Client Project Data & Confidentiality",
    html: `<p>Client-provided documents, credentials, APIs, designs, databases, specifications, and other project materials are treated as confidential.</p>\n<p>We use these materials only to deliver agreed services, support the project, and maintain the work requested by the client.</p>`,
  },
  {
    title: "AI Integration & Third-Party Services",
    html: `<p>Some projects may use AI platforms, cloud providers, analytics tools, APIs, hosting, payment, or communication services as part of delivery.</p>\n<p>Those providers may process data under their own privacy terms while supporting the agreed project scope.</p>`,
  },
  {
    title: "How We Share Information",
    html: `<p>Unicode IT does not sell personal information.</p>\n<p>We may share information only when needed for limited business and service purposes:</p>\n<ul>\n  <li>hosting and cloud infrastructure</li>\n  <li>email, analytics, and communication tools</li>\n  <li>APIs and third-party services required for project delivery</li>\n  <li>contracted development or support providers</li>\n  <li>legal, accounting, or regulatory obligations</li>\n</ul>`,
  },
  {
    title: "Data Retention",
    html: `<p>We retain data only as long as reasonably necessary for services, contract fulfillment, recordkeeping, dispute resolution, and legal requirements.</p>`,
  },
  {
    title: "Data Security",
    html: `<p>Unicode IT applies reasonable technical and organizational safeguards to protect personal information and project data.</p>\n<ul>\n  <li>access controls and authentication</li>\n  <li>secure hosting and protected development environments</li>\n  <li>backups and operational safeguards</li>\n  <li>limited internal access based on project needs</li>\n</ul>\n<p>No digital system can be guaranteed absolutely secure, but we work to reduce risk through responsible practices.</p>`,
  },
  {
    title: "Cookies & Website Analytics",
    html: `<p>We use cookies and website analytics to help operate, understand, and improve our website.</p>\n<ul>\n  <li>website functionality</li>\n  <li>traffic and usage analysis</li>\n  <li>performance and user-experience improvements</li>\n  <li>security monitoring</li>\n</ul>\n<p>Users can control cookies through browser settings.</p>`,
  },
  {
    title: "Your Privacy Rights",
    html: `<p>Depending on applicable law, you may have the right to:</p>\n<ul>\n  <li>access</li>\n  <li>correction</li>\n  <li>deletion</li>\n  <li>restriction/objection</li>\n  <li>data copy</li>\n  <li>consent withdrawal</li>\n</ul>\n<p>These rights may depend on applicable law, and identity verification may be required before we process a request.</p>`,
  },
  {
    title: "Third-Party Links",
    html: `<p>This page may contain links to external websites. We do not control those sites' privacy practices and recommend reviewing each site&apos;s policy.</p>`,
  },
  {
    title: "Changes to This Privacy Policy",
    html: `<p>We may update this policy to reflect legal, operational, or service-related changes. Revised versions will be posted on this page.</p>`,
  },
  {
    title: "Contact Us",
    html: `<address class="live-policyContactBlock"><strong>Unicode IT</strong><span>Website: unicodeit.com</span><span>Email: contact@unicodeit.com</span></address>`,
  },
];
const termsSections: PolicySection[] = [
  {
    title: "Services",
    html: `<p>Unicode IT provides software development and digital services for businesses, startups, and organizations.</p>
<p>Our services may include:</p>
<ul>
  <li>Custom Software Development</li>
  <li>Web Development</li>
  <li>Mobile App Development</li>
  <li>UI/UX Design</li>
  <li>AI Integration &amp; Automation</li>
  <li>SaaS Development</li>
  <li>Framer &amp; Webflow Development</li>
  <li>API/integration and related digital services</li>
</ul>
<p>The exact scope, deliverables, timeline, and pricing for each project are defined in the applicable proposal, quotation, agreement, or statement of work.</p>`,
  },
  {
    title: "Client Responsibilities",
    html: `<p>To help us deliver work accurately and efficiently, clients are responsible for:</p>
<ul>
  <li>providing accurate project requirements</li>
  <li>supplying required content, assets, and access</li>
  <li>responding to approvals and feedback on time</li>
  <li>maintaining confidentiality of credentials</li>
  <li>ensuring provided materials do not violate third-party rights</li>
</ul>`,
  },
  {
    title: "Project Scope & Changes",
    html: `<p>Work outside the agreed project scope may require additional cost, timeline adjustments, or a revised quotation.</p>
<p>Major requirement changes must be reviewed and mutually agreed before implementation.</p>`,
  },
  {
    title: "Pricing, Payments & Invoices",
    html: `<p>Prices are based on the agreed project scope, deliverables, and timeline. Payment schedules may vary by project and may include deposits or milestone payments.</p>
<p>Overdue payments may delay ongoing work, delivery, or handover. Third-party costs such as hosting, domains, APIs, licenses, app-store fees, or paid services may be billed separately unless explicitly included in the agreement.</p>`,
  },
  {
    title: "Project Timeline & Delivery",
    html: `<p>Project timelines are estimates based on the agreed scope, available information, and client cooperation.</p>
<p>Delays caused by late feedback, missing assets, scope changes, third-party services, or access issues may affect delivery dates.</p>`,
  },
  {
    title: "Intellectual Property",
    html: `<p>Client-provided materials remain the client's property.</p>
<p>Ownership of final project deliverables is governed by the applicable project agreement and payment terms. Unicode IT may retain ownership of pre-existing tools, reusable components, libraries, frameworks, or internal development assets unless otherwise agreed.</p>
<p>Third-party software, assets, services, and libraries remain subject to their own licenses and terms.</p>`,
  },
  {
    title: "Third-Party Services",
    html: `<p>Projects may integrate hosting providers, payment gateways, APIs, AI platforms, cloud services, analytics, app stores, or other third-party tools.</p>
<p>Unicode IT is not responsible for outages, policy changes, pricing changes, or failures controlled by those third parties.</p>`,
  },
  {
    title: "AI-Enabled Features",
    html: `<p>Some projects may include AI-generated or AI-assisted features. These outputs may require review and may not always be completely accurate.</p>
<p>Clients remain responsible for validating AI-generated outputs before relying on them for critical decisions.</p>`,
  },
  {
    title: "Confidentiality",
    html: `<p>Unicode IT will reasonably protect confidential project and business information shared for service delivery.</p>
<p>Confidentiality may also be governed by a separate NDA or project agreement.</p>`,
  },
  {
    title: "Testing, Acceptance & Client Review",
    html: `<p>Clients are responsible for reviewing delivered work and reporting material issues within the review or acceptance period defined in the applicable project agreement.</p>`,
  },
  {
    title: "Support & Maintenance",
    html: `<p>Post-launch support, maintenance, updates, monitoring, or future development are provided only when included in the project agreement or purchased separately.</p>`,
  },
  {
    title: "Website Use",
    html: `<p>Users must not misuse the Unicode IT website or interfere with its operation. Users must not:</p>
<ul>
  <li>use the website unlawfully</li>
  <li>attempt unauthorized access</li>
  <li>interfere with website security or operation</li>
  <li>upload or distribute malicious code</li>
  <li>misuse Unicode IT intellectual property</li>
</ul>`,
  },
  {
    title: "Limitation of Liability",
    html: `<p>To the extent permitted by applicable law, Unicode IT will not be responsible for indirect losses, third-party failures, client misuse, data loss caused by external services, or interruptions outside reasonable control.</p>`,
  },
  {
    title: "No Absolute Warranty",
    html: `<p>Unicode IT aims to deliver services professionally, but does not guarantee uninterrupted operation, specific business results, search rankings, revenue, or complete freedom from software defects.</p>`,
  },
  {
    title: "Termination",
    html: `<p>Either party may terminate services according to the applicable project agreement. Outstanding fees for completed or agreed work may remain payable.</p>`,
  },
  {
    title: "Changes to These Terms",
    html: `<p>Unicode IT may update these Terms when services, business practices, or legal requirements change. The latest version will be published on this page with an updated date.</p>`,
  },
  {
    title: "Governing Terms",
    html: `<p>Project-specific proposals, contracts, NDAs, or statements of work take precedence where they contain terms that differ from these general website Terms.</p>`,
  },
  {
    title: "Contact Us",
    html: `<address class="live-policyContactBlock"><strong>Unicode IT</strong><span>Website: unicodeit.com</span><span>Email: contact@unicodeit.com</span></address>`,
  },
];

export function PolicyPageLive({ kind }: { kind: "privacy" | "terms" }) {
  const privacy = kind === "privacy";
  const sections = privacy ? privacySections : termsSections;
  return (
    <main>
      <div
        className={`live-policyMain ${privacy ? "live-policyPrivacy" : "live-policyTerms"}`}
        data-section="policy-main"
      >
        <section className="live-policyHero">
          <PolicyUpdated />
          <h1>Our {privacy ? "Privacy Policy" : "Terms & conditions"}</h1>
        </section>
        <article className="live-policyBody">
          <p>
            {privacy
              ? "Unicode IT is committed to protecting your privacy and handling personal information responsibly and transparently. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, contact us, or use our software development and digital services."
              : "These Terms & Conditions govern your use of the Unicode IT website and your engagement with Unicode IT services. By using the website or purchasing, requesting, or engaging our services, you agree to these Terms."}
          </p>
          {sections.map(({ title, html, headingBreak }, index) => (
            <section key={title}>
              <span>0{index + 1}</span>
              <div>
                <h2>
                  {headingBreak && <br />}
                  {title}
                </h2>
                <div
                  className="live-policyRich"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </section>
          ))}
        </article>
      </div>
      <ScaleCTA />
    </main>
  );
}

function PolicyUpdated() {
  return (
    <div className="live-policyUpdate">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 7.2A8 8 0 1 1 4 12" />
        <path d="M4 4v4h4M12 7v5l3 2" />
      </svg>
      <span>Last Updated on</span>
      <time dateTime="2026-05-07">May 7, 2026</time>
    </div>
  );
}

export function NotFoundLive() {
  return (
    <main id="not-found" className="live-notFound">
      <span>404</span>
      <h1>Oops page not found</h1>
      <p>
        <span>
          We regret to inform you that the Pavyon you&apos;re searching for
          seems to be
        </span>
        <span>
          beyond our grasp. We apologize for any inconvenience this may cause.
        </span>
      </p>
      <LiveButton href="/" centered>
        Back to Home Page
      </LiveButton>
      <ScaleCTA />
    </main>
  );
}
