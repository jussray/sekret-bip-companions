/**
 * Canonical companion IDs and legacy migration utilities.
 * Extracted from jussray/Sekret-Bip:
 *   src/features/identity/companionIds.ts
 *   src/features/identity/legacyCompanionIdMigration.ts
 */

// ── Canonical IDs ──────────────────────────────────────────────────────────────

export const NAMED_COMPANION_IDS = ['suhana', 'sy', 'night', 'cloud', 'ja'] as const;

export type NamedCompanionId = (typeof NAMED_COMPANION_IDS)[number];

export const COMPANION_DISPLAY_NAMES: Record<NamedCompanionId, string> = {
  suhana: 'Suhana',
  sy:     'Sy',
  night:  'Night',
  cloud:  'Cloud',
  ja:     'Ja',
};

export function isNamedCompanionId(value: unknown): value is NamedCompanionId {
  return typeof value === 'string' && NAMED_COMPANION_IDS.includes(value as NamedCompanionId);
}

// ── Legacy migration ───────────────────────────────────────────────────────────

export type LegacyPersistedCompanionId = 'soft' | 'raylene' | 'rylane' | 'cloud' | 'night' | 'sekret' | 'oracle';
export type LegacyWriteCompanionId = 'raylene' | 'rylane' | 'cloud' | 'night' | 'ja';

const LEGACY_TO_CANONICAL: Readonly<Record<string, NamedCompanionId>> = {
  soft:    'suhana',
  raylene: 'suhana',
  rylane:  'sy',
  sekret:  'ja',
  oracle:  'ja',
};

const CANONICAL_TO_LEGACY: Readonly<Record<NamedCompanionId, LegacyWriteCompanionId>> = {
  suhana: 'raylene',
  sy:     'rylane',
  cloud:  'cloud',
  night:  'night',
  ja:     'ja',
};

/**
 * Read-boundary migration for companion IDs created before the canonical
 * Suhana/Sy cutover. Canonical app state must not grow new legacy IDs.
 */
export function migratePersistedCompanionId(value: unknown): NamedCompanionId | null {
  if (isNamedCompanionId(value)) return value;
  if (typeof value !== 'string') return null;
  return LEGACY_TO_CANONICAL[value.trim().toLowerCase()] ?? null;
}

/**
 * Transitional write-boundary adapter for the current account-profile / Supabase
 * contract. `soft` is read-only legacy input and is never emitted on writes.
 * Remove when durable profile persistence accepts canonical Suhana/Sy IDs directly.
 */
export function toLegacyPersistedCompanionId(value: NamedCompanionId): LegacyWriteCompanionId {
  return CANONICAL_TO_LEGACY[value];
}
