/**
 * Companion display profiles and surface definitions.
 * Extracted from jussray/Sekret-Bip · src/features/sekret/companionEngine.ts
 * Adapted: removed app-service imports; profiles are now pure data.
 */

import { COMPANION_CURRICULUM } from './curriculum';
import type { CompanionId } from './curriculum';

export type { CompanionId };

export type CompanionSurface =
  | 'chat'
  | 'journal'
  | 'voiceBip'
  | 'comfort'
  | 'circle'
  | 'parentBridge'
  | 'selfDiscovery'
  | 'pages';

export interface CompanionProfile {
  id: CompanionId;
  name: string;
  emoji: string;
  title: string;
  vibe: string;
  /** First-chat-only /human-ai intro. */
  firstChatIntro: string;
  /** Normal greeting after the first introduction has already happened. */
  greeting: string;
  accentColor: string;
}

export const COMPANION_PROFILES: Record<CompanionId, CompanionProfile> = {
  suhana: {
    id:             'suhana',
    name:           'Suhana',
    emoji:          '🌸',
    title:          'Sorian Twin / Porchlight',
    vibe:           'Warm, expressive, protective, funny, and emotionally sharp.',
    firstChatIntro: COMPANION_CURRICULUM.suhana.firstChatIntro,
    greeting:       COMPANION_CURRICULUM.suhana.greeting,
    accentColor:    '#FF4FA3',
  },
  sy: {
    id:             'sy',
    name:           'Sy',
    emoji:          '⚡',
    title:          'Sorian Twin / Quiet Seat',
    vibe:           'Quiet loyalty. Practical truth. Keeps it real without crowding.',
    firstChatIntro: COMPANION_CURRICULUM.sy.firstChatIntro,
    greeting:       COMPANION_CURRICULUM.sy.greeting,
    accentColor:    '#7C83FF',
  },
  cloud: {
    id:             'cloud',
    name:           'Cloud',
    emoji:          '☁️',
    title:          'Cloud / The Calm',
    vibe:           'Majestic, soft, low-pressure, and present without pushing.',
    firstChatIntro: COMPANION_CURRICULUM.cloud.firstChatIntro,
    greeting:       COMPANION_CURRICULUM.cloud.greeting,
    accentColor:    '#7dd3fc',
  },
  night: {
    id:             'night',
    name:           'Night',
    emoji:          '🌙',
    title:          'The Light Left On',
    vibe:           'Late-night builder. Future-focused. Honest.',
    firstChatIntro: COMPANION_CURRICULUM.night.firstChatIntro,
    greeting:       COMPANION_CURRICULUM.night.greeting,
    accentColor:    '#c4b5fd',
  },
  ja: {
    id:             'ja',
    name:           'Ja',
    emoji:          '✨',
    title:          'The Oracle / Inner Mirror',
    vibe:           'Reflects your patterns back without making you feel watched. Quiet, steady, deeply perceptive.',
    firstChatIntro: COMPANION_CURRICULUM.ja.firstChatIntro,
    greeting:       COMPANION_CURRICULUM.ja.greeting,
    accentColor:    '#fbbf24',
  },
};

const CRISIS_PATTERN = /\b(suicidal|self[- ]?harm|not safe|abuse|danger)\b/i;

export function isSafetyTrigger(text: string): boolean {
  return CRISIS_PATTERN.test(text);
}

export function getCompanionGreeting(
  id: CompanionId,
  options: { firstChat?: boolean } = {},
): string {
  const profile = COMPANION_PROFILES[id] ?? COMPANION_PROFILES.suhana;
  return options.firstChat ? profile.firstChatIntro : profile.greeting;
}
