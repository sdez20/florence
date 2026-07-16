"use client";
import { useState } from "react";

const FORMSPREE_ID = "mpqvqdod";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [focus, setFocus] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const FOCUS_AREAS = [
    "Mental and Emotional Wellbeing",
    "Nutrition and Gut Health",
    "Hormonal Health",
    "Relationships",
    "Intimacy",
    "Skin",
    "Culture and Heritage",
    "Season of Life",
  ];

  async function submit(e: any) {
    e.preventDefault();
    setErr("");
    if (!firstName || !lastName || !email || !email.includes("@")) {
      setErr("Please fill in every field with a valid email.");
      return;
    }
    setBusy(true);
    try {
      await fetch("https://formspree.io/f/" + FORMSPREE_ID, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Florence Waitlist — New Signup",
          first_name: firstName,
          last_name: lastName,
          area_of_focus: focus || "Not specified",
          email: email.toLowerCase().trim(),
        }),
      });
      setDone(true);
    } catch {
      setDone(true);
    }
    setBusy(false);
  }

  function scrollToWaitlist() {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fl">
      <style>{CSS}</style>

      <div className="fixed-bg" />

      <header className="hero">
        <nav className="nav">
          <img src="/logo.png" alt="Florence" className="nav-logo" />
          <button className="nav-btn" onClick={scrollToWaitlist}>Join the Waitlist</button>
        </nav>
        <div className="hero-inner">
          <div className="hero-card">
            <h1 className="hero-title">Florence</h1>
            <p className="hero-sub">A holistic wellness companion for every season of a woman&apos;s life</p>
            <button className="hero-cta" onClick={scrollToWaitlist}>Join the Waitlist</button>
          </div>
        </div>
      </header>

      <div className="stack">

        <section className="card-section center">
          <div className="inner-narrow">
            <p className="label">Why Florence</p>
            <p className="body">Florence brings your mind, hormones, gut health, nervous system, and nutrition into a single, unified conversation, synthesizing your life stage, culture, and unique physiology to mold the care around who you truly are.</p>
            <p className="body">Florence understands your story, honors your heritage, and adapts to the unique rhythm of your life.</p>
          </div>
          <div className="photo-grid">
            <div className="photo" style={{ backgroundImage: "url(/herbs.jpg)" }} />
            <div className="photo" style={{ backgroundImage: "url(/hands-mug.jpg)" }} />
            <div className="photo" style={{ backgroundImage: "url(/garden-light.jpg)" }} />
          </div>
        </section>

        <section className="card-section tint center">
          <div className="pills">
            {FOCUS_AREAS.map((f) => (
              <span className="pill" key={f}>{f}</span>
            ))}
          </div>
        </section>

        <section className="card-section">
          <div className="culture-grid">
            <div>
              <p className="label">Rooted in Every Culture</p>
              <h2>Wellness was never meant to be one-size-fits-all.</h2>
              <p className="body">Every culture carries its own timeless healing wisdom. Florence honors that heritage, integrating ancestral traditions with modern science.</p>
              <p className="body">Whether you are a woman in the Caribbean or a woman in the U.S., you deserve a wellness experience that speaks directly to your roots, your family&apos;s table, and who you are at your core.</p>
            </div>
            <div className="culture-photo" style={{ backgroundImage: "url(/culture-women.jpg)" }} />
          </div>
        </section>

        <section className="card-section center" id="waitlist">
          <div className="form-col">
            <p className="label">Coming Soon</p>
            <p className="body">Join the waitlist to be among the first women to experience Florence.</p>

            {done ? (
              <p className="thanks">Thank you for trusting us. Your place on the waitlist is secured, and we&apos;ll be in touch soon.</p>
            ) : (
              <form onSubmit={submit} className="form">
                <input className="fin" placeholder="FIRST NAME" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className="fin" placeholder="LAST NAME" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <select className="fin fsel" value={focus} onChange={(e) => setFocus(e.target.value)}>
                  <option value="">AREA OF FOCUS</option>
                  {FOCUS_AREAS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                <input className="fin" type="email" placeholder="EMAIL ADDRESS" value={email} onChange={(e) => setEmail(e.target.value)} />
                {err && <p className="err">{err}</p>}
                <button className="submit" type="submit" disabled={busy}>{busy ? "Joining..." : "Join the Waitlist"}</button>
                <p className="fine">By joining, you agree to receive launch updates and the occasional letter. Your information stays private and you can unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </section>

        <footer className="foot">
          <p className="foot-brand">Florence</p>
          <p className="foot-meta">© 2026</p>
        </footer>

      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

.fl * { margin:0; padding:0; box-sizing:border-box; }
.fl { color:#2A2E2B; font-family:'Montserrat',sans-serif; font-weight:300; line-height:1.7; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
.fl h1, .fl h2 { font-family:'Playfair Display',Georgia,serif; font-weight:400; line-height:1.15; color:#26543B; }
.fl .center { text-align:center; }
.fl .label { font-size:11px; letter-spacing:.32em; text-transform:uppercase; color:#4A7358; font-weight:600; margin-bottom:22px; }
.fl .body { font-size:1.05rem; color:#2A2E2B; margin-top:20px; }

.fl .fixed-bg { position:fixed; inset:0; z-index:-1;
  background-image:url('/hero.jpg'); background-size:cover; background-position:center; }

.fl .hero { position:relative; min-height:100vh; display:flex; flex-direction:column; }
.fl .nav { display:flex; align-items:center; justify-content:space-between; padding:28px 6%; }
.fl .nav-logo { height:80px; width:auto; filter:brightness(0) invert(1); }
.fl .nav-btn { background:rgba(255,255,255,0.92); border:none; color:#26543B; padding:12px 26px;
  font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:.18em; text-transform:uppercase; font-weight:600; cursor:pointer; transition:all .3s; }
.fl .nav-btn:hover { background:#fff; }
.fl .hero-inner { flex:1; display:flex; align-items:center; justify-content:center; padding:40px 4% 70px; }
.fl .hero-card { background:#FFFFFF; padding:90px 70px; max-width:1080px; width:100%; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.18); border-radius:4px; }
.fl .hero-title { font-size:clamp(3rem,7vw,5.2rem); color:#26543B; line-height:1; }
.fl .hero-sub { color:#5C584F; font-size:clamp(1rem,1.6vw,1.15rem); max-width:34ch; margin:20px auto 0; font-weight:300; }
.fl .hero-cta { margin-top:32px; background:#F0F7F3; color:#1F4732; border:1px solid rgba(38,84,59,0.4); padding:16px 42px;
  font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:.22em; text-transform:uppercase; font-weight:600; cursor:pointer; transition:all .3s; }
.fl .hero-cta:hover { background:#E3EFE8; }

.fl .stack { padding:120px 4% 100px; }
.fl .card-section { background:#FFFFFF; box-shadow:0 24px 70px rgba(0,0,0,0.18); max-width:1080px; margin:0 auto 140px; padding:90px 70px; border-radius:4px; }
.fl .card-section.tint { background:#F0F7F3; }
.fl .card-section h2 { font-size:2.6rem; }

.fl .inner-narrow { max-width:720px; margin:0 auto; }
.fl .photo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:60px; }
.fl .photo { height:360px; background-size:cover; background-position:center; background-color:#F0F7F3; }
.fl .pills { display:flex; flex-wrap:wrap; justify-content:center; gap:14px; }
.fl .pill { border:1px solid rgba(38,84,59,0.4); color:#1F4732; padding:12px 26px; border-radius:40px; font-size:.92rem; transition:all .35s; }
.fl .pill:hover { background:#26543B; color:#fff; border-color:#26543B; }
.fl .culture-grid { display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:center; }
.fl .culture-photo { aspect-ratio:3/4; background-size:cover; background-position:center; background-color:#F0F7F3; }

.fl .form-col { max-width:520px; margin:0 auto; text-align:center; }
.fl .form { margin-top:40px; text-align:left; }
.fl .fin { width:100%; background:transparent; border:none; border-bottom:1px solid rgba(42,46,43,0.28); padding:16px 2px; margin-bottom:24px; font-family:'Montserrat',sans-serif; font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:#2A2E2B; outline:none; transition:border-color .3s; }
.fl .fin::placeholder { color:#8d9189; letter-spacing:.16em; }
.fl .fin:focus { border-bottom-color:#26543B; }
.fl .fsel { -webkit-appearance:none; appearance:none; cursor:pointer; color:#8d9189;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2326543B' fill='none' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat:no-repeat; background-position:right 4px center; }
.fl .submit { width:100%; background:#F0F7F3; color:#1F4732; border:1px solid rgba(38,84,59,0.4); padding:18px;
  font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:.24em; text-transform:uppercase; font-weight:600; cursor:pointer; margin-top:10px; transition:all .3s; }
.fl .submit:hover { background:#E3EFE8; }
.fl .submit:disabled { opacity:.6; cursor:default; }
.fl .fine { font-size:.8rem; color:#8d9189; margin-top:20px; text-align:center; }
.fl .err { color:#a04040; font-size:.85rem; margin-bottom:12px; }
.fl .thanks { margin-top:36px; font-family:'Playfair Display',serif; font-style:italic; font-size:1.3rem; color:#26543B; line-height:1.6; }

.fl .foot { padding:50px 6% 30px; text-align:center; }
.fl .foot-brand { font-family:'Playfair Display',serif; font-size:1.9rem; color:#fff; text-shadow:0 2px 20px rgba(0,0,0,0.3); }
.fl .foot-meta { margin-top:12px; font-size:11px; letter-spacing:.2em; text-transform:uppercase; color:rgba(255,255,255,0.9); text-shadow:0 2px 20px rgba(0,0,0,0.3); }

@media (max-width:840px) {
  .fl .photo-grid, .fl .culture-grid { grid-template-columns:1fr; gap:30px; }
  .fl .card-section { padding:56px 30px; margin-bottom:90px; }
  .fl .stack { padding:80px 5% 80px; }
  .fl .fixed-bg { background-attachment:scroll; }
}
`;