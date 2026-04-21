/**
 * Typewriter effect
 * Cycles through an array of phrases, typing and deleting each one.
 */
export function initTypewriter(elementId, phrases) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;

  const TYPING_SPEED  = 82;
  const DELETING_SPEED = 42;
  const PAUSE_AFTER   = 1900;
  const PAUSE_BEFORE  = 80;

  function tick() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        setTimeout(() => {
          isDeleting = true;
          setTimeout(tick, PAUSE_BEFORE);
        }, PAUSE_AFTER);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
  }

  tick();
}
