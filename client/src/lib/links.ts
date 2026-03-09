const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string | undefined;
const STRIPE_CHECKOUT_URL = import.meta.env
  .VITE_STRIPE_CHECKOUT_URL as string | undefined;

export function openBookStrategyCall(fallback?: () => void) {
  // Priority: Calendly (popup/new tab) -> Stripe checkout -> fallback (scroll)
  const url = CALENDLY_URL?.trim() || STRIPE_CHECKOUT_URL?.trim();
  if (!url) {
    fallback?.();
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

