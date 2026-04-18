export function track(event: string, props?: Record<string, string>) {
  if (typeof window === 'undefined') return;
  fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event, page: window.location.pathname, ...props }),
  }).catch(() => {}); // fire and forget
}
