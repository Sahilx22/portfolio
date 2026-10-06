'use client';

import { useState } from 'react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import SectionBlobs from './SectionBlobs';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './icons/BrandIcons';

const EMAIL_TO = 'sahilsoni.ds@gmail.com';

const CONTACT_ITEMS = [
  { Icon: MailIcon, label: 'Email', value: 'sahilsoni.ds@gmail.com', href: `mailto:${EMAIL_TO}` },
  {
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sahilsoni2272',
    href: 'https://www.linkedin.com/in/sahilsoni2272/',
  },
  { Icon: GitHubIcon, label: 'GitHub', value: 'github.com/sahilx22', href: 'https://github.com/sahilx22' },
  { Icon: PhoneIcon, label: 'Phone', value: '+91 6267877058', href: 'tel:+916267877058' },
];

export default function Contact() {
  const [status, setStatus] = useState('Send Message →');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    if (!name || !email || !message) {
      setStatus('Please fill all fields');
      setTimeout(() => setStatus('Send Message →'), 2000);
      return;
    }
    const subject = 'connection lead request from portfolio';
    const bodyText = `This is a message request from ${name} (contact: ${email}).\n\nMessage:\n${message}\n\nSource: ${window.location.href}\nTimestamp: ${new Date().toISOString()}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_TO)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.open(gmailUrl, '_blank');
    setStatus('Email composer opened');
    setTimeout(() => setStatus('Send Message →'), 1800);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 px-8 bg-[rgba(12,14,19,0.65)] backdrop-blur-xl">
      <SectionBlobs />
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label">Contact</div>
          <h2 className="font-display font-bold text-heading tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Let&apos;s talk.
          </h2>
          <p className="text-muted max-w-[480px] text-[0.95rem] leading-relaxed mb-10">
            Open to full-time roles, freelance work, and interesting problems. Reach out directly or fill the form.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <RevealGroup className="flex flex-col gap-5 mt-4">
            {CONTACT_ITEMS.map((c) => (
              <RevealItem key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  className="flex items-center gap-4 px-5 py-4 bg-card border border-border rounded-xl transition-all hover:border-accent2 hover:translate-x-1"
                >
                  <div className="w-10 h-10 shrink-0 bg-[rgba(var(--accent-rgb),0.1)] rounded-lg flex items-center justify-center text-accent">
                    <c.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] text-muted uppercase tracking-wide mb-0.5">{c.label}</div>
                    <div className="text-sm text-text font-medium">{c.value}</div>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.78rem] text-muted font-medium">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="bg-card border border-border text-text px-4 py-3.5 rounded-lg text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.78rem] text-muted font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
                className="bg-card border border-border text-text px-4 py-3.5 rounded-lg text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.78rem] text-muted font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the role or project..."
                className="bg-card border border-border text-text px-4 py-3.5 rounded-lg text-sm outline-none focus:border-accent transition-colors resize-y min-h-[120px]"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="relative overflow-hidden bg-accent text-white border-none px-8 py-3.5 rounded-lg font-display text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all hover:bg-[#c49f7e] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(var(--accent-rgb),0.3)]"
            >
              {status}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
