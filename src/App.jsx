function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Elemental gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        {/* Fire glow (top-left) */}
        <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.55),rgba(255,0,0,0.35)_35%,transparent_60%)] blur-2xl" />
        {/* Water glow (bottom-right) */}
        <div className="absolute -bottom-32 -right-32 h-[65vh] w-[65vh] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.55),rgba(56,189,248,0.35)_35%,transparent_60%)] blur-2xl" />
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950" />
        {/* Sparkles and bubbles overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.05),transparent_18%)]" />
      </div>

      {/* Header */}
      <header className="relative px-6 py-8">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Fire & Water</h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-white/80">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">Elemental theme</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6">
        <div className="mx-auto max-w-5xl py-8 sm:py-16">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              A dance between <span className="bg-gradient-to-r from-orange-400 via-red-500 to-rose-500 bg-clip-text text-transparent">Fire</span>
              <span className="mx-2 text-white/70">and</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Water</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              A bold, elemental aesthetic with warm embers on the left and cool waves on the right.
              Perfect for portfolios, landing pages, or any project that needs dramatic contrast.
            </p>
          </div>

          {/* Two-element feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fire card */}
            <div className="group relative rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-rose-500/10 to-transparent p-6 sm:p-8 backdrop-blur">
              <div className="absolute -inset-0.5 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_220deg_at_30%_30%,rgba(255,115,0,0.25),rgba(255,0,0,0.18),transparent_60%)] blur-xl" />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔥</span>
                <h3 className="text-2xl font-bold">Fire</h3>
              </div>
              <p className="text-white/70 mb-6">
                Hot gradients, embers, and energetic accents. Great for calls-to-action and bold highlights.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium text-white transition active:scale-[0.98]">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 opacity-90" />
                  <span className="relative">Ignite</span>
                </button>
                <span className="text-xs text-white/60">Warm, vibrant, high-energy</span>
              </div>
            </div>

            {/* Water card */}
            <div className="group relative rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-blue-500/10 to-transparent p-6 sm:p-8 backdrop-blur">
              <div className="absolute -inset-0.5 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_40deg_at_70%_70%,rgba(56,189,248,0.25),rgba(59,130,246,0.18),transparent_60%)] blur-xl" />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💧</span>
                <h3 className="text-2xl font-bold">Water</h3>
              </div>
              <p className="text-white/70 mb-6">
                Cool tones, soft reflections, and soothing depth. Ideal for content areas and readability.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium text-white transition active:scale-[0.98]">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 opacity-90" />
                  <span className="relative">Flow</span>
                </button>
                <span className="text-xs text-white/60">Calm, clean, refreshing</span>
              </div>
            </div>
          </div>

          {/* Divider with yin-yang vibe */}
          <div className="relative my-12 sm:my-16 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-orange-500/0 via-white/15 to-sky-400/0" />
            <div className="absolute -translate-y-1/2 top-1/2 grid grid-cols-2 overflow-hidden rounded-full border border-white/10">
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-orange-500/20 to-orange-500/10">heat</span>
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-sky-400/20 to-sky-400/10">cool</span>
            </div>
          </div>

          {/* CTA */}
          <div className="relative">
            <div className="mx-auto max-w-3xl text-center rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
              <h4 className="text-2xl sm:text-3xl font-semibold">Bring balance to your next project</h4>
              <p className="mt-3 text-white/70">
                Use this elemental palette as a starting point. Expand sections, add content, and make it yours.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 opacity-90" />
                  <span className="relative">Use Fire Style</span>
                </a>
                <a href="#" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 opacity-90" />
                  <span className="relative">Use Water Style</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle floating bits */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-pulse absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-orange-400/70 blur-[1px]" />
        <div className="animate-pulse absolute left-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-rose-400/70 blur-[1px]" />
        <div className="animate-pulse absolute right-[15%] bottom-[20%] h-2 w-2 rounded-full bg-sky-400/70 blur-[1px]" />
        <div className="animate-pulse absolute right-[22%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-cyan-300/70 blur-[1px]" />
      </div>

      {/* Footer */}
      <footer className="relative mt-12 sm:mt-16 px-6 pb-10">
        <div className="mx-auto max-w-5xl text-center text-sm text-white/60">
          Crafted with a balance of energy and calm.
        </div>
      </footer>
    </div>
  );
}

export default App;
