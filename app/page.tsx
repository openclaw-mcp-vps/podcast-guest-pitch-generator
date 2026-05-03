export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Pitching
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Land More Podcast Spots with{' '}
          <span className="text-[#58a6ff]">Personalized Pitches</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          PitchCast researches podcast hosts and recent episodes, then generates tailored pitch emails with compelling talking points — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Pitching for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: '01', title: 'Enter a Podcast', desc: 'Paste the podcast name or RSS feed URL.' },
          { step: '02', title: 'We Research It', desc: 'AI scans recent episodes, host bio, and themes.' },
          { step: '03', title: 'Get Your Pitch', desc: 'Receive a personalized email ready to send.' }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] font-mono text-sm mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-[#8b949e] text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <h2 className="text-white text-2xl font-bold mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to get booked</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $13<span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-xs mb-6">Billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited pitch generations',
              'AI episode & host research',
              'Personalized talking points',
              'Email templates & subject lines',
              'Export to clipboard or email'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-white text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does PitchCast personalize my pitch?',
              a: 'Our AI analyzes the podcast\'s recent episodes, host background, and recurring themes to craft a pitch that speaks directly to what the host cares about.'
            },
            {
              q: 'Do I need any technical skills to use it?',
              a: 'Not at all. Just enter the podcast name, tell us a bit about yourself, and we handle the research and writing automatically.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. You can cancel at any time from your billing portal with no questions asked. You keep access until the end of your billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} PitchCast. All rights reserved.
      </footer>
    </main>
  )
}
