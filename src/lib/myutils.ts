export function getFirstSubdomain(input: string | URL): string | null {
  try {
    const u = typeof input === 'string'
      ? new URL(input.includes('://') ? input : `https://${input}`)
      : input;

    const host = u.hostname.replace(/^www[.-]/, '');
    const parts = host.split('.');

    return parts.length > 1 ? parts[0] : null;
  } catch {
    return null;
  }
}