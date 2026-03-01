
import Link from 'next/link';
import React from 'react';

const UniversitiesPage = () => {
  return (
    <div className="universities-page">
      {/* Page Header */}
      <header className="page-header">
        <nav className="breadcrumb">
              <Link href="/">Home</Link> &gt Universities
        </nav>
        <h1>Partnering Universities & Institutions</h1>
      </header>

      {/* Intro Section */}
      <section className="intro-section">
        <p>
          NESTs strength lies in its academic network. 
          We partner with universities, technical institutions, 
          and research bodies across all eight North Eastern states 
          to build a region-wide innovation ecosystem.
        </p>
      </section>

      
      <section className="why-partner-section">
        <h2>Why Partner with NESt?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <h3>Academic Tagging</h3>
            <p>
              Partner institutions receive formal NESt 
              co-branding and academic tagging, 
              enhancing institutional recognition.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Research Collaboration</h3>
            <p>
              Access to NEST thematic labs, research 
              programs, and funding support for 
              collaborative projects.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Student Opportunities</h3>
            <p>
              Institutional dashboard access to connect 
              students with internships, fellowships, 
              and employment listings.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Grant & Innovation Support</h3>
            <p>
              Partner institutions may nominate startups 
              and innovators for NESt incubation 
              and grant programs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Current Partners */}
      <section className="current-partners-section">
        <h2>Our Academic Partners</h2>
        
        {/* Anchor Partner */}
        <div className="anchor-partner">
          <div className="partner-card primary">
            <span className="tag">Primary Partner</span>
            <h3>Indian Institute of Technology Guwahati</h3>
            <p className="state">Assam</p>
            <p className="role">Technical & Implementation Partner — Central Hub</p>
          </div>
        </div>

        {/* State University Partners */}
        <div className="state-partners">
          <h3>State University Partners</h3>
          <div className="partners-grid">
            <div className="partner-card">
              <h4>Gauhati University</h4>
              <p className="state">Assam</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>North-Eastern Hill University (NEHU)</h4>
              <p className="state">Meghalaya</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>Rajiv Gandhi University</h4>
              <p className="state">Arunachal Pradesh</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>Nagaland University</h4>
              <p className="state">Nagaland</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>Manipur University</h4>
              <p className="state">Manipur</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>Mizoram University</h4>
              <p className="state">Mizoram</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>Tripura University</h4>
              <p className="state">Tripura</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
            <div className="partner-card">
              <h4>Sikkim University</h4>
              <p className="state">Sikkim</p>
              <p className="role">NESt Spoke Partner</p>
              <span className="placeholder-note">(placeholder)</span>
            </div>
          </div>
        </div>

        {/* Developer Note */}
        <p className="dev-note">
          Note for dev: All state universities are representative 
          placeholders. Client to confirm final list.
        </p>

        {/* Additional Institution Categories */}
        <div className="other-institutions">
          <h3>Other Partner Institutions</h3>
          <div className="institution-categories">
            <div className="category">
              <h4>Technical Institutions</h4>
              <p>(NIT Silchar, etc.)</p>
            </div>
            <div className="category">
              <h4>Agricultural Institutions</h4>
              <p>(Placeholder for partner institutions)</p>
            </div>
            <div className="category">
              <h4>Recognized Research Bodies</h4>
              <p>(Placeholder for research organizations)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partnership Framework */}
      <section className="partnership-framework-section">
        <h2>How the Partnership Works</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Apply</h3>
            <p>
              Institution submits expression of interest 
              through the NESt partnership application form.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Review</h3>
            <p>
              Applications reviewed by NEST institutional 
              committee within 30 working days.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Onboard</h3>
            <p>
              Approved partners receive formal agreement, 
              co-branding package, and dashboard access.
            </p>
          </div>
        </div>
        <div className="cta-wrapper">
          <Link href="/contact" className="cta-button">Apply for Partnership</Link>
          <p className="cta-note">
            Form fields: Institution Name, State, 
            Contact Person, Email, Phone, 
            Type of Institution, Message
          </p>
        </div>
      </section>

      {/* Section 4: Expression of Interest Form */}
      <section className="eoi-section">
        <h2>Interested in Partnering?</h2>
        <p>
          Applications are now open. 
          Fill in the form below or write to us directly.
        </p>
        
        <form action="mailto:info@nestcluster.gov.in" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="institution-name">
              Institution Name <span className="required">*</span>
            </label>
            <input 
              type="text" 
              id="institution-name" 
              name="institution_name" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">
              State <span className="required">*</span>
            </label>
            <select id="state" name="state" required>
              <option value="">Select State</option>
              <option value="Assam">Assam</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Manipur">Manipur</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Tripura">Tripura</option>
              <option value="Sikkim">Sikkim</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="institution-type">
              Type <span className="required">*</span>
            </label>
            <select id="institution-type" name="institution_type" required>
              <option value="">Select Type</option>
              <option value="University">University</option>
              <option value="Technical">Technical</option>
              <option value="Agricultural">Agricultural</option>
              <option value="Research">Research</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-person">
              Contact Person Name <span className="required">*</span>
            </label>
            <input 
              type="text" 
              id="contact-person" 
              name="contact_person" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="designation">
              Designation <span className="required">*</span>
            </label>
            <input 
              type="text" 
              id="designation" 
              name="designation" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Brief Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Expression of Interest
          </button>
        </form>
        
        <p className="email-note">
          Email placeholder: info@nestcluster.gov.in
        </p>
      </section>
    </div>
  );
};

export default UniversitiesPage;