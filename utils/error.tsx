export function castErrorToString(error: unknown): string {
  if (!error) return '';
  return (typeof error === 'object' ? (error as Error)?.message : undefined) ?? String(error);
}
