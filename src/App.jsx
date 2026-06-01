import './App.css'
import sheMovesLogo from './assets/sheMovesLogo.jpg'
import aliPhoto from './assets/ali.jpg'
import chenPhoto from './assets/chen.jpg'

const instructors = [
  {
    name: 'Ali',
    title: 'Femme Sultry Beginner',
    time: 'June 20 · 5:30PM – 7:00PM',
    genre: 'Femme Sultry Beginner',
    song: 'Kiss it Better by Rihanna',
    bio: 'Ali leads the first session of the day with a sultry, feminine beginner choreography that helps you own your energy and move with intention. Expect sensual, confident movement in a fully judgment-free space.',
    quote: '"This class is for every woman who has ever held back. Tonight, we let go."',
    tags: ['Femme Sultry', 'Beginner', 'Beyoncé Vibes', '4:30PM – 6:00PM'],
    photo: aliPhoto,
  },
]

const expectItems = [
  {
    icon: '✨',
    title: "Feel Confident",
    desc: "Feel confident in your own movement — no matter where you're starting from. Every step you take is valid.",
  },
  {
    icon: '🤝',
    title: "Meet New Friends",
    desc: "Meet new friends and grow together. She Moves is built on community, connection, and showing up for each other.",
  },
  {
    icon: '💃',
    title: "Reconnect With Yourself",
    desc: "Reconnect with your femininity and self-expression. Let movement be the way you come back home to yourself.",
  },
  {
    icon: '🤍',
    title: "Heal & Have Fun",
    desc: "Heal, release, and have fun without judgment. This is a safe space to let go, breathe, and just move.",
  },
]

export default function App() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <img src={sheMovesLogo} alt="SheMoves Logo" className="hero-logo" />
          <h1>She<span>Moves</span></h1>
          <p className="hero-tagline">
            For women ready to move, heal & reconnect. <br />
            Safe space, No judgement, Good energy only
          </p>
          <a href="#register" className="btn-primary">Reserve My Slot</a>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>


      {/* ── THE EVENT ── */}
      <div style={{ width: '100%' }}>
        <div className="section">
          <div className="event-section">
            <div>
              <span className="section-label">✨ Introducing She Moves ✨</span>
              <h2 className="section-title">Move. Empower.<br />Reconnect.</h2>
              <p className="section-body" style={{ marginBottom: '24px' }}>
                A space created for women to move, reconnect, and rediscover confidence through dance. 💗
              </p>
              <p className="section-body" style={{ marginBottom: '32px' }}>
                She Moves was born from the idea that dance should feel safe, empowering, and beginner-friendly — especially for women who may have lost touch with their confidence, creativity, or joy along the way.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="event-highlight">
                  <span className="event-highlight-icon">💗</span>
                  <p>
                    <strong>Not About Perfection</strong>
                    This is not about being the best dancer in the room. It's about showing up for yourself, moving freely, and allowing your body to take up space again.
                  </p>
                </div>
                <div className="event-highlight">
                  <span className="event-highlight-icon">💫</span>
                  <p>
                    <strong>Beginner-Friendly Choreography</strong>
                    Our sessions feature beginner-friendly choreography designed for women who simply want to try, move, and enjoy the experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="event-visual">
              <div className="event-card">
                <span className="event-card-icon">🤍</span>
                <h3>This Is Your Sign</h3>
                <p>
                  No pressure. No expectations. Just movement, confidence, and community.
                  <br /><br />
                  This is your sign to start moving again.
                  <br />
                  Welcome to <em>She Moves</em>.
                </p>
                <span className="event-card-badge">Open to All Women</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── INSTRUCTOR ── */}
      <div className="instructor-wrap">
        <div className="section">
          <span className="section-label">Your Instructor</span>
          <div className="instructors-grid">
            {instructors.map((inst) => (
              <div className="instructor-card" key={inst.name}>
                {inst.photo ? (
                  <img src={inst.photo} alt={inst.name} className="instructor-photo" />
                ) : (
                  <div className="instructor-photo-placeholder">
                    <span>📸</span>
                    <p>Add photo here</p>
                  </div>
                )}
                <h2 className="instructor-name">{inst.name}</h2>
                <p className="instructor-title">{inst.title}</p>
                <div className="instructor-class-info">
                  <span>🕐 {inst.time}</span>
                  <span>🎵 {inst.song}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── WHAT TO EXPECT ── */}
      <div style={{ width: '100%' }}>
        <div className="section">
          <span className="section-label">What to Expect</span>
          <h2 className="section-title">Through Movement,<br />We Hope to Create a Space Where Women Can:</h2>
          <div className="expect-grid">
            {expectItems.map((item) => (
              <div className="expect-card" key={item.title}>
                <span className="expect-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── REGISTRATION ── */}
      <div className="register-wrap" id="register">
        <div className="section">
          <div className="register-box">
            <p className="register-price">₱350</p>
            <p className="register-price-sub">Registration Fee</p>
            <h2 className="section-title">Reserve Your Slot</h2>
            <p className="section-body">
              Slots are limited to 15 participants per class. Secure your spot now and join an unforgettable afternoon of dance, music, and connection.
            </p>
            <a href="https://forms.gle/WNaNDPUpyb5PzGmy9" target="_blank" rel="noopener noreferrer" className="btn-primary">Reserve My Slot Now</a>
            <p className="gc-invite">
              Teasers are posted in our GC and you are welcome to join. ☺️{' '}
              <a href="https://ig.me/j/Abau4BdjeSu--DcM/" target="_blank" rel="noopener noreferrer">Join here</a>
            </p>
            <div className="register-notes">
              <p className="register-note">Limited to 15 slots — first come, first served</p>
              <p className="register-note">Open to All Women</p>
              <p className="register-note">This is a community social event, not a professional dance class</p>
              <p className="register-note">Wear comfortable clothes and bring good energy</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <p>© 2026 SheMoves. All rights reserved.</p>
          <p>A community event for women who love to move.</p>
        </div>
      </footer>
    </>
  )
}
