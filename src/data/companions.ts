export const COMPANIONS = [
  { emoji: '🌸', name: 'Suhana', vibe: 'warm · expressive' },
  { emoji: '⚡', name: 'Sy',     vibe: 'calm · real' },
  { emoji: '🌙', name: 'Night',  vibe: 'late-night · focused' },
  { emoji: '☁️', name: 'Cloud',  vibe: 'gentle · soft' },
  { emoji: '✨', name: 'Ja',     vibe: 'oracle · patterns' },
] as const;

export type CompanionEntry = (typeof COMPANIONS)[number];
