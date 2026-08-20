import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

const IMAGES = {
  logo: "/logo.png",
  summer: "/summer.jpg",
  fallRunning: "/fallRunning.jpg",
  summerMini: "/summerMini.jpg",
  youthRunning: "/youthRunning.jpg",
};

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">OLD BRIDGE <span>TC</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#coaches">Coaches</a></li>
      </ul>
      <a href="https://forms.gle/7Ygk6wQPbuVBipbX7" target="_blank" rel="noopener noreferrer" className="nav-cta">Register Now</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-lanes"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">Old Bridge Track Club</span>
          <h1 className="hero-headline">Run.<br/>Learn.<br/><em>Have Fun.</em></h1>
          <p className="hero-sub">Youth track and field programs in Old Bridge, NJ — coached by OBHS Track &amp; Field Coaches.</p>
        </div>
        <div className="hero-visual">
          <div className="logo-badge">
            <img src={IMAGES.logo} alt="Old Bridge Track Club" className="logo-img" />
            <div className="logo-est">Est. 2025 · Old Bridge, NJ</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarIcon({ name }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === 'speed') {
    return (
      <svg {...common}><polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2" /></svg>
    );
  }
  if (name === 'team') {
    return (
      <svg {...common}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M22.5 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16.5 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (name === 'fun') {
    return (
      <svg {...common}><polygon points="12 2 15.09 8.63 22 9.24 16.5 13.97 18.18 21 12 17.27 5.82 21 7.5 13.97 2 9.24 8.91 8.63 12 2" /></svg>
    );
  }
  if (name === 'safety') {
    return (
      <svg {...common}><path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" /></svg>
    );
  }
  return null;
}

function About() {
  const pillars = [
    { icon: 'speed', title: 'Speed & Form', desc: 'Every camp starts with mechanics — proper arm drive, posture, and acceleration. We build speed the right way from day one.' },
    { icon: 'team', title: 'Teamwork & Relays', desc: 'From baton handoffs to water relays, kids learn that track is a team sport too — and they love it!' },
    { icon: 'fun', title: 'Fun First', desc: "Relays, sharks and minnows, obstacle courses, and more! That's what keeps kids coming back." },
    { icon: 'safety', title: 'Safety & Small Groups', desc: 'Age-grouped sessions (1st–3rd, 4th–6th, 7th–8th) with a 5-coach staff mean every kid gets real attention.' },
  ];
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Built by Coaches.<br/>Designed for Kids.</h2>
            <p className="section-sub">The Old Bridge Track Club was created by OBHS Track &amp; Field coaches who wanted to give young athletes a structured, fun, and safe place to discover the sport. Every session is built around fundamentals, confidence, and competition — in that order.</p>
          </div>
          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="pillar">
                <div className="pillar-icon"><PillarIcon name={p.icon} /></div>
                <div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CAMPS = [
  {
    id: 'summer-2025',
    category: 'past',
    tag: 'Summer 2026',
    name: 'Youth Summer Track Camp',
    info: 'Rising 1st–8th Graders · Lombardi Field',
    image: IMAGES.summer,
    details: [
      { label: 'Dates', value: '8 sessions across June–July' },
      { label: 'Time', value: '6:00 PM – 7:00 PM' },
      { label: 'Price', value: '$150/child · $50 sibling discount' },
      { label: 'Focus', value: 'Fun, Fundamentals, Speed, Relays' },
    ],
  },
  {
    id: 'summer-mini-series',
    category: 'past',
    tag: 'Summer Mini Series',
    name: 'Summer Track Camp',
    info: 'Rising 1st–8th Graders · Lombardi Field',
    image: IMAGES.summerMini,
    details: [
      { label: 'Dates', value: '6 Thursdays, 7/10 – 8/14' },
      { label: 'Time', value: '5:00 PM – 6:30 PM' },
      { label: 'Price', value: '$100/child (includes t-shirt)' },
      { label: 'Focus', value: 'Fundamentals, Speed & Agility, Relays' },
    ],
  },
  {
    id: 'fall-running-camp',
    category: 'past',
    tag: 'Fall 2025',
    name: 'Fall Running Camp',
    info: 'Grades 1–5 · Lombardi Field',
    image: IMAGES.fallRunning,
    details: [
      { label: 'Dates', value: 'Every Saturday in October (4 sessions)' },
      { label: 'Time', value: '8:00 AM – 8:45 AM' },
      { label: 'Price', value: '$60/child' },
      { label: 'Focus', value: 'Running Form, Teamwork, Speed Development' },
    ],
  },
  {
    id: 'youth-running-camp',
    category: 'future',
    tag: 'Fall Camp — Enrolling Now',
    name: 'Youth Running Camp',
    info: 'Grades 4–8 · Lombardi Field',
    image: IMAGES.youthRunning,
    details: [
      { label: 'Dates', value: '5 sessions: 9/26, 10/3, 10/10, 10/17, 10/24' },
      { label: 'Time', value: '8:00 AM – 8:45 AM' },
      { label: 'Price', value: '$85/child' },
      { label: 'Focus', value: 'Running Form & Mechanics, Teamwork, Coordination, Speed Development' },
    ],
    registerLink: 'https://forms.gle/7Ygk6wQPbuVBipbX7',
  },
];

function CampCard({ camp, isOpen, onToggle }) {
  return (
    <div className={`camp-card${isOpen ? ' open' : ''}`}>
      <button className="camp-card-header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="camp-card-header-text">
          <div className="camp-tag" style={camp.category === 'future' ? {background:'var(--purple)', color:'#fff'} : {}}>{camp.tag}</div>
          <div className="camp-name">{camp.name}</div>
          <div className="camp-info">{camp.info}</div>
        </div>
        <div className="camp-chevron" aria-hidden="true">▾</div>
      </button>
      {isOpen && (
        <div className="camp-card-body">
          <img src={camp.image} alt={`${camp.name} flyer`} className="camp-flyer-img" />
          <div className="camp-details">
            {camp.details.map((d, i) => (
              <div className="camp-detail" key={i}><strong>{d.label}:</strong> {d.value}</div>
            ))}
          </div>
          {camp.registerLink && (
            <a href={camp.registerLink} target="_blank" rel="noopener noreferrer" className="btn-primary camp-register-btn">
              Register Now
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Programs() {
  const [openIds, setOpenIds] = useState(new Set(['youth-running-camp']));

  const toggle = (id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const pastCamps = CAMPS.filter(c => c.category === 'past');
  const futureCamps = CAMPS.filter(c => c.category === 'future');

  return (
    <section className="programs" id="programs">
      <div className="container">
        <span className="section-label">Programs</span>
        <h2 className="section-title">Our Camps.<br/>Past &amp; Upcoming.</h2>
        <p className="section-sub">Whether your athlete is brand new to running or looking to level up before middle school cross country, we have a session built for them. Tap a camp to see full details.</p>

        <h3 className="camps-subheading">Future Camps</h3>
        <div className="camps-list">
          {futureCamps.map(camp => (
            <CampCard key={camp.id} camp={camp} isOpen={openIds.has(camp.id)} onToggle={() => toggle(camp.id)} />
          ))}
        </div>

        <h3 className="camps-subheading">Past Camps</h3>
        <div className="camps-list">
          {pastCamps.map(camp => (
            <CampCard key={camp.id} camp={camp} isOpen={openIds.has(camp.id)} onToggle={() => toggle(camp.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { text: '"This was my daughter\'s first opportunity to try out track and I\'m so glad she did. Appreciate all the time and effort you all put in this summer. She\'s now very interested in joining the middle school team."', author: 'Track Club Parent' },
    { text: '"Great program and very well ran. My son absolutely loved it. Thank you!"', author: 'Track Club Parent' },
    { text: '"Thank you and all the other coaches that made this possible. My son really enjoys this and it\'s great to see this becoming a community. We will definitely sign him up for the Fall session."', author: 'Track Club Parent' },
    { text: '"Thank you for an amazing season and an amazing introduction to track for my son! He really enjoyed his time with you all. I am excited for him to continue this venture with Cross Country. It also helped me learn so that I can try my best to help him out."', author: 'Track Club Parent' },
  ];
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <span className="section-label">What Parents Say</span>
        <h2 className="section-title">Real Feedback.<br/>Real Results.</h2>
        <p className="section-sub">Don't take our word for it — here's what Old Bridge families had to say about the summer camp.</p>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">— {r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coaches() {
  const coaches = [
    { initials: 'SB', name: 'Scott Beverly', role: 'Head Coach', desc: 'OBHS Head Boys Track & Field Coach. Founder of Old Bridge Track Club.' },
    { initials: 'MT', name: 'Matt Tiplady', role: 'Head Coach', desc: 'OBHS Head Boys Cross Country and Track & Field Coach.' },
    { initials: 'AC', name: 'Adrian Cline', role: 'Head Coach', desc: 'OBHS Girls Head Cross Country and Track & Field Coach.' },
    { initials: 'MA', name: 'Michelle Arenella', role: 'Assistant Coach', desc: 'OBHS Girls Assistant Cross Country and Track & Field Coach.' },
    { initials: 'JP', name: 'Jim Phillips', role: 'Assistant Coach', desc: 'OBHS Boys Assistant Cross Country and Track & Field Coach.' },
  ];
  return (
    <section className="coaches" id="coaches">
      <div className="container">
        <span className="section-label">The Staff</span>
        <h2 className="section-title">5 OBHS Coaches.<br/>One Great Team.</h2>
        <p className="section-sub coaches-intro">Every coach on staff is an active OBHS Track &amp; Field coach. These aren't strangers — they're the people who built OBHS track culture and show up to Lombardi Field because they love this community.</p>
        <div className="coaches-row">
          {coaches.map((c, i) => (
            <div key={i} className="coach-card">
              <div className="coach-avatar">{c.initials}</div>
              <div className="coach-name">{c.name}</div>
              <div className="coach-role">{c.role}</div>
              <div className="coach-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container" style={{textAlign:'center'}}>
        <span className="section-label cta-label">Fall Camp 2025</span>
        <h2 className="section-title cta-title">Ready to Register?</h2>
        <p className="section-sub cta-sub">The Youth Running Camp runs across 5 sessions this fall. Grades 4–8, $85/child, at Lombardi Field. Spots fill fast — secure yours today.</p>
        <div className="cta-btns">
          <a href="https://forms.gle/7Ygk6wQPbuVBipbX7" target="_blank" rel="noopener noreferrer" className="btn-primary">Register Now — $85</a>
          <a href="mailto:oldbridgetrackclub@gmail.com" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="nav-logo">OLD BRIDGE <span>TC</span></a>
            <p className="footer-tagline">Building young runners in Old Bridge, NJ</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:oldbridgetrackclub@gmail.com">oldbridgetrackclub@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Old Bridge Track Club · All rights reserved</div>
          <div className="footer-copy">Staffed by OBHS Track &amp; Field Coaches</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="lane-divider"></div>
      <About />
      <div className="lane-divider"></div>
      <Programs />
      <div className="lane-divider"></div>
      <Coaches />
      <CTA />
      <Footer />
      <Analytics />
    </>
  );
}
