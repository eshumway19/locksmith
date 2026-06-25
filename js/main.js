// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Form submission — posts to /api/submit and sends owner an SMS via Textbelt
document.querySelectorAll('form[data-form-type]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    const formType = form.dataset.formType;
    const data = {
      formType,
      name: form.elements.name?.value.trim(),
      phone: form.elements.phone?.value.trim(),
      email: form.elements.email?.value.trim(),
      service: form.elements.service?.value,
      message: form.elements.message?.value.trim(),
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.success) {
        btn.textContent = '✓ Request Sent!';
        btn.style.background = '#27ae60';
        form.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      } else {
        btn.textContent = json.error || 'Something went wrong.';
        btn.style.background = '#c0392b';
        btn.disabled = false;
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 4000);
      }
    } catch {
      btn.textContent = 'Network error — please call us.';
      btn.style.background = '#c0392b';
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 4000);
    }
  });
});

// Active nav link highlight
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && href !== 'index.html' && href !== '../index.html' && path.includes(href.replace(/^\.\.\//, '').replace('.html', ''))) {
      link.classList.add('active');
    }
  });
});
