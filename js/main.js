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
  // Inject a status message element below the submit button
  const btn = form.querySelector('button[type="submit"]');
  const statusEl = document.createElement('p');
  statusEl.style.cssText = 'margin-top:12px;font-size:14px;font-weight:600;text-align:center;display:none';
  btn.insertAdjacentElement('afterend', statusEl);

  function showStatus(msg, isSuccess) {
    statusEl.textContent = msg;
    statusEl.style.color = isSuccess ? '#27ae60' : '#c0392b';
    statusEl.style.display = 'block';
    setTimeout(() => { statusEl.style.display = 'none'; }, 5000);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;
    statusEl.style.display = 'none';

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
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
        showStatus('✓ Your request was sent! We\'ll be in touch soon.', true);
      } else {
        btn.textContent = originalText;
        btn.disabled = false;
        showStatus('Error: ' + (json.error || 'Something went wrong. Please call us directly.'), false);
      }
    } catch {
      btn.textContent = originalText;
      btn.disabled = false;
      showStatus('Network error — please call us directly at (435) 590-4244.', false);
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
