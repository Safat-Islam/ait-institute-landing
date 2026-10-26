/**
 * AIT Institute - Interactive Player & Navigation
 */

function playYouTubeVideo() {
  const overlay = document.getElementById('videoOverlay');
  const iframe = document.getElementById('mainYouTubeIframe');

  if (overlay && iframe) {
    overlay.classList.add('is-playing');

    // Update src with autoplay=1 if not already present
    let currentSrc = iframe.getAttribute('src');
    if (!currentSrc.includes('autoplay=1')) {
      if (currentSrc.includes('autoplay=0')) {
        currentSrc = currentSrc.replace('autoplay=0', 'autoplay=1');
      } else {
        currentSrc += (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1';
      }
      iframe.setAttribute('src', currentSrc);
    }
  }
}

// Navigation link active state switching
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // If anchor link
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        navLinks.forEach(l => {
          l.classList.remove('active');
          const indicator = l.querySelector('.active-indicator');
          if (indicator) indicator.remove();
        });

        link.classList.add('active');
        const indicator = document.createElement('span');
        indicator.className = 'active-indicator';
        link.appendChild(indicator);
      }
    });
  });

  // Enable keyboard activation on video overlay
  const videoOverlay = document.getElementById('videoOverlay');
  if (videoOverlay) {
    videoOverlay.setAttribute('tabindex', '0');
    videoOverlay.setAttribute('role', 'button');
    videoOverlay.setAttribute('aria-label', 'Play video');
    videoOverlay.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playYouTubeVideo();
      }
    });
  }
});
