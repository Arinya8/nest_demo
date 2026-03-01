"use client"
import React from 'react';
import Link from 'next/link';


export default function CareersPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">Careers</li>
        </ol>
      </nav>

      {/* Page Title */}
      <h1>Careers at NESt</h1>

      {/* Intro */}
      <p>
        Join the team that is building the Northeast&apos;s 
        innovation future. NESt offers opportunities for 
        researchers, professionals, and students who want 
        to contribute to meaningful, region-wide impact.
      </p>

      {/* Section 1: Current Openings */}
      <section>
        <h2>Current Opportunities</h2>

        {/* Disclaimer Banner */}
        <div>
          <p>
            All selections at NESt are conducted as per 
            Government of India norms and institutional guidelines 
            of IIT Guwahati. Opportunities will be published here 
            as and when they arise. Check back regularly.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div>
          {/* Card 1 */}
          <div>
            <h3>Research Fellows</h3>
            <p>
              Opportunities for early and mid-career 
              researchers to work on applied projects 
              across NESt&apos;s four verticals.
            </p>
            <p>Eligibility: As per program guidelines &mdash; to be published.</p>
            <p>[Openings Coming Soon]</p>
          </div>

          {/* Card 2 */}
          <div>
            <h3>Program Coordinators</h3>
            <p>
              Administrative and operational roles 
              supporting NESt&apos;s programs, partnerships, 
              and outreach activities.
            </p>
            <p>Eligibility: As per program guidelines  to be published.</p>
            <p>[Openings Coming Soon]</p>
          </div>

          {/* Card 3 */}
          <div>
            <h3>Technical Consultants</h3>
            <p>
              Domain experts and industry professionals 
              engaged on a consultancy basis to 
              support vertical-specific programs.
            </p>
            <p>Eligibility: As per program guidelines, to be published.</p>
            <p>[Openings Coming Soon]</p>
          </div>

          {/* Card 4 */}
          <div>
            <h3>Internships & Fellowships</h3>
            <p>
              Structured internship and fellowship 
              programs for students from partner 
              universities and beyond.
            </p>
            <p>
              Eligibility: Open to students from recognized 
              institutions across the Northeast.
            </p>
            <p>[Applications Opening Soon]</p>
            <Link href="/contact">[Express Interest]</Link>
          </div>
        </div>
      </section>

      {/* Section 2: Why Work With NESt */}
      <section>
        <h2>Why Join NESt?</h2>

        <div>
          {/* Value Card 1 */}
          <div>
            <h3>Purposeful Work</h3>
            <p>
              Contribute to a mission that directly 
              impacts millions across Northeast India.
            </p>
          </div>

          {/* Value Card 2 */}
          <div>
            <h3>World-Class Environment</h3>
            <p>
              Work within the IIT Guwahati ecosystem:  
              one of India&apos;s premier research universities.
            </p>
          </div>

          {/* Value Card 3 */}
          <div>
            <h3>Regional Impact</h3>
            <p>
              Your work will span eight states and 
              multiple sectors &mdash; from bamboo tech 
              to semiconductor research.
            </p>
          </div>

          {/* Value Card 4 */}
          <div>
            <h3>Government-Backed Stability</h3>
            <p>
              NESt positions are structured within 
              Government of India frameworks, offering 
              credibility and security.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Stay Notified */}
      <section>
        <h2>Don&apos;t Miss an Opening</h2>
        <p>
          Leave your details and we will notify you 
          when relevant positions are announced.
        </p>

        {/* Static Form (mailto) */}
        <form action="mailto:info@nestcluster.gov.in" method="post" encType="text/plain">
          <div>
            <label>
              Full Name *
              <input type="text" name="Full Name" required />
            </label>
          </div>

          <div>
            <label>
              Email Address *
              <input type="email" name="Email Address" required />
            </label>
          </div>

          <div>
            <label>
              State *
              <input type="text" name="State" required />
            </label>
          </div>

          <div>
            <label>
              Area of Interest:
              <select name="Area of Interest">
                <option value="Research">Research</option>
                <option value="Program Management">Program Management</option>
                <option value="Technical">Technical</option>
                <option value="Internship">Internship</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Brief Note (optional)
              <textarea name="Brief Note"></textarea>
            </label>
          </div>

          <button type="submit">[Notify Me]</button>
        </form>
      </section>
    </div>
  );
}
