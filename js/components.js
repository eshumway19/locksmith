var LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 52" width="240" height="52" aria-label="All Secure Lock">'
  + '<rect x="0" y="0" width="240" height="3" fill="#C9A84C"/>'
  + '<rect x="0" y="49" width="240" height="3" fill="#C9A84C"/>'
  + '<text x="120" y="24" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="18" fill="#ffffff" letter-spacing="1" text-anchor="middle">ALL SECURE LOCK</text>'
  + '<rect x="20" y="29" width="200" height="1" fill="#C9A84C" opacity="0.5"/>'
  + '<text x="120" y="43" font-family="Arial,sans-serif" font-weight="400" font-size="10" fill="#C9A84C" letter-spacing="3" text-anchor="middle">MOBILE LOCKSMITH</text>'
  + '</svg>';

var NAV_HTML = '<div class="top-bar"><div class="container">'
  + '<span><i class="fa-solid fa-location-dot"></i> Serving Cache, Weber, Box Elder &amp; Rich Counties, UT + Franklin County, ID</span>'
  + '<div class="top-bar-right">'
  + '<a href="tel:4355904244"><i class="fa-solid fa-phone"></i> (435) 590-4244</a>'
  + '<a href="mailto:danptr@gmail.com"><i class="fa-solid fa-envelope"></i> danptr@gmail.com</a>'
  + '</div></div></div>'
  + '<header><div class="header-inner">'
  + '<a href="index.html" class="logo logo-svg">' + LOGO_SVG + '</a>'
  + '<button class="mobile-menu-btn">&#9776;</button>'
  + '<nav>'
  + '<div class="nav-item"><a href="index.html" class="nav-link">Home</a></div>'
  + '<div class="nav-item">'
  +   '<a href="commercial/index.html" class="nav-link">Commercial <span class="arrow">&#9660;</span></a>'
  +   '<div class="dropdown"><div class="dropdown-inner">'
  +     '<div class="dropdown-section">Commercial Services</div>'
  +     '<a href="commercial/index.html">All Commercial Services</a>'
  +     '<a href="commercial/access-control.html">Access Control Systems</a>'
  +     '<a href="commercial/access-control-installation.html">Access Control Installation</a>'
  +     '<a href="commercial/security-card-readers.html">Security Card Readers</a>'
  +     '<a href="commercial/cameras.html">Security Cameras</a>'
  +     '<a href="commercial/panic-bars.html">Panic Bars &amp; Door Closers</a>'
  +     '<a href="commercial/ada-door-openers.html">ADA &amp; Automatic Door Openers</a>'
  +     '<a href="commercial/safes-vaults.html">Commercial Safes &amp; Vaults</a>'
  +     '<a href="commercial/lock-install-rekey.html">Lock Installation &amp; Rekeying</a>'
  +   '</div></div>'
  + '</div>'
  + '<div class="nav-item">'
  +   '<a href="residential/index.html" class="nav-link">Residential <span class="arrow">&#9660;</span></a>'
  +   '<div class="dropdown"><div class="dropdown-inner">'
  +     '<div class="dropdown-section">Residential Services</div>'
  +     '<a href="residential/index.html">All Residential Services</a>'
  +     '<a href="residential/emergency-lockout.html">Emergency Lockout Service</a>'
  +     '<a href="residential/lock-install-rekey.html">Lock Installation &amp; Rekeying</a>'
  +     '<a href="residential/electronic-locks.html">Electronic Lock Installation</a>'
  +     '<a href="residential/safes-vaults.html">Residential Safes &amp; Vaults</a>'
  +     '<a href="residential/garage-door.html">Garage Door Access</a>'
  +   '</div></div>'
  + '</div>'
  + '<div class="nav-item"><a href="about.html" class="nav-link">About</a></div>'
  + '<div class="nav-item"><a href="faqs.html" class="nav-link">FAQs</a></div>'
  + '<div class="nav-item"><a href="reviews.html" class="nav-link">Reviews</a></div>'
  + '<div class="nav-item"><a href="request-callback.html" class="nav-link nav-cta">Request Callback</a></div>'
  + '</nav></div></header>';

var FOOTER_HTML = '<footer><div class="container"><div class="footer-grid">'
  + '<div class="footer-brand">'
  +   '<a href="index.html" class="logo logo-svg footer-logo">' + LOGO_SVG + '</a>'
  +   '<p>Serving Cache Valley and northern Utah. ALOA certified, family-owned, and dedicated to your security.</p>'
  +   '<div class="social-links">'
  +     '<a href="https://facebook.com/allsecurelock" class="social-link" target="_blank" rel="noopener">f</a>'
  +     '<a href="https://linkedin.com/company/all-secure-lock" class="social-link" target="_blank" rel="noopener">in</a>'
  +   '</div>'
  + '</div>'
  + '<div class="footer-col"><h4>Commercial</h4><ul>'
  +   '<li><a href="commercial/access-control.html">Access Control</a></li>'
  +   '<li><a href="commercial/cameras.html">Security Cameras</a></li>'
  +   '<li><a href="commercial/panic-bars.html">Panic Bars</a></li>'
  +   '<li><a href="commercial/ada-door-openers.html">ADA Door Openers</a></li>'
  +   '<li><a href="commercial/safes-vaults.html">Commercial Safes</a></li>'
  +   '<li><a href="commercial/lock-install-rekey.html">Lock Rekeying</a></li>'
  + '</ul></div>'
  + '<div class="footer-col"><h4>Residential</h4><ul>'
  +   '<li><a href="residential/emergency-lockout.html">Emergency Lockout</a></li>'
  +   '<li><a href="residential/lock-install-rekey.html">Lock Install &amp; Rekey</a></li>'
  +   '<li><a href="residential/electronic-locks.html">Electronic Locks</a></li>'
  +   '<li><a href="residential/safes-vaults.html">Residential Safes</a></li>'
  +   '<li><a href="residential/garage-door.html">Garage Door Access</a></li>'
  + '</ul></div>'
  + '<div class="footer-col"><h4>Company</h4><ul>'
  +   '<li><a href="about.html">About Us</a></li>'
  +   '<li><a href="faqs.html">FAQs</a></li>'
  +   '<li><a href="reviews.html">Reviews</a></li>'
  +   '<li><a href="request-callback.html">Request Callback</a></li>'
  + '</ul>'
  + '<h4 style="margin-top:1rem">Hours</h4><ul>'
  +   '<li>Mon-Fri: By Appointment</li>'
  +   '<li>Emergency: 5–8 AM & 4–11 PM</li>'
  + '</ul></div>'
  + '</div></div>'
  + '<div class="footer-bottom"><div class="container">'
  +   '<span>&#169; 2026 All Secure Lock. All rights reserved. | 835 E 2200 N, North Logan, UT 84341 | (435) 590-4244</span><br>'
  +   '<a href="#">Privacy Policy</a> &middot; <a href="#">Terms of Use</a> &middot; <a href="#">Accessibility</a>'
  + '</div></div></footer>';

document.addEventListener('DOMContentLoaded', function() {
  // Inject Font Awesome
  if (!document.querySelector('link[href*="font-awesome"]')) {
    var fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    document.head.appendChild(fa);
  }

  // Each page sets window.SITE_BASE before this script loads:
  //   root pages  -> <script>window.SITE_BASE=''</script>
  //   subpages    -> <script>window.SITE_BASE='../'</script>
  var prefix = (typeof window.SITE_BASE === 'string') ? window.SITE_BASE : '';

  function fixPaths(html) {
    if (!prefix) return html;
    return html.replace(/href="(?!http|mailto|tel|#|\/|\.\.)/g, 'href="' + prefix);
  }

  var navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.innerHTML = fixPaths(NAV_HTML);

  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = fixPaths(FOOTER_HTML);

  // Dropdown hover with delay (desktop) / tap (mobile)
  function isMobile() { return window.innerWidth <= 768; }

  document.querySelectorAll('.nav-item').forEach(function(item) {
    if (!item.querySelector('.dropdown')) return;
    var timer = null;

    item.addEventListener('mouseenter', function() {
      if (isMobile()) return;
      clearTimeout(timer);
      document.querySelectorAll('.nav-item.dropdown-open').forEach(function(el) {
        if (el !== item) el.classList.remove('dropdown-open');
      });
      item.classList.add('dropdown-open');
    });

    item.addEventListener('mouseleave', function() {
      if (isMobile()) return;
      timer = setTimeout(function() { item.classList.remove('dropdown-open'); }, 220);
    });

    var link = item.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', function(e) {
        if (!isMobile()) return;
        e.preventDefault();
        var wasOpen = item.classList.contains('dropdown-open');
        document.querySelectorAll('.nav-item.dropdown-open').forEach(function(el) {
          el.classList.remove('dropdown-open');
        });
        if (!wasOpen) item.classList.add('dropdown-open');
      });
    }
  });

  // Close dropdowns on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item.dropdown-open').forEach(function(el) {
        el.classList.remove('dropdown-open');
      });
    }
  });

  // Mobile hamburger toggle
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.mobile-menu-btn');
    var nav = document.querySelector('nav');
    if (!nav) return;
    if (btn) {
      nav.classList.toggle('open');
      btn.innerHTML = nav.classList.contains('open') ? '&#10005;' : '&#9776;';
      return;
    }
    if (!e.target.closest('header') && nav.classList.contains('open')) {
      nav.classList.remove('open');
      var mb = document.querySelector('.mobile-menu-btn');
      if (mb) mb.innerHTML = '&#9776;';
    }
  });
});
