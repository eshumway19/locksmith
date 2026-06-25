module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch {}
  }

  const { name, phone, email, service, message, formType } = body || {};

  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Name, phone, and service are required.' });
  }

  // Reject name if it looks like a URL
  if (/https?:\/\/|www\.|\.com|\.net|\.org|\.io|\.co\b|\.gov|\.edu/i.test(name)) {
    return res.status(400).json({ error: 'Please enter a valid name.' });
  }

  // Normalize phone to 10 digits
  const digits = phone.replace(/\D/g, '');
  const normalizedPhone = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (normalizedPhone.length !== 10) {
    return res.status(400).json({ error: 'Please enter a valid 10-digit US phone number.' });
  }

  const label = formType === 'callback' ? 'Callback Request' : 'Free Quote';

  const sms = [
    `New ${label} - All Secure Lock`,
    `Name: ${name}`,
    `Phone: ${normalizedPhone}`,
    `Service: ${service}`,
    message ? `Notes: ${message}` : null,
  ].filter(Boolean).join('\n');

  try {
    const tbRes = await fetch('https://textbelt.com/text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: process.env.OWNER_PHONE,
        message: sms,
        key: process.env.TEXTBELT_KEY,
      }),
    });

    const tbData = await tbRes.json();

    if (!tbData.success) {
      console.error('Textbelt error:', tbData);
      return res.status(500).json({ error: 'SMS delivery failed. Please call us directly.' });
    }

    // Check remaining quota and alert if low
    await checkAndAlertQuota();

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Submit error:', err);
    return res.status(500).json({ error: 'Server error. Please call us directly.' });
  }
};

async function checkAndAlertQuota() {
  try {
    const key = process.env.TEXTBELT_KEY;
    const alertPhone = process.env.ALERT_PHONE;
    if (!key || !alertPhone) return;

    const quotaRes = await fetch(`https://textbelt.com/quota/${key}`);
    const { quotaRemaining } = await quotaRes.json();

    if (typeof quotaRemaining === 'number' && quotaRemaining < 50) {
      await fetch('https://textbelt.com/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: alertPhone,
          message: `All Secure Lock alert: Textbelt balance is low — ${quotaRemaining} texts remaining. Please recharge soon.`,
          key,
        }),
      });
    }
  } catch (err) {
    // Non-fatal — log and move on
    console.error('Quota check error:', err);
  }
}
