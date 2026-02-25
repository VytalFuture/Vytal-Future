'use client'

import { useState } from 'react'

const HUBSPOT_PORTAL_ID = '245327473'
const HUBSPOT_FORM_ID = '63f1d9da-7823-45d8-abef-4050e25158b8'

const QUESTIONS = [
  {
    id: 'q1',
    section: 'Daily Activity',
    text: 'How many steps do you typically walk per day?',
    sub: 'Include casual walking, errands, and intentional movement.',
    options: [
      { label: 'Under 3,000 steps', desc: 'Mostly sedentary day', icon: '🛋️', score: 20 },
      { label: '3,000 – 6,000 steps', desc: 'Light daily movement', icon: '🚶', score: 45 },
      { label: '6,000 – 10,000 steps', desc: 'Moderately active', icon: '🏃', score: 70 },
      { label: '10,000+ steps', desc: 'Highly active daily', icon: '⚡', score: 95 },
    ],
  },
  {
    id: 'q2',
    section: 'Daily Activity',
    text: 'How many days per week do you do intentional exercise?',
    sub: 'Gym, runs, cycling, yoga, sports — anything deliberate counts.',
    cols: 2,
    options: [
      { label: '0 days', icon: '😴', score: 10 },
      { label: '1 day', icon: '1️⃣', score: 35 },
      { label: '2 days', icon: '2️⃣', score: 60 },
      { label: '3 days', icon: '3️⃣', score: 75 },
      { label: '4 days', icon: '4️⃣', score: 88 },
      { label: '5+ days', icon: '🏆', score: 98 },
    ],
  },
  {
    id: 'q3',
    section: 'Energy Levels',
    text: 'How would you rate your overall energy throughout the day?',
    sub: 'Think about a typical weekday — not your best or worst day.',
    options: [
      { label: 'Very low', desc: 'Exhausted most of the day', icon: '🪫', score: 15 },
      { label: 'Below average', desc: 'Manageable but sluggish', icon: '😑', score: 40 },
      { label: 'Good', desc: 'Consistent and productive', icon: '😊', score: 70 },
      { label: 'Excellent', desc: 'Energized from morning to night', icon: '🔋', score: 95 },
    ],
  },
  {
    id: 'q4',
    section: 'Energy Levels',
    text: 'Do you experience an afternoon energy crash?',
    sub: 'That 2–4pm slump where focus drops and fatigue sets in.',
    options: [
      { label: 'Every day', desc: 'Reliable afternoon wall', icon: '⚠️', score: 20 },
      { label: 'Most days', desc: 'Happens more often than not', icon: '😓', score: 45 },
      { label: 'Occasionally', desc: 'Once or twice a week', icon: '🤷', score: 75 },
      { label: 'Rarely or never', desc: 'Steady energy all day', icon: '✅', score: 98 },
    ],
  },
  {
    id: 'q5',
    section: 'Nutrition',
    text: 'How many servings of fruits and vegetables do you eat daily?',
    sub: 'One serving = a medium piece of fruit or a cup of vegetables.',
    cols: 2,
    options: [
      { label: '0–1 servings', icon: '❌', score: 10 },
      { label: '2–3 servings', icon: '🥕', score: 40 },
      { label: '4–5 servings', icon: '🥗', score: 75 },
      { label: '6+ servings', icon: '🌿', score: 98 },
    ],
  },
  {
    id: 'q6',
    section: 'Nutrition',
    text: 'How would you describe your typical eating habits?',
    sub: 'Be honest — we\'re here to help, not judge.',
    options: [
      { label: 'Mostly processed / fast food', desc: 'Convenience-driven, minimal planning', icon: '🍔', score: 15 },
      { label: 'Mixed — some healthy, some not', desc: 'Inconsistent but aware', icon: '🍝', score: 45 },
      { label: 'Mostly whole foods', desc: 'Intentional most of the time', icon: '🥙', score: 78 },
      { label: 'Clean & structured', desc: 'Tracked, planned, and optimized', icon: '🎯', score: 98 },
    ],
  },
  {
    id: 'q7',
    section: 'Nutrition',
    text: 'How much water do you drink daily?',
    sub: 'General recommendation is around 64–80oz (2–2.5L) for most adults.',
    cols: 2,
    options: [
      { label: 'Under 32oz', desc: 'Well below target', icon: '💧', score: 15 },
      { label: '32–64oz', desc: 'Getting there', icon: '🫗', score: 50 },
      { label: '64–96oz', desc: 'On target', icon: '🥤', score: 85 },
      { label: '96oz+', desc: 'Optimally hydrated', icon: '🌊', score: 98 },
    ],
  },
  {
    id: 'q8',
    section: 'Sleep',
    text: 'How many hours of sleep do you get on average per night?',
    sub: 'Think about your actual sleep time, not time in bed.',
    cols: 2,
    options: [
      { label: 'Under 5 hrs', icon: '😵', score: 10 },
      { label: '5–6 hrs', icon: '😪', score: 40 },
      { label: '6–7 hrs', icon: '😌', score: 80 },
      { label: '7–9 hrs', icon: '🌙', score: 95 },
      { label: '9+ hrs', icon: '⏰', score: 70 },
    ],
  },
  {
    id: 'q9',
    section: 'Sleep',
    text: 'How often do you wake up feeling rested and ready for the day?',
    sub: 'Quality matters more than quantity — this helps us gauge your recovery.',
    options: [
      { label: 'Almost never', desc: 'Waking up is a daily battle', icon: '😩', score: 10 },
      { label: 'Rarely', desc: 'Maybe 1–2x a week', icon: '😞', score: 40 },
      { label: 'Sometimes', desc: 'Hit or miss, 3–4x a week', icon: '🙂', score: 72 },
      { label: 'Most mornings', desc: 'Consistently refreshed', icon: '☀️', score: 98 },
    ],
  },
  {
    id: 'q10',
    section: 'Stress',
    text: 'How would you rate your average daily stress levels?',
    sub: 'Consider work, relationships, finances, and health combined.',
    options: [
      { label: 'Very high', desc: 'Constantly overwhelmed', icon: '🌋', score: 10 },
      { label: 'High', desc: 'Frequently stressed', icon: '😤', score: 40 },
      { label: 'Moderate', desc: 'Manageable most days', icon: '😐', score: 72 },
      { label: 'Low', desc: 'Generally calm and in control', icon: '🧘', score: 98 },
    ],
  },
  {
    id: 'q11',
    section: 'Stress',
    text: 'How do you typically manage stress when it peaks?',
    sub: 'What\'s your go-to response when things get overwhelming?',
    options: [
      { label: 'Unhealthy coping', desc: 'Food, alcohol, avoidance, doom-scrolling', icon: '🍕', score: 15 },
      { label: 'Passive rest', desc: 'TV, sleep, disengaging from the problem', icon: '📺', score: 50 },
      { label: 'Active recovery', desc: 'Exercise, walking, journaling', icon: '🤸', score: 80 },
      { label: 'Structured practice', desc: 'Meditation, breathwork, therapy, coaching', icon: '🧠', score: 98 },
    ],
  },
  {
    id: 'q12',
    section: 'Recovery',
    text: 'How do you feel about your current health trajectory?',
    sub: 'This helps us personalize your score context and recommendations.',
    options: [
      { label: 'Declining', desc: 'Things are getting worse', icon: '📉', score: 10 },
      { label: 'Stuck', desc: 'No real progress in either direction', icon: '➡️', score: 40 },
      { label: 'Slowly improving', desc: 'Moving in the right direction', icon: '📈', score: 75 },
      { label: 'Thriving', desc: 'Actively optimizing and seeing results', icon: '🚀', score: 98 },
    ],
  },
]

export default function Assessment() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showScore, setShowScore] = useState(false)
  const [formData, setFormData] = useState({ firstname: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [scores, setScores] = useState(null)

  const selectOption = (score) => {
    setAnswers({ ...answers, [QUESTIONS[current].id]: score })
  }

  const goNext = async () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1)
    } else {
      calculateScores()
      setShowScore(true)
    }
  }

  const goBack = () => {
    if (current > 0) setCurrent(current - 1)
  }

  const calculateScores = () => {
    const physical = Math.round((answers['q1'] || 50 + answers['q2'] || 50) / 2)
    const mental = Math.round(
      (answers['q3'] || 50 + answers['q4'] || 50 + answers['q10'] || 50 + answers['q11'] || 50) / 4
    )
    const nutrition = Math.round((answers['q5'] || 50 + answers['q6'] || 50 + answers['q7'] || 50) / 3)
    const sleep = Math.round((answers['q8'] || 50 + answers['q9'] || 50) / 2)
    const overall = Math.round(physical * 0.3 + mental * 0.25 + nutrition * 0.25 + sleep * 0.2)

    setScores({ overall, physical, mental, nutrition, sleep })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    if (!formData.firstname.trim() || !formData.email.trim()) {
      alert('Please fill in name and email')
      return
    }

    setLoading(true)

    try {
      // Submit to HubSpot
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.firstname },
              { name: 'email', value: formData.email },
              { name: 'phone', value: formData.phone || '' },
              { name: 'vytal_score', value: scores.overall.toString() },
              { name: 'physical_score', value: scores.physical.toString() },
              { name: 'mental_score', value: scores.mental.toString() },
              { name: 'nutrition_score', value: scores.nutrition.toString() },
              { name: 'sleep_score', value: scores.sleep.toString() },
            ],
          }),
        }
      )

      if (response.ok) {
        alert('Your Vytal Score has been sent!')
        window.location.href = '/'
      } else {
        alert('Error submitting form. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (showScore) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ marginBottom: '50px' }}>
            <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '20px', fontFamily: 'Rajdhani, sans-serif' }}>
              Your Vytal Score
            </h1>
            <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--teal)', marginBottom: '10px' }}>
              {scores.overall}
            </div>
            <p style={{ color: 'var(--text2)', marginBottom: '40px', fontSize: '16px', lineHeight: '1.6' }}>
              {scores.overall >= 85 ? 'You\'re performing at a high level. Vytal Future can help you reach elite performance.' :
               scores.overall >= 65 ? 'Solid foundation with real room to grow. Personalized optimization can unlock significant gains.' :
               scores.overall >= 45 ? 'There are clear opportunities to improve how you feel and perform.' :
               'Your body is asking for attention. Even small changes create rapid improvements.'}
            </p>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid rgba(0,229,200,0.1)', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'Physical', score: scores.physical, icon: '⌚' },
                { label: 'Mental', score: scores.mental, icon: '🧠' },
                { label: 'Nutrition', score: scores.nutrition, icon: '🥗' },
                { label: 'Sleep', score: scores.sleep, icon: '💤' },
              ].map((p) => (
                <div key={p.label} style={{ background: 'var(--surface2)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,229,200,0.1)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {p.icon} {p.label}
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--teal)' }}>{p.score}</div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(0,229,200,0.1)', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '16px' }}>Enter your details to save your results:</h3>

              <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Full Name *</label>
                  <input
                    type="text"
                    value={formData.firstname}
                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--surface2)',
                      border: '1px solid rgba(0,229,200,0.2)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--surface2)',
                      border: '1px solid rgba(0,229,200,0.2)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--surface2)',
                      border: '1px solid rgba(0,229,200,0.2)',
                      borderRadius: '8px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '14px 24px',
                    background: 'linear-gradient(135deg, #00b89c, #00e5c8)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#080c12',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'Saving...' : 'Save My Results →'}
                </button>
              </form>
            </div>
          </div>

          <p style={{ color: 'var(--text-subtle)', fontSize: '12px' }}>Your scores will be saved and you can view them anytime in HubSpot.</p>
        </div>
      </div>
    )
  }

  const question = QUESTIONS[current]
  const selected = answers[question.id]
  const progress = Math.round((current / QUESTIONS.length) * 100)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <style>{`
        :root {
          --bg: #080c12;
          --surface: #0f1520;
          --surface2: #141c28;
          --border: rgba(255,255,255,0.08);
          --teal: #00e5c8;
          --text: #e2e8f0;
          --text2: #94a3b8;
          --text-muted: #94a3b8;
          --text-subtle: #475569;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .option { transition: all 0.2s ease; }
        .option:hover { border-color: rgba(0,229,200,0.3); background: rgba(0,229,200,0.05); }
      `}</style>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: '80px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--teal)' }}>Vytal Future</div>
        <div style={{ fontSize: '12px', color: 'var(--teal)', background: 'rgba(0,229,200,0.1)', padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(0,229,200,0.25)' }}>Free Assessment</div>
      </nav>

      <div style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '12px', fontFamily: 'Rajdhani, sans-serif' }}>
              Discover Your <span style={{ color: 'var(--teal)' }}>Vytal Score</span>
            </h1>
            <p style={{ color: 'var(--text2)', fontSize: '16px' }}>Answer 12 quick questions and get your personalized health score — in under 3 minutes.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-subtle)', marginBottom: '8px' }}>
              <span>Question {current + 1} of {QUESTIONS.length}</span>
              <span>{progress}%</span>
            </div>
            <div style={{ height: '3px', background: 'var(--surface2)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'var(--teal)', width: `${progress}%`, transition: 'width 0.5s ease' }}></div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--teal)', background: 'rgba(0,229,200,0.1)', display: 'inline-block', padding: '3px 10px', borderRadius: '100px', marginBottom: '14px', border: '1px solid rgba(0,229,200,0.2)', textTransform: 'uppercase' }}>
              {question.section}
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px', fontFamily: 'Rajdhani, sans-serif', lineHeight: '1.3' }}>
              {question.text}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '28px', lineHeight: '1.6' }}>
              {question.sub}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: question.cols === 2 ? '1fr 1fr' : '1fr', gap: '10px' }}>
              {question.options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => selectOption(opt.score)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 18px',
                    background: selected === opt.score ? 'rgba(0,229,200,0.1)' : 'var(--surface2)',
                    border: selected === opt.score ? '1px solid var(--teal)' : '1px solid var(--border)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontSize: '22px', flexShrink: 0 }}>{opt.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>{opt.label}</div>
                    {opt.desc && <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{opt.desc}</div>}
                  </div>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: selected === opt.score ? '2px solid var(--teal)' : '2px solid var(--text-subtle)',
                    background: selected === opt.score ? 'var(--teal)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {selected === opt.score && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--bg)' }}></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={goBack}
              disabled={current === 0}
              style={{
                padding: '14px 28px',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                color: 'var(--text-muted)',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                opacity: current === 0 ? 0.5 : 1,
              }}
            >
              ← Back
            </button>
            <div></div>
            <button
              onClick={goNext}
              disabled={!selected}
              style={{
                padding: '14px 28px',
                background: selected ? 'linear-gradient(135deg, #00b89c, #00e5c8)' : 'var(--surface2)',
                border: 'none',
                borderRadius: '12px',
                color: selected ? '#080c12' : 'var(--text-muted)',
                fontWeight: '600',
                cursor: selected ? 'pointer' : 'not-allowed',
                opacity: selected ? 1 : 0.5,
              }}
            >
              {current === QUESTIONS.length - 1 ? 'Show My Score →' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}