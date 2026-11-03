"use client";
import { useEffect } from "react";

const FORMSPREE_ID = "mpqvqdod";

const CSS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Jost:wght@300;400;500&family=Pinyon+Script&display=swap');

*{box-sizing:border-box;margin:0;padding:0}
:root{
 --paper:#FCFBF8;
 --paper2:#F6F3EC;
 --ink:#1d1812;
 --forest:#263B2D;
 --forest2:#324D3B;
 --terra:#b8402a;
 --line:#E6E1D6;
 --muted:#6c6356;
 --cta:#16140F;
 --cta-line:#8f8778;
 --serif:'Fraunces',Georgia,serif;
 --sans:'Jost',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--paper);color:var(--ink);font-family:var(--sans);font-weight:300;line-height:1.75;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
.wrap{max-width:1240px;margin:0 auto;padding:0 clamp(24px,5vw,70px)}
.eyebrow{font-size:12px;letter-spacing:2.6px;text-transform:uppercase;color:var(--muted);font-weight:500}

/* NAV */
.nav{display:flex;align-items:center;justify-content:space-between;padding:26px clamp(24px,5vw,70px);border-bottom:1px solid var(--line)}
.nav .links{display:flex;gap:24px;flex:1}
.nav .links.r{justify-content:flex-end}
.nav a{font-size:9.5px;letter-spacing:1.7px;text-transform:uppercase}
.nav a:hover{color:var(--terra)}
.logo{font-family:var(--serif);font-weight:400;font-size:28px;letter-spacing:7px}

/* HERO */
.hero{display:grid;grid-template-columns:1.02fr 1fr;min-height:88vh}
.hero-text{display:flex;flex-direction:column;justify-content:center;padding:70px clamp(28px,5vw,80px)}
.hero-text .eyebrow{font-size:12px;letter-spacing:2.6px;font-weight:600;margin-bottom:22px;color:var(--muted)}
.hero h1{font-family:var(--serif);font-weight:300;font-size:clamp(44px,5.6vw,84px);line-height:.98;letter-spacing:-1px;color:var(--ink)}
.hero h1 em{font-style:italic;font-weight:300}
.hero h1 .caps{text-transform:uppercase;letter-spacing:1px}
.hero .btn{margin-top:42px;background:var(--ink);color:var(--paper)}
.hero .btn:hover{background:var(--terra);color:#fff}
.hero-img{position:relative;overflow:hidden;background:var(--forest)}
.hero-img img{width:100%;height:100%;object-fit:cover;object-position:60% center}

/* INTRO (what Florence is) */
.intro{padding:clamp(60px,8vw,110px) 0;text-align:center;border-top:1px solid var(--line)}
.intro-lead{font-family:var(--serif);font-weight:300;font-size:clamp(26px,3.3vw,44px);line-height:1.26;letter-spacing:-.4px;color:var(--ink);max-width:26ch;margin:0 auto 26px}
.intro-sub{font-size:15px;line-height:1.9;color:#53493c;max-width:58ch;margin:0 auto}
.btn{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;background:var(--ink);color:var(--paper);font-size:10.5px;letter-spacing:2.4px;text-transform:uppercase;font-weight:500;padding:17px 34px;cursor:pointer;border:0}
.btn:hover{background:var(--terra)}

/* SPLIT (culturally intelligent) */
.split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,96px);align-items:stretch;border-top:1px solid var(--line)}
.split .eyebrow{margin-bottom:20px}
.split h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);line-height:1.12;letter-spacing:-.4px;margin-bottom:26px}
.split h2 em{font-style:italic}
.split p{font-size:14.5px;line-height:1.9;color:#53493c;margin-bottom:18px;max-width:46ch}
.split p:last-child{margin-bottom:0}
.split > div:first-child{text-align:center;padding:clamp(60px,8vw,110px) clamp(16px,3vw,40px) clamp(60px,8vw,110px) clamp(28px,5vw,72px);display:flex;flex-direction:column;justify-content:center}
.split > div:first-child p{margin-left:auto;margin-right:auto}
.split-img{overflow:hidden;border-radius:14px;opacity:0;transition:opacity 1.2s ease}
.split-img.in-view{opacity:1}
.split-img img{width:100%;height:100%;object-fit:cover;object-position:center;min-height:100%}

/* STATEMENT */
.statement{padding:clamp(60px,8vw,110px) 0}
.statement-box{border:1px solid var(--ink);padding:clamp(56px,8vw,104px) clamp(24px,6vw,70px);text-align:center}
.statement-inner{max-width:720px;margin:0 auto}
.statement-box .eyebrow{margin-bottom:24px}
.statement-box h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);line-height:1.06;letter-spacing:-.5px;max-width:15ch;margin:0 auto}
.statement-box h2 em{font-style:italic;color:var(--terra)}
.statement-box p{font-size:15px;line-height:1.9;color:#53493c;max-width:60ch;margin:30px auto 0}

/* RED BLEED */
.bleed{background:var(--forest);color:var(--paper);text-align:center;padding:clamp(80px,11vw,150px) clamp(24px,5vw,70px)}
.bleed h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4.8vw,64px);line-height:1.14;letter-spacing:-.5px;max-width:22ch;margin:0 auto}
.bleed h2 em{font-style:italic}

/* DISCIPLINES */
.disc-sec{padding:clamp(60px,8vw,110px) 0}
.disc-sec .eyebrow{margin-bottom:12px;text-align:center}
.disc-sec .sub{font-family:var(--serif);font-size:clamp(32px,4vw,52px);font-weight:300;text-align:center;margin-bottom:56px;letter-spacing:-.5px}
.disc-row{display:grid;grid-template-columns:repeat(5,1fr)}
.disc{text-align:center;padding:0 18px;border-left:1px solid var(--line)}
.disc:first-child{border-left:0}
.disc svg{width:46px;height:52px;fill:none;stroke:var(--forest);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;margin:0 auto 20px}
.disc h4{font-size:10px;letter-spacing:1.7px;text-transform:uppercase;font-weight:500;min-height:28px;margin-bottom:12px;line-height:1.5}
.disc p{font-size:11.5px;color:#64695d;line-height:1.7}

/* WHAT'S INSIDE — FLIP CARDS */
.inside{padding:clamp(60px,8vw,110px) 0;border-top:1px solid var(--line)}
.inside-head{text-align:center;max-width:780px;margin:0 auto 54px}
.inside-head .eyebrow{margin-bottom:16px}
.inside-head h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);line-height:1.12;letter-spacing:-.5px;margin-bottom:18px}
.inside-head h2 em{font-style:italic}
.inside-head p{font-family:var(--serif);font-style:italic;font-weight:300;font-size:clamp(18px,2vw,24px);color:#4A5749}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:clamp(14px,1.6vw,22px)}
.flip{perspective:1600px;aspect-ratio:1/1;cursor:pointer}
.flip-inner{position:relative;width:100%;height:100%;transition:transform .7s cubic-bezier(.4,.1,.2,1);transform-style:preserve-3d;border-radius:14px}
.flip.flipped .flip-inner{transform:rotateY(180deg)}
.flip-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;overflow:hidden}
.flip-front img{width:100%;height:100%;object-fit:cover}
.flip-front .topscrim{position:absolute;top:0;left:0;right:0;height:140px;background:linear-gradient(180deg,rgba(0,0,0,.42),transparent)}
.flip-front .num{position:absolute;top:20px;left:22px;font-family:var(--serif);font-size:30px;color:#fff}
.flip-front .lab{position:absolute;left:22px;bottom:22px;color:#fff;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:500;text-shadow:0 1px 10px rgba(0,0,0,.5)}
.flip-front .hint{position:absolute;right:20px;bottom:20px;color:#fff;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;opacity:.85;display:flex;align-items:center;gap:6px}
.flip-front .hint svg{width:13px;height:13px;stroke:#fff;fill:none;stroke-width:1.4}
.flip-back{transform:rotateY(180deg);background:#16140F;color:var(--paper);display:flex;flex-direction:column;justify-content:center;padding:clamp(28px,4vw,48px)}
.flip-back .num{font-family:var(--serif);font-size:24px;color:var(--terra);margin-bottom:16px}
.flip-back h3{font-family:var(--serif);font-weight:300;font-size:clamp(24px,2.6vw,34px);line-height:1.12;margin-bottom:16px}
.flip-back p{font-size:13.5px;line-height:1.85;color:#d7ded3;max-width:34ch}
.flip-back .back-hint{position:absolute;right:20px;bottom:20px;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;opacity:.6}

/* PROFILE + STEPS + CHAT */
.profile-sec{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,90px);align-items:stretch;border-top:1px solid var(--line)}
.profile-sec > div:last-child{padding:clamp(60px,8vw,110px) clamp(28px,5vw,70px) clamp(60px,8vw,110px) clamp(24px,4vw,60px);display:flex;flex-direction:column;justify-content:center;text-align:center}
.pf-img{overflow:hidden;border-radius:14px;opacity:0;transform:translateX(-70px);transition:opacity 1s ease,transform 1.05s cubic-bezier(.2,.7,.2,1)}
.pf-img.in-view{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.split-img,.pf-img{opacity:1!important;transform:none!important;transition:none}}
.pf-img img{width:100%;height:100%;object-fit:cover;object-position:center top;min-height:100%}
.profile-sec .eyebrow{margin-bottom:16px}
.profile-sec h3{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);margin-bottom:20px}
.profile-sec .lead{font-size:14.5px;line-height:1.9;color:#53493c;max-width:44ch;margin-left:auto;margin-right:auto}
.profile-sec .chat{text-align:left}
.chat{margin-top:28px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:24px;display:flex;flex-direction:column;gap:14px}
.crow{display:flex;gap:11px;align-items:flex-start}
.crow.me{justify-content:flex-end}
.av{width:34px;height:34px;border-radius:50%;background:#efe9dd;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Pinyon Script',cursive;font-weight:400;font-size:23px;color:var(--terra);line-height:1;padding-bottom:3px;overflow:hidden}
.bub{padding:11px 14px;font-size:12.5px;line-height:1.55;max-width:84%;border-radius:4px}
.bub .sp{display:block;font-size:8.5px;letter-spacing:.8px;text-transform:uppercase;color:#8a8275;margin-bottom:4px}
.bub.them{background:#ece5d7;color:var(--ink)}
.bub.me{background:#16140F;color:var(--paper)}
.bub.me .sp{color:#9a9488}
.steps-sec{border-top:1px solid var(--line);padding-top:clamp(60px,8vw,110px)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:34px;padding:0 0 clamp(60px,8vw,110px)}
.step{border-top:1px solid var(--ink);padding-top:22px}
.step .sn{font-size:12px;letter-spacing:2px;color:var(--muted);margin-bottom:14px;display:block}
.step h4{font-family:var(--serif);font-weight:300;font-size:clamp(22px,2.4vw,28px);margin-bottom:12px}
.step p{font-size:13.5px;line-height:1.8;color:#53493c}

/* MEMBERSHIPS */
.mem{padding:clamp(60px,8vw,110px) 0;border-top:1px solid var(--line)}
.mem-head{text-align:center;max-width:720px;margin:0 auto 50px}
.mem-head .eyebrow{margin-bottom:16px}
.mem-head h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);letter-spacing:-.5px;margin-bottom:16px}
.mem-head p{font-size:14.5px;color:#53493c}
.plans{display:grid;grid-template-columns:1fr 1fr;gap:26px}
.plan{border:1px solid var(--line);background:#fff;border-radius:12px;padding:clamp(30px,3.4vw,44px);display:flex;flex-direction:column}
.plan.dark{background:#16140F;color:var(--paper);border-color:#16140F}
.plan .pe{font-size:10px;letter-spacing:2.4px;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.plan.dark .pe{color:#aebaa6}
.plan h3{font-family:var(--serif);font-weight:300;font-size:clamp(28px,3vw,36px);margin-bottom:12px}
.plan .price{font-family:var(--serif);font-weight:300;font-size:40px;margin-bottom:8px}
.plan .price span{font-family:var(--sans);font-size:13px;color:var(--muted)}
.plan.dark .price span{color:#aebaa6}
.plan .pd{font-size:13.5px;line-height:1.7;color:#53493c;margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid var(--line)}
.plan.dark .pd{color:#cdd6c9;border-color:rgba(255,255,255,.18)}
.plan ul{list-style:none;margin-bottom:30px;flex:1}
.plan li{font-size:13px;line-height:1.6;color:#4a4236;padding-left:20px;position:relative;margin-bottom:12px}
.plan.dark li{color:#d7ded3}
.plan li:before{content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;background:var(--terra)}
.plan .btn{width:100%}
.plan.dark .btn{background:var(--paper);color:var(--ink)}
.plan.dark .btn:hover{background:var(--terra);color:#fff}
.founding{margin-top:26px;padding:clamp(30px,4vw,48px);background:var(--paper2);border:1px solid var(--line);border-radius:12px;text-align:center}
.founding .eyebrow{margin-bottom:14px}
.founding h3{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);margin-bottom:14px}
.founding p{font-size:15px;line-height:1.8;color:#4a4236;max-width:60ch;margin:0 auto 14px}
.founding p .big{font-family:var(--serif);font-size:22px;color:var(--terra)}
.founding .small{font-size:11.5px;color:var(--muted);max-width:66ch;margin:0 auto;line-height:1.7}

/* MID WAITLIST CTA */
.cta-mid{position:relative;min-height:72vh;display:flex;align-items:center;overflow:hidden;border-top:1px solid var(--line)}
.cta-mid-bg{position:absolute;inset:0}
.cta-mid-bg img{width:100%;height:100%;object-fit:cover;object-position:center}
.cta-mid-scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(28,8,4,.76) 0%,rgba(28,8,4,.42) 46%,rgba(28,8,4,.06) 76%)}
.cta-mid-text{position:relative;z-index:2;max-width:1240px;margin:0 auto;width:100%;padding:72px clamp(28px,5vw,80px);display:flex;flex-direction:column;align-items:flex-start}
.cta-mid-text .eyebrow{margin-bottom:18px;color:#f0c9bc}
.cta-mid-text h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4.2vw,58px);line-height:1.05;letter-spacing:-.5px;margin-bottom:18px;color:#fff;max-width:16ch}
.cta-mid-text h2 em{font-style:italic}
.cta-mid-text p{font-size:14.5px;line-height:1.85;color:#f4e7e1;max-width:40ch;margin-bottom:34px}
.cta-mid-text .btn{align-self:flex-start;background:var(--paper);color:var(--ink)}
.cta-mid-text .btn:hover{background:var(--terra);color:#fff}

/* FAQ */
.faq{padding:clamp(60px,8vw,110px) 0;border-top:1px solid var(--line)}
.faq-head{text-align:center;margin-bottom:44px}
.faq-head .eyebrow{margin-bottom:14px}
.faq-head h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);letter-spacing:-.5px}
.faq-wrap{max-width:840px;margin:0 auto}
.faq-wrap details{border-top:1px solid var(--line);padding:22px 0}
.faq-wrap details:last-child{border-bottom:1px solid var(--line)}
.faq-wrap summary{cursor:pointer;font-family:var(--serif);font-weight:300;font-size:clamp(20px,2.3vw,26px);list-style:none;display:flex;justify-content:space-between;align-items:center;gap:20px}
.faq-wrap summary::-webkit-details-marker{display:none}
.faq-wrap summary:after{content:"+";font-family:var(--serif);font-size:26px;color:var(--terra);transition:transform .3s}
.faq-wrap details[open] summary:after{transform:rotate(45deg)}
.faq-wrap .ans{padding-top:16px;font-size:14px;line-height:1.85;color:#53493c;max-width:72ch}
.support{text-align:center;margin-top:36px;font-size:17px;color:var(--muted)}
.support a{color:var(--terra)}

/* WELLNESS LINE */
.wellness{padding:clamp(40px,6vw,70px) 24px;text-align:center;border-top:1px solid var(--line)}
.wellness p{font-family:var(--serif);font-style:italic;font-weight:300;font-size:clamp(18px,2vw,26px);color:var(--forest)}

/* CTA FOOTER */
.cta{background:var(--cta);color:var(--paper);text-align:center;padding:clamp(70px,9vw,120px) clamp(24px,5vw,70px) clamp(50px,6vw,70px)}
.cta .eyebrow{color:var(--cta-line);margin-bottom:18px}
.cta h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,4vw,52px);line-height:1.12;letter-spacing:-.5px;margin-bottom:18px}
.cta .csub{font-size:15px;color:#e8ece4;max-width:46ch;margin:0 auto 42px;opacity:.9}
.cta .csub em{font-style:italic;font-family:var(--serif);font-size:1.15em}
.wl{display:flex;gap:26px;max-width:720px;margin:0 auto 20px;align-items:flex-end;flex-wrap:wrap}
.wl .f{flex:1;min-width:190px;text-align:left}
.wl .f label{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--cta-line);display:block;margin-bottom:8px}
.wl input{width:100%;background:transparent;border:0;border-bottom:1px solid var(--cta-line);color:var(--paper);font-family:var(--sans);font-size:14px;padding:9px 2px;outline:none}
.wl input::placeholder{color:rgba(255,255,255,.4)}
.wl input:focus{border-color:#fff}
.wl button{background:var(--paper);color:var(--cta);border:0;cursor:pointer;font-family:var(--sans);font-size:11px;letter-spacing:2.4px;text-transform:uppercase;font-weight:500;padding:15px 40px}
.wl button:hover{background:var(--terra);color:#fff}
.cta .note{font-size:11px;color:var(--cta-line);opacity:.7;margin-top:26px}
.cta .tagline{margin-top:48px;padding-top:40px;border-top:1px solid rgba(255,255,255,.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--cta-line)}
.cta .flogo{font-family:var(--serif);font-size:26px;letter-spacing:7px;margin-bottom:22px}

@media(max-width:860px){
 .hero{grid-template-columns:1fr;min-height:auto}
 .hero-img{min-height:58vh;order:-1}
 .split,.profile-sec{grid-template-columns:1fr;gap:30px}
 .split-img,.pf-img{order:-1}
 .disc-row{grid-template-columns:1fr 1fr;gap:38px 0}
 .disc:nth-child(odd){border-left:0}
 .disc:last-child{grid-column:1/-1}
 .tiles,.plans{grid-template-columns:1fr}
 .steps{grid-template-columns:1fr;gap:26px}
 .nav .links{display:none}
 .wl{flex-direction:column;align-items:stretch}
 .wl button{width:100%}
}

.cta .wl-thanks{font-family:var(--serif);font-style:italic;font-weight:300;font-size:clamp(19px,2.2vw,26px);color:var(--paper);max-width:42ch;margin:10px auto 0;line-height:1.5}
.cta .wl-err{color:#f3c9bd;font-size:12px;letter-spacing:.5px;margin-top:14px;min-height:16px}
`;

const BODY = `<nav class="nav">
 <div class="links"><a href="#about">About</a><a href="#principle">The Philosophy</a><a href="#disciplines">The 5 Disciplines</a></div>
 <div class="logo">FLORENCE</div>
 <div class="links r"><a href="#inside">What's Inside</a><a href="#memberships">Memberships</a><a href="#join">Join</a></div>
</nav>

<header class="hero">
 <div class="hero-text">
  <div class="eyebrow">A New Kind of Health Journey</div>
  <h1>Your <em>body</em>,<br><span class="caps">traditions</span><br>and <em>history</em> in one<br><span class="caps">conversation</span></h1>
  <a href="#join" class="btn">Join the Waitlist</a>
 </div>
 <div class="hero-img"><img src="/landing/florals.jpg" alt=""></div>
</header>

<section class="intro">
 <div class="wrap">
  <p class="intro-lead">Ancient wisdom. Modern science. Your unique story. Florence brings together what matters, so you can understand your body in a deeper, richer, more human way.</p>
  <p class="intro-sub">Florence is an AI-powered, culturally intelligent wellness companion for women.</p>
 </div>
</section>

<section class="inside" id="inside">
 <div class="wrap">
  <div class="inside-head">
   <div class="eyebrow">Explore Florence</div>
   <h2>What's <em>Inside</em></h2>
   <p>An invitation to explore the world of Florence, rooted in food, rituals, and everyday life.</p>
  </div>
  <div class="tiles">

   <div class="flip" onclick="this.classList.toggle('flipped')">
    <div class="flip-inner">
     <div class="flip-face flip-front"><img src="/landing/food.jpg" alt="Nourishment"><div class="topscrim"></div><span class="num">01</span><span class="lab">Food &amp; Nourishment</span><span class="hint"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 2.5-6.2"/><path d="M3 4v4h4"/></svg>Tap</span></div>
     <div class="flip-face flip-back"><span class="num">01</span><h3>Food &amp; Nourishment</h3><p>Digestive health, microbiome balance, and the foods that carry your traditions. Florence works with what you already eat so nourishment fits your real life.</p><span class="back-hint">Tap to return</span></div>
    </div>
   </div>

   <div class="flip" onclick="this.classList.toggle('flipped')">
    <div class="flip-inner">
     <div class="flip-face flip-front"><img src="/landing/neck.jpg" alt="Skin and hormones"><div class="topscrim"></div><span class="num">02</span><span class="lab">Hormones &amp; Skin</span><span class="hint"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 2.5-6.2"/><path d="M3 4v4h4"/></svg>Tap</span></div>
     <div class="flip-face flip-back"><span class="num">02</span><h3>Hormones &amp; Skin</h3><p>Your cycle, your energy, the shifts that move through every season of womanhood. Florence helps you understand your body so you can care for it with intention.</p><span class="back-hint">Tap to return</span></div>
    </div>
   </div>

   <div class="flip" onclick="this.classList.toggle('flipped')">
    <div class="flip-inner">
     <div class="flip-face flip-front"><img src="/landing/silhouette.jpg" alt="Nervous system"><div class="topscrim"></div><span class="num">03</span><span class="lab">Somatic &amp; Rest</span><span class="hint"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 2.5-6.2"/><path d="M3 4v4h4"/></svg>Tap</span></div>
     <div class="flip-face flip-back"><span class="num">03</span><h3>Somatic &amp; Rest</h3><p>Movement, rest, and the steadying of your nervous system. Florence guides small daily practices that bring you back to calm, even on the fullest days.</p><span class="back-hint">Tap to return</span></div>
    </div>
   </div>

   <div class="flip" onclick="this.classList.toggle('flipped')">
    <div class="flip-inner">
     <div class="flip-face flip-front"><img src="/landing/eye.jpg" alt="Inner life"><div class="topscrim"></div><span class="num">04</span><span class="lab">Mind &amp; Emotion</span><span class="hint"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 2.5-6.2"/><path d="M3 4v4h4"/></svg>Tap</span></div>
     <div class="flip-face flip-back"><span class="num">04</span><h3>Mind &amp; Emotion</h3><p>Mindset, emotional wellbeing and resilience, held with cultural intelligence. Florence gets to know your story so support always feels personal.</p><span class="back-hint">Tap to return</span></div>
    </div>
   </div>

  </div>
 </div>
</section>

<section class="statement" id="principle">
 <div class="statement-box">
  <div class="statement-inner">
   <div class="eyebrow">Our Core Principle</div>
   <h2>Price removed. <em>Culture restored.</em></h2>
   <p>For centuries, people have turned to nature, culture and community for health. Florence reclaims this wisdom, removing the noise, the cultural bias and the premium price, so you can access what truly works, without compromise.</p>
  </div>
 </div>
</section>

<section class="disc-sec" id="disciplines">
 <div class="wrap">
  <div class="eyebrow">The 5 Disciplines</div>
  <div class="sub">Five interconnected lenses. One complete you.</div>
  <div class="disc-row">
   <div class="disc"><svg viewBox="0 0 56 60"><path d="M23 8c-5-5-13-2-12 4-8-1-9 9-3 12-5 5-2 12 4 13-3 7 3 12 9 9l4 7 4-2-3-8c9 1 14-5 11-11 7-4 5-12-1-14 3-7-5-12-11-9z"/><path d="M15 12c-5 7 17 1 17 8S10 18 10 25s22 0 22 7-17 0-17 6 10 2 10 2"/></svg><h4>Gut</h4><p>Digestive health, microbiome balance, and nourishment.</p></div>
   <div class="disc"><svg viewBox="0 0 56 60"><path d="M27 54c-2-14-2-27 1-44M26 42C13 43 9 34 9 30c10 0 16 5 17 12zM26 30C14 28 13 19 14 16c8 2 13 7 12 14zM28 21C21 17 21 8 24 4c7 5 8 10 4 17zM27 36c12 0 17-8 16-13-10 1-15 6-16 13zM27 49c12-1 18-9 17-14-10 1-16 7-17 14z"/></svg><h4>Hormone</h4><p>Cycle, fertility, metabolism and endocrine health.</p></div>
   <div class="disc"><svg viewBox="0 0 56 60"><circle cx="28" cy="8" r="4"/><path d="M24 16h8l3 13 4 7-3 2-6-10 1 12 4 15-4 1-4-14-4 14-4-1 4-15 1-12-5 10-3-2 4-7z"/></svg><h4>Somatic</h4><p>Movement, rest, stress and nervous system regulation.</p></div>
   <div class="disc"><svg viewBox="0 0 56 60"><path d="M28 10c-5-5-12-1-13 3-7-1-11 5-9 10-7 5-3 14 3 15 1 6 8 9 13 6l8 2 5 9 4-2-2-10c9-1 15-7 13-14 4-7-1-14-7-14-3-7-10-8-15-5zM28 10l-1 34"/></svg><h4>Psychology</h4><p>Mindset, emotional wellbeing and resilience.</p></div>
   <div class="disc"><svg viewBox="0 0 56 60"><circle cx="28" cy="29" r="22"/><path d="M8 29h40M28 7c-13 9-13 35 0 44M28 7c13 9 13 35 0 44M10 16c11 7 25 7 36 0M10 42c11-7 25-7 36 0"/></svg><h4>Cultural<br>Intelligence</h4><p>Traditions, identity, and your unique cultural context.</p></div>
  </div>
 </div>
</section>

<section class="split" id="about">
 <div>
  <div class="eyebrow">Culturally Intelligent Wellness</div>
  <h2>Your wellbeing is personal<br>and your support should be <em>too.</em></h2>
  <p>Your food, traditions, responsibilities, and budget are all a part of your wellbeing.</p>
  <p>Florence is built to make personalized wellness support simple, affordable and accessible, with cultural intelligence at the heart of every conversation.</p>
  <p>Whether you are reconnecting with familiar practices or exploring something new, your preferences matter. Florence gets to know your goals, routines, and the practices you value to help you find guidance that fits your life.</p>
 </div>
 <div class="split-img"><img src="/landing/whiteflower.jpg" alt="A woman seen fully"></div>
</section>

<section class="profile-sec" id="profile">
 <div class="pf-img"><img src="/landing/flowers_girl.jpg" alt="A woman, calm and self-possessed"></div>
 <div>
  <div class="eyebrow">Your Cultural Profile</div>
  <h3>One conversation.</h3>
  <p class="lead">Florence is an AI-powered, culturally intelligent wellness companion. Through a thoughtful conversation, it learns about your goals, routines, cultural background, and the practices you value to shape personalized wellness guidance around your life.</p>
  <div class="chat">
   <div class="crow"><div class="av">F</div><div class="bub them"><span class="sp">Florence</span>What are your main health goals right now?</div></div>
   <div class="crow me"><div class="bub me"><span class="sp">You</span>I want to feel more balanced, especially with my cycle and energy levels.</div></div>
   <div class="crow"><div class="av">F</div><div class="bub them"><span class="sp">Florence</span>That's helpful. Tell me about your cultural background or family traditions around food, wellness or healing.</div></div>
  </div>
 </div>
</section>

<section class="steps-sec"><div class="wrap"><div class="steps">
 <div class="step"><span class="sn">01</span><h4>Share what matters.</h4><p>Talk about your wellbeing goals, everyday routines, cultural traditions, and the rituals you already value.</p></div>
 <div class="step"><span class="sn">02</span><h4>Explore your wellbeing.</h4><p>Bring your experiences into focus through five connected disciplines: gut, hormone, somatic, psychology, and cultural intelligence.</p></div>
 <div class="step"><span class="sn">03</span><h4>Find your next step.</h4><p>Explore practical everyday rituals and guidance that consider your preferences, responsibilities, and budget.</p></div>
</div></div></section>

<section class="mem" id="memberships">
 <div class="wrap">
  <div class="mem-head">
   <div class="eyebrow">Simple &amp; Accessible Pricing</div>
   <h2>Find Your Florence</h2>
   <p>Choose the membership that fits the level of support you are looking for.</p>
  </div>
  <div class="plans">
   <div class="plan">
    <div class="pe">Conversational Care</div>
    <h3>Chat with Florence</h3>
    <div class="price">$18 <span>/ month</span></div>
    <div class="pd">Personalized wellness support through thoughtful daily conversation.</div>
    <ul>
     <li>Conversations about your goals, routines, traditions, and preferences.</li>
     <li>A culturally intelligent approach across all 5 disciplines.</li>
     <li>Guidance tailored to your real everyday life.</li>
    </ul>
    <a href="#join" class="btn">Join the Waitlist</a>
   </div>
   <div class="plan dark">
    <div class="pe">The Full Experience</div>
    <h3>All Access</h3>
    <div class="price">$24 <span>/ month</span></div>
    <div class="pd">Chat with Florence, plus a wider ecosystem of cultural wellness support.</div>
    <ul>
     <li>Everything included in Chat with Florence.</li>
     <li>Nutritional guidance for skin, gut, and hormone health rooted in global food traditions.</li>
     <li>Recipes from certified holistic practitioners.</li>
     <li>Daily guided somatic movement and regulation practices.</li>
     <li>Exclusive access to Florence's private small-batch herb and wellness shop.</li>
     <li>Member discounts on participating farmers market deliveries (when available).</li>
    </ul>
    <a href="#join" class="btn">Join the Waitlist</a>
   </div>
  </div>
  <div class="founding">
   <h3>Your First Chapter with Florence</h3>
   <p>Receive <strong>Chat with Florence</strong> and daily check-ins for <span class="big">$14 / month</span> for your first 6 months.</p>
   <p class="small">After 6 months, membership continues at the standard Chat with Florence rate of $18/month. This introductory rate applies to Chat with Florence. Joining the waitlist does not start a paid subscription.</p>
  </div>
 </div>
</section>

<section class="faq">
 <div class="wrap">
  <div class="faq-head">
   <div class="eyebrow">Common Questions</div>
   <h2>Get to Know Florence</h2>
  </div>
  <div class="faq-wrap">
   <details open><summary>What is Florence?</summary><div class="ans">Florence is an AI-powered, culturally intelligent wellness companion that offers personalized support through conversation. It gets to know your goals, routines, traditions, and preferences to help you explore wellbeing in a way that fits your life.</div></details>
   <details><summary>What's included in each membership?</summary><div class="ans">Chat with Florence ($18/mo) provides personalized conversational guidance across all 5 disciplines. All Access ($24/mo) includes everything in Chat plus global nutrition guides, somatic routines, practitioner recipes, private storefront access, and partner delivery perks.</div></details>
   <details><summary>What happens when I join the waitlist?</summary><div class="ans">You'll receive early access invitations, launch updates, and the opportunity to secure the Founding Member rate ($14/mo for 6 months). Joining the waitlist is free and does not start a paid subscription.</div></details>
  </div>
  <div class="support">Have another question? <a href="#join">Ask Florence Support.</a></div>
 </div>
</section>

<section class="wellness">
 <p>Florence is a personalized wellness companion made simple, affordable and accessible.</p>
</section>

<section class="cta" id="join">
 <div class="flogo">FLORENCE</div>
 <h2>Join the Waitlist</h2>
 <p class="csub">Be the first to know when <em>Florence</em> launches.</p>
 <form class="wl" onsubmit="return false;">
  <div class="f"><label>First name</label><input type="text" placeholder="Your first name"></div>
  <div class="f"><label>Email address</label><input type="email" placeholder="you@email.com"></div>
  <button type="submit">Join</button>
 </form>
 <div class="note">Design preview only. This form does not send or store information.</div>
</section>`;

export default function Home() {
  useEffect(() => {
    // Reveal animations: fade / slide the feature images in on scroll.
    const imgs = document.querySelectorAll(".split-img, .pf-img");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in-view");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.18 }
      );
      imgs.forEach((el) => io.observe(el));
    } else {
      imgs.forEach((el) => el.classList.add("in-view"));
    }

    // Waitlist form -> Formspree (same destination as the current site).
    const form = document.querySelector(".cta form.wl") as HTMLFormElement | null;
    if (!form) return;
    let errEl = form.querySelector(".wl-err") as HTMLElement | null;
    if (!errEl) {
      errEl = document.createElement("p");
      errEl.className = "wl-err";
      form.appendChild(errEl);
    }
    const onSubmit = async (e: Event) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input");
      const first = (inputs[0] as HTMLInputElement)?.value.trim() || "";
      const email = (inputs[1] as HTMLInputElement)?.value.trim() || "";
      if (!first || !email || !email.includes("@")) {
        errEl!.textContent = "Please add your name and a valid email.";
        return;
      }
      errEl!.textContent = "";
      const btn = form.querySelector("button") as HTMLButtonElement | null;
      if (btn) {
        btn.textContent = "Joining...";
        btn.disabled = true;
      }
      try {
        await fetch("https://formspree.io/f/" + FORMSPREE_ID, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "Florence Waitlist — New Signup",
            first_name: first,
            email: email.toLowerCase(),
          }),
        });
      } catch {
        /* Treat as success for the visitor; Formspree usually still records it. */
      }
      form.innerHTML =
        '<p class="wl-thanks">Thank you for trusting us. Your place on the waitlist is secured, and we will be in touch soon.</p>';
    };
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  );
}
