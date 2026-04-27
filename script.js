function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Message Sent!';
  btn.style.background = '#4caf50';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .divider').forEach(el => revealObserver.observe(el));

// Leaflet — service area map
(function () {
  const home = [40.4326, -74.4182]; // 1403 Commons Dr, East Brunswick NJ
  const radiusMeters = 10 * 1609.34; // 10 miles

  const map = L.map('service-map', { zoomControl: true, scrollWheelZoom: false }).setView(home, 10);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const goldIcon = L.divIcon({
    className: '',
    html: '<div style="width:14px;height:14px;background:#c9a84c;border:2px solid #0a0a0a;border-radius:50%;box-shadow:0 0 8px rgba(201,168,76,0.6);"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  L.marker(home, { icon: goldIcon }).addTo(map)
    .bindPopup('<strong style="color:#c9a84c">The Sharp Fellas</strong><br>East Brunswick, NJ');

  L.circle(home, {
    radius: radiusMeters,
    color: '#c9a84c',
    weight: 2,
    opacity: 0.7,
    fillColor: '#c9a84c',
    fillOpacity: 0.07,
  }).addTo(map);
})();
