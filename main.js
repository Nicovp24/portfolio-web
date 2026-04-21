import { initTypewriter } from './typewriter.js';
import { initReveal, initActiveNav, initAboutPhoto } from './scroll.js';

const SECTIONS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

const PHRASES = [
  "Hi, I'm Nicolás.",
  'Full Stack Dev.',
  'RPA Engineer.',
  'AI Enthusiast.',
];

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter('js-typed', PHRASES);
  initReveal();
  initActiveNav(SECTIONS);
  initAboutPhoto();
});

// Exposed globally so inline onclick="goTo(...)" works without a bundler
window.goTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
