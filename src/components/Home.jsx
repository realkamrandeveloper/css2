function Home() {
  return (
    <main className="home-page">
      <div className="home-page__inner">
        <header className="home-header">
          <div className="home-header__brand">indeed</div>
          <nav className="home-nav">
            <a className="home-nav__link active" href="#">Home</a>
            <a className="home-nav__link" href="#">Company reviews</a>
          </nav>
          <div className="home-actions">
            <a className="home-action" href="#">Sign in</a>
            <span className="home-action-separator">|</span>
            <a className="home-action" href="#">Employers / Post Job</a>
          </div>
        </header>

        <section className="search-block">
          <div className="search-card">
            <div className="search-field search-field--wide">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                aria-label="What"
              />
            </div>
            <div className="search-field search-field--wide search-field--divider">
              <span className="search-icon">📍</span>
              <input
                type="text"
                placeholder='City, state, zip code, or "remote"'
                aria-label="Where"
              />
            </div>
            <button className="button-find" type="button">Find jobs</button>
          </div>
        </section>

        <section className="hero-section">
          <h1>indeed</h1>
          <p className="hero-subtitle">Your next job starts here</p>
          <p className="hero-copy">
            Create an account or sign in to see your personalised job recommendations.
          </p>
          <button className="button-cta" type="button">Get Started →</button>
        </section>
      </div>
    </main>
  )
}

export default Home;
