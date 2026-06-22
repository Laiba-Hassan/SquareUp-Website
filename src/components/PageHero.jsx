const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-ink-900 bg-noise border-b border-white/5">
      <div className="hero-glow absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-4">{title}</h1>
        {subtitle && <p className="text-white/50 mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
export default PageHero 