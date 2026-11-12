export interface PhoneValidationRule {
  min: number;
  max: number;
  placeholder: string;
}

const PHONE_RULES_BY_COUNTRY: Record<string, PhoneValidationRule> = {
  '+1': { min: 10, max: 10, placeholder: '10 digits (e.g. 2025550123)' },
  '+91': { min: 10, max: 10, placeholder: '10 digits (e.g. 9876543210)' },
  '+44': { min: 10, max: 11, placeholder: '10–11 digits (e.g. 7911123456)' },
  '+61': { min: 9, max: 10, placeholder: '9–10 digits (e.g. 412345678)' },
  '+33': { min: 9, max: 9, placeholder: '9 digits (e.g. 612345678)' },
  '+49': { min: 10, max: 11, placeholder: '10–11 digits (e.g. 15123456789)' },
  '+34': { min: 9, max: 9, placeholder: '9 digits (e.g. 612345678)' },
  '+39': { min: 9, max: 10, placeholder: '9–10 digits (e.g. 3123456789)' },
  '+81': { min: 10, max: 11, placeholder: '10–11 digits (e.g. 9012345678)' },
  '+971': { min: 9, max: 9, placeholder: '9 digits (e.g. 501234567)' },
  '+52': { min: 10, max: 10, placeholder: '10 digits (e.g. 5512345678)' },
  '+55': { min: 10, max: 11, placeholder: '10–11 digits (e.g. 11912345678)' },
  '+41': { min: 9, max: 9, placeholder: '9 digits (e.g. 791234567)' },
  '+31': { min: 9, max: 9, placeholder: '9 digits (e.g. 612345678)' },
  '+64': { min: 8, max: 10, placeholder: '8–10 digits (e.g. 211234567)' },
};

const DEFAULT_PHONE_RULE: PhoneValidationRule = {
  min: 7,
  max: 12,
  placeholder: 'Digits only (e.g. 2025550123)',
};

export function getPhoneValidationRule(countryCode: string): PhoneValidationRule {
  return PHONE_RULES_BY_COUNTRY[countryCode] ?? DEFAULT_PHONE_RULE;
}

export function validatePhoneNumber(phone: string, countryCode: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed) {
    return 'Please enter your phone number.';
  }

  if (!/^\d+$/.test(trimmed)) {
    return 'Phone number must contain digits only.';
  }

  const rule = getPhoneValidationRule(countryCode);

  if (rule.min === rule.max) {
    if (trimmed.length !== rule.max) {
      return `Please enter a valid ${rule.max}-digit phone number.`;
    }
  } else if (trimmed.length < rule.min || trimmed.length > rule.max) {
    return `Please enter a valid phone number (${rule.min}–${rule.max} digits).`;
  }

  // Country-specific prefix check for India (+91 mobile numbers start with 6-9)
  if (countryCode === '+91' && !/^[6-9]\d{9}$/.test(trimmed)) {
    return 'Please enter a valid 10-digit Indian mobile number.';
  }

  return null;
}

const GMAIL_TYPO_DOMAINS = new Set([
  'gamil.com',
  'gmai.com',
  'gmial.com',
  'gnail.com',
  'gmail.con',
  'gmail.co',
  'gmail.cm',
  'gmail.om',
  'gmail.c',
  'gimail.com',
  'gmailcom',
]);

const GENERAL_EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Please enter your email.';
  }

  const parts = trimmed.split('@');
  if (parts.length !== 2) {
    return 'Please enter a valid email address.';
  }

  const [localPart, rawDomain] = parts;
  const domain = rawDomain.toLowerCase();

  // Check for common Gmail domain typos
  if (GMAIL_TYPO_DOMAINS.has(domain) || /^gmail\.[a-z]{1,2}$/.test(domain)) {
    return 'Please enter a valid Gmail address (did you mean @gmail.com?).';
  }

  // Reject consecutive dots or leading/trailing dots in local part or domain
  if (
    !localPart ||
    localPart.startsWith('.') ||
    localPart.endsWith('.') ||
    localPart.includes('..') ||
    domain.startsWith('.') ||
    domain.endsWith('.') ||
    domain.includes('..')
  ) {
    return domain === 'gmail.com' || domain === 'googlemail.com'
      ? 'Please enter a valid Gmail address (letters, numbers, and single dots only).'
      : 'Please enter a valid email address.';
  }

  // Strict validation for Gmail / Googlemail addresses
  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    const plusIndex = localPart.indexOf('+');
    const baseUsername = plusIndex !== -1 ? localPart.slice(0, plusIndex) : localPart;
    const plusTag = plusIndex !== -1 ? localPart.slice(plusIndex + 1) : null;

    if (baseUsername.length < 6 || baseUsername.length > 30) {
      return 'Gmail usernames must be between 6 and 30 characters.';
    }

    // Gmail only permits letters (a-z), numbers (0-9), and single periods (.)
    if (!/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/.test(baseUsername)) {
      return 'Please enter a valid Gmail address (letters, numbers, and single dots only).';
    }

    if (plusTag !== null && (!plusTag || !/^[a-zA-Z0-9._-]+$/.test(plusTag))) {
      return 'Please enter a valid Gmail address.';
    }

    return null;
  }

  if (!GENERAL_EMAIL_REGEX.test(trimmed)) {
    return 'Please enter a valid email address.';
  }

  return null;
}

