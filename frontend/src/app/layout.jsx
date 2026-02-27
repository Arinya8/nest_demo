import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEST Cluster at IITG",
  description: "Science and Technological Innovation Hub at IITG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>NESt - North Eastern Science and Technology Cluster</title>
        <meta name="description" content="Government-backed innovation initiative for North Eastern India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ANNOUNCEMENT BAR */}
        <div className="announcement-bar">
          <div className="announcement-content">
            <span>🚀 NESt is now officially launched! North Eastern India's Innovation Journey Begins.</span>
            <div className="announcement-ctas">
              <Link href="/about" className="cta-button">Learn More</Link>
              <button disabled className="cta-button disabled">Register as Startup</button>
              <Link href="/employment-exchange" className="cta-button">Find Opportunities</Link>
              <Link href="/universities" className="cta-button">For Institutions</Link>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <header className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <img src="/nest-logo.png" alt="NESt Logo" width="150" height="60" />
            </div>
            
            <nav className="main-nav">
              <ul className="nav-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/verticals">Verticals</Link></li>
                <li><Link href="/infrastructure">Infrastructure</Link></li>
                <li><Link href="/data-insights">Data & Insights</Link></li>
                <li><Link href="/employment-exchange">Employment Exchange</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/media-centre">Media Centre</Link></li>
                <li><Link href="/universities">Universities</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li className="dropdown-trigger">
                  <button className="login-dropdown" disabled>
                    Login ▾
                  </button>
                  <div className="dropdown-menu">
                    <Link href="#" className="disabled-link">Startup Login</Link>
                    <Link href="#" className="disabled-link">Student Login</Link>
                    <Link href="#" className="disabled-link">Citizen Portal</Link>
                    <Link href="#" className="disabled-link">University Dashboard</Link>
                    <Link href="#" className="disabled-link">Mentor Login</Link>
                    <Link href="#" className="disabled-link">Admin Access</Link>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="language-switcher">
              <span>EN</span>
              <span className="coming-soon">| অস</span>
              <span className="coming-soon">| বাং</span>
              <span className="coming-soon">| बो</span>
              <span className="coming-soon">| মৈ</span>
              <span className="coming-soon">| मि</span>
              <span className="coming-soon">| नगा</span>
              <span className="coming-soon">| খা</span>
              <span className="coming-soon">| नेपा</span>
              <span className="coming-soon">| हि</span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="main-content">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>About NESt</h4>
              <p>The North Eastern Science and Technology Cluster (NESt) is a Government-backed initiative under MDoNER, coordinated by NEC and implemented by IIT Guwahati. Established 2026.</p>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/verticals">Verticals</Link></li>
                <li><Link href="/infrastructure">Infrastructure</Link></li>
                <li><Link href="/data-insights">Data & Insights</Link></li>
                <li><Link href="/employment-exchange">Employment Exchange</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/media-centre">Media Centre</Link></li>
                <li><Link href="/universities">Universities</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                   
              </ul>
              </div>
              </div> 
              </footer>
      </body>
    </html>
  );
}
