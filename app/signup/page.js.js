'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Wire this to your backend API
      // For now, just store locally and show success
      console.log('Form submitted:', formData)
      
      // You can send this to your backend later:
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      setSubmitted(true)
      
      // Redirect to pricing or dashboard after 2 seconds
      setTimeout(() => {
        router.push('/?scroll=pricing')
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)'}}>
        <div style={{textAlign: 'center', maxWidth: '500px', padding: '40px'}}>
          <div style={{fontSize: '60px', marginBottom: '20px'}}>✓</div>
          <h1 style={{fontSize: '32px', color: 'var(--text)', marginBottom: '12px', fontFamily: 'var(--font-d)'}}>Welcome to Vytal Future!</h1>
          <p style={{color: 'var(--text2)', marginBottom: '30px', lineHeight: '1.6'}}>
            We've received your information. Check your email for next steps, and get ready to optimize your health.
          </p>
          <p style={{color: 'var(--text3)', fontSize: '14px'}}>Redirecting to pricing...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px', paddingBottom: '60px'}}>
      <div style={{maxWidth: '500px', margin: '0 auto', padding: '0 20px'}}>
        
        {/* Header */}
        <div style={{marginBottom: '50px', textAlign: 'center'}}>
          <h1 style={{fontSize: '40px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '12px', fontFamily: 'var(--font-d)'}}>
            Start Your Journey
          </h1>
          <p style={{color: 'var(--text2)', fontSize: '16px', lineHeight: '1.6'}}>
            Join thousands optimizing their health with Vytal Future
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          background: 'var(--bg2)',
          border: '1px solid rgba(0,229,200,0.1)',
          borderRadius: '12px',
          padding: '40px',
          backdropFilter: 'blur(10px)'
        }}>
          
          {/* First Name */}
          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: 'var(--text)', fontSize: '14px', fontWeight: '500', marginBottom: '8px', fontFamily: 'var(--font-d)'}}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="John"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg3)',
                border: '1px solid rgba(0,229,200,0.2)',
                borderRadius: '8px',
                color: 'var(--text)',
                fontFamily: 'var(--font-b)',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.2)'}
            />
          </div>

          {/* Last Name */}
          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: 'var(--text)', fontSize: '14px', fontWeight: '500', marginBottom: '8px', fontFamily: 'var(--font-d)'}}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Doe"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg3)',
                border: '1px solid rgba(0,229,200,0.2)',
                borderRadius: '8px',
                color: 'var(--text)',
                fontFamily: 'var(--font-b)',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.2)'}
            />
          </div>

          {/* Email */}
          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: 'var(--text)', fontSize: '14px', fontWeight: '500', marginBottom: '8px', fontFamily: 'var(--font-d)'}}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg3)',
                border: '1px solid rgba(0,229,200,0.2)',
                borderRadius: '8px',
                color: 'var(--text)',
                fontFamily: 'var(--font-b)',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.2)'}
            />
          </div>

          {/* Phone (Optional) */}
          <div style={{marginBottom: '32px'}}>
            <label style={{display: 'block', color: 'var(--text)', fontSize: '14px', fontWeight: '500', marginBottom: '8px', fontFamily: 'var(--font-d)'}}>
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg3)',
                border: '1px solid rgba(0,229,200,0.2)',
                borderRadius: '8px',
                color: 'var(--text)',
                fontFamily: 'var(--font-b)',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,229,200,0.2)'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: 'linear-gradient(135deg, #00e5c8 0%, #00b4a0 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#080c12',
              fontFamily: 'var(--font-d)',
              fontSize: '15px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.3s',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 12px 24px rgba(0,229,200,0.3)')}
            onMouseLeave={(e) => !loading && (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = 'none')}
          >
            {loading ? 'Creating Account...' : 'Get Started →'}
          </button>

          {/* Sign In Link */}
          <p style={{textAlign: 'center', marginTop: '20px', color: 'var(--text2)', fontSize: '14px'}}>
            Already have an account? <a href="/" onClick={() => router.push('/')} style={{color: 'var(--teal)', cursor: 'pointer', textDecoration: 'none'}}>Sign in</a>
          </p>
        </form>

        {/* Footer Note */}
        <p style={{textAlign: 'center', marginTop: '40px', color: 'var(--text3)', fontSize: '12px', lineHeight: '1.6'}}>
          By signing up, you agree to our Terms of Service and Privacy Policy.<br/>
          We'll never share your information.
        </p>
      </div>
    </div>
  )
}
