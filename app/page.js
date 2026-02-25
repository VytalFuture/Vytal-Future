'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          entry.target.querySelectorAll('.how-card, .feature-card, .supp-card, .testi-card, .pricing-card').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.08}s`
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          })
        }
      })
    }, { threshold: 0.08 })

    document.querySelectorAll('.reveal').forEach(el => {
      el.querySelectorAll('.how-card, .feature-card, .supp-card, .testi-card, .pricing-card').forEach(child => {
        child.style.opacity = '0'
        child.style.transform = 'translateY(24px)'
        child.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      })
      observer.observe(el)
    })
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const openLogin = () => {
    setLoginOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLogin = () => {
    setLoginOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Navigation */}
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <a className="nav-logo" href="#hero" onClick={() => scrollTo('hero')}>
              <svg className="nav-logo-icon" viewBox="0 0 36 36" fill="none">
                <path d="M6 10 L18 26 L30 10" stroke="url(#nl1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10 L18 20 L24 10" stroke="url(#nl1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                <defs><linearGradient id="nl1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#00e5c8"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
              </svg>
              <span className="nav-logo-text">Vytal Future</span>
            </a>
            <div className="nav-links">
              <span className="nav-link" onClick={() => scrollTo('how')}>How It Works</span>
              <span className="nav-link" onClick={() => scrollTo('score')}>Vytal Score</span>
              <span className="nav-link" onClick={() => scrollTo('features')}>Features</span>
              <span className="nav-link" onClick={() => scrollTo('supplements')}>Supplements</span>
              <span className="nav-link" onClick={() => scrollTo('pricing')}>Pricing</span>
            </div>
            <div className="nav-right">
              <button className="nav-login" onClick={openLogin}>Login</button>
              <button className="btn btn-primary nav-cta" onClick={() => scrollTo('pricing')}>Get Started</button>
              <div className="hamburger" onClick={toggleMenu}>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <span className="mobile-nav-link" onClick={() => scrollTo('how')}>How It Works</span>
        <span className="mobile-nav-link" onClick={() => scrollTo('score')}>Vytal Score</span>
        <span className="mobile-nav-link" onClick={() => scrollTo('features')}>Features</span>
        <span className="mobile-nav-link" onClick={() => scrollTo('supplements')}>Supplements</span>
        <span className="mobile-nav-link" onClick={() => scrollTo('pricing')}>Pricing</span>
        <span className="mobile-nav-link" onClick={() => { openLogin(); setMenuOpen(false); }}>Login →</span>
      </div>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-bg">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
          <div className="hero-grid"></div>
          <div className="hero-scanline"></div>
        </div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-tag">
                <div className="hero-tag-dot"></div>
                Now Accepting Members
              </div>
              <h1 className="hero-headline">
                Your Health,<br/>
                <span className="gradient-text">Optimized.</span>
              </h1>
              <p className="hero-sub">Vytal Future combines wearable data, bloodwork, and personalized protocols into one unified score — so busy professionals can perform at their best, every day.</p>
              <div className="hero-btns">
                <button className="btn btn-primary" onClick={() => window.location.href = '/signup'}>Start Your Journey →</button>
                <button className="btn btn-outline" onClick={() => scrollTo('how')}>See How It Works</button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">+23</div>
                  <div className="hero-stat-label">avg score gain in 12 weeks</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">150+</div>
                  <div className="hero-stat-label">wearable devices supported</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">4</div>
                  <div className="hero-stat-label">health pillars tracked</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hero-visual">
              <div className="hero-card-main">
                <svg style={{display:'none'}}>
                  <defs>
                    <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00b4a0"/><stop offset="100%" stopColor="#00e5c8"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="hero-score-row">
                  <div className="hero-ring">
                    <svg viewBox="0 0 80 80">
                      <defs><linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00b4a0"/><stop offset="100%" stopColor="#00e5c8"/></linearGradient></defs>
                      <circle className="ring-bg-h" cx="40" cy="40" r="35"/>
                      <circle className="ring-fill-h" cx="40" cy="40" r="35" style={{stroke:'url(#hg2)'}}/>
                    </svg>
                    <div className="ring-inner-h">
                      <div className="ring-num">81</div>
                      <div className="ring-label-h">VYTAL</div>
                    </div>
                  </div>
                  <div className="score-info">
                    <div className="score-info-eyebrow">Vytal Score</div>
                    <div className="score-info-title">Optimal</div>
                    <div className="score-info-sub">↑ +23 pts since Week 1</div>
                  </div>
                </div>
                <div className="hero-pillars">
                  <div className="hero-pillar">
                    <div className="hp-label">Physical</div>
                    <div className="hp-val" style={{color:'var(--teal)'}}>78</div>
                    <div className="hp-bar"><div className="hp-bar-fill" style={{width:'78%',background:'linear-gradient(90deg,#00b4a0,#00e5c8)'}}></div></div>
                  </div>
                  <div className="hero-pillar">
                    <div className="hp-label">Mental</div>
                    <div className="hp-val" style={{color:'var(--blue)'}}>73</div>
                    <div className="hp-bar"><div className="hp-bar-fill" style={{width:'73%',background:'linear-gradient(90deg,#2563eb,#60a5fa)'}}></div></div>
                  </div>
                  <div className="hero-pillar">
                    <div className="hp-label">Nutrition</div>
                    <div className="hp-val" style={{color:'var(--green)'}}>74</div>
                    <div className="hp-bar"><div className="hp-bar-fill" style={{width:'74%',background:'linear-gradient(90deg,#16a34a,#4ade80)'}}></div></div>
                  </div>
                  <div className="hero-pillar">
                    <div className="hp-label">Biomarkers</div>
                    <div className="hp-val" style={{color:'var(--purple)'}}>84</div>
                    <div className="hp-bar"><div className="hp-bar-fill" style={{width:'84%',background:'linear-gradient(90deg,#7c3aed,#a78bfa)'}}></div></div>
                  </div>
                </div>
              </div>
              <div className="floating-badge fb-1">
                <div className="fb-icon">🔥</div>
                <div className="fb-text"><div className="fb-val">18</div><div className="fb-label">day streak</div></div>
              </div>
              <div className="floating-badge fb-2">
                <div className="fb-icon">❤️</div>
                <div className="fb-text"><div className="fb-val">84ms</div><div className="fb-label">HRV — Best this month</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how">
        <div className="container">
          <div className="reveal">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-heading">From data to results<br/>in four steps.</h2>
            <p className="section-sub">We pull everything together — wearables, bloodwork, check-ins — and turn it into a clear action plan built around you.</p>
          </div>
          <div className="how-grid reveal">
            {[
              { num: '01', icon: '⌚', title: 'Connect Your Wearable', desc: 'Link your WHOOP, Apple Watch, Garmin, Oura, or 150+ other devices. We pull your real-time health data automatically — no manual logging.', tag: 'Auto-sync' },
              { num: '02', icon: '🧬', title: 'Establish Your Baseline', desc: 'We collect your bloodwork every 6 months — biomarkers, vitamins, hormones, inflammation. This anchors everything else and lets us track real, cellular-level change.', tag: 'Blood draw included' },
              { num: '03', icon: '📊', title: 'Get Your Vytal Score', desc: 'All your data rolls up into one unified metric — your Vytal Score. Updated weekly, it reflects your physical, mental, nutritional, and biomarker health in a single, trackable number.', tag: '4 pillars · 1 score' },
              { num: '04', icon: '🎯', title: 'Follow Your Protocol', desc: 'We build a personalized protocol around your data — sleep targets, movement goals, nutrition guidelines, supplements. Three quick weekly check-ins keep us calibrated to your week.', tag: '30-second check-ins' },
              { num: '05', icon: '📬', title: 'Weekly Reports & Accountability', desc: 'Every Sunday, receive a complete breakdown of your week — metrics vs. goals, your score, biggest wins, and focus areas for next week. Miss a goal? We\'ll reach out with context, not just a notification.', tag: 'Human-level accountability' },
              { num: '06', icon: '📈', title: '3-Month Review & Evolve', desc: 'At 3 months, we review your trends, update your protocol, recommend supplements based on your actual data, and set new targets. The program adapts — because you do too.', tag: 'Data-driven supplements' },
            ].map((card, i) => (
              <div key={i} className="how-card">
                <div className="how-step-num">{card.num}</div>
                <div className="how-icon" style={{background: ['rgba(0,229,200,0.1)', 'rgba(96,165,250,0.1)', 'rgba(167,139,250,0.1)', 'rgba(74,222,128,0.1)', 'rgba(251,146,60,0.1)', 'rgba(251,191,36,0.1)'][i]}}>{card.icon}</div>
                <div className="how-title">{card.title}</div>
                <div className="how-desc">{card.desc}</div>
                <div className="feature-tag">{card.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vytal Score */}
      <section id="score">
        <div className="container">
          <div className="reveal">
            <span className="section-eyebrow">The Vytal Score</span>
            <h2 className="section-heading">One number.<br/>Your entire health picture.</h2>
            <p className="section-sub">Most health apps show you one slice. Your Vytal Score combines four pillars of health into a single metric you can actually improve over time.</p>
          </div>
          <div className="score-layout reveal">
            <div className="score-visual">
              <svg style={{display:'none'}}><defs><linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00b4a0"/><stop offset="100%" stopColor="#00e5c8"/></linearGradient></defs></svg>
              <div className="score-ring-large">
                <svg viewBox="0 0 220 220">
                  <circle className="srl-bg" cx="110" cy="110" r="95"/>
                  <circle className="srl-fill" cx="110" cy="110" r="95" style={{stroke:'url(#sg)'}}/>
                </svg>
                <div className="srl-inner">
                  <div className="srl-num">81</div>
                  <div className="srl-status">OPTIMAL</div>
                  <div className="srl-date">Week 12 of 12</div>
                </div>
              </div>
              <div className="score-sub-row">
                <div className="score-sub-card">
                  <div className="ssc-label">Sleep Score</div>
                  <div className="ssc-val" style={{color:'var(--teal)'}}>87</div>
                  <div className="ssc-status" style={{color:'var(--teal)'}}>Optimal</div>
                  <div className="ssc-bar"><div className="ssc-bar-fill" style={{width:'87%'}}></div></div>
                </div>
                <div className="score-sub-card">
                  <div className="ssc-label">Recovery</div>
                  <div className="ssc-val" style={{color:'var(--blue)'}}>85</div>
                  <div className="ssc-status" style={{color:'var(--blue)'}}>Optimal</div>
                  <div className="ssc-bar"><div className="ssc-bar-fill" style={{width:'85%',background:'linear-gradient(90deg,#2563eb,#60a5fa)'}}></div></div>
                </div>
              </div>
            </div>
            <div className="score-pillars-list">
              <div style={{marginBottom:'8px'}}>
                <span className="section-eyebrow" style={{marginBottom:'4px'}}>The Four Pillars</span>
                <p style={{fontSize:'14px',color:'var(--text3)',lineHeight:'1.7'}}>Each pillar is scored independently and weighted into your overall Vytal Score. As you improve in each area, your unified score rises — giving you a clear, meaningful metric to optimize.</p>
              </div>
              {[
                { icon: '⌚', bg: 'rgba(0,229,200,0.1)', name: 'Physical — Wearable data', sub: 'HRV, sleep, steps, resting HR, recovery', val: '78', valColor: 'var(--teal)', width: '78%', gradient: 'linear-gradient(90deg,#00b4a0,#00e5c8)' },
                { icon: '🧠', bg: 'rgba(96,165,250,0.1)', name: 'Mental — Check-in data', sub: 'Focus, stress, mood, cognitive clarity', val: '73', valColor: 'var(--blue)', width: '73%', gradient: 'linear-gradient(90deg,#2563eb,#60a5fa)' },
                { icon: '🥗', bg: 'rgba(74,222,128,0.1)', name: 'Nutrition — Protocol adherence', sub: 'Nutrition compliance, supplement timing', val: '74', valColor: 'var(--green)', width: '74%', gradient: 'linear-gradient(90deg,#16a34a,#4ade80)' },
                { icon: '🧬', bg: 'rgba(167,139,250,0.1)', name: 'Biomarkers — Blood work', sub: 'Vitamins, hormones, inflammation, glucose', val: '84', valColor: 'var(--purple)', width: '84%', gradient: 'linear-gradient(90deg,#7c3aed,#a78bfa)' },
              ].map((pillar, i) => (
                <div key={i} className="spl-item">
                  <div className="spl-icon" style={{background:pillar.bg}}>{pillar.icon}</div>
                  <div className="spl-info">
                    <div className="spl-name">{pillar.name}</div>
                    <div style={{fontSize:'12px',color:'var(--text3)',marginBottom:'6px'}}>{pillar.sub}</div>
                    <div className="spl-bar"><div className="spl-bar-fill" style={{width:pillar.width,background:pillar.gradient}}></div></div>
                  </div>
                  <div className="spl-val" style={{color:pillar.valColor}}>{pillar.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <div className="container">
          <div className="reveal">
            <span className="section-eyebrow">Platform Features</span>
            <h2 className="section-heading">Everything you need.<br/>Nothing you don't.</h2>
            <p className="section-sub">Built specifically for people who want to perform at their peak — not spend hours managing health data.</p>
          </div>
          <div className="features-grid reveal">
            {[
              { icon: '📊', bg: 'rgba(0,229,200,0.1)', title: 'Live Dashboard', desc: 'A real-time view of your Vytal Score, all four pillars, wearable metrics, and weekly progress — beautifully visualized in one place.', tag: 'Real-time sync' },
              { icon: '⚡', bg: 'rgba(251,191,36,0.1)', title: 'Vytal Credits', desc: 'Earn credits for every goal you hit, every check-in you complete. Redeem them for free supplements, membership discounts, or coaching sessions.', tag: 'Compliance = rewards' },
              { icon: '📬', bg: 'rgba(251,146,60,0.1)', title: 'Weekly Reports', desc: 'Every Sunday you\'ll receive a full breakdown of your week — metrics vs. goals, biggest changes, score trajectory, and your focus for next week.', tag: 'Every Sunday' },
              { icon: '🎯', bg: 'rgba(96,165,250,0.1)', title: 'Accountability Layer', desc: 'Miss a goal three days in a row? We reach out — not with a generic push notification, but with context from your data explaining why it matters right now.', tag: 'Human-level outreach' },
              { icon: '🏆', bg: 'rgba(74,222,128,0.1)', title: 'Community Leaderboard', desc: 'Opt in to compete with other Vytal members on score improvement — not absolute score. Anyone can win. Fully anonymous if you prefer.', tag: 'Opt-in · private by default' },
              { icon: '🔍', bg: 'rgba(167,139,250,0.1)', title: '3-Month Deep Review', desc: 'At every 3-month mark, we review your full trend data, evolve your protocol, and recommend supplements based on what your biomarkers and wearable data actually show.', tag: 'Data-driven · personalized' },
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon" style={{background:feature.bg}}>{feature.icon}</div>
                <div className="feature-title">{feature.title}</div>
                <div className="feature-desc">{feature.desc}</div>
                <div className="feature-tag">{feature.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section id="supplements">
        <div className="container">
          <div className="supps-intro reveal">
            <span className="section-eyebrow">Vytal Supplements</span>
            <h2 className="section-heading">Not just supplements.<br/>Prescriptions from your data.</h2>
            <p className="section-sub">At your 3-month review, we recommend supplements based on your actual biomarkers, HRV patterns, and check-in trends — not generic advice.</p>
          </div>
          <div className="supps-grid reveal">
            {[
              { badge: 'Best Seller', badgeBg: 'rgba(0,229,200,0.1)', badgeColor: 'var(--teal)', featured: true, icon: '🧠', iconBg: 'rgba(251,146,60,0.1)', name: 'Vytal Calm', tagline: 'Cortisol regulation & focused calm', ingredients: ['Ashwagandha', 'L-Theanine', 'Rhodiola'], price: '$49', period: '/ month' },
              { icon: '💤', iconBg: 'rgba(0,229,200,0.1)', name: 'Vytal Sleep', tagline: 'Deep sleep quality & overnight recovery', ingredients: ['Magnesium Glycinate', 'Zinc', 'L-Glycine'], price: '$39', period: '/ month' },
              { icon: '⚡', iconBg: 'rgba(96,165,250,0.1)', name: 'Vytal Focus', tagline: 'Cognitive performance & mental clarity', ingredients: ['Lion\'s Mane', 'B-Complex', 'Alpha GPC'], price: '$44', period: '/ month' },
            ].map((supp, i) => (
              <div key={i} className={`supp-card ${supp.featured ? 'featured' : ''}`}>
                {supp.badge && <div className="supp-badge" style={{background:supp.badgeBg,color:supp.badgeColor,border:`1px solid ${supp.badgeBg}`}}>{supp.badge}</div>}
                <div className="supp-icon-wrap" style={{background:supp.iconBg}}>{supp.icon}</div>
                <div className="supp-name">{supp.name}</div>
                <div className="supp-tagline">{supp.tagline}</div>
                <div className="supp-ingredients">
                  {supp.ingredients.map((ing, j) => <div key={j} className="supp-ing">{ing}</div>)}
                </div>
                <div className="supp-price">{supp.price} <span>{supp.period}</span></div>
              </div>
            ))}
          </div>
          <div className="supps-note reveal">
            Supplements are recommended at your 3-month review based on your bloodwork and wearable trends — never pushed before we have the data to back it. <strong style={{color:'var(--text2)'}}>Members can also redeem Vytal Credits for free supplement months.</strong>
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section id="accountability">
        <div className="container">
          <div className="reveal">
            <span className="section-eyebrow">Accountability</span>
            <h2 className="section-heading">Your data holds<br/>you accountable.</h2>
            <p className="section-sub">Most apps send generic reminders. We use your wearable data to reach out with context — the right message at the right moment.</p>
          </div>
          <div className="acct-layout reveal">
            <div className="acct-steps">
              {[
                { num: '1', numBg: 'rgba(0,229,200,0.1)', numColor: 'var(--teal)', numBorder: '1px solid rgba(0,229,200,0.3)', title: 'Wearable detects a pattern', desc: 'Your step goal hasn\'t been hit in 3 consecutive days. Your HRV is trending down. Your wearable data flags it automatically.' },
                { num: '2', numBg: 'rgba(96,165,250,0.1)', numColor: 'var(--blue)', numBorder: '1px solid rgba(96,165,250,0.3)', title: 'We cross-reference your check-ins', desc: 'Your Wednesday check-in flagged elevated stress. We know you\'re in a tough week — not just falling off.' },
                { num: '3', numBg: 'rgba(167,139,250,0.1)', numColor: 'var(--purple)', numBorder: '1px solid rgba(167,139,250,0.3)', title: 'You receive a personalized message', desc: '"You mentioned work stress this week — here\'s why your step goal actually matters more on high-stress days, and why even a 15-minute walk will shift your HRV tonight."' },
                { num: '4', numBg: 'rgba(74,222,128,0.1)', numColor: 'var(--green)', numBorder: '1px solid rgba(74,222,128,0.3)', title: 'You see the impact on your score', desc: 'Getting back on track this week is shown as a projected score improvement — making the payoff tangible and motivating.' },
              ].map((step, i) => (
                <div key={i} className="acct-step">
                  <div className="acct-step-left">
                    <div className="acct-step-num" style={{background:step.numBg,color:step.numColor,border:step.numBorder}}>{step.num}</div>
                    {i < 3 && <div className="acct-step-line"></div>}
                  </div>
                  <div className="acct-step-body">
                    <div className="acct-step-title">{step.title}</div>
                    <div className="acct-step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="acct-visual">
              <div style={{fontFamily:'var(--font-m)',fontSize:'9px',color:'var(--text3)',letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'14px'}}>Recent Accountability Alerts</div>
              {[
                { dot: 'var(--orange)', dotShadow: 'rgba(251,146,60,0.4)', title: 'Step goal missed · 3 days', desc: 'We see you\'ve had a stressful week. Here\'s why staying active today will actually help your stress levels — and your score.', time: '2 hours ago' },
                { dot: 'var(--yellow)', dotShadow: 'rgba(251,191,36,0.3)', title: 'HRV trending down this week', desc: 'Your overnight HRV has dropped 12ms from your 4-week average. Your sleep window may be the cause — try a 10:30pm target tonight.', time: 'Yesterday' },
                { dot: 'var(--teal)', dotShadow: 'rgba(0,229,200,0.3)', title: 'Weekly streak at risk 🔥', desc: 'Complete today\'s check-in to protect your 17-day streak and earn your weekly bonus credits.', time: 'This morning' },
                { dot: 'var(--green)', dotShadow: 'rgba(74,222,128,0.3)', title: 'Best HRV week on record 📈', desc: '84ms average this week — your highest since joining. Sleep consistency is driving it. Keep protecting your sleep window.', time: 'Sunday', special: true },
              ].map((notif, i) => (
                <div key={i} className="notif-card" style={notif.special ? {borderColor:'rgba(74,222,128,0.2)'} : {}}>
                  <div className="notif-dot" style={{background:notif.dot,boxShadow:`0 0 6px ${notif.dotShadow}`}}></div>
                  <div className="notif-body">
                    <div className="notif-title">{notif.title}</div>
                    <div className="notif-desc">{notif.desc}</div>
                    <div className="notif-time">{notif.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container">
          <div className="reveal">
            <span className="section-eyebrow">Member Results</span>
            <h2 className="section-heading">Real people.<br/>Real improvements.</h2>
          </div>
          <div className="testi-grid reveal">
            {[
              { avatar: '👨‍💼', avatarBg: 'rgba(0,229,200,0.1)', quote: 'I\'ve tried every wellness app out there. Vytal Future is the first one that actually told me *why* I felt tired, not just that I was. The weekly reports alone are worth it.', name: 'Marcus T.', role: 'VP of Operations · Week 12', scoreNum: '58→81' },
              { avatar: '👩‍💻', avatarBg: 'rgba(96,165,250,0.1)', quote: 'The accountability outreach is different. When I missed my steps three days in a row during a crunch week, they reached out with context — not a generic ping. That\'s a coach, not an app.', name: 'Sarah K.', role: 'Founder & CEO · Week 8', scoreNum: '60→79' },
              { avatar: '👨‍⚕️', avatarBg: 'rgba(167,139,250,0.1)', quote: 'My 3-month review showed my magnesium was low — something I\'d never have caught otherwise. The Vytal Sleep supplement they recommended changed my recovery completely. Data-backed and it worked.', name: 'Devon R.', role: 'Physician · Week 14', scoreNum: '62→79' },
            ].map((testi, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <div className="testi-quote">"{testi.quote}"</div>
                <div className="testi-author">
                  <div className="testi-avatar" style={{background:testi.avatarBg}}>{testi.avatar}</div>
                  <div>
                    <div className="testi-name">{testi.name}</div>
                    <div className="testi-role">{testi.role}</div>
                  </div>
                  <div className="testi-score">
                    <div className="testi-score-num">{testi.scoreNum}</div>
                    <div className="testi-score-label">Vytal Score</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="container">
          <div className="reveal" style={{textAlign:'center'}}>
            <span className="section-eyebrow">Pricing</span>
            <h2 className="section-heading">Invest in your performance.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Choose the plan that fits your goals. Every plan includes full platform access and your Vytal Score.</p>
          </div>
          <div className="pricing-grid reveal">
            {[
              { tier: 'Starter', name: 'Essential', desc: 'Everything you need to get started with tracking and improving your health baseline.', amount: '$50', featured: false, features: [
                { yes: true, text: 'Vytal Score tracking' },
                { yes: true, text: 'Wearable data sync' },
                { yes: true, text: 'Weekly check-ins' },
                { yes: true, text: 'Weekly summary report' },
                { yes: true, text: 'Vytal Credits system' },
                { yes: false, text: 'Blood work (add-on)' },
                { yes: false, text: 'Accountability outreach' },
                { yes: false, text: '3-Month deep review' },
              ]},
              { tier: 'Pro', name: 'Performance', desc: 'The full Vytal Future experience — every feature, full accountability, and bi-annual blood work included.', amount: '$150', featured: true, features: [
                { yes: true, text: 'Everything in Essential' },
                { yes: true, text: 'Blood work every 6 months' },
                { yes: true, text: 'Personalized protocol' },
                { yes: true, text: 'Accountability outreach' },
                { yes: true, text: '3-Month deep review' },
                { yes: true, text: 'Supplement recommendations' },
                { yes: true, text: 'Community leaderboard' },
                { yes: true, text: 'Priority support' },
              ]},
              { tier: 'Elite', name: 'Athlete', desc: 'For serious athletes and performance-driven individuals who want the highest level of optimization.', amount: '$250', featured: false, features: [
                { yes: true, text: 'Everything in Performance' },
                { yes: true, text: 'Quarterly blood draws' },
                { yes: true, text: 'Monthly 1:1 coaching call' },
                { yes: true, text: 'Expanded biomarker panel' },
                { yes: true, text: 'Custom nutrition planning' },
                { yes: true, text: 'Supplement stack included' },
                { yes: true, text: 'Dedicated health advisor' },
                { yes: true, text: 'Early access to new features' },
              ]},
            ].map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="pricing-popular">Most Popular</div>}
                <div className="pricing-tier">{plan.tier}</div>
                <div className="pricing-name" style={plan.featured ? {color:'var(--teal)'} : {}}>{plan.name}</div>
                <div className="pricing-desc">{plan.desc}</div>
                <div className="pricing-price">
                  <span className="pricing-amount" style={plan.featured ? {color:'var(--teal)'} : {}}>{plan.amount}</span>
                  <span className="pricing-period">/ month</span>
                </div>
                <div className="pricing-features">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="pf-item">
                      <div className={`pf-check ${feature.yes ? 'yes' : 'no'}`}>{feature.yes ? '✓' : '—'}</div>
                      <span style={feature.yes ? {} : {color:'var(--text3)'}}>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} pricing-btn`} onClick={() => window.location.href = '/signup'}>
                  {plan.featured ? 'Get Started →' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="container">
          <div className="cta-box reveal">
            <span className="section-eyebrow" style={{display:'block',marginBottom:'16px'}}>Start Today</span>
            <h2 className="cta-heading">Ready to know what<br/>your body is telling you?</h2>
            <p className="cta-sub">Join Vytal Future and get your personalized health protocol, Vytal Score, and weekly reports — starting this week.</p>
            <div className="cta-btns">
              <button className="btn btn-primary" style={{fontSize:'15px',padding:'15px 36px'}} onClick={() => window.location.href = '/signup'}>Start Your Journey →</button>
              <button className="btn btn-outline" onClick={openLogin}>Already a member? Login</button>
            </div>
            <p className="cta-disclaimer">Cancel anytime · Blood work kit shipped to you · Wearable not required to start</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                  <path d="M6 10 L18 26 L30 10" stroke="url(#fl1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10 L18 20 L24 10" stroke="url(#fl1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                  <defs><linearGradient id="fl1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#00e5c8"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
                </svg>
                <span className="footer-logo-text">Vytal Future</span>
              </div>
              <p className="footer-tagline">Personalized health optimization for people who want to perform at their best — every day.</p>
              <div className="footer-social">
                <div className="social-btn">𝕏</div>
                <div className="social-btn">in</div>
                <div className="social-btn">📸</div>
                <div className="social-btn">▶</div>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Platform</div>
              <span className="footer-link" onClick={() => scrollTo('how')}>How It Works</span>
              <span className="footer-link" onClick={() => scrollTo('score')}>Vytal Score</span>
              <span className="footer-link" onClick={() => scrollTo('features')}>Features</span>
              <span className="footer-link" onClick={() => scrollTo('pricing')}>Pricing</span>
              <span className="footer-link" onClick={openLogin}>Member Login</span>
            </div>
            <div>
              <div className="footer-col-title">Products</div>
              <span className="footer-link" onClick={() => scrollTo('supplements')}>Vytal Calm</span>
              <span className="footer-link" onClick={() => scrollTo('supplements')}>Vytal Sleep</span>
              <span className="footer-link" onClick={() => scrollTo('supplements')}>Vytal Focus</span>
              <span className="footer-link">All Supplements</span>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <span className="footer-link">About Us</span>
              <span className="footer-link">Blog</span>
              <span className="footer-link">Research</span>
              <span className="footer-link">Careers</span>
              <span className="footer-link">Contact</span>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 Vytal Future. All rights reserved.</div>
            <div className="footer-legal">
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
              <a>Cookie Policy</a>
              <a>HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <div className={`modal-overlay ${loginOpen ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeLogin() }}>
        <div className="modal">
          <div className="modal-close" onClick={closeLogin}>✕</div>
          <div className="modal-logo">
            <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
              <path d="M6 10 L18 26 L30 10" stroke="url(#ml1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 10 L18 20 L24 10" stroke="url(#ml1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              <defs><linearGradient id="ml1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#00e5c8"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
            </svg>
            <span className="modal-logo-text">Vytal Future</span>
          </div>
          <div className="modal-title">Welcome back.</div>
          <div className="modal-sub">Sign in to access your dashboard and Vytal Score.</div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="you@example.com"/>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="••••••••"/>
          </div>
          <div className="form-forgot">Forgot password?</div>
          <button className="btn btn-primary form-btn">Sign In →</button>
          <div className="modal-divider"><span>or</span></div>
          <div className="modal-signup">Don't have an account? <a onClick={() => { closeLogin(); scrollTo('pricing'); }}>Get started →</a></div>
          <div className="modal-dev-note">⚙ Developer note: Wire authentication to your backend API here. Redirect to dashboard on success.</div>
        </div>
      </div>
    </>
  )
}
