const plans = [
  { name: "Essential", price: "5,000", note: "A clean online home for growing photographers.", features: ["Modern 1–3 page website", "Portfolio gallery", "Packages and pricing section", "WhatsApp enquiry buttons", "Mobile-friendly design", "Hosting and maintenance", "1 small content update monthly"] },
  { name: "Signature", price: "8,500", note: "A stronger website for established photography brands.", popular: true, features: ["Custom 5-page website", "Multiple portfolio galleries", "Packages and pricing pages", "WhatsApp enquiry journey", "Testimonials and Instagram links", "Hosting and maintenance", "2 content updates monthly", "Basic search setup"] },
  { name: "Studio", price: "12,500", note: "For studios with more work, services and regular updates.", features: ["Expanded custom website", "Advanced portfolio collections", "Multiple service categories", "Priority content updates", "WhatsApp conversion setup", "Hosting and maintenance", "Up to 4 updates monthly", "Performance and search setup"] },
];

const faqs = [
  ["Is there a website development fee?", "No large development fee. You simply choose a monthly plan and pay before we begin. Your custom domain is billed separately."],
  ["Will my website look like everyone else's?", "No. Every website receives its own visual direction based on your photography style, colours and brand personality."],
  ["How do I send portfolio updates?", "Send your new photos and instructions to us on WhatsApp. We optimise the images and update your website for you."],
  ["Can I change my packages and prices?", "Yes. Package, price, text and portfolio updates are included according to the monthly allowance in your plan."],
  ["Do I need to manage the website?", "No. We take care of hosting, maintenance and requested content updates, so you can focus on your clients and photography."],
];

export default function Home() {
  return <main>
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="Kalana Square for Photographers home"><span>KALANA SQUARE</span><small>FOR PHOTOGRAPHERS</small></a>
      <nav aria-label="Main navigation"><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>
      <a className="navCta" href="#pricing">View plans</a>
    </header>

    <section className="hero shell" id="top">
      <div className="heroCopy">
        <p className="eyebrow">WEBSITES FOR SRI LANKAN PHOTOGRAPHERS</p>
        <h1>Your work deserves more than a PDF.</h1>
        <p className="lead">A modern photography website that presents your portfolio, packages and pricing beautifully. We build it, host it and keep it updated for you.</p>
        <div className="heroActions"><a className="button dark" href="#pricing">See monthly plans</a><a className="textLink" href="#how">See how it works <span>↘</span></a></div>
        <div className="microProof"><span>No large upfront fee</span><span>Managed for you</span><span>WhatsApp ready</span></div>
      </div>
      <div className="heroVisual" aria-label="Photographer working in a studio">
        <img src="https://images.unsplash.com/photo-1611093793031-46db535bde90?fm=jpg&fit=crop&w=1400&q=84" alt="Photographer adjusting a professional camera in a studio" />
        <div className="visualCard"><span>YOUR DIGITAL STUDIO</span><strong>Portfolio. Packages.<br/>Enquiries.</strong></div>
      </div>
    </section>

    <section className="statement"><div className="shell statementGrid"><p className="sectionIndex">01 / WHY A WEBSITE</p><h2>Make the right first impression before the first WhatsApp message.</h2><p>Let potential clients explore your best work, understand your packages and contact you with confidence—all from one professional link.</p></div></section>

    <section className="steps shell" id="how">
      <div className="sectionHead"><div><p className="eyebrow">SIMPLE FROM DAY ONE</p><h2>We take care of the website.</h2></div><p>You send your information once. After launch, simply message us whenever something needs to change.</p></div>
      <div className="stepGrid">
        <article><span>01</span><h3>Choose your plan</h3><p>Select the level that fits your portfolio, services and update needs.</p></article>
        <article><span>02</span><h3>Send your content</h3><p>Share your logo, best photographs, packages and contact details via WhatsApp.</p></article>
        <article><span>03</span><h3>We build your website</h3><p>We create a distinct, mobile-friendly design around your photography style.</p></article>
        <article><span>04</span><h3>Message us for updates</h3><p>New gallery or changed price? Send it to us and we handle the website update.</p></article>
      </div>
    </section>

    <section className="pricing" id="pricing"><div className="shell">
      <div className="pricingIntro"><p className="eyebrow">CLEAR MONTHLY PRICING</p><h2>Start without a large development cost.</h2><p>Every plan includes your website, reliable hosting, ongoing maintenance and direct support.</p></div>
      <div className="pricingGrid">{plans.map(plan => <article className={`plan ${plan.popular ? "featured" : ""}`} key={plan.name}>
        {plan.popular && <span className="badge">MOST POPULAR</span>}<p className="planName">{plan.name}</p><div className="price"><small>LKR</small><strong>{plan.price}</strong><span>/ month</span></div><p className="planNote">{plan.note}</p><a className={`button ${plan.popular ? "light" : "dark"}`} href="#contact">Choose {plan.name}</a><ul>{plan.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
      </article>)}</div>
      <p className="pricingFine">Custom domain registration or renewal is charged separately. Fair-use terms apply to monthly updates.</p>
    </div></section>

    <section className="included shell"><div className="sectionHead"><div><p className="eyebrow">INCLUDED IN EVERY PLAN</p><h2>Everything essential. Nothing complicated.</h2></div></div><div className="includedGrid">
      <div><span>01</span><h3>A design that fits you</h3><p>Not a copy-and-paste website. Your visual direction is shaped around your photography.</p></div><div><span>02</span><h3>Built for mobile</h3><p>A smooth experience for clients discovering your work from Facebook and Instagram.</p></div><div><span>03</span><h3>WhatsApp enquiries</h3><p>Clear buttons guide visitors directly into a conversation with your business.</p></div><div><span>04</span><h3>Hands-off updates</h3><p>Send us the new content. We optimise, update and keep the website working.</p></div>
    </div></section>

    <section className="faq" id="faq"><div className="shell faqGrid"><div><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Good to know before you begin.</h2></div><div className="faqList">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="contact shell" id="contact"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Turn your photography into a website clients remember.</h2><p>Tell us what you photograph and share your current portfolio. We’ll recommend the right plan and explain the next step.</p><a className="button light" href="#pricing">Start on WhatsApp <span>↗</span></a><small>WhatsApp number will be connected before launch.</small></section>
    <footer className="shell"><div className="brand"><span>KALANA SQUARE</span><small>FOR PHOTOGRAPHERS</small></div><p>Managed photography websites for Sri Lanka.</p><p>© 2026 Kalana Square</p></footer>
  </main>;
}
