"use client";

import { useState } from "react";

const verticals = [
  {
    number: "01",
    title: "Innovation Hub on Grassroot Technologies",
    icon: "🏘️",
    tags: ["Grassroot", "Rural Tech", "Traditional Knowledge"],
    short:
      "Scientific validation and modernization of traditional and rural technologies.",
    overview:
      "The Innovation Hub on Grassroot Technologies focuses on bridging the gap between age-old traditional knowledge and modern scientific validation. The Northeast's villages hold centuries of practical innovation — in construction, agriculture, and resource management. This vertical formalizes, tests, and scales those solutions for wider regional and national impact.",
    focusLabel: "Priority Areas",
    focusAreas: [
      {
        title: "Flood-Resilient Construction Systems",
        description:
          "Developing and validating construction methods suited to the flood-prone geography of the Northeast.",
      },
      {
        title: "Sustainable Rural Housing",
        description:
          "Low-cost, climate-appropriate housing solutions using local and natural materials.",
      },
      {
        title: "Smart Irrigation Systems",
        description:
          "Modernizing traditional water management practices with sensor-based and low-tech smart solutions.",
      },
      {
        title: "Village-Level Processing Technologies",
        description:
          "Food processing, agro-product refinement, and post-harvest technologies tailored for rural scale.",
      },
    ],
    whoCanEngage:
      "Researchers, rural innovators, agricultural institutions, state governments, and grassroots entrepreneurs.",
    ctaLabel: "Express Interest",
    ctaHref: "/contact",
  },
  {
    number: "02",
    title: "Technology Hub for Semiconductor & Artificial Intelligence",
    icon: "💡",
    tags: ["Semiconductor", "AI", "Deep Tech"],
    short:
      "Emerging technologies aligned with national innovation priorities.",
    overview:
      "Aligned with India's national semiconductor mission and the growing demand for AI talent, this vertical positions the Northeast as a contributor — not just a consumer — of cutting-edge technology. Operating from IIT Guwahati's research ecosystem, this hub creates pathways for students, researchers, and startups to engage with deep technology.",
    focusLabel: "Key Focus Areas",
    focusAreas: [
      {
        title: "Semiconductor Design & Simulation",
        description:
          "Training and research in chip design, VLSI, and semiconductor simulation tools.",
      },
      {
        title: "AI-Enabled Automation",
        description:
          "Developing AI-driven solutions for regional industries including agriculture, healthcare, and disaster management.",
      },
      {
        title: "Machine Learning Applications",
        description:
          "Applied ML research addressing Northeast-specific challenges in data-sparse environments.",
      },
      {
        title: "Embedded Systems Innovation",
        description:
          "IoT and embedded systems development for rural and semi-urban deployment.",
      },
    ],
    whoCanEngage:
      "Engineering students, deep-tech startups, research scholars, and industry partners.",
    ctaLabel: "Express Interest",
    ctaHref: "/contact",
  },
  {
    number: "03",
    title: "Centre of Excellence for Bamboo-Based Technology",
    icon: "🎋",
    tags: ["Bamboo", "Sustainability", "Green Industry"],
    short:
      "Leveraging the Northeast's ecological advantage in bamboo resources.",
    overview:
      "The Northeast accounts for over 65% of India's bamboo resources. Yet the economic value captured locally remains a fraction of the material's potential. This Centre of Excellence transforms bamboo from a raw commodity into an engineered industrial resource, creating sustainable livelihoods and green industry across the region.",
    focusLabel: "Focus Areas",
    focusAreas: [
      {
        title: "Engineered Bamboo Materials",
        description:
          "Research into laminated bamboo, composite panels, and structural bamboo products for construction and manufacturing.",
      },
      {
        title: "Sustainable Construction Components",
        description:
          "Bamboo-based alternatives to concrete and steel for low-cost, high-resilience structures.",
      },
      {
        title: "Bamboo-Based Industrial Products",
        description:
          "Furniture, textiles, packaging, and consumer goods developed from processed bamboo.",
      },
      {
        title: "Product Standardization & Certification",
        description:
          "Establishing quality benchmarks and certification protocols for bamboo products entering national and global markets.",
      },
    ],
    whoCanEngage:
      "Forest-based entrepreneurs, MSMEs, construction firms, designers, and state forest departments.",
    ctaLabel: "Express Interest",
    ctaHref: "/contact",
  },
  {
    number: "04",
    title:
      "Skill Development & Innovation Centre for Biodegradable and Eco-Friendly Plastics",
    icon: "♻️",
    tags: ["Bioplastics", "Circular Economy", "Green Skills"],
    short:
      "Promoting circular economy and environmentally sustainable materials.",
    overview:
      "As the world moves away from petroleum-based plastics, the Northeast — with its rich biodiversity and agricultural waste streams — is ideally positioned to lead in biopolymer innovation. This vertical builds both research capacity and skilled workforce in sustainable materials science.",
    focusLabel: "Focus Areas",
    focusAreas: [
      {
        title: "Biopolymer Research",
        description:
          "Developing and testing bio-based polymers derived from regional agricultural and forest feedstocks.",
      },
      {
        title: "Sustainable Packaging Solutions",
        description:
          "Creating commercially viable, eco-friendly alternatives to single-use plastic packaging.",
      },
      {
        title: "Waste-to-Resource Technologies",
        description:
          "Converting agricultural and organic waste into raw material for sustainable production.",
      },
      {
        title: "Green Manufacturing Skills",
        description:
          "Vocational and technical training programs in sustainable materials production for regional youth.",
      },
    ],
    whoCanEngage:
      "Chemistry researchers, packaging industry, agri-entrepreneurs, skill seekers, and green startups.",
    ctaLabel: "Express Interest",
    ctaHref: "/contact",
  },
];

function VerticalCard({ vertical }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="vertical-card">
      <button
        className="vertical-card__header"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="vertical-card__number">{vertical.number}</span>
        <span className="vertical-card__icon" aria-hidden="true">
          {vertical.icon}
        </span>
        <div className="vertical-card__header-text">
          <h2 className="vertical-card__title">{vertical.title}</h2>
          <p className="vertical-card__short">{vertical.short}</p>
          <ul className="vertical-card__tags" aria-label="Tags">
            {vertical.tags.map((tag) => (
              <li key={tag} className="vertical-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <span className="vertical-card__toggle" aria-hidden="true">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div className="vertical-card__body">
          <section className="vertical-card__section">
            <h3 className="vertical-card__section-title">Overview</h3>
            <p className="vertical-card__overview">{vertical.overview}</p>
          </section>

          <section className="vertical-card__section">
            <h3 className="vertical-card__section-title">
              {vertical.focusLabel}
            </h3>
            <ul className="vertical-card__focus-list">
              {vertical.focusAreas.map((area) => (
                <li key={area.title} className="vertical-card__focus-item">
                  <strong className="vertical-card__focus-title">
                    {area.title}
                  </strong>
                  <p className="vertical-card__focus-desc">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="vertical-card__section">
            <h3 className="vertical-card__section-title">Who Can Engage</h3>
            <p className="vertical-card__engage">{vertical.whoCanEngage}</p>
          </section>

          <div className="vertical-card__cta">
            <a href={vertical.ctaHref} className="vertical-card__cta-link">
              {vertical.ctaLabel}
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

export default function VerticalsPage() {
  return (
    <main className="verticals-page">
      {/* Breadcrumb */}
      <nav className="verticals-breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li aria-current="page">Verticals</li>
        </ol>
      </nav>

      {/* Page Header */}
      <header className="verticals-header">
        <h1 className="verticals-title">Our Verticals</h1>
        <p className="verticals-intro">
          NESt operates through four thematic innovation verticals, each
          designed to address a strategic opportunity unique to the North Eastern
          Region. Click any vertical to explore.
        </p>
      </header>

      {/* Vertical Cards */}
      <section className="verticals-list" aria-label="Innovation Verticals">
        {verticals.map((vertical) => (
          <VerticalCard key={vertical.number} vertical={vertical} />
        ))}
      </section>
    </main>
  );
}
